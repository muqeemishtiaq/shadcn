"use client"; 
import React from "react"; // Required in some environments
import { useState } from "react";
import { ScrollArea } from "./scroll-area";
import { Card } from "./card";
import { Checkbox } from "./checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./calendar";

const ToDoList = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  const todoItems = [
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: true },
    { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: false },
    { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: true },
    { id: 4, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: false },
    { id: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: true },
    { id: 6, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: false },
    { id: 7, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: false },
    { id: 8, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: true },
    { id: 9, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: true },
    { id: 10, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: false },
    { id: 11, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: false },
    { id: 12, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: true },
    { id: 13, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: true },
    { id: 14, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: true },
    { id: 15, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", checked: true },
    
  ];

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">To Do List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full ">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
    mode="single"
    selected={date}
    onSelect={(date) => {
      setDate(date);
      setOpen(false);
    }}
    className="rounded-md border"
  /></PopoverContent>
      </Popover>

      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto scrollbar-hide">
        <div className="flex flex-col gap-4">
          {todoItems.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={`item-${item.id}`} checked={item.checked} />
                <label htmlFor={`item-${item.id}`} className="text-sm text-muted-foreground">
                  {item.text}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ToDoList;
