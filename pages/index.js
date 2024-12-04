import React from "react";

export async function getStaticProps() {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  const filePath = path.join(process.cwd(), "posts", "hello-world.md");
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      data,
      content,
    },
  };
}

export default function Home({ data, content }) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
