import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import TrainerCard from '../components/TrainerCard';
import Button from '../components/Button';

export const metadata = {
  title: 'About Us — MR7 Fitness',
  description: 'Discover the story, mission, and world-class team behind MR7 Fitness. Learn about our vision for premium fitness excellence.',
};

const values = [
  {
    title: 'Excellence',
    description: 'We never settle for average. Every piece of equipment, every class, and every interaction reflects our commitment to the highest standards.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    title: 'Community',
    description: 'Fitness is better together. We foster a supportive, inclusive environment where members inspire and motivate each other.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    title: 'Innovation',
    description: 'We continuously evolve with the latest in fitness science, technology, and training methodologies to keep you ahead.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: 'Results',
    description: 'We measure our success by your progress. Data-driven programs and dedicated support ensure you reach your goals.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
];

const trainers = [
  {
    name: 'Marcus Johnson',
    specialization: 'Strength & Conditioning',
    bio: 'Former competitive powerlifter with 12+ years of coaching experience. Marcus specializes in building raw strength and athletic performance.',
    image: '/images/trainer-1.png',
  },
  {
    name: 'Sophia Williams',
    specialization: 'HIIT & Functional Training',
    bio: 'Certified ACE trainer with a passion for high-intensity workouts. Sophia creates dynamic programs that burn fat and build endurance.',
    image: '/images/trainer-2.png',
  },
  {
    name: 'Daniel Park',
    specialization: 'Yoga & Flexibility',
    bio: 'RYT-500 certified yoga instructor focused on mobility and recovery. Daniel believes in balance as the foundation of total fitness.',
    image: '/images/trainer-3.png',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ═══════════ HERO BANNER ═══════════ */}
      <section className="relative overflow-hidden" style={{ paddingTop: '200px', paddingBottom: '80px' }}>
        <div className="absolute inset-0">
          <img
            src="/images/about.png"
            alt="MR7 Fitness Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-deep/80 via-black-deep/70 to-black-deep" />
        </div>
        <div className="relative z-10 container-custom text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
            Our Story
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
            About MR7 Fitness
          </h1>
        </div>
      </section>

      {/* ═══════════ MISSION ═══════════ */}
      <section className="py-24 bg-black-deep">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                  Our Mission
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  Redefining What a Gym Can Be
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  MR7 Fitness was founded on a simple belief: fitness should be an
                  experience, not a chore. We set out to create a space where luxury
                  meets performance — where every detail, from the ambient lighting
                  to the curated equipment selection, is designed to inspire.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  What started as a single premium gym has grown into a community of
                  over 5,000 members united by a shared commitment to excellence. Our
                  facility isn&apos;t just a place to work out — it&apos;s a destination for
                  transformation.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  We invest continuously in the latest equipment, training
                  methodologies, and facility upgrades because we believe our members
                  deserve nothing less than the best.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <img
                  src="/images/gallery-1.png"
                  alt="Weight Room"
                  className="w-full h-[500px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 border-2 border-gold/20 rounded-lg translate-x-4 translate-y-4" style={{zIndex: -1}} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ VISION & VALUES ═══════════ */}
      <section className="py-24 bg-black-elevated">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Our Core Values"
              subtitle="The principles that guide everything we do at MR7 Fitness."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="bg-black-card border border-gray-700 rounded-lg p-8 card-hover hover:border-gold/40 text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-5">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TRAINERS ═══════════ */}
      <section className="py-24 bg-black-deep">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Meet Our Trainers"
              subtitle="World-class coaches dedicated to helping you reach your full potential."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {trainers.map((trainer, index) => (
              <ScrollReveal key={trainer.name} delay={index * 150}>
                <TrainerCard {...trainer} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY ═══════════ */}
      <section className="py-24 bg-black-elevated">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Our Facility"
              subtitle="Take a look inside the MR7 experience."
            />
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { src: '/images/gallery-1.png', alt: 'Weight Room', span: 'lg:col-span-2' },
                { src: '/images/gallery-2.png', alt: 'Cardio Zone', span: '' },
                { src: '/images/about.png', alt: 'Training Floor', span: '' },
                { src: '/images/hero.png', alt: 'Premium Equipment', span: 'lg:col-span-2' },
              ].map((img, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg ${img.span}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black-deep/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white font-semibold text-lg">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24 bg-black-deep">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
              Ready to Experience MR7?
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10">
              Join our community of fitness enthusiasts and start your
              transformation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Join Now
              </Button>
              <Button href="/membership" variant="secondary" size="lg">
                View Plans
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
