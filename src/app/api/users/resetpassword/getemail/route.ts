import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";



connect();


export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()



        const { token } = reqBody



        const user = await User.findOne({
            forgotPasswordToken: token,
            forgotPasswordTokenExpiry: { $gt: Date.now() }

        });

        // console.log(user);



        if (!user) {
            // console.log('User not found');

            return NextResponse.json({ error: "Invalid User Token" },
                { status: 400 })
        }

        // console.log(user.forgotPasswordToken, 'forgot password token');




        return NextResponse.json({ user: user, success: true })

    } catch (error: any) {
        // console.log(error.message, 'on line 38');

        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}