import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { RxHamburgerMenu } from "react-icons/rx";
import BorderBox from "@/components/shared/BorderBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const listNames = [
  { title: "Grocerry" },
  { title: "Study bla bal blaljfoijiorjggeio" },
  { title: "Work" },
  { title: "Gym" },
  { title: "I" },
];

const Sidebar = () => {
  const [listName, setListName] = useState("");
  const [open, setOpen] = useState(false);
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    //connect to backend

    setOpen(false);
  }

  return (
    <div className="sidebar col-span-1 flex flex-col justify-between border-r-2 border-primary-2 bg-white p-6">
      <Collapsible>
        <div className="mb-3 mt-4 flex items-center justify-between space-x-4 bg-primary-0 p-2 px-4">
          <h4 className="text-lg font-medium text-primary-10">My Lists</h4>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="group hover:bg-primary-4"
            >
              {/* <GiHamburgerMenu className="text-primary-6"/> */}
              <RxHamburgerMenu className="text-lg text-primary-10 group-hover:text-white" />
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent>
          <div className="flex flex-col gap-1">
            {listNames.map((it, index) => {
              return <BorderBox key={index}>{it.title}</BorderBox>;
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            className="flex gap-2 border-primary-4 text-primary-10 hover:bg-primary-4 hover:text-white"
            variant={"outline"}
          >
            <FaPlus />
            New List
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="py-2 text-xl">
              Choose a title for your new list!
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-start gap-4">
              <Label htmlFor="title" className="text-left">
                New List Title
              </Label>
              <Input
                id="title"
                placeholder="New List"
                className="col-span-3"
                onChange={(e) => setListName(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Create</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Sidebar;
