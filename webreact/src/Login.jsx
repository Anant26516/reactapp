import React, { useState } from "react";

function Login() {
  const [formData, setFormData]  = useState({ email: '', password: '' });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

 

  return (
    <>
      <div className="login">
        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <div className="formgroup">
              <input
                onChange={handleChangee} 
                value={formData.email}
                type="text"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="formgroup">
              <input
                onChnage={handleChange} 
                value={formData.password}
                type="text"
                placeholder="Password"
                name="pass"
                required
              />
            </div>

            <button type="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
