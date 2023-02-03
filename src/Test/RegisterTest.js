import React, { useState } from "react";
import "bulma/css/bulma.css";

const RegisterTest = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('\n Nama :' + username + '\n Email:' + email + '\n Password:' + password);
  };

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="username">Username</label>
            <div className="control">
              <input
                id="username"
                className="input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <div className="control">
              <input
                id="email"
                className="input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label" htmlFor="password">Password</label>
              <input
                id="password"
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterTest;
