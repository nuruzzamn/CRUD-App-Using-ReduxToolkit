const Error = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title"> 404 </h1>
        <p className="error-description"> Page Not Found </p>
        <a href="/" className="error-link">Go to Home</a>
      </div>
    </div>
  );
};

export default Error;
