import Router from "next/router";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useDispatch } from "react-redux";
import { apartmentActions } from "../store/apartmentSlice";

const autoComplete = () => {
  const router = useRouter();
  const dispatch = useDispatch()    

  const [ details, setDetails ] = useState("")
  
  async function loadData() {
    let response
    let data
    try{
      response = await fetch(`https://apartment-7e5fd-default-rtdb.firebaseio.com/submissions.json`,{
        method: "GET",     
        headers: {
          'Content-Type': 'application/json',
          },
      })
      data = await response.json()
      const apartment_details = []
      for (const key in data){  
        apartment_details.push({
           email:  data[key].email,
           firstname: data[key].firstname,
           lastname: data[key].lastname,
           phone: data[key].phone,
           proof: data[key].proof,
           date: data[key].date
        })
    }

// setDetails(data)
      setDetails(apartment_details)
    } catch (error){
        // console.log(error)
      return
    }

  }

  useEffect(() => {
    loadData()
}, [])



    const states = [
        {
          id: 0,
          name: 'Abaji'
        },
        {
          id: 1,
          name: 'Apo Resettlement'
        },
        {
          id: 2,
          name: 'Dutse'
        },
        {
          id: 3,
          name: 'Gwarinpa'
        },
        {
          id: 4,
          name: 'Zuba'
        },
        {
          id: 5,
          name: 'Durumi'
        },
        {
          id: 6,
          name: 'Garki'
        },
        {
          id: 7,
          name: 'Nyanya'
        },
        {
          id: 8,
          name: 'Gudu'
        },
        {
          id: 9,
          name: 'Guzape'
        },
        {
          id: 10,
          name: 'Wumba'
        },
        {
          id: 11,
          name: 'Lokogoma'
        },
        {
          id: 12,
          name: 'Lugbe'
        },
        {
          id: 13,
          name: 'Gwarinpa'
        },
        {
          id: 14,
          name: 'Kado'
        },
        {
          id: 15,
          name: 'Orozo'
        },
        {
          id: 16,
          name: 'Mabushi'
        }
      ]

      const handleOnSearch = (string, results) => {
        console.log(details)
        // console.log(string, results)
      }
    
      const handleOnHover = (result) => {
        // the item hovered
        // console.log(result)
      }
    
      const handleOnSelect = (item) => {
        console.log(item)
        // the item selected
        dispatch(apartmentActions.add(
          {
            'firstname':item.name,
            'lastname':item.name,
            'email':item.name,
            'phone':item.name,
            'proof':item.name,
            'date':item.name,
            'proof':"https://res.cloudinary.com/dmiiu0273/image/upload/v1697376171/d91gsaqbdtucqtwqvtx6.svg"
          }
          )) 
      }
    
      const handleOnFocus = () => {
        // console.log('Focused')
      }
    
      const formatResult = (item) => {
        console.log("item", item)
        return (
          <>
            <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
          </>
        )
      }
// console.log("details", details)
// console.log("states", states)
    
      return (
        <div className="App">
          <header className="App-header">
            <div style={{ width: 380 }}>
              <ReactSearchAutocomplete
               styling={{
                fontFamily: "Avenir Next,Avenir,Segoe UI,Roboto,Helvetica Neue,Helvetica,Arial,sans-serif",
              
                }}
                placeholder="Search"
                items={details}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
              />
            </div>
          </header>
        </div>
      )
}

export default autoComplete