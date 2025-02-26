import { Bell, Info } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="pt-3 flex items-center justify-center gap-5">
      <Info />
      <div className="relative">
        <Bell />
        <div className="size-[7px] bg-pink-400 rounded-full absolute top-0 right-1"></div>
      </div>

      <p>
        Hi, <span className="text-green-500">Saurav Halder</span>
        <br />
        welcome back!
      </p>

      <Link to={"/"}>
        <img
          src="src/assets/Saurav animated.png"
          alt="profile picture"
          className="rounded-full border-2 border-pink-400 shadow-normal"
          width={55}
        />
      </Link>
    </div>
  );
};

export default Navbar;
