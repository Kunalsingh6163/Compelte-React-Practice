import { NextResponse } from 'next/server';
import Otp from '../../lib/otp_model';
import { connectToDatabase } from '../../lib/db';

export async function POST(req: Request) {
  await connectToDatabase();

  const body = await req.json();
  const { email, otp } = body;

  if (!email || !otp) {
    return NextResponse.json({ error: 'Email and OTP are required' }, { status: 400 });
  }

  // Find OTP in MongoDB
  const otpRecord = await Otp.findOne({ email, otp });

  if (!otpRecord) {
    return NextResponse.json({ error: 'Invalid OTP' }, { status: 400 });
  }

  // Delete OTP after successful verification
  await Otp.deleteOne({ email });

  return NextResponse.json({ message: 'OTP verified successfully' }, { status: 200 });
}
