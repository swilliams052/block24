import { useState } from 'react'
import './App.css'
import {puppyList} from './data.js'


function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup) => pup.id === featPupId)

  console.log(featuredPup)

  return (

      <div>
        
        {featuredPup && 
          <div className = "puppy-stats-container">
            <h2>
              {featuredPup.name}
            </h2>
            <ul>
              <li>
                {`Age: ${featuredPup.age}`}
              </li>
              <li>
                {featuredPup.email}
              </li>
              <li>
                {`Pup ID: ${featuredPup.id}`}
              </li>
              <li>
                {`Is cute?: ${featuredPup.isCute}`}
              </li>
              <li>
                {`Owner ID: ${featuredPup.ownerId}`}
              </li>
              <li>
                {`Tricks: ${featuredPup.tricks.length}`}
              </li>
            </ul>
          </div>
        }
      
        { 
          puppies.map((puppy) => {
            
            return (
            
            <p 
              onClick = {() => {
                setFeatPupId(puppy.id)
              }}
              key = {puppy.id}
            >
                {puppy.name}
            </p>
            )

          })
        }
      </div>

  )
}

export default App
