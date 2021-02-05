import { FrontMatter } from "@shared/get-posts";
import Link from "next/link";
type Post = {
  slug: string;
  frontMatter: FrontMatter;
};

type PostIndexProps = {
  list: Post[];
};

const IndexItem = ({ slug, frontMatter }: Post) => (
  <li key={slug}>
    <Link href={`/${slug}`}>
      <a>{frontMatter.title}</a>
    </Link>
  </li>
);

const PostIndex = ({ list }: PostIndexProps) => <ul>{list.map(IndexItem)}</ul>;

export default PostIndex;
