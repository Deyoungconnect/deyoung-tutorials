import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    
    try {
      const response = await fetch('/api/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await response.json()
      
      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(''), 3000)
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
      setTimeout(() => setStatus(''), 3000)
    }
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-content max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2>Start Your Learning Journey</h2>
          <div className="w-16 h-1 bg-deyoung-terracotta mx-auto mb-6"></div>
          <p className="text-deyoung-gray">
            Ready to give your child a global-standard education? Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-[#f5efe7] p-6 text-center rounded-md">
            <div className="text-3xl mb-2">📞</div>
            <p className="font-bold text-deyoung-navy">Call / WhatsApp</p>
            <p className="text-deyoung-charcoal">07060771730</p>
          </div>
          <div className="bg-[#f5efe7] p-6 text-center rounded-md">
            <div className="text-3xl mb-2">✉️</div>
            <p className="font-bold text-deyoung-navy">Email</p>
            <p className="text-deyoung-charcoal">deyoungtutorials@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 focus:border-deyoung-terracotta focus:outline-none rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 focus:border-deyoung-terracotta focus:outline-none rounded-md"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 focus:border-deyoung-terracotta focus:outline-none rounded-md"
            />
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 focus:border-deyoung-terracotta focus:outline-none bg-white rounded-md"
            >
              <option value="">Select Your Location / Level</option>
              <option value="nigeria-preschool">Nigeria - Preschool (3-5 years)</option>
              <option value="nigeria-primary">Nigeria - Primary</option>
              <option value="nigeria-secondary">Nigeria - Secondary</option>
              <option value="uk-europe">UK / Europe</option>
              <option value="canada">Canada</option>
              <option value="other">Other Country</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Tell me about your child and learning needs..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 focus:border-deyoung-terracotta focus:outline-none rounded-md"
          ></textarea>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary w-full md:w-auto"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <p className="text-green-600 text-center mt-4">✅ Thank you! I'll respond within 24 hours.</p>
          )}
          
          {status === 'error' && (
            <p className="text-red-600 text-center mt-4">❌ Something went wrong. Please WhatsApp me directly at 07060771730.</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact