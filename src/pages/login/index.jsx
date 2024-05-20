const Login = () => {
  return (
    <div id="login">
      <h1>Login</h1>
      <form id="login-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <br />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
