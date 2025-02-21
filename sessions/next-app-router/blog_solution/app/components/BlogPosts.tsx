async function getPosts() {
    await new Promise((resolve) => setTimeout(resolve, 4000)); // 4-second delay
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return res.json();
  }
  
  export default async function BlogPosts() {
    const posts = await getPosts();
    return (
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    );
}
  