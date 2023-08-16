"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
    url: "/pages",
  },
  {
    label: "Projects",
    url: "/projects",
  },
  {
    label: "News",
    url: "/news",
  },
  {
    label: "About",
    url: "/about",
  },
];

export default function Navbar() {
  const path = usePathname();
  return (
    <div className="border-b border-secondary">
      <div className="container mx-auto flex text-primary capitalize font-semibold ">
        {navs.map((nav, index) => (
          <Link
            key={index}
            href={nav.url}
            className={`
            ${
              path == nav.url ? "border border-b-white text-secondary" : ""
            }   p-2 px-4 border-secondary hover:text-secondary`}
          >
            {nav.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
