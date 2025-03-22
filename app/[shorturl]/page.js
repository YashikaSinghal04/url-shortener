import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
    const { shortUrl } = params  // ✅ Destructure correctly

    const client = await clientPromise;
    const db = client.db("bitlink");
    const collection = db.collection("shorturls");

    const doc = await collection.findOne({ shortUrl })  // ✅ Simplified query

    if (doc) {
        redirect(doc.url)  // ✅ Redirect to found URL
    } else {
        // Fallback to home page or error page if short URL not found
        redirect(process.env.HOST || "https://yourdomain.com")  // ✅ Use server-side env var
    }

    return <div>Redirecting...</div>  // This won't actually render due to redirect
}
