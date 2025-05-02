import { NextResponse } from 'next/server'
// Handles POST requests to /api

export async function POST(request) {
    const requestData = await request.json();

    let params = {
        client_id: process.env.ZOHO_CLIENT_ID,
        client_secret: process.env.ZOHO_CLIENT_SECRET,
        grant_type: "refresh_token",
        refresh_token: process.env.ZOHO_REFRESH_TOKEN
    }

    try {
        // Make the API request
        const response = await fetch(`https://accounts.zoho.in/oauth/v2/token?client_id=${params.client_id}&client_secret=${params.client_secret}&grant_type=${params.grant_type}&refresh_token=${params.refresh_token}`, {
            method: 'POST',
        })
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        // Parse the response
        const data = await response.json();
        let resZoho;
        console.log(data);
        if (data.access_token) {
            resZoho = await CreateLead(data, requestData)
        }
        return NextResponse.json({ message: resZoho})
    } catch (error) {
        // Handle any errors
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

const CreateLead = async (authorizeData, bodyData) => {
    const response = await fetch("https://www.zohoapis.in/crm/v6/Leads", {
        method: 'POST',
        headers: {
            "Authorization": `Zoho-oauthtoken ${authorizeData.access_token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "data": bodyData })
    })
    const resJson = await response.json();

    console.log(resJson);

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }else{
        return resJson;
    }
}