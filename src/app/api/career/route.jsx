import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const username = process.env.SMTP_MAIL_ID;
    const password = process.env.SMTP_PASSWORD;
    const myEmail = process.env.SMTP_MAIL_ID;

    try {
        const formData = await request.formData();
        const name = formData.get('name');
        const lastname = formData.get('Last_Name');
        const phone = formData.get('phone');
        const email = formData.get('email');
        const city = formData.get('city');
        const field_domain_of_interest = formData.get("field_domain_of_interest");
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
                <p>First Name: ${name}</p>
                <p>Last Name: ${lastname}</p>
                <p>Email: ${email}</p>
                <p>Phone: ${phone ? phone : ""}</p>
                <p>City: ${city ? city : ""}</p>
                <p>Department: ${field_domain_of_interest ? field_domain_of_interest : ""}</p>
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
