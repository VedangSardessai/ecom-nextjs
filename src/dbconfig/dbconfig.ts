import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)

        const connection = mongoose.connection

        connection.on(
            'connected', () => console.log('Connected successfully')

        )

        connection.on(
            'error', (err) => console.log('Connection error', err)

        )
    }

    catch (error) {
        console.log('error connecting', error);

    }
}
