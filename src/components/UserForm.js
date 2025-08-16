import React, { useState } from 'react';

function UserForm({ addUser }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.phone) {
      addUser(form);
      setForm({ name: '', email: '', phone: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      marginBottom: 32,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
    }}>
      <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          style={{
            flex: '1 1 0',
            minWidth: 0,
            padding: '10px 14px',
            border: '1px solid #bfc9d1',
            borderRadius: 8,
            fontSize: 16,
            background: '#f7fafc',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border 0.2s',
          }}
          onFocus={e => e.target.style.border = '2px solid #667eea'}
          onBlur={e => e.target.style.border = '1px solid #bfc9d1'}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          style={{
            flex: '1 1 0',
            minWidth: 0,
            padding: '10px 14px',
            border: '1px solid #bfc9d1',
            borderRadius: 8,
            fontSize: 16,
            background: '#f7fafc',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border 0.2s',
          }}
          onFocus={e => e.target.style.border = '2px solid #667eea'}
          onBlur={e => e.target.style.border = '1px solid #bfc9d1'}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          style={{
            flex: '1 1 0',
            minWidth: 0,
            padding: '10px 14px',
            border: '1px solid #bfc9d1',
            borderRadius: 8,
            fontSize: 16,
            background: '#f7fafc',
            outline: 'none',
            boxSizing: 'border-box',
            transition: 'border 0.2s',
          }}
          onFocus={e => e.target.style.border = '2px solid #667eea'}
          onBlur={e => e.target.style.border = '1px solid #bfc9d1'}
          required
        />
      </div>
      <button type="submit" style={{
        padding: '12px 0',
        background: 'linear-gradient(90deg, #667eea 0%, #5a67d8 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: 8,
        fontSize: 18,
        fontWeight: 600,
        cursor: 'pointer',
        boxShadow: '0 2px 8px rgba(90, 103, 216, 0.10)',
        transition: 'background 0.2s',
      }}>Add Contact</button>
    </form>
  );
}

export default UserForm;
