import Post from '@/database/models/Post';
import connect from '@/database/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get('username');

  try {
    await connect();
    const posts = await Post.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  await connect();

  const newPost = new Post(body);
  try {
    await newPost.save();
    return new NextResponse('Post has been created', { status: 201 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
