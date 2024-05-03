export const convertBase64 = (file:File):Promise<{data:string,view:string}> => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      const preparedStr = fileReader.result ? fileReader.result?.toString() : ''
      resolve({data:preparedStr?.length>0 ? preparedStr?.split(',')[1] : '',view:fileReader?.result ? fileReader?.result?.toString() :''});
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  })
}