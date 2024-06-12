'use client'
import Review from "../componennts/Review";
import Image from 'next/image'
import { Input, Button } from 'antd'
import { SunOutlined, MoonOutlined } from "@ant-design/icons";
import { useState } from "react";
export default function Home() {
  const [light, setLight] = useState(false)
  const [isNewest, setIsNewest] = useState(true)
  const changeMode = () => {
    setLight(!light)
  }

  const changReviews = () => {
    setIsNewest(!isNewest)
  }
  return (
    <div className={light ? "dark:bg-slate-900 dark:text-white  h-full" : 'h-full'}>
      <div className="pt-5">
      <div className=" h-10 w-1/3 bg-gray-300 m-auto rounded-full flex items-center justify-center ">
        <div className="bg-gray-200 w-1/4 rounded-lg h-3">
          <div className="w-1/5 bg-indigo-600 rounded-lg h-3"></div>
        </div>
        <div className="ml-3">4.94 | 50 条</div>
      </div>
      </div>
      <div className="gap-3 flex mx-24 justify-between  pt-3">
        <div className="font-serif">
          <span onClick={changReviews} className=" cursor-pointer  hover:text-green-500 text-lg">最新</span>
          <span>
            |
          </span>
          <span onClick={changReviews} className=" cursor-pointer  hover:text-green-500 text-lg">最热</span></div>
        {light ? <SunOutlined onClick={changeMode} width={20} className="text-3xl" /> : <MoonOutlined onClick={changeMode} className="text-3xl" />}
      </div>

      <div className='flex justify-center items-center gap-4  mx-32'>
        <Image src='/avatar.jpg' alt='img' className='rounded-full w-9 h-9 m-2' width={20} height={20} />
        <Input></Input>
        <Button>发布</Button>
      </div>
      <Review />
      <Review />
    </div>
  );
}
