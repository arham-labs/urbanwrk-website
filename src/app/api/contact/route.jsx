import { google } from "googleapis";
import { NextResponse } from "next/server";
import path from "path";
import nodemailer from "nodemailer"; // Make sure this import is added

const SHEET_ID = "1Q7VnDFsMQLMjqvENIKe_DKqDLSIpKaNpXosTQSbtIj0"; // Spreadsheet ID
const SHEET_NAME = "Leads"; // Sheet name

const formatDate = (date, timeZone) => {
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone,
    };

    const formattedDate = new Intl.DateTimeFormat("en-US", options).formatToParts(date);

    const parts = Object.fromEntries(formattedDate.map(({ type, value }) => [type, value]));
    const { month, day, year, hour, minute, dayPeriod } = parts;

    return `${month}/${day}/${year} ${hour}:${minute} ${dayPeriod}`;
};


const auth = new google.auth.GoogleAuth({
    credentials: {
        private_key: process.env.GOOGLE_PRIVATE_KEY,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function POST(request) {

    const username = "hello@urbanwrk.com";
    const password = "URB@2024";
    const myEmail = "hello@urbanwrk.com";

    try {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const city = formData.get('city');
        const newsUpdates = formData.get('newsUpdates');
        const location = formData.get('location');
        const utm_source = formData.get('utm_source')
        const utm_medium = formData.get('utm_medium')
        const utm_campaign = formData.get('utm_campaign')
        const utm_adgroupname = formData.get('utm_adgroupname')
        const utm_term = formData.get('utm_term')
        const utm_device = formData.get('utm_device')
        const utm_adname = formData.get('utm_adname')
        const utm_matchtype = formData.get('utm_matchtype')
        const utm_network = formData.get('utm_network')
        const timestamp = formatDate(new Date(), "Asia/Kolkata");

        // Prepare data to be appended
        const newSheetData = [[
            name,
            email,
            phone,
            city,
            newsUpdates,
            timestamp,
            utm_source || "NA",
            utm_medium || "NA",
            utm_campaign || "NA",
            utm_adgroupname || "NA",
            utm_term || "NA",
            utm_device || "NA",
            utm_adname || "NA",
            utm_matchtype || "NA",
            utm_network || "NA",
        ]];

        const sheets = google.sheets({ version: "v4", auth });

        // Append data to Google Sheet
        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: SHEET_ID,
            range: `${SHEET_NAME}!A1`,
            valueInputOption: "RAW",
            insertDataOption: "INSERT_ROWS",
            resource: {
                values: newSheetData,
            },
        });


        if (response.data.updates) {
            const transporter = nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                port: 587,
                tls: {
                    ciphers: "SSLv3",
                    rejectUnauthorized: false,
                },
                auth: {
                    user: username,
                    pass: password,
                },
            });

            const mailOptions = {
                from: username,
                to: myEmail,
                replyTo: email,
                subject: `New Enquiry from ${name}`,
                html: `
                    <p>Name: ${name}</p>
                    <p>Email: ${email}</p>
                    <p>Phone: ${phone || ''}</p>
                    <p>City: ${city || ''}</p>
                    <p>Subscribed to Newsletter: ${newsUpdates || ''}</p>
                `,
            };
            // Data appended successfully
            await transporter.sendMail(mailOptions);
            return NextResponse.json(
                { message: "Data successfully added to Google Sheet", data: newSheetData },
                { status: 200 }
            );
        } else {
            // Failed to append data
            console.error("Error appending data to Google Sheet:", response.statusText);
            return NextResponse.json(
                { message: "Failed to append data to Google Sheet", error: response.statusText },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Error appending data to Google Sheet:", error);
        return NextResponse.json(
            { message: "An error occurred", error: error.message },
            { status: 500 }
        );
    }
}
