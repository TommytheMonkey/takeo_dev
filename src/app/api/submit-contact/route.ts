import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, dateAdded } = body;

    // Validate input
    if (!name || !company || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Integration with Google Sheets will be set up
    // For now, just log the data
    console.log('Contact form submission:', {
      name,
      company,
      email,
      dateAdded: new Date(dateAdded).toLocaleDateString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
