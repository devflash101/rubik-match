import { redirect } from "next/navigation";

export default async function Home({
  params,
} : {
  params: Promise<{type: string}>
}) {

  const {type} = await params;
  // if(!type) {
  //   redirect('/')
  // }
  if (type && type[0] == 'back') {
    redirect('/')
  }
  return (
    <div>
      {type ? (
        <div>Path: {type.join(', ')}</div>
      ) : (
        <div>no path</div>
      )}
    </div>
  )
}