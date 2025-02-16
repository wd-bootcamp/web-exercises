export default async function DashboardData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    return <ul>{users.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
}