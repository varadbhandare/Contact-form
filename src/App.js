import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      padding: '40px 0',
    }}>
      <div style={{
        maxWidth: 500,
        margin: '0 auto',
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        padding: 32,
        fontFamily: 'Segoe UI, Arial, sans-serif',
      }}>
        <h1 style={{ textAlign: 'center', color: '#2d3a4b', marginBottom: 32 }}>Contact Cards</h1>
        <UserForm addUser={addUser} />
        <UserList users={users} />
      </div>
    </div>
  );
}

export default App;
