import { ITag } from "@/entities/tag";

export interface IPost {
    id: string;
    title: string;
    description: string;
    content: string;
    tags: Array<ITag>;
    publishedAt: Date
}