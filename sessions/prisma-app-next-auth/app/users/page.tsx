import DeleteButton from "../components/DeleteButton";
async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
}
export default async function UsersPage() {
  const users = await getUsers();
  console.log(users);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.posts?.length} posts
            <DeleteButton userId={user.id} /> 
          </li>
        ))}
      </ul>
    </div>
  );
}
