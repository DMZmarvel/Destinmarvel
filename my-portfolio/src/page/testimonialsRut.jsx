import React, { useState, useEffect } from 'react';
import { PuffLoader } from "react-spinners"
import Textimonial from '../components/Testimonials/Textimonials';


export const testimonialsRut = () => {

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => 
     setLoading(false), 3000);
  
    return () => clearTimeout(timer);
  }, []);
  
  if (Loading) {
    return  <div className="puff">
    <PuffLoader color="#3498db" size={60} />
  </div>
  }
  

  return (
    <div><Textimonial /></div>
  )
}

export default testimonialsRut