import { NextResponse } from "next/server";


export async function POST() {
    try {

        const response = NextResponse.json({
            message: 'Logout Successful',
            success: true
        })


        response.cookies.set('token', '', { httpOnly: true, expires: new Date(0) });
        response.cookies.delete('token')
        return response
    } catch (error: any) {
        // console.log('error logging out', error.message);

        return NextResponse.json({ error: error }, { status: 500 })
    }

}