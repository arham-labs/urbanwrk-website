import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api


export async function POST(request) {

    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const myEmail ="hello@urbanwrk.com"

    const formData = await request.formData()

   
    const name = formData.get('name')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const city = formData.get('city')
    const newsUpdates = formData.get('newsUpdates')

    const message = formData.get('message')


    // create transporter object
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

    try {

        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `New Enquiry from ${name}`,
            html: `
            <p>Name: ${name} </p>
            <p>Email: ${email} </p>
            <p>Phone: ${phone} </p>
            <p>City: ${city} </p>
            <p>Subscribed to Newsletter : ${newsUpdates} </p>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error?.message)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
        NextResponse.status(400).json({ message: "COULD NOT SEND MESSAGE" })
    }

}