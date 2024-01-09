import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <section className="hero">
      <div className="flex-1 padding-x">
        <h1 className="hero__title">
          Find, book, or rent a car - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline you car rental experince with our effortless booking
          process
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue rounded-full text-white mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero image"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </section>
  );
};

export default Hero;
