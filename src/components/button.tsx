import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Button() {
  return (
    <button className="bg-accent rounded-lg p-4 px-8 flex items-center gap-2 text-sm font-semibold group/btn">
      Explore Now
      <ArrowRightIcon className="w-4 h-4 bg-primary text-white rounded-full p-1  animate-infinite ease-in-out delay-150  group-hover/btn:translate-x-6" />
    </button>
  );
}
