import { Link, Navigate } from 'react-router-dom';
import '../auth.form.scss';
import { useAuth } from '../hooks/useAuth.js';

const Welcome = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <main>
        <h1>Loading......</h1>
      </main>
    );
  }

  if (user) {
    return <Navigate to="/home" />;
  }

  return (
    <main>
      <div className="form-container">
        <h1>Welcome to StockUp</h1>
        <p>Sign in to continue or create a new account.</p>

        <Link className="button primary-button" to="/login">
          Login
        </Link>
        <Link className="button primary-button" to="/register">
          Create Account
        </Link>
      </div>
    </main>
  );
};

export default Welcome;
