import { NextRequest, NextResponse } from "next/server";
import { connectAppwrite } from "@/appwrite/config";
import conf from "@/conf/config";
import { databases } from "@/appwrite/config";
import { Query } from "appwrite";
import { getUserData } from "@/helpers/getUserDataFromToken";

connectAppwrite()

export async function GET(request: NextRequest) {
    try {
        const user_id = await getUserData(request)
        const response = await databases.listDocuments(conf.db, conf.collection, [Query.equal('user_id', user_id)])


        return NextResponse.json({
            response: response,
            user_id: user_id
        });
    } catch (error: any) {
        console.error(error);

        return NextResponse.error();
    }
}
