import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
    const posts = await prisma.post.findMany({
      where: { authorId: params.id },
    });
  
    return NextResponse.json(posts);
}
  