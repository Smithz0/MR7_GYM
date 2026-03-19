import Link from 'next/link';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold tracking-wide uppercase transition-all duration-300 rounded-sm cursor-pointer';

  const variants = {
    primary:
      'bg-gold text-black-deep hover:bg-gold-light hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] active:scale-[0.97]',
    secondary:
      'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black-deep hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] active:scale-[0.97]',
    ghost:
      'bg-transparent text-gold hover:text-gold-light hover:underline underline-offset-4',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-10 py-4.5 text-base',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
