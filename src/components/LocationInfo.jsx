import React from 'react'
import './styles/location.css'

const LocationInfo = ({location}) => {
    
  return (
    <article className='conteiner' >
        

       <div className='conteiner__location'  > 
       <h2 className='title__location'>{location?.name}</h2>
        <ul className='list__location' >
            <li className='item__location' ><span  className='location__span'>Type:</span> {location?.type}</li>
            <li className='item__location' ><span className='location__span'>Dimension:</span> {location?.dimension}</li>
            <li className='item__location' ><span className='location__span'>Population:</span> {location?.residents.length}</li>
        </ul>
        </div>
    </article>
  )
}

export default LocationInfo