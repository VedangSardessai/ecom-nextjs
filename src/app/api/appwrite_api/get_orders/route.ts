import { NextRequest, NextResponse } from "next/server";
import { connectAppwrite } from "@/appwrite/config";
import conf from "@/conf/config";
import { databases } from "@/appwrite/config";
import { Query } from "appwrite";
import { getUserData } from "@/helpers/getUserDataFromToken";

connectAppwrite()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json()
        // console.log(reqBody, 'this is the reqBody');


        const user_id = reqBody.userId;
        // console.log(user_id);


        const response = await databases.
            listDocuments(conf.db, conf.collection,
                [Query.equal('user_id',
                    user_id)])


        return NextResponse.json({
            response: response,
            user_id: user_id,
        });
    } catch (error: any) {
        // console.error(error);

        return NextResponse.error();
    }
}
