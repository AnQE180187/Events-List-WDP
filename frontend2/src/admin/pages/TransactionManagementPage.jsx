import React, { useEffect, useState } from 'react';

// Mock data for initial UI development
const mockTransactions = [
  {
    id: 'txn_1',
    user: { email: 'participant@freeday.com' },
    amount: 150000,
    type: 'Event Registration',
    status: 'Success',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'txn_2',
    user: { email: 'organizer@freeday.com' },
    amount: 50000,
    type: 'Organizer Fee',
    status: 'Success',
    createdAt: new Date().toISOString(),
  },
  {
    id: 'txn_3',
    user: { email: 'anotheruser@example.com' },
    amount: 200000,
    type: 'Event Registration',
    status: 'Failed',
    createdAt: new Date().toISOString(),
  },
];

const TransactionManagementPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // In a real scenario, you would fetch transactions from the API
        // const response = await api.get('/admin/transactions');
        // setTransactions(response.data);

        // Using mock data for now
        setTransactions(mockTransactions);

      } catch (err) {
        setError('Không thể tải danh sách giao dịch.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) return <div>Đang tải giao dịch...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h1>Quản Lý Giao Dịch</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ padding: '8px', textAlign: 'left' }}>ID Giao Dịch</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Người Dùng</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Số Tiền</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Loại</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Trạng Thái</th>
            <th style={{ padding: '8px', textAlign: 'left' }}>Ngày</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn) => (
            <tr key={txn.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}>{txn.id}</td>
              <td style={{ padding: '8px' }}>{txn.user.email}</td>
              <td style={{ padding: '8px' }}>{txn.amount.toLocaleString('vi-VN')} VND</td>
              <td style={{ padding: '8px' }}>{txn.type}</td>
              <td style={{ padding: '8px' }}>{txn.status}</td>
              <td style={{ padding: '8px' }}>{new Date(txn.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionManagementPage;
