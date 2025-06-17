// This is the final and secure version of your backend function.
// It uses `process.env` to safely access your secret keys.

// Import the Twilio helper library, which Vercel will install for you.
const twilio = require('twilio');

// === SAFE AREA: Accessing your secrets from Vercel's Environment Variables ===

// Vercel will securely replace `process.env.TWILIO_ACCOUNT_SID` with the value you set in the dashboard.
const accountSid = process.env.TWILIO_ACCOUNT_SID; 

// Vercel will securely replace `process.env.TWILIO_AUTH_TOKEN` with your NEW, secret token.
const authToken = process.env.TWILIO_AUTH_TOKEN;

// Vercel will get your Twilio WhatsApp number from the environment variables.
const fromWhatsAppNumber = process.env.TWILIO_WHATSAPP_FROM;

// Vercel will get your Google Script URL from the environment variables.
const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

// ==============================================================================


// Create an authenticated Twilio client using your credentials.
const client = twilio(accountSid, authToken);

// This is the main serverless function that runs when your form is submitted.
exports.handler = async function(event) {
  // We only want to respond to POST requests from your form.
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Get the customer's data (name, phone, etc.) from the form submission.
    const customerData = JSON.parse(event.body);
    const { fullName, phone, wilaya, address } = customerData;

    // --- Task 1: Forward the customer data to your Google Sheet ---
    const googleFormData = new FormData();
    googleFormData.append('fullName', fullName);
    googleFormData.append('phone', phone);
    googleFormData.append('wilaya', wilaya);
    googleFormData.append('address', address);
    
    // Send the lead's info to your Google Apps Script.
    await fetch(googleScriptUrl, {
      method: 'POST',
      body: googleFormData,
    });


    // --- Task 2: Send the WhatsApp Confirmation Message via Twilio ---

    // Format the customer's phone number to the international standard (E.164)
    // that Twilio requires (e.g., from "0555123456" to "+213555123456").
    let customerWhatsAppNumber = phone;
    if (customerWhatsAppNumber.startsWith('0')) {
        customerWhatsAppNumber = `+213${customerWhatsAppNumber.substring(1)}`;
    }
    customerWhatsAppNumber = `whatsapp:${customerWhatsAppNumber}`;
    
    // Create the personalized message body.
    const messageBody = `🎉 تهانينا ${fullName}!\n\nتم استلام طلبك بنجاح وسنتصل بك قريباً على رقم الهاتف ${phone} لتأكيد تفاصيل التوصيل إلى ولاية ${wilaya}.\n\nشكراً لثقتك فينا!\nفريق أكاديمية نجاح`;

    // Use the Twilio client to send the WhatsApp message.
    await client.messages.create({
      from: fromWhatsAppNumber,      // Your Twilio WhatsApp Number
      to: customerWhatsAppNumber,    // The Customer's WhatsApp Number
      body: messageBody,
    });
    
    // If everything worked perfectly, send a "success" response back to the browser.
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Confirmation sent successfully!" }),
    };

  } catch (error) {
    // If any step failed, log the error for debugging and send an error response back to the browser.
    console.error('Error in backend function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "An internal error occurred." }),
    };
  }
};
