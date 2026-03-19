export default function TrainerCard({ name, specialization, bio, image }) {
  return (
    <div className="group bg-black-card border border-gray-700 rounded-lg overflow-hidden card-hover hover:border-gold/40">
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-3">
          {specialization}
        </p>
        <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
