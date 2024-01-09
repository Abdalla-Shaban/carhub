import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
const Header = () => {
  return (
    <header className="absolute w-full z-10">
      <nav className="max-width flex-between padding-y padding-x">
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
          containerStyles="rounded-full bg-white min-w-[130px] text-primary-blue"
        />
      </nav>
    </header>
  );
};

export default Header;
