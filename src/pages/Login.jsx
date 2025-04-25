import React, { useState } from 'react';
import supabase from '../../supbaseClient';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css'
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setMessage("");
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) {
      setMessage(error.message);
      setEmail("");
      setPassword("");
      return;
    }
    if (data) {
      navigate("/dashboard");
      return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <motion.div
        className="w-full max-w-md  justify-center  p-8 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
            <motion.h2
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-2xl font-bold text-center mb-6"
              >
                   Login 
              </motion.h2>
              <br/>
        <h2 className="text-2xl font-bold text-center text-white mb-6"></h2>
        
        {message && <div className="mb-4 text-red-600 text-sm">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-8 justify-center">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full m-2 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full m-2 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
  
          <motion.button
            type="submit"
            className="w-full m-2 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            Log in
          </motion.button>
        </form>

        <div className="mt-6 text-center text-sm text-white">
        
          <span>Don't have an account? </span>
          
          <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
