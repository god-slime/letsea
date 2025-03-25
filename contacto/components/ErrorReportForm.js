import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ErrorReportForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errorDescription, setErrorDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/send-error-report', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          errorDescription
        })
      });

      if (response.ok) {
        alert('Reporte enviado exitosamente');
        setName('');
        setEmail('');
        setErrorDescription('');
      } else {
        alert('Error al enviar el reporte');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Ocurrió un problema al enviar el reporte');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto p-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Reportar Error
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre Completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Describe el error detalladamente"
          value={errorDescription}
          onChange={(e) => setErrorDescription(e.target.value)}
          required
          rows="4"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:opacity-90 transition-all"
        >
          <Send className="mr-2" /> Enviar Reporte
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ErrorReportForm;