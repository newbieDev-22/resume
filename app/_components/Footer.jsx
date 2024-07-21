import Link from "next/link";
import LayoutComponent from "./LayoutComponent";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg sm:text-base">
      <LayoutComponent className="!py-8 lg:!px-16 lg:!py-6 lg:flex-col flex justify-between items-center !bg-dark/95 text-light">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          BUILD WITH
          <span className="text-rose-300 dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp;
          <Link
            href="https://github.com/newbieDev-22"
            target={"_blank"}
            className="underline font-bold text-rose-300 dark:text-primaryDark"
          >
            PUWANUT
          </Link>
        </div>
      </LayoutComponent>
    </footer>
  );
}
