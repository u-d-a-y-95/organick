import Link from "next/link";

const navs = [
  {
    label: "home",
    url: "/",
  },
  {
    label: "Shop",
    url: "/shop",
  },
  {
    label: "Pages",
    url: "/",
  },
  {
    label: "Projects",
    url: "/",
  },
  {
    label: "News",
    url: "/",
  },
  {
    label: "About",
    url: "/",
  },
];

export default function Navbar() {
  return (
    <div className="flex text-primary capitalize justify-center gap-10 font-semibold">
      {navs.map((nav, index) => (
        <Link key={index} href={nav.url} className="hover:text-secondary">
          {nav.label}
        </Link>
      ))}
    </div>
  );
}
