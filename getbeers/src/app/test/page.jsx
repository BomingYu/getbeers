"use client"
import { useEffect, useState } from "react"
import axios from "axios"

export default function page(){
    const [result , setResult] = useState()
    // useEffect(()=>{
    //     const getpic = async()=> {
    //         const responsePic = await axios.get('https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png')
    //         const picDetail = await responsePic.data
    //         setResult(picDetail)
    //     }
    //     getpic()
    // },[])
    const test = () => {
        console.log(result)
    }
    return(
        <div>
            testpage
            <button onClick={test}>test</button>
        </div>
    )
}