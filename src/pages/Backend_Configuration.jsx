
import React, { useEffect, useState } from 'react';

export default function Backend_Configuration() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/message')
      .then(res => res.json())
      .then(data => setMessage(data))
    
  }, []);

  return (
    <div>
      <h1>✅ Backend Integration Test</h1>
      <h2>{message}</h2>
    </div>
  );
}
