export const dynamic = 'force-static'

export function GET(request: Request) {
    return new Response('Hello, Next JS!', {
      status: 200,
    })
}