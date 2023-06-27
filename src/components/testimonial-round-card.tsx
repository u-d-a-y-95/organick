export default function TestimonialRoundCard({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-full ring-2 ring-secondary h-32 w-32 flex justify-center items-center flex-col bg-secondary-accent-light ring-offset-4">
      <p className="text-3xl font-bold">{title}</p>
      <span className="text-[.8rem] font-thin">{subtitle}</span>
    </div>
  );
}
