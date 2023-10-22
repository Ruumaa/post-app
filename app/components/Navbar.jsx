import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="container">
        <div className="flex-1">
          <Link href='/' className="text-transparent bg-clip-text text-xl font-semibold bg-gradient-to-r from-red-500 to-indigo-600">Instakilogram</Link>
        </div>
        <div className="flex-none">
          <Link href='/create' className="btn btn-ghost text-left">Create New Post</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
