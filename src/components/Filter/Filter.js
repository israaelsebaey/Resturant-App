import React, {useState } from 'react';
import './Filter.css';

const Filter = ({handleFilter}) => {
 const [classValue,setClassValue]=useState('All');
 const handleClick=(e)=>{
   setClassValue(e.target.textContent)
   handleFilter(e.target.textContent);
 }
  return (
    <div className='container mt-3'>
       <div className='row'>
           <div className='col-12 d-flex justify-content-center flex-wrap'>
               <button className={classValue==='All'?'active filter-btn':'filter-btn'} 
               onClick={handleClick}
               >All</button>
               <button className={classValue==='Breakfast'?'active filter-btn':'filter-btn'} 
               onClick={handleClick}
               >Breakfast</button>
               <button className={classValue==='Lunch'?'active filter-btn':'filter-btn'} 
               onClick={handleClick}
               >Lunch</button>
               <button className={classValue==='Dinner'?'active filter-btn':'filter-btn'} 
               onClick={handleClick}
               >Dinner</button>
               <button className={classValue==='Dessert'?'active filter-btn':'filter-btn'} 
               onClick={handleClick}
               >Dessert</button>
           </div>
       </div>      
    </div>
  )
}
export default Filter;
