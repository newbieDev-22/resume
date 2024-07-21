import AnimatedText from "../_components/AnimatedText";
import LayoutComponent from "../_components/LayoutComponent";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";
import Education from "./_components/Education";
import About from "./_components/About";
import TransitionEffect from "../_components/TransitionEffect";

export const metadata = {
  title: "About",
  description: "My About Page",
};

export default function page() {
  return (
    <main className="flex w-full flex-col items-center justify-center min-h-[calc(100vh-100px)] dark:text-light">
      <LayoutComponent className="!pt-16 md:!px-12 sm:!p-6">
        <AnimatedText
          text="Love! Code! Create!"
          className="text-8xl mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8"
        />
        <About />
        <Skills />
        <Experience />
        <Education />
      </LayoutComponent>
      <TransitionEffect />
    </main>
  );
}
