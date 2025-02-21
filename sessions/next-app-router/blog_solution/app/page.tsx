import { Suspense } from "react";
import BlogPosts from "./components/BlogPosts";

export default function Home() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <BlogPosts />
      </Suspense>
    </div>
  );
}
