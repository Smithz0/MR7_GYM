import Link from 'next/link';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Membership', href: '/membership' },
  { name: 'Contact', href: '/contact' },
];

const programs = [
  'Strength Training',
  'Personal Coaching',
  'Group Classes',
  'Yoga & Flexibility',
];

export default function Footer() {
  return (
    <footer className="bg-black-deep border-t border-gray-800">
      {/* Gold accent line */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-custom py-10 sm:py-12 md:py-16">
        {/* Top section: Brand + Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {/* Brand — takes more space on desktop */}
          <div className="md:col-span-4 lg:col-span-4">
            <Link href="/" className="inline-block mb-5">
              <img
                src="/images/logo.png"
                alt="MR7 Fitness"
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Premium fitness experience designed for those who demand excellence.
              Transform your body, elevate your mind.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                {
                  name: 'Instagram',
                  path: 'M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z',
                },
                {
                  name: 'Facebook',
                  path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
                },
                {
                  name: 'Twitter',
                  path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
                },
                {
                  name: 'YouTube',
                  path: 'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.42zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z',
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns — evenly distributed */}
          <div className="md:col-span-8 lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">
                  Quick Links
                </h4>
                <ul className="space-y-2.5">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Programs */}
              <div>
                <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">
                  Programs
                </h4>
                <ul className="space-y-2.5">
                  {programs.map((program) => (
                    <li key={program}>
                      <span className="text-gray-400 text-sm">{program}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-2 sm:col-span-1">
                <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-sm">
                  Contact Us
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=MR7+UNISEX+FITNESS+45,+Govindan+Rd,+Panneerselvam+Nagar,+West+Mambalam,+Chennai,+Tamil+Nadu+600033" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm leading-relaxed hover:text-gold transition-colors duration-300">
                      45, Govindan Rd, Panneerselvam Nagar, West Mambalam, Chennai, Tamil Nadu 600033
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <a href="tel:+918138886201" className="text-gray-400 text-sm hover:text-gold transition-colors duration-300">
                      +91 81388 86201
                    </a>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <a href="mailto:info@mr7fitness.com" className="text-gray-400 text-sm hover:text-gold transition-colors duration-300">
                      info@mr7fitness.com
                    </a>
                  </li>
                </ul>

                {/* Hours */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-400">
                    <span className="text-white font-medium">Hours:</span> Mon-Fri 5AM-11PM
                  </p>
                  <p className="text-sm text-gray-400">Sat-Sun 7AM-9PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} MR7 Fitness. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-gold transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 text-sm hover:text-gold transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
