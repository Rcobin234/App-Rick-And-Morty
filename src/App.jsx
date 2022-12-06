import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import ResidentsCard from './components/ResidentsCard'
import ErrorFetch from './components/ErrorFetch'

function App() {
  //https://rickandmortyapi.com/api/location/3

  const [location, setLocation] = useState()
  const [LocationInput, setLocationInput] = useState()
  const [hasError, setHasError] = useState(false)

  

  useEffect(() => {
    let URL 

    if(LocationInput){
      URL = `https://rickandmortyapi.com/api/location/${LocationInput}` 
    } else {
      const randomLocation = Math.floor(Math.random() * 126) + 1
      URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
    }

   axios.get(URL)
   .then(res => {
    setHasError
    setLocation(res.data)
  })
   .catch(err => {
    setHasError(true)
    console.log(err)
  })
    
  }, [LocationInput])

  const handleSubmit = (e) => {
    e.preventDefault()
    setLocationInput(e.target.inputSearch.value)
    
  }
  
  
  

  return (
    <div className="App">
      <div className='bg'>
        <img className='bg__img' src="https://i.redd.it/o6cwlzg3exk41.png
" alt="" />

<form className='form__search' onSubmit={handleSubmit}>
        <input className='search' id='inputSearch'  type="text" />
        <button className='btn__search'>Search</button>
      </form>
      </div>

      

     {
      hasError ?
      <ErrorFetch />
      :
      <>
      

      <div className="residents-container">

      
        <LocationInfo
        location={location} />
        
        {
          location?.residents.map(url => (
            <ResidentsCard
            key={url} 
            url={url} />
          ))
        }
        
      </div>
      </>
     }
    </div>
  )
}

export default App
