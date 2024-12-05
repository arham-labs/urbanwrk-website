import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import * as XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

XLSX.set_fs(fs);

const filePath = path.join(process.cwd(), 'Leads.xlsx');

export async function POST(request) {
    const username = "hello@urbanwrk.com";
    const password = "URB@2024";
    const myEmail = "jaykrishnanandagiri@arhamlabs.com";

    try {
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const city = formData.get('city');
        const newsUpdates = formData.get('newsUpdates');
        const field_domain_of_interest = formData.get("field_domain_of_interest");
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

        const newSheetData = [{
            Name: name,
            Email: email,
            City: city,
            Mobile: phone,
            Newsletter: newsUpdates,
            Interest: field_domain_of_interest,
            locationUrl: location,
            utm_source: utm_source,
            utm_medium: utm_medium,
            utm_campaign: utm_campaign,
            utm_adgroupname: utm_adgroupname,
            utm_term: utm_term,
            utm_device: utm_device,
            utm_adname: utm_adname,
            utm_matchtype: utm_matchtype,
            utm_network: utm_network
        }];

        let workbook;
        if (fs.existsSync(filePath)) {
            const fileBuffer = fs.readFileSync(filePath);
            workbook = XLSX.read(fileBuffer, { type: 'buffer' });
        }
        else {
            workbook = XLSX.utils.book_new();
        }

        if (!workbook.Sheets['Sheet1']) {
            const worksheet = XLSX.utils.json_to_sheet(newSheetData);
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        } else {
            const worksheet = workbook.Sheets['Sheet1'];
            const existingData = XLSX.utils.sheet_to_json(worksheet);
            const combinedData = existingData.concat(newSheetData);
            const updatedWorksheet = XLSX.utils.json_to_sheet(combinedData);
            workbook.Sheets['Sheet1'] = updatedWorksheet;
        }

        // Debugging: Output buffer data
        const updatedExcelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

        fs.writeFileSync(filePath, updatedExcelBuffer);

        // Send email
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
            // html: `
            //     <p>Name: ${name}</p>
            //     <p>Email: ${email}</p>
            //     <p>Phone: ${phone || ''}</p>
            //     <p>City: ${city || ''}</p>
            //     <p>Area of Interest: ${field_domain_of_interest || ''}</p>
            //     <p>Subscribed to Newsletter: ${newsUpdates || ''}</p>
            // `,
            attachments: [
                {
                    filename: 'Leads.xlsx',
                    content: updatedExcelBuffer,
                },
            ],
        };
        if (resume) {
            // Convert the resume to a buffer
            const resumeBuffer = Buffer.from(await resume.arrayBuffer());
            
            // Get the original file name from formData
            const resumeFilename = resume.name;

            // Add resume as an attachment
            mailOptions.attachments = [
                {
                    filename: resumeFilename,
                    content: resumeBuffer,
                },
            ];
        }

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Success: email was sent" });

    } catch (error) {
        console.error('Error:', error.message, error.stack);
        return NextResponse.json({ error: "COULD NOT SEND MESSAGE" }, { status: 400 });
    }
}
