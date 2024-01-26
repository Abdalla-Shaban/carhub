import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between py-4 md:px-16 px-6">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="carhub logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          containerStyles="rounded-full bg-white min-w-[130px] text-blue-600"
        />
      </nav>
    </header>
  );
};

export default Header;
