import Image from "next/image";
import LayoutComponent from "./_components/LayoutComponent";
import profileImage from "../public/images/profile/profile-pic-1.png";
import AnimatedText from "./_components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./_icon";
import TransitionEffect from "./_components/TransitionEffect";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full dark:bg-dark min-h-[calc(100vh-100px)] dark:text-light">
      <LayoutComponent className="py-0 md:!pt-0 md:!px-12">
        <div className="w-full flex justify-between items-center lg:flex-col md:flex-col">
          <div className="w-1/2 pr-24 pb-8 md:p-0 md:pb-4 md:w-4/5">
            <Image
              src={profileImage}
              alt="profile"
              className="w-full h-auto lg:hidden md:!inline-block md:w-full"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
            <AnimatedText
              text="UX Apps - Clean Code - Fast Learner"
              className="text-6xl text-left xl:text-5xl lg:!text-center sm:!text-3xl"
            />

            <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              Highly motivated Junior Full Stack Developer with a strong analytical mind.
              Eager to contribute to a collaborative team environment by building
              innovative and user-friendly web applications. Possesses strong
              problem-solving skills and a proven ability to rapidly learn new
              technologies.
            </p>
            <div className="flex items-center self-start mt-2 gap-8 lg:self-center">
              <Link
                href={process.env.NEXT_PUBLIC_RESUME_LINK}
                target={"_blank"}
                className="flex items-center bg-dark
               text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
               border-2 border-solid border-transparent hover:border-dark transition-all 
               dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
               hover:dark:border-light md:py-2 md:px-4 md:text-base"
              >
                Resume <LinkArrow className={"w-6 ml-1"} />
              </Link>
              <Link
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                className="text-lg font-medium capitalize text-dark 
                underline transition-all dark:text-light
                md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </LayoutComponent>
      <TransitionEffect />
    </main>
  );
}
