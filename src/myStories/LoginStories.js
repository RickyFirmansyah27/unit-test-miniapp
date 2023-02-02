import React, { useState } from "react";
import "bulma/css/bulma.css";
import { Button } from "./Button";


const LoginStories = ({model , label}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section">
      <div className="box">
                <h3 className="is-bold">Authentication Page</h3>
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
              <Button onClick={handleSubmit} model={model} label={label} >Submit</Button>
            </div>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

export default LoginStories;
