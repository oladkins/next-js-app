import connect from '@/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import Contact from '@/models/ContactMessage';

export const GET = async (request: NextRequest) => {
  try {
    await connect();
    const contactMessages = await Contact.find();

    return new NextResponse(JSON.stringify(contactMessages), { status: 200 });
  } catch (error) {
    return new NextResponse('Error in response of DB', { status: 500 });
  }
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  await connect();

  const newContactMessage = new Contact(body);
  try {
    await newContactMessage.save();
    return new NextResponse('Your message has been sent', { status: 201 });
  } catch (err) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
