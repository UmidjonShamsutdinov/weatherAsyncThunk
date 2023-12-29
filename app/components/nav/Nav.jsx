"use client"










import { apiWeather } from '@/app/lib'
import { fetchWeather } from '@/app/redux/feautures/weatherData.slice'
import Button from '@/app/utils/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Nav = () => {
    const dispatch = useDispatch()
    const data = useSelector(state=> state.weather.weatherData)
    console.log(data);



    const loadData = async ()=>{
        dispatch(fetchWeather())
    }


  return (
    <div>
        {data && <h1>{data.location.name}</h1>}
        <Button click={loadData}>Load</Button>
    </div>
  )
}

export default Nav








// import { apiWeather } from '@/app/lib'
// import React, { useState } from 'react'

// const Nav = () => {
//     const [data, setData] = useState(null)
//     const [inpValue, setInpValue] = useState("")

//     const loadProducts = async(e)=>{
//         e.preventDefault()
//         const data = await apiWeather(inpValue)
//         setData(data)
//     }
//     console.log(data);
//     console.log(inpValue);
//   return (
//     <form className='form' onSubmit={loadProducts}>
//         <input type="text" placeholder='Choose the city' onChange={(e)=>{setInpValue(e.target.value)}}/>
//         <button type='submit'>Submit</button>
//     </form>
//   )
// }

// export default Nav