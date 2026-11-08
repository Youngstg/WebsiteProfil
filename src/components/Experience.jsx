import { FiBookOpen, FiBriefcase, FiAward, FiCheckCircle, FiArrowUpRight, FiDownload } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { lang, data } = useLanguage();
  const { experience, profile } = data;

  return (
    <section id="experience" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-gold-500 font-semibold">
            {experience.badge}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1">
            {experience.heading} <span className="gold-gradient-text">{experience.subheading}</span> ✦
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Column 1: Academic Journey & Credentials (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-heading font-bold text-gold-300 flex items-center gap-2.5">
              <FiBookOpen className="text-gold-400" />
              <span>{experience.academicHeading}</span>
            </h3>

            {/* ITERA Card */}
            <div className="gold-glass rounded-3xl p-6 sm:p-7 relative border-l-4 border-l-gold-500">
              <div className="flex justify-between items-start mb-2.5 flex-wrap gap-2">
                <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                  {experience.education.institution}
                </h4>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30">
                  {experience.education.period}
                </span>
              </div>

              <p className="text-sm font-semibold text-gold-300 mb-3">
                {experience.education.degree}
              </p>

              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 bg-obsidian-900 rounded-xl text-xs font-semibold text-slate-200 border border-gold-600/20">
                <FiAward className="text-gold-400 text-sm" />
                <span>
                  {lang === 'id' ? 'IPK: ' : 'GPA: '}
                  <strong className="text-gold-300 font-bold">{experience.education.gpa}</strong>
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                <strong className="text-gold-300 block mb-1">
                  {lang === 'id' ? 'Mata Kuliah Inti:' : 'Core Coursework:'}
                </strong>
                {experience.education.coursework}
              </p>
            </div>

            {/* Certificates & Training */}
            <div className="gold-glass rounded-3xl p-6 space-y-4">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <FiCheckCircle className="text-gold-400" />
                  <span>{experience.credentialsHeading}</span>
                </span>
                <span className="text-[11px] font-mono text-gold-400">Official</span>
              </h5>
              <div className="space-y-4">
                {experience.certificates.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-4 rounded-2xl bg-obsidian-900/80 border border-gold-600/20 space-y-2 group hover:border-gold-500/40 transition-colors"
                  >
                    <div>
                      <h6 className="font-heading font-bold text-sm text-white group-hover:text-gold-300 transition-colors">
                        {cert.name}
                      </h6>
                      <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                    </div>

                    {/* Certificate Image Preview Area */}
                    <div className="relative w-full rounded-xl overflow-hidden border border-gold-600/25 bg-obsidian-950 p-2 group/cert">
                      <a
                        href={cert.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative w-full aspect-[16/11] rounded-lg overflow-hidden bg-obsidian-900 flex items-center justify-center cursor-pointer block group/img"
                        title={lang === 'id' ? 'Buka dokumen sertifikat PDF' : 'Open PDF credential'}
                      >
                        <img
                          src={cert.image}
                          alt={cert.name}
                          loading="lazy"
                          className="w-full h-full object-contain object-center transition-transform duration-500 group-hover/img:scale-105"
                        />
                      </a>
                      <div className="mt-2.5 pt-2 border-t border-gold-600/15 flex items-center justify-between text-[11px] font-mono">
                        <span className="text-slate-400">PDF Credential</span>
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gold-400 hover:text-gold-300 font-semibold inline-flex items-center gap-1 hover:underline"
                        >
                          <span>{lang === 'id' ? 'Buka PDF Dokumen' : 'View PDF Document'}</span>
                          <FiArrowUpRight size={12} />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified CV Download Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-obsidian-900 via-obsidian-900 to-gold-950/40 border border-gold-500/30 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/40 flex items-center justify-center text-gold-400 text-lg shrink-0">
                    <FiDownload />
                  </div>
                  <div>
                    <h6 className="font-heading font-bold text-xs sm:text-sm text-white">
                      Curriculum Vitae (CV)
                    </h6>
                    <p className="text-[11px] text-slate-400">
                      Lucky Immanuel Sitanggang • PDF Document
                    </p>
                  </div>
                </div>
                <a
                  href={profile.cvUrl}
                  download="CV_Lucky_Immanuel_Sitanggang.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-full bg-gold-500 text-obsidian-950 text-xs font-bold hover:bg-gold-400 transition-colors inline-flex items-center gap-1 shrink-0 shadow-gold-glow"
                >
                  <span>{lang === 'id' ? 'Unduh' : 'Download'}</span>
                  <FiArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Professional Experience (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-heading font-bold text-gold-300 flex items-center gap-2.5">
              <FiBriefcase className="text-gold-400" />
              <span>{lang === 'id' ? 'Pengalaman Kerja & Asisten' : 'Experience & Roles'}</span>
            </h3>

            <div className="space-y-5">
              {experience.items.map((item) => {
                const itemKey = item.title.toLowerCase();
                const expId = itemKey.includes('network') || itemKey.includes('jaringan')
                  ? 'experience-jarkom'
                  : itemKey.includes('computing') || itemKey.includes('pks')
                  ? 'experience-pks'
                  : itemKey.includes('karla') || itemKey.includes('aac')
                  ? 'experience-karla'
                  : itemKey.includes('km itera')
                  ? 'experience-km-itera'
                  : undefined;

                return (
                  <div 
                    key={item.title + item.organization}
                    id={expId}
                    className="gold-glass rounded-3xl p-6 sm:p-7 relative group border border-gold-600/25 hover:border-gold-500/45 transition-colors scroll-mt-24"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-1">
                      <h4 className="font-heading font-bold text-white text-base sm:text-lg">
                        {item.title}
                      </h4>
                      <span className="text-xs text-gold-400 font-mono">
                        {item.organization} • {item.period}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                      {item.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-gold-400 select-none mt-1">✦</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
