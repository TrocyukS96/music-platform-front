export interface ICreateTrackForm {
  name:string
  description:string
}

export interface ITrackPhoneProps{
  onChange:(data:File | null)=>void
}