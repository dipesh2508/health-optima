"use client";

import React, { useState, ReactElement } from "react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { RxHamburgerMenu } from "react-icons/rx";
import BorderBox from "@/components/shared/BorderBox";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaCirclePlus } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


const listNames = [
  { title: "Grocerry" },
  { title: "Study bla bal blaljfoijiorjggeio" },
  { title: "Work" },
  { title: "Gym" },
  { title: "I" }
];

const Page = () => {

  const [listName, setListName] = useState("");
  const [open, setOpen] = useState(false);

  function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    //connect to backend

    setOpen(false);
  }

  return (
    <div className="grid grid-cols-4 bg-white min-h-[85vh]">
      <div className="sidebar col-span-1 bg-white border-r-2 border-primary-2 p-6 flex flex-col justify-between">

        <Collapsible>
          <div className="flex items-center justify-between space-x-4 px-4 bg-primary-0 p-2 mb-3 mt-4">
            <h4 className="text-lg font-medium text-primary-10">
              My Lists
            </h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="hover:bg-primary-4 group">
                {/* <GiHamburgerMenu className="text-primary-6"/> */}
                <RxHamburgerMenu className="text-primary-10 text-lg  group-hover:text-white" />
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <div className="flex flex-col gap-1">
              {listNames.map((it, index)=>{
                return <BorderBox key={index}>{it.title}</BorderBox>
              })}
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild><Button className="flex gap-2 text-primary-10 border-primary-4 hover:bg-primary-4 hover:text-white" variant={"outline"}><FaPlus/>New List</Button></DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="py-2 text-xl">Choose a title for your new list!</DialogTitle>
            </DialogHeader>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 items-start">
                  <Label htmlFor="title" className="text-left">
                    New List Title
                  </Label>
                  <Input
                    id="title"
                    placeholder="New List"
                    className="col-span-3"
                    onChange={(e)=>setListName(e.target.value)}
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">Create</Button>
                </DialogFooter>
              </form>
          </DialogContent>
        </Dialog>

      </div>
      
      <div className="col-span-3 px-28 py-11">
        <h2 className="bg-gradient-to-b from-primary-9 to-primary-5 bg-clip-text text-transparent text-4xl font-semibold font-serif mb-12">Untitled List</h2>

        <div className="bg-purple-50 px-16 pt-10 min-h-96">
          
          <div className="flex gap-4 items-center rounded-3xl mb-12 px-3 py-3 bg-white">
            <Input type="text" placeholder="Add Task" className="border-none focus-visible:ring-primary-2 rounded-3xl"/>
            <Button variant={"ghost"} className="rounded-full p-0 hover:bg-transparent"><FaCirclePlus className="text-primary-10 text-4xl"/></Button>
          </div>
          <div>bla</div>
        </div>
      </div>
    </div>
  )
}

export default Page