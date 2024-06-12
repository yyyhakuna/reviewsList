'use client'
import React from 'react'
type prop = {
    iconType:string,
}
const Icon =async ({iconType}:prop)=>{
        const mod = await import('@ant-design/icons')
        const I = (mod as any)[iconType]
  return (
    <div>
        <I />
    </div>
  )
}

export default Icon