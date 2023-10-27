import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";



connect();


export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        const { token, newPassword } = reqBody



        const user = await User.findOne({
            forgotPasswordToken: token,
            forgotPasswordTokenExpiry: { $gt: Date.now() }

        });

        const changePassword = await User.findOneAndUpdate(user._id, { password: newPassword })

        if (!user) {
            console.log('User not found');

            return NextResponse.json({ error: "Invalid User Token" },
                { status: 400 })
        }

        console.log(user);

        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(newPassword, salt)
        user.password = hashedPassword
        // user.forgotPasswordToken = ''
        await user.save()


        console.log(user.forgotPasswordToken, 'forgot password token');




        return NextResponse.json({ messsage: "Password reset successfully", success: true })

    } catch (error: any) {
        console.log(error.message, 'on line 38');

        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}