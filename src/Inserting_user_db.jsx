import React, { useState } from 'react';

export default function Inserting_user_db() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlingSubmit = async (e) => {
    e.preventDefault();

    const dataList = { username, email, password };

    
      const res = await fetch("http://localhost:8000/Inserting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataList),
      });

      const result = await res.json();
      console.log(result);
  
    
  };

  return (
    <div>
      <h2>Insert User into Database</h2>
      <form onSubmit={handlingSubmit}>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          
        />
        <br /><br />
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          
        />
        <br /><br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
