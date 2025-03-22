import clientPromise from "@/lib/mongodb";

export async function POST(request) {
    try {
        const body = await request.json();
        console.log("🚨 Passed Body is:", body); 
        if (!body.url || !body.shorturl) {
            return Response.json({ error: "Missing required fields: url or shorturl" }, { status: 400 });
        }
        
        const client = await clientPromise;
        const db = client.db("bitlink");
        const collection = db.collection("shorturls");

        const result = await collection.insertOne({
            url: body.url,
            shorturl: body.shorturl
        });

        return Response.json({ message: "Short URL created successfully", insertedId: result.insertedId }, { status: 201 });

    } catch (error) {
        console.error("🚨 MongoDB Error:", error); // Log the actual error
        return Response.json({ error: "Internal Server Error", details: error.message }, { status: 500 });
    }
}
