'use client';

import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
      label: 'Visit Us',
      value: '123 Fitness Avenue, Downtown, NY 10001',
      href: null,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
        </svg>
      ),
      label: 'Call Us',
      value: '+1 (234) 567-8900',
      href: 'tel:+12345678900',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email Us',
      value: 'info@mr7fitness.com',
      href: 'mailto:info@mr7fitness.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      label: 'Hours',
      value: 'Mon-Fri 5AM–11PM | Sat-Sun 7AM–9PM',
      href: null,
    },
  ];

  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden bg-black-deep" style={{ paddingTop: '200px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.15),transparent_60%)]" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have questions about membership or just want to learn more? We&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* ═══════════ CONTACT FORM + INFO ═══════════ */}
      <section className="py-24 bg-black-deep">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-black-card border border-gray-700 rounded-lg p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
                  <p className="text-gray-400 mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                      <p className="text-gray-400 mb-8">
                        Thank you for reaching out. We&apos;ll get back to you shortly.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-gold hover:text-gold-light transition-colors duration-300 font-semibold"
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate>
                      <div className="space-y-6">
                        {/* Name */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`w-full bg-black-deep border ${
                              errors.name ? 'border-red-500' : 'border-gray-700 focus:border-gold'
                            } rounded-lg px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-colors duration-300`}
                          />
                          {errors.name && (
                            <p className="mt-2 text-sm text-red-400">{errors.name}</p>
                          )}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`w-full bg-black-deep border ${
                              errors.email ? 'border-red-500' : 'border-gray-700 focus:border-gold'
                            } rounded-lg px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-colors duration-300`}
                          />
                          {errors.email && (
                            <p className="mt-2 text-sm text-red-400">{errors.email}</p>
                          )}
                        </div>

                        {/* Message */}
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={5}
                            placeholder="Tell us about your fitness goals or any questions you have..."
                            className={`w-full bg-black-deep border ${
                              errors.message ? 'border-red-500' : 'border-gray-700 focus:border-gold'
                            } rounded-lg px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-colors duration-300 resize-none`}
                          />
                          {errors.message && (
                            <p className="mt-2 text-sm text-red-400">{errors.message}</p>
                          )}
                        </div>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full bg-gold text-black-deep font-bold uppercase tracking-wider py-4 rounded-sm hover:bg-gold-light hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            <>
                              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={200}>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="bg-black-card border border-gray-700 rounded-lg p-6 card-hover hover:border-gold/40"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-gold font-semibold uppercase tracking-wider mb-1">
                            {info.label}
                          </p>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-gray-300 hover:text-white transition-colors duration-300"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-300">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Social Links */}
                  <div className="bg-black-card border border-gray-700 rounded-lg p-6">
                    <p className="text-sm text-gold font-semibold uppercase tracking-wider mb-4">
                      Follow Us
                    </p>
                    <div className="flex gap-3">
                      {['Instagram', 'Facebook', 'Twitter', 'YouTube'].map((platform) => (
                        <a
                          key={platform}
                          href="#"
                          aria-label={platform}
                          className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all duration-300"
                        >
                          <span className="text-xs font-bold">{platform[0]}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ MAP ═══════════ */}
      <section className="py-24 bg-black-elevated">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Find Us"
              subtitle="Visit our state-of-the-art facility in the heart of downtown."
            />
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="relative rounded-lg overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291865!2d-73.99!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTknMjQuMCJX!5e0!3m2!1sen!2sus!4v1618309849007!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0, filter: 'grayscale(80%) invert(92%) contrast(83%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MR7 Fitness Location"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
