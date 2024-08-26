import { NextResponse } from 'next/server'
// Handles POST requests to /api

export async function POST(request) {
    const requestData = await request.json();

    let params = {
        client_id: "1000.1N0RVMXL84LYXWE8EZA49EFJB1DGHA",
        client_secret: "56d6426750da97a02ab47c07af12abe854b4bfe517",
        grant_type: "refresh_token",
        refresh_token: "1000.b50e1463096ffeb673a0b35d7c432b6b.474c29aa97f0d4cf2c0fc5ea1dacc6e0"
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

        if (data.access_token) {
            CreateLead(data, requestData)
        }
        return NextResponse.json({ message: data })
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

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

}