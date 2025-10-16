import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSendMessage }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onSendMessage(content);
      setContent('');
      // Không focus lại input sau khi gửi để tránh di chuyển màn hình
    }
  };

  return (
    <form className="chat-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat-input"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
};

export default ChatInput;
