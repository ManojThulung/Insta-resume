import Link from "next/link";
import DarkModeBtn from "./DarkModeBtn";

const Header = () => {
  return (
    <nav className="bg-primary py-2 text-primary-light">
      <div className="maxWidth flex justify-around items-center font-light">
        <div>
          <h1 className="text-lg font-semibold text-secondary-light cursor-pointer">
            <Link href="/"> InstaResume</Link>
          </h1>
        </div>
        <ul className="flex justify-center gap-8 list-none">
          <li className="cursor-pointer">
            <Link href="/create-resume">Create</Link>
          </li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
        </ul>
        <div>
          <DarkModeBtn />
        </div>
      </div>
    </nav>
  );
};

export default Header;
