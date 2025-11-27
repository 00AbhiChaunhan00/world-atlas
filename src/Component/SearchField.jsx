import React from 'react'

const SearchField = ({search,setsearch,filter,setfilter,state,setState}) => {
 
    function handleSearch(e){
        e.preventDefault()
         setsearch(e.target.value)
    }
    function handleSelect(e){
          e.preventDefault()
        setfilter(e.target.value)
    }

    // this is function to sort the country into ascending and descending 
    function handleSort(value){
        console.log("click")
        const SortedData= [...state].sort((a,b)=>{  // we take the copy of the original array of [...] and use sort fn and pas two value for comparing
          return  value==="asc"
       ? a.name.common.localeCompare(b.name.common):  // this is for ascesding here a is compae with b
        b.name.common.localeCompare(a.name.common)    // this is for descending here b is compare with a

    })
        setState(SortedData)  // at last set the original state
    }
    return (
    <section className='section-searchFilter container'>
        <input className='input' type="text" 
        placeholder='Enter Name'
        value={search} 
        onChange={handleSearch}/>
 {/* // we write the same fn for both button but change their value  */}
 <button onClick={()=>handleSort("asc")} >Asc</button>
 <button onClick={()=>handleSort("desc")} >Desc</button>

       <div>
        <select className='select-section'
        value={filter}
        onChange={handleSelect}>
             <option value="All">All</option>
    <option value="Africa">Africa</option>
<option value="Asia">Asia</option>
<option value="America">America</option>
<option value="Europe">Erurope</option>

        </select>
       </div>
    </section>
  )
}

export default SearchField
