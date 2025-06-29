'use client';
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>Login</h1>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit">Sign In</button>
      <Link  href="/forgot-password" style={{ color: "blue", textDecoration: "underline" }}>Forgot your password?</Link>
      <Link  href="/register" style={{ color: "blue", textDecoration: "underline" }}>Don&apos;t have an account? Register</Link>
    </form>
  );
}
