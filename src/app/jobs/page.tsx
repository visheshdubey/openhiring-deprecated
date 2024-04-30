"use client";
import React from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Slider } from "./_components/slider";

type Props = {};

const Page = (props: Props) => {
  const [sliderValueWhileChange, setSliderValueWhileChange] = React.useState([
    1, 1,
  ]);
  return (
    <div className="relative flex flex-col ">
      <nav className="flex items-center h-16 w-full bg-background sticky top-0">
        <div className="flex container px-4 justify-between">
          <span className="text-xl font-medium">Openhiring</span>
          <div className="flex gap-4">
            <ThemeToggle />
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/visheshdubey.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
      <div className="flex container px-4 h-full">
        <div
          className="flex justify-center flex-col  w-1/4 sticky top-16"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className="bg-card  border rounded-md p-4">
            <span className="font-semibold">All filters</span>
            <div className="flex flex-col">
              <span className="text-muted-foreground">Salary</span>
              <Slider
                defaultValue={[0, 50]}
                min={0}
                max={100}
                step={1}

                //  value={sliderValueWhileChange}
                //  onValueChange={(x) => setSliderValueWhileChange(x)}
                //  onValueCommit={(x) => dispatch(updateSalaryFilter(x))}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  grow h-[8080px] m-8">1</div>
      </div>
    </div>
  );
};

export default Page;
