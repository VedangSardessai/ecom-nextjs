
const conf = {
    appwriteUrl: String(process.env.NEXT_APPWRITE_PUBLIC_URL),
    appwriteProjectId: String(process.env.NEXT_APPWRITE_PUBLIC_PROJECT_ID),
    db: String(process.env.NEXT_APPWRITE_DB_ID),
    collection: String(process.env.NEXT_APPWRITE_ORDERS)

}

export default conf