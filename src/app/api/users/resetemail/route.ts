import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { sendEmail } from "@/helpers/myMailer";



connect();


export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()



        const { email } = reqBody



        const user = await User.findOne({
            email: email,
        });

        // console.log(user.email);
        

        if (!user) {
            // console.log('User not found');

            return NextResponse.json({ error: "Invalid User Token" },
                { status: 400 })
        }

        // console.log(user.forgotPasswordToken,'forgot password token');
        

        sendEmail({ email: email, emailType: "RESET", userId: user._id })
        

        return NextResponse.json({ message: "Reset Email Sent", success: true })

    } catch (error: any) {
        // console.log(error.message, 'on line 38');

        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}