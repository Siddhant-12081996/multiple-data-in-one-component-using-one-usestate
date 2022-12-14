import React,{useState} from 'react'

const Multiple = () => {

    const [state,setState]=useState([
        
            {
                "_id": "63594109cf1438874f51d9cd",
                "age": 51,
                "name": "Durham Arnold",
                "address": "937 Belmont Avenue, Trexlertown, Arizona, 415"
              },
              {
                "_id": "635941092d4a405b0b979149",
                "age": 25,
                "name": "Joanna Fitzgerald",
                "address": "291 Tehama Street, Caspar, Oklahoma, 9253"
              },
              {
                "_id": "6359410906eb4927ca9cf481",
                "age": 91,
                "name": "Jill Frazier",
                "address": "148 Chestnut Avenue, Finderne, Utah, 5501"
              },
              {
                "_id": "635941094eb3f7d0927287fa",
                "age": 89,
                "name": "Sims Dixon",
                "address": "577 Bath Avenue, Chelsea, Delaware, 8689"
              },
              {
                "_id": "63594109f8de5ba73b976f27",
                "age": 31,
                "name": "Chaney Moses",
                "address": "217 Dean Street, Mansfield, Georgia, 731"
              },
              {
                "_id": "635941098a7bd627a9b4cd99",
                "age": 35,
                "name": "Blackwell Brock",
                "address": "493 Whitney Avenue, Finzel, Guam, 3783"
              },
              {
                "_id": "63594109a23ca39c32e04811",
                "age": 26,
                "name": "Dotson Berry",
                "address": "561 Burnett Street, Springville, Connecticut, 4203"
              },
              {
                "_id": "63594109c845556f3d0e9ec6",
                "age": 51,
                "name": "Bush Morin",
                "address": "697 Dinsmore Place, Bentonville, Alaska, 3443"
              },
              {
                "_id": "6359410918eaccf41855ede6",
                "age": 25,
                "name": "Elisabeth Lambert",
                "address": "777 Newport Street, Beason, Massachusetts, 7811"
              },
              {
                "_id": "63594109a88fd930ac974f69",
                "age": 67,
                "name": "Holly Compton",
                "address": "261 Lawrence Avenue, Coaldale, Colorado, 7940"
              }
            ])


  return (

    <div>
{/*     
    {
        state.map(ele=>{
            return <li>{ele.email} {ele.address} {ele._id}</li>
        })
    } */}

    {/* {
        state.map(ele=>(
            <li>{ele.name}{ele.address} {ele._id}</li>
        ))
    } */}
    {
        state.map(ele=>(
           <div>
            <li>{ele.name}</li>
            <li>{ele.address}</li>
            <li>{ele._id}</li>
            </div>
        ))
    }
    </div>
  )
}

export default Multiple