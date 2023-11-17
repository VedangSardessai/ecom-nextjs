import { NextResponse } from "next/server";


export async function GET() {
    try {

        const response = await NextResponse.json({
            message: 'Logout Successful',
            success: true
        })


        response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });
        return response
    } catch (error: any) {
        console.log('error logging out', error.message);

        return NextResponse.json({ error: error }, { status: 500 })
    }

}