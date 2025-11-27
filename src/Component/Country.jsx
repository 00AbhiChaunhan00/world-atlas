import React, {  useEffect, useState, useTransition } from 'react'
import '/src/App.css'
import { GetApi } from '../Api/ApiData'
import {CountryCard} from './CountryCard'
import SearchField from './SearchField'

const Country = () => {
   const[ispending,startTransition]=useTransition()
   const[state,setState]=useState([])
   const[search,setsearch]=useState("")
   const[filter,setfilter]=useState("All")

  useEffect(()=>{
    startTransition(async()=>{
        const res=await GetApi()
        console.log(res)
        setState(res.data)
    })
  },[])

  if (ispending) return <img className='loadingImg' src="/src/assets/loading-img.jpg" alt="" />
 
  // this is for search input field
  const Search=(current)=>{
    if(search){
     return current?.name?.common.toLowerCase().includes(search.toLowerCase())
    }
    return current
  }
     // function for select filed
  const filterRegion=(current)=>{
    if(filter==='All') return current;
    return current.region ===filter
  };
  // function for both 
  const SearchState=state.filter(
    (current)=> Search(current)&&filterRegion(current))

  return (
  <>
  <section className='country-section'>
    <SearchField 
    search={search}
    setsearch={setsearch}
    filter={filter}
    setfilter={setfilter}
    state={state}
    setState={setState}

    />
    <ul className='grid grid-four-cols'>
        {SearchState.map((curr)=>{
            return <CountryCard key={curr.id} current={curr} />
        })}
    </ul>
  </section>
  </>
  )
}
export default Country
