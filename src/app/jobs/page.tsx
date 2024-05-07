"use client";
import React from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Slider } from "./_components/slider";
import { Button } from "@/components/ui/button";
import {
  Bookmark,
  BriefcaseBusiness,
  CircleDollarSign,
  Clock8,
  MapPin,
  UserRound,
  icons,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Props = {};

const Page = (props: Props) => {
  const [sliderValueWhileChange, setSliderValueWhileChange] = React.useState([
    1, 1,
  ]);
  return (
    <div className="relative flex flex-col ">
      <nav className="flex items-center h-16 w-full bg-background sticky border-b top-0">
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
          className="flex justify-center flex-col shrink-0 w-1/4 sticky top-16"
          style={{ height: "calc(100vh - 4rem)" }}
        >
          <div className="bg-card border rounded-md p-4">
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
        <div className="flex flex-col gap-4  h-[8080px] m-8">
          <div className="w-full bg-primary h-48 rounded"></div>
          <div className="flex items-center">
            <span className="grow">Filters</span>
            <Button>Create +</Button>
          </div>

          {Array.from({ length: 25 }).map((item, index) => (
            <div
              key={index}
              className="flex flex-col w-full border hover:bg-card  p-4 gap-4 transition-all duration-200 ease-in-out rounded-lg"
            >
              <div className="flex items-center">
                <div className="flex items-center grow gap-4">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://github.com/visheshdubey.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="flex gap-2 font-semibold">
                      Java Developer{" "}
                      <Badge variant={"outline"} className="rounded-full px-4">
                        Urgent
                      </Badge>
                    </span>
                    <span className="text-sm text-muted-foreground font-medium">
                      JP Morgan
                    </span>
                  </div>
                </div>

                <Button size={"icon"} variant={"ghost"}>
                  <Bookmark size={18} className="stroke-muted-foreground" />
                </Button>
              </div>
              <div className="flex text-muted-foreground items-center">
                <div className="flex gap-6 grow">
                  <span className="flex text-xs gap-1.5">
                    <Clock8 size={16} /> Full time
                  </span>
                  <span className="flex text-xs gap-1.5">
                    <MapPin size={16} /> San fransisco, USA
                  </span>
                  <span className="flex text-xs gap-1.5">
                    <BriefcaseBusiness size={16} /> 1-2 year
                  </span>
                </div>
                <span className="text-xs">28 Mar, 24</span>
              </div>
              <div className="w-full leading-normal tracking-wider text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates consequatur non repudiandae amet voluptatibus ad
                commodi, quibusdam, laborum saepe et aliquam dolorum nostrum
                numquam reiciendis rem quasi, error neque pariatur.
              </div>

              <div className="w-full flex">
                <div className="flex grow gap-6">
                  <span className="flex text-lg font-medium items-center gap-1.5">
                    <CircleDollarSign size={20} className="stroke-primary" />{" "}
                    100K
                  </span>
                  <span className="flex text-lg font-medium items-center gap-1.5">
                    <UserRound size={20} className="stroke-primary" /> 99+
                  </span>
                </div>
                <Button variant={"outline"}>Apply Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
