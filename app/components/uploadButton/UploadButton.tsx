'use client'
import * as Toast from '@radix-ui/react-toast';
import { FC, MouseEventHandler, useEffect, useRef, useState } from 'react';
import { convertBase64 } from '@/app/services/convertBase64';
import { IUPlodButtonProps } from './types';
import { IUploadFile } from '@/app/types/general';
import { Button } from '@radix-ui/themes';
import Image from 'next/image';
import { getValidText } from '@/app/services/get-validText';

const UploadButton: FC<IUPlodButtonProps> = (props) => {
  const { title, onChange, resetTrigger, accept, buttonType, externalRef } =
    props;

  const [file, setFile] = useState<IUploadFile>({
    data: '',
    name: '',
    extension: '',
    view: ''
  } as IUploadFile);
  const ref = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileData = e?.target?.files && e.target.files[0];
    if (fileData) {
      const data = await convertBase64(fileData);
      const prepapredData = {
        data: data?.data,
        name: fileData?.name?.split('.')[0],
        extension: fileData?.name?.split('.')[1],
        view: data?.view,
        file:fileData
      };
      if (accept) {
        if (accept?.includes(fileData?.name?.split('.')[1])) {
          setFile(prepapredData);
          onChange && onChange(prepapredData);
        } else {
          // notification.open({
          //   message: `Прикрепляемый файл недопустимого расширения`,
          //   placement: 'topRight',
          //   type: 'error'
          // });
          alert('Прикрепляемый файл недопустимого расширения')
        }
      } else {
        setFile(prepapredData);
        onChange && onChange(prepapredData);
      }
    }
  };

  const btnHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (ref && ref?.current) {
      ref?.current?.click();
    }
  };

  const resetFile = () => {
    const fileNode = document.querySelector('.file') as any;
    const emptyFile = document.createElement('input');
    emptyFile.type = 'file';
    if (fileNode) {
      fileNode.files = emptyFile?.files;
    }
  };

  useEffect(() => {
    resetFile();
  }, [resetTrigger]);

  const getAcceptExtensions = () => {
    if (accept && accept?.length > 0) {
      const changedAccept = accept?.map((el) => `.${el.trim()}`);
      return changedAccept?.join(',');
    } else return undefined;
  };
  return (
    <div className="">
      <input
        ref={externalRef ? externalRef : ref}
        id="file"
        type="file"
        accept={getAcceptExtensions()}
        className="opacity-0 h-0 w-0"
        onChange={handleFileChange}
      />
      <Button 
        variant='soft'
        onClick={btnHandler}
      >
        {title}
      </Button>
      <Image src={getValidText(file?.view)} alt="" />
    </div>
  );
};

export default UploadButton;
