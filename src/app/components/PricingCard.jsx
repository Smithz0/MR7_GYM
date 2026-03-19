import Button from './Button';

export default function PricingCard({ name, price, period = '/month', features, popular = false, ctaText = 'Get Started' }) {
  return (
    <div
      className={`relative rounded-lg p-8 transition-all duration-300 card-hover ${
        popular
          ? 'bg-black-card border-2 border-gold gold-glow'
          : 'bg-black-card border border-gray-700 hover:border-gold/40'
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gold text-black-deep text-xs font-bold uppercase tracking-widest px-5 py-1.5 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className={`text-xl font-bold uppercase tracking-wider mb-4 ${popular ? 'text-gold' : 'text-white'}`}>
          {name}
        </h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-extrabold text-white">${price}</span>
          <span className="text-gray-400 text-sm">{period}</span>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 mb-8">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-300">
              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={popular ? 'primary' : 'secondary'}
        className="w-full"
        href="/contact"
      >
        {ctaText}
      </Button>
    </div>
  );
}
