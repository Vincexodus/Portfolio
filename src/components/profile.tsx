import Image from "next/image";
import profileImg from "../../public/assets/profile-pic.png";
import {
  MapPin,
  BriefcaseBusiness,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

export const Profile = ({ description }: { description: string }) => {
  return (
    <>
      <div className="self-start md:w-[800px] mb-10 md:mb-0 w-full flex flex-col text-black justify-center dark:text-white">
        <div className="flex justify-start items-start w-full">
          <Image
            className="h-48 w-48 rounded-full border-4 border-black dark:border-white my-4"
            src={profileImg}
            alt="profile picture"
            priority={true}
          />
        </div>
        <h1 className="mb-4 pr-16 text-2xl lg:text-4xl font-extrabold ">
          Vincent Chin
        </h1>
        <div className="flex space-x-10 gap-10 mb-4 font-semibold">
          <div className="text-base gap-2 flex">
            <MapPin />
            Malaysia
          </div>
          <div className="text-base gap-2 flex">
            <BriefcaseBusiness />
            CS Fresh Graduate
          </div>
        </div>
        <p className="text-lg mb-4">{description}</p>
        <div className="flex mt-2 gap-4">
          <Link
            href="https://www.linkedin.com/in/vincentchin23/"
            className="flex gap-1 font-semibold"
            target="_blank"
          >
            <Linkedin />
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/vinccent23/"
            className="flex gap-1 font-semibold"
            target="_blank"
          >
            <Instagram />
            Instagram
          </Link>
          <Link
            href="https://github.com/vincexodus"
            className="flex gap-1 font-semibold"
            target="_blank"
          >
            <Github />
            Github
          </Link>
        </div>
      </div>
    </>
  );
};
