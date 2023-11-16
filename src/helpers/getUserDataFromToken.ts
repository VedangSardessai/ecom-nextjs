import { NextRequest } from "next/server"
import jwt, { JwtPayload } from "jsonwebtoken"


export const getUserData = (request: NextRequest) => {
    try {
        const token = request.cookies.get('token')?.value || ''

        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET!)

        return decodedToken.id
    } catch (error: any) {
        return error.message
    }
}