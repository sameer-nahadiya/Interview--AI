// import { useContext, useEffect } from "react";
// import { AuthContext } from "../services/auth.context.jsx";
// import { login, register, logout, getMe } from "../services/auth.api.js";

// export const useAuth = () => {
//     const context = useContext(AuthContext);
//     if (!context) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }

//     const { user, setUser, loading, setLoading } = context;

//     const handleLogin = async ({ email, password }) => {
//         setLoading(true);
//         try {
//             const data = await login({ email, password });
//             setUser(data?.user ?? null);
//         } catch (err) {
//             console.error(err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleRegister = async ({ username, email, password }) => {
//         setLoading(true);
//         try {
//             const data = await register({ username, email, password });
//             setUser(data?.user ?? null);
//         } catch (err) {

//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleLogout = async () => {
//         setLoading(true);
//         try {
//             await logout();
//             setUser(null);
//         } catch (err) {

//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         const getAndSetUser = async () => {
//             try {
//                 const data = await getMe();
//                 setUser(data.user);
//             } catch (err) {
//             } finally {
//                 setLoading(false);
//             }
//         };

//         getAndSetUser();
//     }, [setLoading, setUser]);

//     return { user, loading, handleLogin, handleRegister, handleLogout };
// };

import { useContext, useState } from 'react';
import { AuthContext } from '../services/auth.context.js';
import { login, register, logout } from '../services/auth.api.js';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const { user, setUser, loading, setLoading } = context;
  const [error, setError] = useState('');

  const handleLogin = async ({ email, password }) => {
    setLoading(true);
    setError('');
    try {
      const data = await login({ email, password });
      setUser(data?.user ?? null);
      return data;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed. Please try again.';
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    setError('');
    try {
      const data = await register({ username, email, password });
      setUser(data?.user ?? null);
      return data;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed. Please try again.';
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setError('');
    try {
      await logout();
      setUser(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Logout failed.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, setError, handleRegister, handleLogin, handleLogout };
};
