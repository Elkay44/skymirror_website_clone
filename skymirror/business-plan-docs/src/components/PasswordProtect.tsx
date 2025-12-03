import React, { useState, useEffect } from 'react';

interface PasswordProtectProps {
  children: React.ReactNode;
  password: string;
  storageKey: string;
}

export default function PasswordProtect({ children, password, storageKey }: PasswordProtectProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Check if already authenticated in this session
    const stored = sessionStorage.getItem(storageKey);
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
  }, [storageKey]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === password) {
      setIsAuthenticated(true);
      sessionStorage.setItem(storageKey, 'true');
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      padding: '2rem',
    }}>
      <div style={{
        background: 'var(--ifm-card-background-color)',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '100%',
      }}>
        <h2 style={{ marginBottom: '1rem', textAlign: 'center' }}>
          🔒 Protected Content
        </h2>
        <p style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'var(--ifm-color-emphasis-600)' }}>
          This section requires a password to access.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Enter password"
            style={{
              width: '100%',
              padding: '0.75rem',
              marginBottom: '1rem',
              border: '1px solid var(--ifm-color-emphasis-300)',
              borderRadius: '4px',
              fontSize: '1rem',
            }}
            autoFocus
          />
          {error && (
            <p style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--ifm-color-primary)',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Unlock Content
          </button>
        </form>
      </div>
    </div>
  );
}
