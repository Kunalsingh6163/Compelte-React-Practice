import { NextResponse } from 'next/server';
import Otp from '../../lib/otp_model';
import { connectToDatabase } from '../../lib/db';
import nodemailer from 'nodemailer';
import crypto from 'crypto';


export async function POST(req: Request) {

   const  EMAIL_USER = "singhkunal7739@gmail.com"
    const EMAIL_PASS= "iauf jwzz xnih fnyn"
  await connectToDatabase();

  const body = await req.json();
  const { email } = body;

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  const otp = crypto.randomInt(100000, 999999).toString();

  // Store OTP in MongoDB
  await Otp.create({ email, otp });

  // Configure Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}. It will expire in 5 minutes.`,
  };

  // Send OTP email
  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send OTP:', error);
    return NextResponse.json({ error: 'Failed to send OTP' }, { status: 500 });
  }
}
