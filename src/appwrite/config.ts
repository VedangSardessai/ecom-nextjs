import conf from "@/conf/config";
import { Client, Databases } from "appwrite";


const client = new Client();
export const databases = new Databases(client);
export async function connectAppwrite() {
    try {

        client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
            ;
    }

    catch (error) {
        console.log('error caught', error);
    }
}

