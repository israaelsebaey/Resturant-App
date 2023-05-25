import React from 'react';
import './NotFound.css';

const NotFound = ({notFound}) => {
  return (
    <div className='container'>
        <div className='row d-flex justify-content-center'>
           {
            notFound!==''?<h3 className='alert alert-danger text-center p-3 notfound'>{notFound}</h3>:null
           }
        </div>
    </div>
  )
}
export default NotFound;
