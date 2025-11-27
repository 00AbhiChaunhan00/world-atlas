import React, { useEffect, useState, useTransition } from 'react';
import { GetCountry } from '../Api/ApiData';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Card from './Card';
const CountryDetails = () => {
  const [ispending, startTransition] = useTransition();
  const [country, setCountry] = useState();
  const Params = useParams();

  useEffect(() => {
    startTransition(async () => {
      const res = await GetCountry(Params.id);
      if (res.status===200) {
        setCountry(res.data[0])  // that [0] is because of the data is coming in the form of array not in the form of object that we apply their index in which we get the our object 
        if(setCountry){
            console.log("updated")
        }
      } else {
        console.log("Not updated");
      }
    });
  },[Params.id]);

  if (ispending ) return <img  className='loadingImg'  src="/src/assets/loading-img.jpg" alt="" />

  return (
    <>
      <Card country={country}/>
    </>
  );
};

export default CountryDetails;
