import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface IButtonProps {
  label: string;
  className: string;
}

export default function Button({ label, className }: IButtonProps) {
  return (
    <button
      className={`bg-accent rounded-lg p-4 px-8 flex items-center gap-2 text-sm font-semibold ${className}`}
    >
      {label}
      <ArrowRightIcon className="w-4 h-4 bg-primary text-white rounded-full p-1" />
    </button>
  );
}
