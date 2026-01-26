import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROD_PASSWORD = 'AccentureCMT2026';

export async function POST(request: NextRequest) {
  const { password, redirect } = await request.json();

  // Only check password in production
  const isProduction = process.env.VERCEL_ENV === 'production' || 
                       (process.env.NODE_ENV === 'production' && process.env.VERCEL === '1');
  
  if (!isProduction) {
    return NextResponse.json({ success: true });
  }

  if (password === PROD_PASSWORD) {
    const response = NextResponse.json({ 
      success: true, 
      redirect: redirect || '/' 
    });

    response.cookies.set('cmt_auth', 'authenticated', {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return response;
  }

  return NextResponse.json(
    { success: false, error: 'Invalid password' },
    { status: 401 }
  );
}
