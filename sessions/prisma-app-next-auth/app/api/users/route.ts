import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// GET request to fetch users with their posts
export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      posts: true, // Include the posts of each user
    },
  });

  return NextResponse.json(users);
}

export async function POST(req: Request) {
    try {
      const { name, email } = await req.json();
  
      const newUser = await prisma.user.create({
        data: { name, email },
      });
  
      return NextResponse.json(newUser, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: "Error creating user" }, { status: 500 });
    }
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
  