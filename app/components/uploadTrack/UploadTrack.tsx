"use client";
import {
  Button,
  Dialog,
  Flex,
  Separator,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import React, { useRef, useState } from "react";
import TrackPhone from "./TrackPhone";
import { SubmitHandler, useForm } from "react-hook-form";
import { ICreateTrackForm } from "./types";
import UploadButton from "../uploadButton/UploadButton";
import { IUploadFile } from "@/app/types/general";

const UploadTrack = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<ICreateTrackForm>();
  const formRef = useRef<any>(null);
  const [audio, setAudio] = useState<IUploadFile | null>(null);
  const [picture, setPicture] = useState<File | null>(null);
  const [audioButtonTrigger, setAudioTrigger] = useState(0);
  const [open, setOpen] = React.useState(false);

  const onSubmit: SubmitHandler<ICreateTrackForm> = (data) => {
    reset();
    setOpen(false)
  };

  const onChangeAudioHandler = (data: IUploadFile) => {
    setAudio(data);
    setAudioTrigger((prev) => prev + 1);
  };

  const onChangePictureHandler = (data: File | null) => {
    setPicture(data);
  };

  console.log(audio);
  console.log(picture);

  return (
    <div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger >
          <Button variant="ghost" className="mr-20">
            Загрузить
          </Button>
        </Dialog.Trigger>
        <Dialog.Content style={{ maxWidth: 450 }}>
          <Dialog.Title>Загрузка нового трека</Dialog.Title>
          <Text as="div" size="2" mb="1" weight="bold">
            Обложка
          </Text>
          <TrackPhone onChange={onChangePictureHandler} />
          <form
            className="flex flex-col gap-2 mt-2"
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
            action={"#"}
          >
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Название трека
              </Text>
              <TextField.Input {...register("name", { required: true })} />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold">
                Описание к треку
              </Text>
              <TextArea {...register("description", { required: true })} />
            </label>
            <div className="mt-1 flex justify-between items-center">
              <div className="text-sm max-w-260 whitespace-break-spaces">
                {audio && audio?.file && audio?.file?.name}
              </div>
              {audio && audio.file ? (
                <Button variant="soft" onClick={() => setAudio(null)}>
                  Удалить файл
                </Button>
              ) : (
                <UploadButton
                  title="Загрузить трек"
                  onChange={onChangeAudioHandler}
                  resetTrigger={audioButtonTrigger}
                  accept={["mp3", "mp4"]}
                />
              )}
            </div>
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button
                  variant="soft"
                  color="gray"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(false)
                  }}
                >
                  Отменить
                </Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button disabled={!isValid || !audio || !picture} type="submit">
                  Сохранить
                </Button>
              </Dialog.Close>
            </Flex>
          </form>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};

export default UploadTrack;
