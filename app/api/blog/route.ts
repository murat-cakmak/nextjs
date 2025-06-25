import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const posts = [
        {
            id: 1,
            title: "First Post",
            content: "This is the content of the first post."
        },
        {           
            id: 2,
            title: "Second Post",
            content: "This is the content of the second post."
        },
        {            
            id: 3,
            title: "Third Post",
            content: "This is the content of the third post."
        }
    ];

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
            "Content-Type": "application/json"
        }
    });
};