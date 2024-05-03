"use client";
import React from 'react'
import Track from '../track/Track';
import "@radix-ui/themes/styles.css";

const list = [1,1,1,1]

const TrackList = () => {
  return (
    <div className='flex flex-col gap-2 mt-3' >
    {
      list.map((el,i)=>(
        <Track name='' description='' image='' audio='' key={i} onDelete={(el)=>undefined}/>
      ))
    }
</div>
  )
}

export default TrackList