"use client"
import React from 'react'
import AllFiles from './_components/AllFiles'

const Files = () => {
  return (
    <div className='pb-5 px-8 md:px:28'>
       <h2 className='py-5 font-bold'>My Files</h2>
       <AllFiles/>
    </div>
  )
}

export default Files