import { useState } from 'react';

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [agree, setAgree] = useState(false);

  function loginHandle(e) {
    e.preventDefault();

    if (user.length < 3) {
      alert("Username must be at least 3 characters");
      return;
    }

    // 🔥 PASSWORD VALIDATION HERE
    if (!validatePassword(password)) {
      return;
    }

    if (!agree) {
      alert("Please accept the terms");
      return;
    }

    alert("All good 🙂");
  }

  function userHandler(e) {
    const item = e.target.value;
    setUserErr(item.length < 3);
    setUser(item);
  }

  function passwordHandler(e) {
    const item = e.target.value;
    setPassErr(item.length < 3);
    setPassword(item);
  }
function validatePassword(password) {
  const errors = [];

  if (password.length < 8) {
    errors.push("Your password must be at least 8 characters.");
  }
  if (!(/[a-z]/.test(password))) {
    errors.push("Your password must contain at least one lowercase letter.");
  }
  if (!(/[A-Z]/.test(password))) {
    errors.push("Your password must contain at least one uppercase letter.");
  }
  if (!(/[0-9]/.test(password))) {
    errors.push("Your password must contain at least one digit.");
  }
  if (!(/[@$!%*?&]/.test(password))) {
    errors.push("Your password must contain at least one special character.");
  }

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  }

  return true;
}

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={loginHandle}>
        <input
          type="text"
          placeholder="Enter User Id"
          onChange={userHandler}
        />
        {userErr && <span> User Not Valid</span>}

        <br /><br />

        <input
          type="password"
          placeholder="Enter User Password"
          onChange={passwordHandler}
        />
        {passErr && <span> Password Not Valid</span>}

        <br /><br />

        <input
          type="checkbox"
          onChange={(e) => setAgree(e.target.checked)}
        /> I agree

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
