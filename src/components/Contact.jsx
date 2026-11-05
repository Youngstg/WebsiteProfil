import { useState } from 'react';
import { FiSend, FiMail, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import portfolioData from '../data/portfolio.json';

const { profile } = portfolioData;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.socials.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            GET IN TOUCH
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
            Let's Build Something <span className="gold-gradient-text">Exceptional</span> ✦
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1.5 font-sans max-w-lg mx-auto">
            Feel free to reach out for career opportunities, collaborations, or technical consultations.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact Details (5 Cols) */}
          <div className="lg:col-span-5 gold-glass rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 text-xl shadow-gold-glow">
                <FiSend />
              </div>

              <div>
                <h3 className="font-heading text-2xl font-bold text-white">Contact Info</h3>
                <p className="text-slate-400 text-xs mt-1">Direct communication channels</p>
              </div>

              <div className="space-y-4 pt-2">
                {/* Email Item */}
                <a
                  href={`mailto:${profile.socials.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-obsidian-900/70 border border-slate-800 hover:border-gold-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-black transition-colors">
                    <FiMail size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 uppercase tracking-wider">Email</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-gold-300 transition-colors">
                      {profile.socials.email}
                    </span>
                  </div>
                </a>

                {/* Location Item */}
                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-obsidian-900/70 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-400">
                    <FiMapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[11px] text-slate-400 uppercase tracking-wider">Location</span>
                    <span className="text-sm font-semibold text-slate-200">Sumatera, Indonesia</span>
                  </div>
                </div>

                {/* Availability Badge */}
                <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-medium text-emerald-300">
                    Open to Full-Time &amp; Remote Contracts
                  </span>
                </div>
              </div>
            </div>

            {/* Socials in Contact Card */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-obsidian-900 border border-gold-600/20 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <FiGithub size={17} />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-obsidian-900 border border-gold-600/20 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={17} />
              </a>
              <a
                href={`mailto:${profile.socials.email}`}
                className="w-10 h-10 rounded-full bg-obsidian-900 border border-gold-600/20 flex items-center justify-center text-slate-300 hover:text-gold-400 hover:border-gold-400 transition-colors"
                aria-label="Send Email"
              >
                <FiMail size={17} />
              </a>
            </div>
          </div>

          {/* Contact Form (7 Cols) */}
          <div className="lg:col-span-7 gold-glass rounded-3xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4" data-purpose="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full bg-obsidian-900/90 border border-gold-600/20 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 min-h-[44px]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="w-full bg-obsidian-900/90 border border-gold-600/20 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 min-h-[44px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry / Job Opportunity"
                  className="w-full bg-obsidian-900/90 border border-gold-600/20 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, or open role..."
                  required
                  rows={4}
                  className="w-full bg-obsidian-900/90 border border-gold-600/20 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                />
              </div>

              <button
                type="submit"
                className="gold-gradient-btn w-full py-3.5 rounded-xl font-heading font-bold text-sm tracking-wider uppercase text-obsidian-950 shadow-gold-glow flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Send Message</span>
                <FiSend className="text-xs" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
