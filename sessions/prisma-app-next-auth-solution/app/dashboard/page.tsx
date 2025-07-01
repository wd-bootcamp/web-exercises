// app/dashboard/page.tsx
"use client";
import { signOut, useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>Welcome, {session?.user?.name}!</h1>
      <p>Email: {session?.user?.email}</p>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
}
