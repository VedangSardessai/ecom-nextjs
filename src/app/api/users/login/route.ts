import { connect } from "@/dbconfig/dbconfig"
import User from "@/models/userModel"
import { NextApiRequest, NextApiResponse } from "next"
import bcryptjs from "bcryptjs"
import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

connect()


export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        const { email, password } = reqBody

        // console.log(reqBody);

        const user = await User.findOne({ email: reqBody.email })

        if (!user) {
            return NextResponse.json({
                error: "User not found"
            },
                { status: 400 }
            )
        }

        //Check if password is correct
        const isPasswordValid = await bcryptjs.compare(password, user.password)

        if (!isPasswordValid) {
            return NextResponse.json({
                error: "Entered incorrect password"
            },
                { status: 401 }
            )
        }
        if (!user.isVerified)
            return NextResponse.json({
                error: "User Email Is Not Verified"
            },
                { status: 554 }
            )
        else {
            // Create token data
            const token = jwt.sign({
                id: user._id,
                email: user.email,
                username: user.username
            }, process.env.TOKEN_SECRET!, {
                expiresIn: "1d"
            })

            const response = NextResponse.json({
                message: "Login successful",
                success: true,
            })


            response.cookies.set(
                "token", token, {
                httpOnly: true,
            }

            )
            return response
        }

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}