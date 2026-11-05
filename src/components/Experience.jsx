import { FiBookOpen, FiBriefcase, FiAward, FiCheckCircle } from 'react-icons/fi';

const certificates = [
  {
    name: 'TOEFL (Test of English as a Foreign Language)',
    issuer: 'English Language Proficiency Assessment',
    status: 'Certified',
    image: '/images/certificates/toefl.jpg',
  },
  {
    name: 'CCP (Cloud Certified Practitioner)',
    issuer: 'Cloud Computing Infrastructure & Architecture',
    status: 'Certified',
    image: '/images/certificates/ccp.jpg',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            CAREER TRAJECTORY
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
            Experience &amp; <span className="gold-gradient-text">Education</span> ✦
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Academic Journey (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-heading font-bold text-gold-300 flex items-center gap-2.5">
              <FiBookOpen className="text-gold-400" />
              <span>Academic Journey</span>
            </h3>

            {/* ITERA Card */}
            <div className="gold-glass rounded-3xl p-6 sm:p-7 relative border-l-4 border-l-gold-500">
              <div className="flex justify-between items-start mb-2.5 flex-wrap gap-2">
                <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                  Institut Teknologi Sumatera (ITERA)
                </h4>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30">
                  2022 — 2026
                </span>
              </div>

              <p className="text-sm font-semibold text-gold-300 mb-3">
                Bachelor of Informatics Engineering
              </p>

              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-obsidian-900 rounded-xl text-xs font-semibold text-slate-200 border border-gold-600/20">
                <FiAward className="text-gold-400 text-sm" />
                <span>GPA: <strong className="text-gold-300 font-bold">3.77</strong> / 4.00 (High Distinction)</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                Core coursework in Artificial Intelligence, Computer Vision, Database Systems, Computer Networks, and Object-Oriented Software Engineering. Actively involved in campus technology governance and laboratory leadership.
              </p>
            </div>

            {/* Certificates & Training */}
            <div className="gold-glass rounded-3xl p-6 space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-gold-400" />
                  <span>Certificates &amp; Credentials</span>
                </span>
                <span className="text-[11px] font-mono text-gold-400">2 Verified</span>
              </h5>
              <div className="space-y-4">
                {certificates.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-2xl bg-obsidian-900/80 border border-gold-600/20 space-y-2 group hover:border-gold-500/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h6 className="font-heading font-bold text-sm text-white group-hover:text-gold-300 transition-colors">
                          {cert.name}
                        </h6>
                        <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30 shrink-0">
                        {cert.status}
                      </span>
                    </div>

                    {/* Certificate Image Preview Area (Ready when image file is uploaded) */}
                    <div className="relative w-full rounded-xl overflow-hidden border border-gold-600/15 bg-obsidian-950/80 p-1 flex items-center justify-center min-h-[70px]">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.nextElementSibling) {
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }
                        }}
                        className="w-full h-auto max-h-48 object-contain rounded-lg"
                      />
                      <div className="text-center py-3 text-slate-500 text-xs flex flex-col items-center justify-center gap-1 w-full">
                        <FiAward className="text-gold-400/60 text-lg" />
                        <span className="text-[11px] text-slate-400 font-mono">Sertifikat Resmi {cert.name.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Professional Experience (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-heading font-bold text-gold-300 flex items-center gap-2.5">
              <FiBriefcase className="text-gold-400" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-5">
              {/* Karla Bionic */}
              <div className="gold-glass rounded-3xl p-6 sm:p-7 relative group border border-gold-600/25 hover:border-gold-500/45 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                  <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                    Mobile Developer Intern
                  </h4>
                  <span className="text-xs text-gold-400 font-mono">Karla Bionic • 2025</span>
                </div>
                <div className="text-xs text-gold-300/90 font-medium mb-3">
                  React Native • Firebase • AAC Assistive Technology
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Engineered assistive AAC mobile features for individuals with speech and motor difficulties. Optimized real-time data sync with Firebase Firestore, elevated component reusability, and enhanced app responsiveness.
                </p>
              </div>

              {/* KM ITERA */}
              <div className="gold-glass rounded-3xl p-6 sm:p-7 relative group border border-gold-600/25 hover:border-gold-500/45 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                  <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                    Specialist Staff of Web &amp; IT
                  </h4>
                  <span className="text-xs text-gold-400 font-mono">KM ITERA • 2025 — 2026</span>
                </div>
                <div className="text-xs text-gold-300/90 font-medium mb-3">
                  Web Architecture • Server Maintenance • Security
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Supervised and engineered campus student government web portals, maintaining uptime, user privacy protocols, and automated content publishing workflows for thousands of student users.
                </p>
              </div>

              {/* Lab Assistant */}
              <div className="gold-glass rounded-3xl p-6 sm:p-7 relative group border border-gold-600/25 hover:border-gold-500/45 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                  <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                    Teaching &amp; Computer Network Lab Assistant
                  </h4>
                  <span className="text-xs text-gold-400 font-mono">ITERA Informatics Dept • 2024 — 2025</span>
                </div>
                <div className="text-xs text-gold-300/90 font-medium mb-3">
                  Network Topology • Cisco Routing • Linux Labs
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  Mentored over 100+ students across practical networking modules including subnetting, VLAN configuration, static/dynamic routing, and Linux server installations (DNS/Postfix).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
