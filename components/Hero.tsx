import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="max-w-[1440px] mx-auto flex flex-col xl:flex-row gap-5 relative z-0">
      <div className="flex-1 px-6 md:px-16">
        <h1 className="font-extrabold text-[64px] xl:text-[72px]">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="text-[28px] text-gray-500 hero__subtitle">
          Streamline you car rental experince with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-600 rounded-full text-white mt-10"
        />
      </div>
      <div className="max-xl:relative xl:flex-[1.5] xl:h-screen flex justify-end items-end">
        <div className="relative xl:w-full xl:h-full w-[90%] h-[590px] z-0">
          <Image
            src="/hero.png"
            alt="hero image"
            fill
            className="object-contain"
          />
        </div>
        <div className="bg-[url('/hero-overlay.svg')] absolute xl:-top-24 xl:-right-[50%] -right-[20%] -translate-y-16 -z-10 xl:bg-contain bg-cover bg-no-repeat w-full h-[590px] xl:h-screen" />
      </div>
    </section>
  );
};

export default Hero;
