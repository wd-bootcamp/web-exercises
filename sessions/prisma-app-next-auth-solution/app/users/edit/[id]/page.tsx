"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditUserPage() {
  const router = useRouter();
  const params = useParams(); // ✅ Get params properly
  const [userId, setUserId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Unwrap `params` inside useEffect
  useEffect(() => {
    if (params?.id) {
      setUserId(params.id as string);
    }
  }, [params]);

  // Fetch user data when userId is available
  useEffect(() => {
    if (!userId) return;

    async function fetchUser() {
      try {
        const res = await fetch(`/api/users/${userId}`);
        if (!res.ok) throw new Error("User not found");

        const user = await res.json();
        setName(user.name);
        setEmail(user.email);
      } catch (err) {
        setError("User not found or an error occurred.");
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  // Handle update
  async function handleUpdate(event) {
    event.preventDefault();
    if (!userId) return;

    try {
      const res = await fetch(`/api/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) throw new Error("Failed to update user");

      alert("User updated successfully!");
      router.push("/users");
    } catch (err) {
      alert("Error updating user");
    }
  }

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Enter name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Enter email"
        />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}
