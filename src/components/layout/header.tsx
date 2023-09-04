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
      <div className="bg-gray-200 h-14">
        <div className="container mx-auto ">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image width="100" height="100" src="/img/logo.png" alt="logo" />
            </Link>
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
