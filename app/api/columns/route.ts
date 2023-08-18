import connect from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import Column from '@/models/Column';

export const GET = async (request: NextRequest) => {
  const url = new URL(request.url);
  const username = url.searchParams.get('username');

  if (username) {
    try {
      await connect();

      const columns = await Column.find({ username });

      const col = columns.filter((el) => el.username === username);

      return new NextResponse(JSON.stringify(col), { status: 200 });
    } catch (error) {
      return new NextResponse('Error in response of DB', { status: 500 });
    }
  }
};

export const POST = async (request: NextRequest) => {
  const { username, columns } = await request.json();

  await connect();

  const newColumn = new Column({
    username,
    columns,
  });

  try {
    await newColumn.save();
    return new NextResponse('Column has been created', { status: 201 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
