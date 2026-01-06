// --- CONFIGURATION ---
const ADMIN_EMAIL = 'lukman.ibrahim@skymirror.eu';
const WEBSITE_URL = 'https://www.skymirror.academy';

/**
 * Handles incoming POST requests from the consultation form
 * @param {Object} e The event parameter containing the HTTP request data
 * @returns {ContentService.TextOutput} JSON response
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Required fields validation
    const requiredFields = ['fullName', 'age', 'phone', 'symptoms'];
    for (const field of requiredFields) {
      if (!data[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Save to sheet
    saveConsultation(data);
    
    // Send confirmation
    sendConfirmationEmail(data);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Consultation submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON)
      .addHttpHeader('Access-Control-Allow-Origin', WEBSITE_URL);

  } catch (error) {
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.message
    })).setMimeType(ContentService.MimeType.JSON)
      .addHttpHeader('Access-Control-Allow-Origin', WEBSITE_URL);
  }
}

/**
 * Handles CORS preflight requests
 * @param {Object} e The event parameter
 * @returns {ContentService.TextOutput} Response with CORS headers
 */
function doOptions(e) {
  return ContentService.createTextOutput()
    .addHttpHeader('Access-Control-Allow-Origin', WEBSITE_URL)
    .addHttpHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .addHttpHeader('Access-Control-Allow-Headers', 'Content-Type');
}

/**
 * Saves consultation data to Google Sheet
 * @param {Object} data The consultation form data
 */
function saveConsultation(data) {
  const sheet = getOrCreateSheet('Consultations');
  
  // Create headers if they don't exist
  if (sheet.getLastRow() === 0) {
    const headers = ['Timestamp', 'Full Name', 'Age', 'Gender', 'Phone', 
                    'Current Symptoms', 'Medical History', 'Notes'];
    sheet.appendRow(headers);
  }
  
  // Add new consultation
  sheet.appendRow([
    new Date(),
    data.fullName,
    data.age,
    data.gender,
    data.phone,
    data.symptoms,
    data.medicalHistory,
    data.notes
  ]);
}

/**
 * Sends confirmation email to the patient
 * @param {Object} data The consultation form data
 */
function sendConfirmationEmail(data) {
  const subject = 'Your Consultation Request Has Been Received';
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px;">
      <h1 style="color: #4a5568; text-align: center;">Thank You for Your Consultation Request</h1>
      <p style="color: #4a5568;">Dear ${data.fullName},</p>
      <p style="color: #4a5568;">We have received your consultation request and will review it shortly. Our team will be in touch with you soon to schedule your consultation.</p>
      <p style="color: #4a5568;">Thank you for choosing Skymirror Academy.</p>
      <p style="color: #4a5568; text-align: center; margin-top: 30px;">Best regards,<br>Skymirror Academy Team</p>
    </div>
  `;

  MailApp.sendEmail({
    to: ADMIN_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    replyTo: data.email || data.phone
  });
}

/**
 * Gets or creates a sheet with the given name
 * @param {string} sheetName The name of the sheet
 * @returns {Sheet} The sheet object
 */
function getOrCreateSheet(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(sheetName);
  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
  }
  return sheet;
}
