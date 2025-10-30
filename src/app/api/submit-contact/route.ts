import { NextRequest, NextResponse } from 'next/server';
import { getUncachableGoogleSheetClient } from '@/lib/sheets';

const SPREADSHEET_ID = '1b0K-HtBPX6vBJsWx5xdrRIPElRROIrt15UnFL8Zh7R4';

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

    // Format date for Google Sheets
    const formattedDate = new Date(dateAdded).toLocaleDateString('en-US');

    // Get Google Sheets client
    const sheets = await getUncachableGoogleSheetClient();

    // Append row to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:D', // Adjust range if your sheet has a different name
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, company, email, formattedDate]],
      },
    });

    console.log('Contact form submitted successfully:', {
      name,
      company,
      email,
      dateAdded: formattedDate,
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
