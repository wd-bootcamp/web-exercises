async function getUser(id: string) {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  return res.json();
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  if (!user || user.error) {
    return <h1>User Not Found</h1>;
  }

  return (
    <div>
      <h1>
        {user.name} ({user.email})
      </h1>
      <h2>Posts:</h2>
      <ul>
        {user.posts.length > 0 ? (
          user.posts.map((post) => <li key={post.id}>{post.title}</li>)
        ) : (
          <p>No posts yet.</p>
        )}
      </ul>
    </div>
  );
}
