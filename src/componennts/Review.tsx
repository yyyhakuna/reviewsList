import React, { useMemo, useState } from 'react'
import Stars from './Star'
import { Popover , Button} from 'antd'
import Image from 'next/image'
import { MoreOutlined , HeartOutlined} from '@ant-design/icons'
const Review = () => {
  const [selected ,setSelected] = useState(false)
  const buttonWidth = 80;

  const content = (
    <div>
      <Button className='block'>举报此内容</Button>
      <Button>屏蔽此内容</Button>
    </div>
  );
  const [arrow, setArrow] = useState('Show');

  const mergedArrow = useMemo(() => {
    if (arrow === 'Hide') {
      return false;
    }

    if (arrow === 'Show') {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  return (
    <div className='my-5 ml-28'>
      <div className="flex items-center" >
        <Image src='/avatar.jpg' alt='img' className='rounded-full w-12 h-12 m-2' width={30} height={30} />
        <div className='w-10/12'>
          <Stars n={5} />
          <span className='font-medium'>momo</span>
        </div>
      </div>
      <div className='ml-16 w-10/12'>2. 边距等，颜色等，可以根据自己的审美来写
        3. 并把你自己觉得可以组件化的东西做个抽离，以便于其它项目复用
        4. 不允许用到市面上已经存在的ui库，可以参考他们的代码。</div>
        <div className='ml-16 flex gap-4'>
          <span>2024-06-19 10:50</span>
          <HeartOutlined className={selected ? ' text-red-500' : ''} onClick={()=>{setSelected(!selected)}}/>
          <span className=' font-light text-gray-600'>回复</span>
          <Popover placement="top" content={content} arrow={mergedArrow}>
            <MoreOutlined ></MoreOutlined>
          </Popover>
        </div>
        <div className=' h-px bg-gray-600 ml-16 w-10/12 mt-3'></div>
    </div>
  )
}

export default Review