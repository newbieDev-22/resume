import Image from "next/image";
import profileImage from "../../../public/images/profile/profile-pic-2.jpg";

export default function About() {
  return (
    <div className="grid w-full grid-cols-5 gap-16 sm:gap-8 lg:flex lg:flex-col">
      <div className="lg:order-2  col-span-3 flex flex-col items-start justify-center">
        <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75">
          Biography
        </h2>
        <p className="font-medium sm:text-sm">
          {`Hi, I'm Oo (Puwanut), a highly motivated problem-solver with a unique
        background in engineering and data science. Leveraging my analytical
        skills honed through 4 years as a mechanical engineer and 2 years as a
        data scientist, I'm eager to transition into a Junior Full-Stack Developer
        role.`}
        </p>
        <p className="my-4 font-medium sm:text-sm">
          {`Driven by a desire to see solutions come to life, I've actively pursued
        full-stack development through intensive courses in both front-end and
        back-end technologies. My strong foundation in statistics (MSc,
        Chulalongkorn University) further strengthens my analytical approach.`}
        </p>
        <p className="font-medium sm:text-sm">
          {`I'm a fast learner with a collaborative spirit, excited to contribute my
        data-driven perspective and passion for building user-friendly web
        applications to a team environment.`}
        </p>
      </div>
      <div
        className="col-span-2 lg:w-1/2 lg:mx-auto sm:!w-full relative h-max rounded-2xl border-2 border-solid
   border-dark/50 bg-light p-6 shadow-xl dark:bg-dark dark:border-light"
      >
        <div className="lg:order-1 absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
        <Image
          src={profileImage}
          alt="profile"
          className="w-full h-auto rounded-2xl border-2 border-solid border-transparent dark:border-light"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
