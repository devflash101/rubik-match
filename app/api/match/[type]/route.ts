import { type NextRequest } from 'next/server'

export async function GET(request:Request,
    {params} : { params: Promise<{type: string}> }
) {
    const { type } = await params;
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');

    return new Response(`${type} match Api endpoint with ${query}`, {
        status: 200,
    })
    // api/match/3_3?query=hello
}