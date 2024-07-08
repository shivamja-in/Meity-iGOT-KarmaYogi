import React from 'react'
import { Sparkles, Minimize2 } from 'lucide-react'

interface StatNavProps {
  title: string;
  time: string;
  date: string;
}

export default function StatNav({ title, time, date }: StatNavProps) {
  return (
    <div className='p-4 flex justify-between items-center bg-gray-100/70 rounded-lg  '>
      <div className='text-xl font-semibold'>{title}
      <div className='flex gap-2 items-center text-sm'>
        <div>{time}</div>
        <div>{date}</div>
      </div>
      </div>
      <div className='flex gap-4 items-center'>
    {/* TODO Extra : Add LLM RAG for easier understanding of the graphs */}
        {/* <div className='flex gap-2 items-center'>
          <input
            type="text"
            className='p-1 px-4 rounded-full bg-gray-300 bg-opacity-50 text-black placeholder-gray-500'
            placeholder='Search'
          />
          <Sparkles />
        </div> */}
        <Minimize2 />
      </div>
    </div>
  )
}
