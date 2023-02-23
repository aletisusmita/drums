import React from 'react'
import Itemcard from './Cart'
import data from "./Data.js"
console.log(data)

function Home() {

  return (
    <div>
        <h1 className="text-center mt-3"> All items</h1>
        <section className='py-4 container'></section>
        <div className='"row justify-content-center'></div>
        {data.productData.map((item,index)=>{
    
        <Itemcard img="{item.img}" title="{item.title}" decs="{item.decs} price={item.price} key={index}" />
    
        })}
        
    </div>
  )
}


export default Home