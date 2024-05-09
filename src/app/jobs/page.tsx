"use client";
import React from "react";

import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";

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
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {};

const Page = (props: Props) => {
  const [sliderValueWhileChange, setSliderValueWhileChange] = React.useState([
    1, 1,
  ]);
  return (
    <div className="relative flex flex-col ">
      <nav className="flex z-50 shadow items-center h-16 w-full bg-background sticky border-b top-0">
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
          <ScrollArea
            className="rounded-md my-8 bg-card border shadow-sm"
            style={{ height: "calc(100vh - 4rem)" }}
          >
            <div className="flex flex-col  mb-4  h-full rounded-md px-4 pt-4 gap-8">
              <div className="flex justify-between items-center">
                <span className="font-semibold">All filters</span>
                <span className="text-muted-foreground text-sm">Reset</span>
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-muted-foreground font-medium">
                  Salary
                </span>
                <Slider
                  defaultValue={[0, 50]}
                  min={0}
                  max={100}
                  step={1}

                  //  value={sliderValueWhileChange}
                  //  onValueChange={(x) => setSliderValueWhileChange(x)}
                  //  onValueCommit={(x) => dispatch(updateSalaryFilter(x))}
                />
                <div className="flex text-muted-foreground text-sm justify-between">
                  <span>$500</span>
                  <span>$500</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-muted-foreground font-medium">
                  Department
                </span>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      Fullstack
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      Frontent
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      Backend
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-muted-foreground font-medium">
                  Work type
                </span>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      Hybrid
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      On-site
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      Remote
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <span className="text-muted-foreground font-medium">
                  Experience
                </span>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      0 - 1 Years
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      1 - 2 Years
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      2 - 3 Years
                    </label>
                  </div>
                  <div className="flex items-center gap-4">
                    <Checkbox id="terms1" />
                    <label
                      htmlFor="terms1"
                      className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    >
                      3+ Years
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
        <div className="flex flex-col gap-4  m-8">
          {/* <div className="w-full bg-primary h-48 rounded"></div> */}
          <div className="flex items-center">
            <span className="grow text-sm text-muted-foreground">
              28323 Results
            </span>
            <Button>Create +</Button>
          </div>

          {Array.from({ length: 25 }).map((item, index) => (
            <div
              key={index}
              className="flex hover:cursor-pointer hover:border-primary flex-col w-full border hover:bg-card  p-4 gap-4 transition-all duration-300 ease-in-out rounded-lg"
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
