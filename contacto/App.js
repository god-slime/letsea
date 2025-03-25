import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorReportPage from './pages/ErrorReportPage';
import { motion } from 'framer-motion';

function App() {
  return (
    <Router>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4"
      >
        <motion.div 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="w-full max-w-3xl bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden"
        >
          <Routes>
            <Route path="/" element={<ErrorReportPage />} />
          </Routes>
        </motion.div>
      </motion.div>
    </Router>
  );
}

export default App;