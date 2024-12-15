import axios, { type AxiosResponse } from "axios";

export type MarkdownContent = AxiosResponse | string;

//getMarkdownContent fetches the contents of the markdown file.
const getMarkdownContent = async (
  filename: string,
): Promise<MarkdownContent> => {
  try {
    return await axios.get(`/blog/articles/${filename}.md`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return error.message;
    }
    return "unknown error occured";
  }
};

export default getMarkdownContent;
