import AnimatedText from "../_components/AnimatedText";
import LayoutComponent from "../_components/LayoutComponent";
import TransitionEffect from "../_components/TransitionEffect";
import { projectData } from "../_constant";
import FeatureProject from "./_component/FeatureProject";

export const metadata = {
  title: "Projects",
};

export default function page() {
  return (
    <main className="w-full flex flex-col items-center justify-center min-h-[calc(100vh-100px)]">
      <LayoutComponent className="pt-16 md:!px-12 sm:!p-6">
        <AnimatedText
          text="Making Ideas Happen!"
          className="text-8xl mb-16 lg:text-7xl sm:text-6xl xs:!text-4xl sm:!mb-8"
        />
        <div className="flex flex-col gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-12 sm:gap-x-0 mb-8">
          {projectData.map((project) => (
            <div key={project.id} className="col-span-12">
              <FeatureProject {...project} />
            </div>
          ))}
        </div>
      </LayoutComponent>
      <TransitionEffect />
    </main>
  );
}
