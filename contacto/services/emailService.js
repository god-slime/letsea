import emailjs from '@emailjs/browser'

const EmailService = () => {
  const sendErrorReport = async (reportData) => {
    try {
      const templateParams = {
        from_name: reportData.name,
        from_email: reportData.email,
        message: reportData.errorDescription
      }

      const result = await emailjs.send(
        'service_errortrack', 
        'template_error_report', 
        templateParams,
        'ZQ5QGXXXXXXXXXXX'  // Reemplazar con tu PUBLIC KEY de EmailJS
      )

      return {
        success: true,
        message: 'Reporte de error enviado exitosamente',
        response: result
      }
    } catch (error) {
      console.error('Error enviando reporte:', error)
      return {
        success: false,
        message: 'Error al enviar el reporte',
        error: error
      }
    }
  }

  return { sendErrorReport }
}

export default EmailService