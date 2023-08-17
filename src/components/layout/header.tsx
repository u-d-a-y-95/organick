"use client";
import Image from "next/image";
import Navbar from "./navbar";

import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAppSelector } from "@/state";

export default function Header() {
  const { isLogged } = useAppSelector((state) => state.auth);
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div>
            <Image width="100" height="100" src="/img/logo.png" alt="logo" />
          </div>
          <div className="hidden md:flex flex-1 max-w-[500px] border rounded-full p-2 items-center gap-2">
            <div className="flex-1 bg-secondary-accent-light w-[200px]">
              <input
                placeholder="search anything"
                className="w-full outline-0 px-2"
              />
            </div>
            <div className="text-white bg-primary rounded-full h-6 w-6 flex justify-center items-center">
              <MagnifyingGlassIcon className="h-3 w-3" />
            </div>
          </div>
          <div className="hidden sm:flex gap-5 items-center">
            <div className="flex border rounded-full p-2 items-center gap-2">
              <div className="bg-primary text-white rounded-full w-6 aspect-square flex justify-center items-center">
                <ShoppingCartIcon className="w-3 aspect-square" />
              </div>
              <div className="flex-1">Cart (0)</div>
            </div>
            {isLogged && (
              <div className="bg-primary text-white rounded-full w-8 aspect-square flex justify-center items-center ring ring-offset-2 ring-gray-400"></div>
            )}
            {!isLogged && (
              <div className="bg-primary text-white px-4 p-2 rounded">
                <Link href="/signin">Sign in</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
