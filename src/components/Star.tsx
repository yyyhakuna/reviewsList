'use client'
import React, { useState } from 'react'
import { StarOutlined } from '@ant-design/icons'
type param= {n:number}
const stars = (o:param) => {
  const [selected , setSelected] = useState(0)
  const stars = Array.from({length : o.n},(v,i)=>{
    return <StarOutlined style={selected >= i + 1 ? {color:'red'} :{}} key={i} onClick={()=>{setSelected(i + 1)}}/>
  })
  return (
    <div>
      {stars.map((s)=>(
        s
      ))}
    </div>
  )
}

export default stars