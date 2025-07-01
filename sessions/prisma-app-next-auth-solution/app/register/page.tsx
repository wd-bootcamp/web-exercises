'use client';
import { useState } from "react";

import Link from "next/link";

export default function RegisterPage() {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (formData.get("password") !== formData.get("confirmPassword")) {
setError("Passwords don't match");
      return;
    }
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: { "Content-Type": "application/json" },
    });
    
    if (res.ok) {
      setError("Account created!");
    } else {
      const errorData = await res.json();
      setError(errorData.error || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <input name="name" type="text" placeholder="Name" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <input name="confirmPassword" type="password" placeholder="Confirm your password" required />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit">Register</button>
      <Link href="/login" style={{ color: "blue", textDecoration: "underline" }}>Already have an account? Login</Link>
    </form>
  );
}
