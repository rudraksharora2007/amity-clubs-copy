import { NextResponse } from 'next/server';
import { fetchAllFaqs } from '@/lib/sanity/queries';
import { fallbackFaqs } from '@/lib/chatbot';

export const revalidate = 60;

export async function GET() {
  try {
    const faqs = await fetchAllFaqs();
    const data = Array.isArray(faqs) && faqs.length > 0 ? faqs : fallbackFaqs;
    return NextResponse.json({ faqs: data });
  } catch {
    return NextResponse.json({ faqs: fallbackFaqs });
  }
}
