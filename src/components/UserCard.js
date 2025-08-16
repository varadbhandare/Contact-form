import React from 'react';

function UserCard({ user }) {
  return (
    <div style={{
      border: 'none',
      borderRadius: 14,
      padding: 20,
      marginBottom: 18,
      background: 'linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%)',
      boxShadow: '0 4px 16px 0 rgba(90, 103, 216, 0.10)',
      transition: 'transform 0.15s',
    }}>
      <h3 style={{ margin: 0, color: '#364f6b', fontWeight: 700 }}>{user.name}</h3>
      <p style={{ margin: '6px 0', color: '#5a67d8', fontWeight: 500 }}>Email: <span style={{ color: '#364f6b', fontWeight: 400 }}>{user.email}</span></p>
      <p style={{ margin: '6px 0', color: '#5a67d8', fontWeight: 500 }}>Phone: <span style={{ color: '#364f6b', fontWeight: 400 }}>{user.phone}</span></p>
    </div>
  );
}

export default UserCard;
