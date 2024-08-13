import React from "react";
import { IPost } from "../models";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Skeleton,
  Title,
} from "@/shared";
import { TagList } from "@/entities/tag";

interface IProps {
  loading: boolean;
  post: IPost;
  className?: string;
}

export const PostItem: React.FC<IProps> = ({
  loading = false,
  post,
  className,
}) => {
  return (
    <li>
      {loading ? (
        <Card
        className={cn(
          "rounded-xl py-[20px] px-[20px] border relative group min-w-[400px] min-h-[300px] flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-white",
          className
        )}
      >
        <CardHeader>
          <Skeleton className="w-[150px] h-4"></Skeleton>
          <Skeleton className="w-[200px] h-4"></Skeleton>
        </CardHeader>
        <CardContent className="max-w-[350px]">
          <Skeleton className="w-[75px] h-2 mb-4"></Skeleton>
          
          <Skeleton className="w-[300px] h-4 mb-2"></Skeleton>
          <Skeleton className="w-[280px] h-4 mb-2"></Skeleton>
          <Skeleton className="w-[320px] h-4 mb-2"></Skeleton>
          <Skeleton className="w-[200px] h-4 mb-2"></Skeleton>
        </CardContent>
      </Card>
      ) : (
        <Card
          className={cn(
            "rounded-xl py-[20px] px-[20px] border relative group min-w-[400px] min-h-[300px] flex flex-col transition-all duration-300 hover:shadow-2xl hover:border-white",
            className
          )}
        >
          <CardHeader>
            <CardTitle className="mb-2 transition-colors duration-300 group-hover:text-primary">{post.title}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
          <CardContent className="max-w-[350px]">
            <Link className="absolute top-0 left-0 w-full h-full z-10" href={`/news/${post.id}`}/>
            <TagList tags={post.tags} />
            <div>{post.content.slice(0, 170) + '...'}</div>
          </CardContent>
          <CardFooter>
            <span className="mr-2">Опубликовано:</span> {post.publishedAt.toISOString().split("T")[0]}
          </CardFooter>
        </Card>
      )}
    </li>
  );
};
