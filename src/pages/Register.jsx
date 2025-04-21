import React, { useState } from 'react'
import supabase from '../../supbaseClient'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    setMessage("")
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })
    if (error) {
      setMessage(error.message)
      return
    }
    if (data) {
      setMessage("User Account created!")
    }
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md p-8 justify-center bg-transparent rounded-2xl shadow-lg"
      >
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="text-2xl font-bold text-center mb-6"
        >
          Register
        </motion.h2>

        {message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-center text-sm text-gray-600 bg-green-400 border-r-green-400"
          >
            {message}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          <span>Already have an account? </span>
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default Register
