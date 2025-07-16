import React, { useState } from "react";

function Login() {
  const [form, setForm] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <>
      <div className="login">
        <div className="login-box">
          <form>
            <div className="formgroup">
              <input
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
                type="text"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="formgroup">
              <input type="text" placeholder="Password" name="pass" required />
            </div>

            <button type="button" onClick={handleLogin}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
