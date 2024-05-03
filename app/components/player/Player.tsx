"use client";
import { Box, Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Image from "next/image";
import React, { MouseEvent, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import TrackProgress from "../trackProgress/TrackProgress";
import { IoVolumeHighSharp } from "react-icons/io5";

const Player = () => {
  const [active, setActive] = useState(false);

  const audioHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setActive(!active);
  };

  return (
    <div className="box-border h-14 w-full fixed bottom-0 grid grid-cols-player gap-3 items-center px-5 bg-gray-300">
      <div className="flex items-center gap-4">
        <div className="cursor-pointer" onClick={audioHandler}>
          {active ? <FaPlay /> : <FaPause />}
        </div>
        <div className="w-12 rounded rounded-md">
          <Image
            width={60}
            height={60}
            className="w-12 rounded rounded-md"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            alt="track picture"
          />
        </div>
        <div className="">
          <Text as="div" size="2" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="1" color="gray">
            Engineering
          </Text>
        </div>
      </div>
      <TrackProgress left={0} right={100} onChange={() => undefined} />
      <div className='flex items-center justify-between'>
        <IoVolumeHighSharp className='shrink-0'/>
        <TrackProgress
          left={0}
          right={100}
          onChange={() => undefined}
          className="ml-2 justify-items-end shrink-0 w-5/6"
        />
      </div>
    </div>
  );
};

export default Player;
