import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMail, HiPhone, HiLocationMarker, HiCheck } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import Button from '../components/ui/Button';
import { contactInfo, projectTypes } from '../utils/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email address';
    if (!formData.subject) newErrors.subject = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactCards = [
    {
      icon: HiMail,
      title: 'Email',
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
      color: '#EA4335',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: contactInfo.phone,
      href: contactInfo.whatsapp,
      color: '#25D366',
    },
    {
      icon: HiLocationMarker,
      title: 'Location',
      value: contactInfo.location,
      href: null,
      color: '#00D4FF',
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-hero-mesh" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[min(100vw,280px)] h-[min(100vw,280px)] sm:w-72 sm:h-72 rounded-full bg-accent/5 blur-[100px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[min(100vw,360px)] h-[min(100vw,360px)] sm:w-96 sm:h-96 rounded-full bg-accent-alt/5 blur-[120px] animate-float-delayed" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block text-accent font-mono text-sm tracking-widest uppercase mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main mb-6"
          >
            Let's Work{' '}
            <span className="gradient-text">Together</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted font-body text-lg md:text-xl max-w-2xl mx-auto"
          >
            Got a project in mind? We'd love to hear about it. Drop us a
            message and let's create something extraordinary.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding !pt-0 -mt-8">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactCards.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="glass-card p-6 text-center group hover:border-accent/30 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center transition-colors duration-300"
                  style={{ backgroundColor: `${card.color}15` }}
                >
                  <card.icon
                    className="text-2xl"
                    style={{ color: card.color }}
                  />
                </div>
                <h3 className="font-display font-bold text-text-main mb-2">
                  {card.title}
                </h3>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-muted hover:text-accent text-sm font-body transition-colors duration-300 break-all"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-muted text-sm font-body">{card.value}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form + Social */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2 }}
                        className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center"
                      >
                        <HiCheck className="text-green-400 text-4xl" />
                      </motion.div>
                      <h3 className="font-display text-2xl font-bold text-text-main mb-3">
                        Message Sent!
                      </h3>
                      <p className="text-muted font-body mb-6">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <h3 className="font-display text-2xl font-bold text-text-main mb-2">
                        Send Us a Message
                      </h3>
                      <p className="text-muted font-body text-sm mb-6">
                        Fill out the form below and we'll get back to you promptly.
                      </p>

                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-body font-medium text-muted mb-2"
                        >
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={`w-full px-4 py-3 rounded-xl bg-primary border ${
                            errors.name ? 'border-red-500' : 'border-border'
                          } text-text-main font-body placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300`}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1 font-body">{errors.name}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-body font-medium text-muted mb-2"
                        >
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={`w-full px-4 py-3 rounded-xl bg-primary border ${
                            errors.email ? 'border-red-500' : 'border-border'
                          } text-text-main font-body placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300`}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1 font-body">{errors.email}</p>
                        )}
                      </div>

                      {/* Phone */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-body font-medium text-muted mb-2"
                        >
                          Phone Number <span className="text-muted/50">(optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+233 XX XXX XXXX"
                          className="w-full px-4 py-3 rounded-xl bg-primary border border-border text-text-main font-body placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300"
                        />
                      </div>

                      {/* Subject */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-sm font-body font-medium text-muted mb-2"
                        >
                          Project Type <span className="text-accent">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-primary border ${
                            errors.subject ? 'border-red-500' : 'border-border'
                          } text-text-main font-body focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 appearance-none cursor-pointer`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238A9BB5' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 1rem center',
                          }}
                        >
                          <option value="" disabled className="bg-primary text-muted">
                            Select a project type
                          </option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-primary text-text-main">
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.subject && (
                          <p className="text-red-400 text-xs mt-1 font-body">{errors.subject}</p>
                        )}
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-body font-medium text-muted mb-2"
                        >
                          Message <span className="text-accent">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          className={`w-full px-4 py-3 rounded-xl bg-primary border ${
                            errors.message ? 'border-red-500' : 'border-border'
                          } text-text-main font-body placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none`}
                        />
                        {errors.message && (
                          <p className="text-red-400 text-xs mt-1 font-body">{errors.message}</p>
                        )}
                      </div>

                      {/* Submit */}
                      <Button
                        type="submit"
                        size="lg"
                        loading={loading}
                        className="w-full"
                      >
                        {loading ? 'Sending...' : 'Send Message →'}
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Social + Extra Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Office Hours */}
              <div className="glass-card p-8">
                <h3 className="font-display text-xl font-bold text-text-main mb-4">
                  Office Hours
                </h3>
                <p className="text-accent font-mono text-2xl font-bold">24/7</p>
              </div>

              {/* Quick response */}
              <div className="glass-card p-8">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-green-400 mt-1.5 animate-pulse" />
                  <div>
                    <h4 className="font-display font-bold text-text-main mb-1">
                      Quick Response
                    </h4>
                    <p className="text-muted font-body text-sm">
                      We typically respond within 2–4 hours during business hours. For
                      urgent inquiries, reach us via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
