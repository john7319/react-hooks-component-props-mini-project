import Article from "./Article";
import blogData from "../data/blog";

export default function ArticleList() {
  const article = blogData.posts.map((data) => {
    return (
      <Article key = {data.id} title={data.title} date={data.date} preview={data.preview}/>
    );
  });

  return <main>{article}</main>;
}
