"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IPost, PostItem } from "..";
import { cn } from "@/lib/utils";

interface IProps {
  posts: Array<IPost>;
  loading: boolean;
  className?: string;
}

export const PostSlider: React.FC<IProps> = ({ posts, loading, className }) => {
  return (
    <Swiper
      className={cn("min-h-[450px]", className)}
      slidesPerView={3}
      spaceBetween={20}
      navigation
      pagination={{ type: "bullets", clickable: true }}
      autoplay={true}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {posts.map((post) => (
        <SwiperSlide key={post.id}>
          <PostItem loading={loading} post={post}></PostItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
