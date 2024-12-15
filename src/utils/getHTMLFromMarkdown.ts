import getMarkdownContent, {
  type MarkdownContent,
} from "@/utils/getMarkdownContent";
import type { AxiosResponse } from "axios";
import matter from "gray-matter";

export type FrontMatterData = {
  author: string;
  description: string;
  draft: boolean;
  featured: boolean;
  ogImage: string;
  postSlug: string;
  pubDatetime: Date;
  tags: string[];
  title: string;
};

export type HTMLContent = {
  content: string;
  data: FrontMatterData;
};

const isValidFrontMatterData = (data: any): data is FrontMatterData => {
  return (
    typeof data.author === "string" &&
    typeof data.description === "string" &&
    typeof data.draft === "boolean" &&
    typeof data.featured === "boolean" &&
    typeof data.ogImage === "string" &&
    typeof data.postSlug === "string" &&
    typeof data.pubDatetime === "object" &&
    Array.isArray(data.tags) &&
    data.tags.every((tag: any) => typeof tag === "string") &&
    typeof data.title === "string"
  );
};

const getHTMLFromMarkdown = async (
  filename: string,
): Promise<HTMLContent | string> => {
  try {
    const md: MarkdownContent = await getMarkdownContent(filename);

    const markDownContent: string =
      (md as AxiosResponse).data || (md as string);

    const html = matter(markDownContent);
    const { content, data } = html;

    if (!isValidFrontMatterData(data)) {
      return "Invalid front matter data format";
    }
    //htmldata, frontmatter
    return { content, data };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "An unknown error occured";
  }
};

export default getHTMLFromMarkdown;
