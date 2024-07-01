"use client"
import { SignIn } from "@clerk/nextjs";


export default function Page() {
  // const user = await currentUser();
  // if(user){
  //   redirect("/recents");
  // }
  return (
    <div className="mt-8">
      <SignIn />
    </div>
  );
}
