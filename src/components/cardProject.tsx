import { Card, CardHeader, CardTitle } from "./ui/card";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
  title: string;
  logo: StaticImageData;
  description: string;
  profit?: number;
  link: string;
}

const CardProject: React.FC<CardProps> = ({
  title,
  description,
  logo,
  profit,
  link,
}) => {
  const isExternalLink = link.startsWith("http");

  return (
    <Card className="rounded-2xl border border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:bg-slate-200 dark:shadow-neutral-700 dark:hover:bg-black ">
      <Link href={link} target={isExternalLink ? "_blank" : "_self"}>
        <CardHeader className="w-full flex flex-1 items-start justify-center">
          <div className="text-sm flex justify-between items-center w-full">
            <div className="flex gap-2 items-center justify-start">
              <Image
                src={logo}
                alt={`${title} logo`}
                className="w-8 h-8 rounded-full object-cover"
              />
              <CardTitle className="font-medium">{title}</CardTitle>
            </div>
            {profit && <div className="font-bold">${profit}</div>}
          </div>
          <p className="pb-2">{description}</p>
        </CardHeader>
      </Link>
    </Card>
  );
};

export default CardProject;
