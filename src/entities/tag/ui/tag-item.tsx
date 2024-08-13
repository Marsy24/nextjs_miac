import React from "react";
import { ITag } from "../models";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IProps {
  tag: ITag;
  className?: string;
}

export const TagItem: React.FC<IProps> = ({ tag, className }) => {
  return (
    <li>
        <Link className={cn('relative z-20 uppercase text-xxs leading-[130%] border rounded py-[3px] px-[6px] transition-colors duration-300 hover:text-primary', className)} href={`/news/${tag.value}`} >{tag.value}</Link>
    </li>
  )
};
