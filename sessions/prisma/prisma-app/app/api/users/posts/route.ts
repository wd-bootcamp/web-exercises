import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req: Request) {
    try {
      const { title, content, authorId } = await req.json();
  
      const newPost = await prisma.post.create({
        data: {
          title,
          content,
          author: { connect: { id: authorId } }, // Connect the post to a user
        },
      });
  
      return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
      return NextResponse.json({ error: "Error creating post" }, { status: 500 });
    }
}

export async function GET() {
    const posts = await prisma.post.findMany({
      include: {
        author: true, // Include user info in the response
      },
    });
  
    return NextResponse.json(posts);
}
  