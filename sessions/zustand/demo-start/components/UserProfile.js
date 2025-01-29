/* components/UserProfile.js */
import React, { useState } from 'react';
import { useUser } from '../context/UserContext';

function UserProfile() {
  const { user, login, logout } = useUser();
  const [inputName, setInputName] = useState('');
  console.log('UserProfile rendered');

  const handleLogin = () => {
    if (inputName) {
      login(inputName);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <p>User: {user.isAuthenticated ? user.name : 'Guest'}</p>
      {user.isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter name"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default UserProfile;
