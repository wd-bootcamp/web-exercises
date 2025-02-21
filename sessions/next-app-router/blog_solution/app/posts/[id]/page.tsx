import LikeButton from "../../components/LikeButton";

export default async function Post({ params }: { params: { id: string } }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const post = await res.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <LikeButton />
    </div>
  );
}
