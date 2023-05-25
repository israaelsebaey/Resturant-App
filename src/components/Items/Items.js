import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-regular-svg-icons';
import {Zoom } from 'react-awesome-reveal';
import './Items.css';

const Items = ({data}) => {
  return (
    <div className='container mt-5'>
        <div className='row'>
           {
            data.length?(
               data.map(item=>{
                  return(
                     <Zoom key={item.id}>
                        <div className='col-12 mb-4'>
                           <div className='item d-flex mx-auto shadow-sm bg-white border'>
                              <div className='item-img w-50'>
                                 <img src={item.img}/>
                              </div>
                              <div className='item-body d-flex align-items-center w-75 mx-3 p-3'>
                                 <div className='details '>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <div className='price d-flex justify-content-between align-items-center mt-2'>
                                       <h6 className='my-auto'>{item.price}</h6>
                                       <FontAwesomeIcon icon={faHeart} className='icon d-flex'/>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </Zoom> 
                  )
               })
            ):null
           }  
        </div>
    </div>
  )
}
export default Items;
