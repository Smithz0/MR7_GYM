import React from 'react';

export default function TestimonialCard({ name, rating, tag, review }) {
  // Get initials for avatar
  const getInitials = (nameStr) => {
    if (!nameStr) return 'M';
    const names = nameStr.split(' ');
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return nameStr.slice(0, 2).toUpperCase();
  };

  const getBadgeColor = (tagText) => {
    if (!tagText) return 'bg-gray-800 text-gray-400 border-gray-700';
    const colors = [
      'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
      'bg-rose-500/10 text-rose-400 border-rose-500/20',
      'bg-gold/10 text-gold border-gold/20'
    ];
    let hash = 0;
    for (let i = 0; i < tagText.length; i++) {
      hash = tagText.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:border-[#333] transition-colors duration-300 shadow-2xl relative overflow-hidden group select-none">
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-colors duration-500"></div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Header: Avatar, Name, Rating */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black-deep flex items-center justify-center border border-gray-700 font-bold text-white shadow-inner flex-shrink-0">
              {getInitials(name)}
            </div>
            <div>
              <p className="font-bold text-white leading-tight mb-1">{name}</p>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }, (_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-gold' : 'text-gray-700'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            {/* Google Icon */}
            <svg className="w-6 h-6 text-gray-400 opacity-50" viewBox="0 0 24 24" fill="currentColor">
               <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
               <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
               <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
               <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>

        {/* Tag Badge */}
        {tag && (
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full border ${getBadgeColor(tag)}`}>
              {tag}
            </span>
          </div>
        )}

        {/* Review Text */}
        <p className="text-gray-300 leading-relaxed text-sm sm:text-base flex-grow">
          {review}
        </p>
      </div>
    </div>
  );
}
