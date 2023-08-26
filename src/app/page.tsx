
"use client";
import { useState } from "react";
export default function Home() {
  // let a=1;

  const [value, setValue] = useState(0);
  const [value1,setValue1]=useState("abc");
  const [value2,setValue2]=useState({name:"abc"});
  // Initialize the state variable b 
  // It return the array when we call this 
  // Array has two things 
  // 1. State Variable 
  // 2. function that change the state variable 
  return (

    // <div>
    //   <h1>
    //     Main
    //   </h1>
    //   <p>
    //     {b}
    //   </p>
    //   <button onClick={() => {
    //     setb(b + 2)
    //     console.log(b)
    //   }}>Click</button>
    //   <button onClick={() => {
    //     // a=a+1
    //     // console.log(a);
    //     setb(b + 1)
    //     console.log(b)

    //   }}>Click</button>
    // </div>
<div className="flex justify-center items-center">
    <div className="outline w-1/2 p-14 m-24 rounded-xl bg-black/30">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-3 ">Counter</h1>
      <button onClick={()=>{
        setValue(value+1)
      }} className="bg-black text-white px-5 py-2 rounded-xl mr-3">Increment</button>
      <button  onClick={()=>{
        setValue(value-1)
      }} className="bg-black text-white px-5 py-2 rounded-xl mr-3">Decrement</button>
      <button onClick={()=>{
        setValue(0)
      }} className="bg-black text-white px-5 py-2 rounded-xl mr-3">Reset</button>
         <h2 className="scroll-m-20  py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Value: {value}
    </h2>

   
    <button onClick={()=>{
        setValue1("xyz")
      }} className="bg-black text-white px-5 py-2 rounded-xl mr-3">Click to change</button>
     <h2 className="scroll-m-20  py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Value1: {value1}
    </h2>

    <button onClick={()=>{
        setValue2({name:"xyz"})
      }} className="bg-black text-white px-5 py-2 rounded-xl mr-3">Click to change</button>
     <h2 className="scroll-m-20  py-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Value1: {value2.name}
    </h2>
    </div>


    </div>
  );
}
