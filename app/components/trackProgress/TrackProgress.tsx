'use client'
import { FC } from 'react'
import { ITrackProgressProps } from './types'
import { Slider } from '@radix-ui/themes'



const TrackProgress:FC<ITrackProgressProps> = ({left, right,onChange,className}) => {
  return (
    <div className={`box-border grid grid-cols-track-progress gap-1 items-center gap-2 ${className}`}>
      <Slider defaultValue={[75]} variant="soft" min={left} max={right} value={[left]} style={{width:'100%'}}   />
      <div className='w-auto'>
        {left} / {right}
      </div>
    </div>
  )
}

export default TrackProgress