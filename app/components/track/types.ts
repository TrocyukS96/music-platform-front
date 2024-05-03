export interface ITrackProps{
  name:string
  description:string
  image:string
  audio:string
  onDelete:(id:number)=>void
}