import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <> 
      <nav className="fixed top-0 left-0 w-full bg-red-50 px-6 py-4 flex items-center justify-between border-b border-red-100 z-50">
        
        {/* Left Section with Logo + Text */}
        <div className="flex items-center gap-45">
          {/* Logo Image */}
          <Image
            src="/img/LOGOIMAGE.png"   // 👈 yahan apna logo image ka path do
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />

          {/* Text */}
          <div>
            <h1 className="text-red-600 font-bold text-lg uppercase">
              Maa Anusaya Urban
            </h1>
            <p className="text-sm text-gray-600">
              Credit Co-operative Society Ltd, Gondiya
            </p>
          </div>
        </div>

        {/* Right Profile Button */}
        <div className="w-8 h-8 border border-red-500 rounded-full flex items-center justify-center hover:bg-red-100 cursor-pointer overflow-hidden">
          <Link href="/manager/profilepage">
            <Image
              src="/img/ProfileImage.png"
              height={32}
              width={32}
              alt="Profile Image"
              className="rounded-full object-cover"
            />
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
