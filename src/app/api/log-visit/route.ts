import { NextRequest, NextResponse } from 'next/server';
import { getUncachableGoogleSheetClient } from '@/lib/sheets';

const SPREADSHEET_ID = '1b0K-HtBPX6vBJsWx5xdrRIPElRROIrt15UnFL8Zh7R4';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { visitorId, name, email, userAgent, timestamp } = body;

    // Validate input
    if (!visitorId || !name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get Google Sheets client
    const sheets = await getUncachableGoogleSheetClient();

    // Check if Visitor_Access sheet exists, create if not
    let sheetExists = false;
    try {
      const existing = await sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Visitor_Access!A:A',
      });
      
      sheetExists = true;
      
      // Check for duplicate visitor IDs (idempotency)
      const existingIds = existing.data.values?.slice(1).map(row => row[0]) || [];
      if (existingIds.includes(visitorId)) {
        console.log('Visitor already logged:', visitorId);
        return NextResponse.json({ success: true, duplicate: true }, { status: 200 });
      }
    } catch (error) {
      console.log('Visitor_Access sheet not found, creating it now');
      
      // Create the Visitor_Access sheet tab
      try {
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId: SPREADSHEET_ID,
          requestBody: {
            requests: [{
              addSheet: {
                properties: {
                  title: 'Visitor_Access'
                }
              }
            }]
          }
        });
        
        // Add header row
        await sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: 'Visitor_Access!A1:E1',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [['Visitor ID', 'Name', 'Email', 'Timestamp', 'User Agent']],
          },
        });
        
        console.log('Visitor_Access sheet created with headers');
      } catch (createError) {
        console.error('Error creating Visitor_Access sheet:', createError);
        throw createError;
      }
    }

    // Format date for Google Sheets
    const formattedDate = new Date(timestamp).toLocaleString('en-US');

    // Append row to the Visitor_Access sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Visitor_Access!A:E',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[visitorId, name, email, formattedDate, userAgent || 'Unknown']],
      },
    });

    console.log('Visitor access logged successfully:', {
      visitorId,
      name,
      email,
      timestamp: formattedDate,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error logging visitor access:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
