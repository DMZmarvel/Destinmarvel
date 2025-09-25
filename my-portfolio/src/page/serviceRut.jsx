import React, { useState, useEffect } from 'react';
import { PuffLoader } from "react-spinners"
import Services1 from '../components/Services!/Services1';

const serviceRut = () => {

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
    <div>
    <Services1 />
    </div>
  )
}

export default serviceRut