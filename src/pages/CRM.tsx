import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function CRM() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block p-4 bg-orange-100 rounded-full mb-4"
          >
            <Lock className="w-12 h-12 text-orange-500" />
          </motion.div>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            IT LOGIC LABS
          </h1>
          <h2 className="text-xl text-gray-600 mb-4">
            CRM Portal
          </h2>
          <p className="text-gray-500">
            Welcome to IT LOGIC LABS CRM Portal
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              placeholder="Enter your password"
            />
          </div>

          <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg mt-6">
            Login
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          For Staff & Technicians Only
        </p>
      </motion.div>
    </div>
  );
}
