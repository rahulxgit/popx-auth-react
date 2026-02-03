import "./postLogin.css";

const PostLogin = () => {
  return (
    <div className="screen-wrapper">
      <div className="mobile-card">
        <h2>Signin to your PopX account</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="input-group">
          <label>Email Address</label>
          <input type="email" placeholder="Enter email address" />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>

        <button className="primary-btn">Login</button>
      </div>
    </div>
  );
};

export default PostLogin;
