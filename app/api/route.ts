export const dynamic = 'force-static'

export function GET(request: Request) {
    // const res = await fetch('https://localhost:3010/hello', {
    //     // headers: {
    //     //   'Content-Type': 'application/json',
    //     // },
    //   })
    //   const data = await res.json()
     
      // return Response.json({ data })
      return Response.json({ msg:"server message" })
}