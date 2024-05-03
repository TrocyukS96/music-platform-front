"use client";
import {
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { FC, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICommentForm } from "./types";

interface ITrackProps {
  params: any;
}

const Track: FC<ITrackProps> = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm<ICommentForm>();
  const formRef = useRef<any>(null);

  const onSubmit: SubmitHandler<ICommentForm> = (data) => {
    console.log();
    formRef.current?.reset();
  };

  const params = useParams();
  console.log(params, "--params");
  return (
    <div>
      <Link href={"/tracks"} className="text-blue-600/75 text-lg">
        К списку треков
      </Link>
      <div className="flex gap-2 mt-2">
        <Image
          width={120}
          height={120}
          className="rounded rounded-md shrink-0"
          src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
          alt="track picture"
        />
        <Box className="ml-2 flex flex-col gap-2">
          <Heading size={"2"}>
            <span className="font-semibold">Название трека</span> - 123
          </Heading>
          <Heading size={"2"}>
            <span className="font-semibold">Исполнитель</span> - 123
          </Heading>
          <Heading size={"2"}>
            <span className="font-semibold">Прослушиваний</span> - 123
          </Heading>
        </Box>
      </div>
      <Box className="mt-4">
        <h2 className="text-lg mt-2">Комментарии</h2>
        <div className="mt-2">
            <Flex gap='2'>
              <Image
                width={30}
                height={30}
                className=" rounded rounded-full"
                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                alt="track picture"
              />
              <Text>Комментарии к тексту</Text>
            </Flex>
        </div>
        <form
          className="flex flex-col gap-1 max-w-sm mt-3"
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
          action={"#"}
        >
          <TextField.Input
            placeholder="Введите свое имя"
            {...register("name", { required: true })}
          />
          <TextArea
            placeholder="Введите комментарий"
            {...register("comment", { required: true })}
          />
          <Button
            variant="classic"
            color="indigo"
            className="rounded-md h-8 cursor-pointer"
            disabled={!isValid}
          >
            Отправить
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Track;
