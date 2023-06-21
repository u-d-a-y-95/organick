import Image from "next/image";
import Navbar from "./navbar";
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="container mx-auto flex h-24 justify-between items-center">
      <div>
        <Image width="100" height="100" src="/img/logo.png" alt="logo" />
      </div>
      <div className="flex-1">
        <Navbar />
      </div>
      <div className="flex gap-2">
        <div className="flex border rounded-full p-2 items-center gap-2 flex-1">
          <div className="flex-1 bg-secondary-accent-light w-[200px]"></div>
          <div className="text-white bg-secondary rounded-full h-8 w-8 flex justify-center items-center">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </div>
        </div>
        <div className="flex border rounded-full p-2 items-center gap-2">
          <div className="bg-primary text-white rounded-full h-8 w-8 flex justify-center items-center">
            <ShoppingCartIcon className="h-4 w-4" />
          </div>
          <div className="flex-1">Cart (0)</div>
        </div>
      </div>
    </div>
  );
}
