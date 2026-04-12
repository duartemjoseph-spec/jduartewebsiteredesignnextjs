type CategoryCardProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function CategoryCard({
  title,
  subtitle,
  image,
}: CategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#1c1b1b]">
      <div
        className="h-80 bg-cover bg-center transition duration-300 group-hover:scale-105"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-[#131313]/30 to-transparent" />

      <div className="absolute bottom-0 left-0 w-full p-6">
        <h3 className="text-2xl font-semibold text-[#f5f1ea]">{title}</h3>
        <p className="mt-2 text-sm text-[#e9c349]">{subtitle}</p>
      </div>
    </div>
  );
}