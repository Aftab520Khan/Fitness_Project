import React from 'react'
import gif from './Json/gif.json'


export const App = () => {
  return (
      <>
          <h1>hello</h1>
          {gif.map(val => (<>
              <h1 key={val.id}>{val.name}</h1>
              <img src={val.img} alt="" />
              </>
          ))}
    </>
  )
}
