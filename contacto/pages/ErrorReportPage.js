import React from 'react';
import { motion } from 'framer-motion';
import ErrorReportForm from '../components/ErrorReportForm';

const ErrorReportPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4"
    >
      <motion.div 
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 120 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Reportar Error
          </h1>
          <p className="text-gray-500">
            Ayúdanos a mejorar nuestra plataforma
          </p>
        </div>
        
        <ErrorReportForm />
      </motion.div>
    </motion.div>
  );
};

export default ErrorReportPage;