// Two approaches
// domain.com/verifyToken/tokenString => best for server side
//domain.com/verifyToken?token=tokenString => best for client side

import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {

    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") await User.findByIdAndUpdate(userId, {
            verifyToken: hashedToken,
            verifyTokenExpiry: Date.now() + 3600000
        }
        )

        else if (emailType === "RESET") await User.findByIdAndUpdate(userId, {
            forgotPasswordToken: hashedToken,
            forgotPasswordTokenExpiry: Date.now() + 3600000
        }
        )

        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASSWORD!
            }
        });

        const mailOptions = {
            from: 'vms112000@gmail.com',
            to: email,
            subject: emailType === "VERIFY" ? 'Verify your email for Ecom Website' : "Reset your password",
            html: `<h1>Hi ${email}</h1>
                    <p>Please click on the link below ${emailType === "VERIFY" ? "to verify your email" : "to change your password"
                }</p>
                    <a href="${process.env.DOMAIN}/${emailType === "VERIFY" ? "verifyemail" : "resetpassword"}?token=${hashedToken}">
                    ${emailType === "VERIFY" ? "Verifiy Your Email" : "Reset Your Password"}</a>`

        }

        const mailResponse = await transport.sendMail(mailOptions)

        return mailResponse
    } catch (error: any) {
        console.log('Error sending mail', error);
        throw new Error(error.message)

    }
}