import React, { useState } from "react";
import "bulma/css/bulma.css";
import { Button } from "./Button";

const RegisterStories = ({model , label }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('\n Nama :'+username+'\n Email:'+email+'\n Password:'+ password);
  };

  return (
    <section className="section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Username</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
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
            <Button onClick={handleSubmit} model={model}>{label}</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegisterStories;
