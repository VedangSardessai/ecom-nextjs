import { connect } from "@/dbconfig/dbconfig"
import User from "@/models/userModel"
import { NextApiRequest, NextApiResponse } from "next"
import bcryptjs from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/helpers/myMailer"

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody

        // console.log('req body', reqBody);

        const userExist = await User.findOne({ email })
        // console.log(userExist, 'user exists');


        if (userExist) {
            return NextResponse.json({
                error: "User already exists"
            },
                { status: 400 }
            )
        }


        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })


        const savedUser = await newUser.save()
        // console.log(savedUser);

        //Send Verification Email Message
        await sendEmail({
            email: email,
            emailType: "VERIFY",
            userId: savedUser._id
        })

        return NextResponse.json({
            message: 'User Created Successfully',
            success: true,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}

