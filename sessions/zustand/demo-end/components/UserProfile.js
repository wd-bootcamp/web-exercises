import React, { useRef } from 'react';
import useAppStore from '../store/useAppStore';

function UserProfile() {
  // Subscribe only to necessary store values
  const user = useAppStore((state) => state.user);
  const login = useAppStore((state) => state.login);
  const logout = useAppStore((state) => state.logout);

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
          {/* Uncontrolled input - changes won't re-render the component */}
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
