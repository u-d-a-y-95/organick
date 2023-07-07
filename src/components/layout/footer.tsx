import Image from "next/image";

export default function Footer() {
  return (
    <div className="px-10">
      <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm text-gray-400">
        <div className="sm:text-right">
          <p className="text-lg font-semibold text-primary">Contact Us</p>
          <div className="mt-4">
            <p className="font-semibold text-sm text-primary">Email</p>
            <span className="text-sm">uday.dev.bd@gmail.com</span>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-sm text-primary">Phone</p>
            <span className="">+8801964892201</span>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-sm text-primary">Address</p>
            <span className="">Dhaka, Bangladesh</span>
          </div>
        </div>
        <div className="lg:w-[500px] sm:border-l sm:border-r sm:px-8">
          <div className="flex sm:justify-center">
            <Image width="100" height="100" src="/img/logo.png" alt="logo" />
          </div>
          <div className="mt-4">
            <p className="sm:text-center">
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
          </div>
          <div>{/* add social icons */}</div>
        </div>
        <div>
          <p className="text-lg font-semibold text-primary">Utility Pages</p>
          <ul className="mt-4 flex flex-col gap-4">
            <li>Shop</li>
            <li>Pages</li>
            <li>News</li>
            <li>About</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <div className="text-center border-t mt-5 py-5">
        Copyright © Organick | Developed by Uday
      </div>
    </div>
  );
}
