import { connectAppwrite } from "@/appwrite/config";
import { NextRequest, NextResponse } from "next/server";
import { databases } from "@/appwrite/config";
import conf from "@/conf/config";
import { ID } from "appwrite";

connectAppwrite()



export async function POST(request: NextRequest) {

    console.log('trying POST request');

    const id = await ID.unique()
    console.log(id);


    try {
        const reqBody = await request.json();
        console.log(reqBody);

        // console.log(formData)
        const response = await databases.createDocument(conf.db, conf.collection, id, reqBody);

        console.log(response); // Success
        return NextResponse.json({
            message: response.message,
            success: true,
        });
    } catch (error: any) {
        console.log(error.message);

        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}