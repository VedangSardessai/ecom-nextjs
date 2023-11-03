import { connect } from "@/dbconfig/dbconfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";



connect();


export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        // console.log(reqBody);


        const { token } = reqBody



        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() }
        });


        // console.log(user, 'user in verify request');

        if (!user) {
            // console.log('User not found');

            return NextResponse.json({ error: "Invalid User Token" },
                { status: 400 })
        }

        // console.log(user);

        user.isVerified = true;
        // user.verifyToken = undefined;
        // user.verifyTokenExpiry = undefined;
        await user.save();

        return NextResponse.json({ message: "Email Verified", success: true })

    } catch (error: any) {
        // console.log(error.message, 'on line 38');

        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}