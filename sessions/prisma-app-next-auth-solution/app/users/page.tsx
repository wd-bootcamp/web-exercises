import { authOptions } from "../api/auth/[...nextauth]/route";
import DeleteButton from "../components/DeleteButton";
import { getServerSession } from "next-auth/next";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api/users");
  return res.json();
}
export default async function UsersPage() {
  const users = await getUsers();
  const session = await getServerSession(authOptions);
  console.log(users);
  return (
    <div>
      <p>You are logged in as: {session?.user?.name}</p>
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
