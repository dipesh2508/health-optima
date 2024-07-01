"use client"
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  // const user = await currentUser();
  // if(user){
  //   redirect("/recents");
  // }
  return (
    <div className="mt-6">
      <SignUp />
    </div>
  );
}
