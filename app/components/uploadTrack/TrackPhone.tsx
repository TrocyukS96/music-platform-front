"use client";
import { IUploadFile } from "@/app/types/general";
import { Button, Flex } from "@radix-ui/themes";
import Image from "next/image";
import React, { useState, useRef, FC } from "react";
import UploadButton from "../uploadButton/UploadButton";
import defaultImg from './../../../public/default-picture.png'
import { getValidText } from "@/app/services/get-validText";
import { ITrackPhoneProps } from "./types";

const TrackPhone:FC<ITrackPhoneProps> = ({onChange}) => {
  const [resetUploadTrigger, setResetUploadTrigger] = useState(1);
  const [file, setFile] = useState<IUploadFile>({} as IUploadFile);
  const buttonRef = useRef<HTMLInputElement>();
  const isPresentFile = file && Object.keys(file)?.length > 0;
  const isPresentView = file?.view !== undefined && file?.view?.length > 0;
  const isPresentName = file?.name !== undefined && file?.name?.length > 0;
  const imgSrc = isPresentView ? file?.view : defaultImg;

  const uploadHandler = (data: IUploadFile) => {
    setFile(data);
    onChange(data?.file ? data?.file : null);
  };

  const deleteHandler = () => {
    setResetUploadTrigger((prev) => prev + 1);
    setFile({} as IUploadFile);
    onChange && onChange(null);
  };

  const openProviderHandler = () => {
    !isPresentFile && buttonRef?.current?.click();
  };

  return (
    <Flex gap={'2'} justify={'between'} align={'center'}>
      <div >
        {isPresentFile ? (
          <Image
            src={getValidText(imgSrc)}
            width={96}
            height={96}
            alt="default photo"
            className="object-cover w-24 h-24 rounded-xl"
          />
        ) : (
          <div className="blue-secondary-bg photo-default-img">
            <Image
              src={getValidText(imgSrc)}
              width={96}
              height={96}
              alt="default photo"
              className="object-cover w-24 h-24 rounded-xl"
            />
          </div>
        )}
      </div>
      <div>
      {isPresentFile ? (
          <Button onClick={deleteHandler}>
            Удалить
          </Button>
        ) : (
          <UploadButton
            title={'Загрузить'}
            onChange={uploadHandler}
            resetTrigger={resetUploadTrigger}
            accept={['jpg','png','jpeg','web2','svg']}
          />
        )}
      </div>
    </Flex>
  );
};

export default TrackPhone;
