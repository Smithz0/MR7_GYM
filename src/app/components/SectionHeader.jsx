export default function SectionHeader({ title, subtitle, centered = true, className = '' }) {
  return (
    <div className={`mb-10 sm:mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 sm:mt-6 h-1 w-12 sm:w-16 bg-gold rounded-full ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
