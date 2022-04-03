import React from 'react'
import { useEffect, useState } from "react";
import Card from '../../components/card/Card';
import Nav from '../../components/nav/Nav'
import DefaultLayout from '../../layout/Default';

export default function index() {
  const [cats, setCats] = useState([])
  const fetchCats = async()=>{
    const response = await fetch('/api/cats');
    const data = await response.json();
    console.log(data);
    setCats(data);
  }
  useEffect(() => {
      fetchCats();
  }, [])
  return (
    <>
     <DefaultLayout>
     <div className='container mt-5'>
      <div style={{display:"flex",flexWrap:"wrap"}}>
      {
        cats.map(cat =>(
          <Card 
          cat={cat}
          />
        ))
      }
      </div>
    </div>
     </DefaultLayout>
    </>

  )
}
