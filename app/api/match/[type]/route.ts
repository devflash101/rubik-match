import { type NextRequest } from 'next/server'

export async function GET(request:Request,
    {params} : { params: Promise<{type: string}> }
) {
    const { type } = await params;
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    return new Response(`${type} match Api endpoint with ${query}`, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
    })
    // api/match/3_3?query=hello
}

export async function POST(request:Request) {
    const res = await request.json();
    return Response.json({res});
}