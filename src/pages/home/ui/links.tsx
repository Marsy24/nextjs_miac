import { cn } from "@/lib/utils";
import { Title } from "@/shared";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface ILink {
  id: string;
  title: string;
  href: string;
  description: string;
}

interface IProps {
  links: Array<ILink>
  className?: string;
}

export const Links: React.FC<IProps> = ({ links, className }) => {
  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {
        links.map(link => (
            <Link key={link.id} href={link.href} className="group flex flex-col border border-gray-100 transition-all duration-300 hover:border-primary rounded-lg py-4 px-4 relative">
                <div className="flex items-center justify-between">
                    <p className="text-lg mb-2">{link.title}</p>
                    <CircleCheck className="absolute top-4 right-4 transition-all duration-300 group-hover:text-primary" size={20}/>
                </div>
                <p className="text-xs text-gray-500">{link.description}</p>
            </Link>
        ))
      }
    </div>
  );
};
