export async function GET(request:Request,
    {params} : { params: Promise<{type: string}> }
) {
    const { type } = await params;
    return new Response(`${type} match Api endpoint`, {
        status: 200,
    })
    // api/match/3_3
}