import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="login">
        <div className="login-box">
          <form >
            <div className="formgroup">
              <input
                onChange={handleChange}
                value={formData.email}
                type="text"
                placeholder="Email1"
                name="email"
                required
              />
            </div>
            <div className="formgroup">
              <input
                onChange={handleChange}
                value={formData.password}
                type="text"
                placeholder="Password"
                name="password"
                required
              />
            </div>

            <button type="button" onClick={handleSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
