import Link from "next/link";
// import DarkModeBtn from "./DarkModeBtn";
import Image from "next/image";
import { Logo } from "@/assets/img";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <nav className="bg-white py-2 text-primary w-full font-sans">
      <div className="maxWidth flex flex-wrap justify-between items-center text-[14px]">
        <div>
          <h1 className="cursor-pointer">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="h-10 w-auto" priority />
            </Link>
          </h1>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link href="/templates">Templates</Link>
          </li>
          <li className="nav-item font-sans">
            <Link href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div>
          <Button variant="outline" size="default">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
