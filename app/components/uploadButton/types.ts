import { IUploadFile } from "@/app/types/general";

export interface IUPlodButtonProps {
  title: string;
  multiple?: boolean;
  accept?: string[];
  disabled?: boolean;
  maxBitesLength?: number;
  maxCount?: number;
  className?: string;
  resetTrigger?: number;
  buttonType?: string;
  externalRef?: any;

  onChange?: (data: IUploadFile) => void;
  clearFileList?: () => void;
}
