import React, { useState, useEffect, useRef } from 'react';
import { getMessages } from '../services/chatService';
import ChatInput from './ChatInput';
import { useAuth } from '../context/AuthContext';
import './ChatBox.css';

const ChatBox = ({ conversation, socket }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        const data = await getMessages(conversation.id);
        setMessages(data);
      } catch (err) {
        setError('Could not fetch messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();

    const messageReceiveHandler = (message) => {
      if (message.conversationId === conversation.id) {
        setMessages((prevMessages) => {
          // Nếu là tin nhắn từ chính mình, thay thế tin nhắn tạm thời
          if (message.senderId === user.sub) {
            return prevMessages.map(msg => 
              msg.id.startsWith('temp-') && msg.senderId === user.sub 
                ? message 
                : msg
            );
          }
          // Nếu là tin nhắn từ người khác, thêm vào cuối
          return [...prevMessages, message];
        });
      }
    };

    socket.on('message.receive', messageReceiveHandler);

    return () => {
      socket.off('message.receive', messageReceiveHandler);
    };
  }, [conversation, socket]);

  useEffect(() => {
    // Chỉ auto-scroll khi có tin nhắn mới từ người khác
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.senderId !== user?.sub) {
      // Sử dụng setTimeout để đảm bảo DOM đã được cập nhật
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [messages, user?.sub]);

  const handleSendMessage = (content) => {
    // Thêm tin nhắn tạm thời vào danh sách để hiển thị ngay
    const tempMessage = {
      id: `temp-${Date.now()}`,
      conversationId: conversation.id,
      senderId: user.sub,
      content,
      createdAt: new Date().toISOString(),
      isRead: false,
    };
    
    setMessages(prevMessages => [...prevMessages, tempMessage]);
    
    socket.emit('message.send', {
      conversationId: conversation.id,
      content,
    });
  };

  const otherUser = 
    user && conversation.organizerId === user.sub
      ? conversation.participant
      : conversation.organizer;

  if (loading) {
    return <div>Loading messages...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="chat-box">
      <div className="chat-header">
        <h3>{otherUser?.profile?.displayName || 'Unknown User'}</h3>
      </div>
      <div className="messages-container">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message-item ${
              msg.senderId === user.sub ? 'sent' : 'received'
            }`}
          >
            <div className="message-content">{msg.content}</div>
            <div className="message-timestamp">
              {new Date(msg.createdAt).toLocaleTimeString()}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatBox;
