"use client";
import React, { useEffect, useState } from 'react'
import Chat from './chat';

const ChatWrapper = () => {
  const [show,setShow] = useState(false);
  useEffect(()=>{
    setTimeout(()=>{
        setShow(true);
    },5000)
  });
  return (
    <>
        {show ? <Chat /> : ""}
    </>
  )
}

export default ChatWrapper;