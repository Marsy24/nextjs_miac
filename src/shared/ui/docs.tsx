import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import Link from "next/link";
import React from "react";

export interface IDoc {
  id: string;
  title: string;
  href: string;
  mimeType: string;
  size: string;
}

interface IProps {
  docs: Array<IDoc>;
  className?: string;
}

export const Docs: React.FC<IProps> = ({ docs, className }) => {
  return (
    <ul className={cn('flex flex-col', className)}>
      {docs.map((doc) => (
        <li key={doc.id} className="mb-5 last:mb-0 peer">
          <Link
            href={doc.href}
            className="relative rounded-[10px] group bg-[#ebf3f4] flex items-center sm:py-[28px] py-[18px] sm:px-[35px] px-[18px] sm:min-h-[140px] min-h-[110px]"
          >
            <div className="flex gap-x-[20px] document">
              <FileText size={20} className="min-w-[40px] text-[--logo]"/>
              <div className="document__body flex flex-col">
                <p className="document-body__name text-black sm:text-lg text-base sm:leading-[110%] leading-[110%] tracking-[-0.09px] mb-[8px] transition-colors duration-300 group-hover:text-primary">{doc.title}</p>
                <div className="text-black text-xs leading-[130%] tracking-[-0.06px]">
                    <span className="mr-1">файл</span>
                    <span className="mr-1">{doc.mimeType}</span>
                    <span className="mr-1">{doc.size}</span>
                    <span>кб</span>
                </div>
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
