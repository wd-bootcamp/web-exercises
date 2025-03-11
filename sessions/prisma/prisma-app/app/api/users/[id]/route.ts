import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
    include: { posts: true },
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const { name, email } = await req.json();

    const updatedUser = await prisma.user.update({
      where: { id: params.id },
      data: { name, email },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return NextResponse.json({ error: "User not found or update failed" }, { status: 400 });
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    await prisma.user.delete({
      where: { id: params.id },
    });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
}
