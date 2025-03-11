"use client";

import { useState } from "react";

export default function DeleteButton({ userId }: { userId: string }) {
  const [loading, setLoading] = useState(false);

  async function deleteUser() {
    if (!confirm("Are you sure you want to delete this user?")) return;

    setLoading(true);
    const res = await fetch(`/api/users/${userId}`, { method: "DELETE" });

    if (res.ok) {
      alert("User deleted successfully!");
      location.reload();
    } else {
      alert("Error deleting user");
    }
    setLoading(false);
  }

  return (
    <button onClick={deleteUser} disabled={loading}>
      {loading ? "Deleting..." : "❌ Delete"}
    </button>
  );
}
