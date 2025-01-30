/* components/UserProfile.js */
import React, { useRef } from 'react';
import { useUser } from '../context/UserContext';

function UserProfile() {
  const { user, login, logout } = useUser();
  console.log('UserProfile rendered');

  // Use a ref for the input so typing does NOT cause re-renders
  const inputRef = useRef('');
  const handleLogin = () => {
    // Access the DOM value from the ref—no local state needed
    const name = inputRef.current.value;
    if (name) {
      login(name);
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
            ref={inputRef}
          />
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default UserProfile;
