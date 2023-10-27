import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"
import User from "@/models/userModel"
import { getUserData } from "@/helpers/getUserDataFromToken"


export async function GET(request: NextRequest) {

    try {

        const userID = getUserData(request)
        const user = await User.findById({
            _id: userID
        }).select("-password")

        return NextResponse.json({
            message: 'User Found',
            data: user
        })
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,

        }, {
            status: 400
        })
    }
}