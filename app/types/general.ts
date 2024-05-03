export interface IUploadFile {
  data: string;
  name?: string;
  extension?: string;
  view?: string;
  file?:File | null
}