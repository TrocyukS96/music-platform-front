"use client";
import { Box, Card, Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DOMAttributes, FC, MouseEvent, MouseEventHandler, useState } from "react";
import { FaPause, FaPlay, FaTrash } from "react-icons/fa";
import { ITrackProps } from "./types";

const Track: FC<ITrackProps> = (props) => {
  const { name, description, image, audio } = props;
  const [active, setActive] = useState(false);
  const router = useRouter();

  const audioHandler = (e:MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setActive(!active);
  };

  const deleteHandler = (e:MouseEvent<HTMLDivElement>)=>{
    e.stopPropagation()
  }
  return (
    <Card>
      <div className="flex flex-row gap-2 py-2 px-3 items-center cursor-pointer" onClick={()=>router.push('tracks/1')}>
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

        <Box>
          <Text as="div" size="2" weight="bold">
            Teodros Girmay
          </Text>
          <Text as="div" size="1" color="gray">
            Engineering
          </Text>
        </Box>
        <div className="cursor-pointer ml-auto" onClick={deleteHandler}>
          <FaTrash />
        </div>
      </div>
    </Card>
  );
};

export default Track;
