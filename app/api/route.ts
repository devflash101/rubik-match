export const dynamic = 'force-static'
// import { cookies } from "next/headers"

export async function GET(request: Request) {
  // const cookieStore = await cookies();
  // const token = cookieStore.get('token');
  // console.log('display cookie', cookieStore);

  return new Response('Hello, Next JS!', {
    status: 200,
  })
}