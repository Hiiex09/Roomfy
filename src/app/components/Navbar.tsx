import { Outfit } from "next/font/google";
import Link from "next/link";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "600",
});

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link href={"/"} className={`text-2xl ${outfit.className}`}>
          Roomfy
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
