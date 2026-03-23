import ScrollReveal from './components/ScrollReveal';
import SectionHeader from './components/SectionHeader';
import PricingCard from './components/PricingCard';
import TestimonialCarousel from './components/TestimonialCarousel';
import Button from './components/Button';
import AnimatedCounter from './components/AnimatedCounter';
import BMICalculator from './components/BMICalculator';
import TransformationSlider from './components/TransformationSlider';

const features = [
  {
    title: 'Modern Equipment',
    description: 'State-of-the-art machines and free weights from premium brands, maintained daily for peak performance.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M6.75 18.75V21M17.25 18.75V21M3 12h2.25M18.75 12H21M4.5 7.5h15v9h-15z" />
      </svg>
    ),
  },
  {
    title: 'Expert Trainers',
    description: 'Certified professionals with years of experience who create tailored programs for your goals.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: 'Flexible Plans',
    description: 'Choose from multiple membership tiers designed to fit your schedule and budget perfectly.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Personal Coaching',
    description: 'One-on-one sessions with dedicated coaches who push your limits and track your progress.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: 'Basic',
    price: '2,000',
    features: ['Gym Floor Access', 'Locker Room', 'Standard Equipment', 'Free WiFi'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '3,000',
    features: ['Everything in Basic', 'Group Classes', 'Sauna & Steam', 'Nutrition Guide', 'Progress Tracking'],
    popular: true,
  },
  {
    name: 'Elite',
    price: '5,000',
    features: ['Everything in Pro', 'Personal Trainer', 'VIP Lounge', 'Meal Planning', 'Priority Booking', '24/7 Access'],
    popular: false,
  },
];

const testimonials = [
  {
    name: "Marutha Renganathan",
    rating: 5,
    tag: "Motivating Environment",
    review: "Great experience at MR7 Fitness. The gym is clean, well-equipped, and highly motivating. Sujith Master is knowledgeable and always pushes you to achieve your best."
  },
  {
    name: "Sridhayaa A S",
    rating: 5,
    tag: "Weight Loss Transformation",
    review: "Been a member for six months and had an amazing experience. Structured workouts and proper guidance helped me achieve significant weight loss."
  },
  {
    name: "Ranjani Balaji",
    rating: 5,
    tag: "Visible Results",
    review: "Coming here for 8 months and seeing clear inch and weight loss. Trainers are motivating, and the gym is affordable with quality equipment."
  },
  {
    name: "Pragadeesh Vel",
    rating: 5,
    tag: "Supportive Trainer",
    review: "Perfect place for fitness. The trainer is supportive, knowledgeable, and always encourages pushing limits."
  },
  {
    name: "Narendra Varma",
    rating: 5,
    tag: "Personalized Training",
    review: "Trainers provide personal attention based on individual goals. Plenty of equipment for complete body development."
  },
  {
    name: "Vignesh Ganesan",
    rating: 5,
    tag: "Clean & Friendly",
    review: "Clean and well-maintained gym with very friendly trainers. Workouts are tailored and ensure proper form."
  },
  {
    name: "Mani Kandan",
    rating: 5,
    tag: "Fast Transformation",
    review: "Lost around 9kg in 3 months with proper guidance and structured training. Highly effective coaching."
  },
  {
    name: "Ayub MD",
    rating: 5,
    tag: "Great Atmosphere",
    review: "Love working out here! Great vibe, friendly people, and well-maintained equipment. My go-to fitness place."
  }
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="MR7 Fitness Gym"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black-deep/70 via-black-deep/60 to-black-deep" />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center px-4">
          <div className="animate-fade-in-up">
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6">
              Premium Fitness Experience
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-4 sm:mb-6 tracking-tight">
              Transform Your Body.
              <br />
              <span className="gold-gradient-text">Build Your Strength.</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Where ambition meets excellence. Experience world-class equipment,
              elite trainers, and a community that pushes boundaries.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" size="lg">
                Join Now
              </Button>
              <Button href="/membership" variant="secondary" size="lg">
                View Plans
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-gold/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURES SECTION ═══════════ */}
      <section className="py-14 sm:py-18 md:py-24 bg-black-deep">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Why Choose MR7 Fitness"
              subtitle="Everything you need to achieve your fitness goals, all under one roof."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="bg-black-card border border-gray-700 rounded-lg p-6 sm:p-8 text-center card-hover hover:border-gold/40 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT PREVIEW ═══════════ */}
      <section className="pt-14 pb-16 sm:pt-18 sm:pb-24 md:pt-24 md:pb-32 bg-black-elevated overflow-hidden">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src="/images/about.png"
                  alt="MR7 Fitness Interior"
                  className="w-full h-[280px] sm:h-[350px] md:h-[450px] object-cover rounded-lg"
                />
                <div className="absolute bottom-4 right-4 bg-gold text-black-deep p-5 rounded-lg hidden md:block">
                  <p className="text-3xl font-extrabold">10+</p>
                  <p className="text-sm font-semibold uppercase tracking-wider">Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <p className="text-gold uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                  About MR7 Fitness
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  More Than a Gym —<br />A Lifestyle Destination
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Founded with a vision to redefine fitness, MR7 Fitness combines
                  luxury aesthetics with uncompromising performance. Our
                  state-of-the-art facility is designed to inspire every workout,
                  whether you&apos;re a seasoned athlete or just beginning your journey.
                </p>
                <p className="text-gray-400 leading-relaxed mb-8">
                  We believe in holistic wellness — strength of body, clarity of mind,
                  and resilience of spirit. Every aspect of MR7 is crafted to elevate
                  your experience beyond the ordinary.
                </p>
                <Button href="/about" variant="secondary">
                  Learn More
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="py-10 sm:py-12 md:py-16 bg-black-deep border-y border-gray-800">
        <div className="container-custom">
          <ScrollReveal>
            <div className="grid grid-cols-3 md:grid-cols-3 gap-6 md:gap-8 text-center">
              {[
                { target: 200, label: 'Active Members' },
                { target: 10, label: 'Expert Trainers' },
                { target: 10, label: 'Years Experience' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold gold-gradient-text mb-1 sm:mb-2">
                    <AnimatedCounter target={stat.target} suffix="+" />
                  </p>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ BMI CALCULATOR ═══════════ */}
      <section className="py-14 sm:py-18 md:py-24 bg-black-elevated border-b border-gray-800">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Know Your Metrics"
              subtitle="Use our tools to calculate your Body Mass Index and understand where your fitness journey begins."
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <BMICalculator />
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════════ TRANSFORMATIONS ═══════════ */}
      <section className="py-14 sm:py-18 md:py-24 bg-black-deep">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Real Transformations"
              subtitle="See what dedication and expert guidance can achieve. Slide to witness the change."
            />
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12 max-w-5xl mx-auto">
            <ScrollReveal delay={100}>
               <TransformationSlider beforeImage="https://placehold.co/800x1000/1a1a1a/gold?text=Before+1" afterImage="https://placehold.co/800x1000/1a1a1a/ffffff?text=After+1" />
            </ScrollReveal>
            <ScrollReveal delay={250}>
               <TransformationSlider beforeImage="https://placehold.co/800x1000/1a1a1a/gold?text=Before+2" afterImage="https://placehold.co/800x1000/1a1a1a/ffffff?text=After+2" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════════ MEMBERSHIP PREVIEW ═══════════ */}
      <section className="py-14 sm:py-18 md:py-24 bg-black-deep">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="Membership Plans"
              subtitle="Invest in yourself. Choose the plan that fits your fitness journey."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 150}>
                <PricingCard {...plan} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ TESTIMONIALS ═══════════ */}
      <section className="py-14 sm:py-18 md:py-24 bg-black-elevated overflow-hidden">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              title="What Our Members Say"
              subtitle="Real stories from real people who transformed their lives at MR7 Fitness."
            />
          </ScrollReveal>
        </div>

        <ScrollReveal delay={150}>
           <TestimonialCarousel reviews={testimonials} />
        </ScrollReveal>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero.png"
            alt="Start your fitness journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black-deep/85" />
        </div>

        <div className="relative z-10 container-custom text-center">
          <ScrollReveal>
            <p className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">
              Your Journey Starts Here
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
              Start Your Fitness Journey Today
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
              Join thousands of members who have already transformed their lives.
              Take the first step towards a stronger, healthier you.
            </p>
            <Button href="/contact" size="lg">
              Join Now
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
