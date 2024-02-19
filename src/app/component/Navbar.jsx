import Link from "next/link";
import Search from "./Search";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-b from-black to-transparent">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-4 gap-4">
        <Link href={"/"}>
          <Image
            src="/pokemon.svg"
            width={100}
            height={100}
            alt=""
            className="w-32"
            priority={false}
          />
        </Link>
        <Search></Search>
      </div>
    </div>
  );
};
export default Navbar;
