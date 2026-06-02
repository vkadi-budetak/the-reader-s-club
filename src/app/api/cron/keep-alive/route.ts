import { NextResponse } from 'next/server';
import { db } from '@/db';
import { sql } from 'drizzle-orm';

export async function GET(request: Request) {
  // Перевірка секретного токена для безпеки
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Виконуємо мінімальний запит до бази даних для "прогріву"
    await db.execute(sql`SELECT 1`);
    return NextResponse.json({ status: 'Database warmed up', timestamp: new Date() });
  } catch (error) {
    console.error('Keep-alive failed:', error);
    return NextResponse.json({ status: 'Error', error }, { status: 500 });
  }
}
