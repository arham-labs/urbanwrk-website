import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { Readable } from 'stream';

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
        const message = formData.get('message');
        const resume = formData.get('resume');

        const transporter = nodemailer.createTransport({
            host: "smtp-mail.outlook.com",
            port: 587,
            tls: {
                ciphers: "SSLv3",
                rejectUnauthorized: false,
            },
            auth: {
                user: username,
                pass: password
            }
        });

        let mailOptions = {
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `New Enquiry from ${name}`,
            html: `
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone ? phone : ""}</p>
                <p>City: ${city ? city : ""}</p>
                <p>Area of Interest: ${field_domain_of_interest ? field_domain_of_interest : ""}</p>
                <p>Subscribed to Newsletter: ${newsUpdates ? newsUpdates : ""}</p>
            `,
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
        console.error(error);
        return NextResponse.json({ error: "COULD NOT SEND MESSAGE" }, { status: 400 });
    }
}
