import React, {useState,useEffect} from 'react'
import Context from './Context'
import Pagination from '../components/pagination/pagination'



const ReactProvider = (props) =>{ 
    const [fetchedData,setFetchedData] = useState([])
    const [fetchedQuotes,setFetchedQuotes] = useState([])
    const [page,setPage] = useState(1)
    useEffect(()=>{
    async function  fetchHandler(url){     
        const repsonce = await fetch(url)
        return  await repsonce.json()
    }
    fetchHandler('https://www.breakingbadapi.com/api/characters')/*making two fetch requests for characters and quotes*/
    .then(recievedData=> setFetchedData(recievedData) )
    fetchHandler('https://www.breakingbadapi.com/api/quotes')
    .then(recievedData=> setFetchedQuotes(recievedData) )/*and storing in state the dat we recieved from api*/
    },[])
    const endingIndex = page*10 /*to create pagination i need to use slicing method and for that react must to define begining and ending index*/
    const startingIndex = endingIndex-10
 
    const onPageSelected = pageSelected =>{
        setPage(Number.parseInt(pageSelected)) /*recived data from button in pagination component and store in state*/
    }
  
    return (
       <Context.Provider value={{
            list:fetchedData.slice(startingIndex,endingIndex),
            quotes: fetchedQuotes,
            length:fetchedData.length,
            page:page
         
         }}>
           {props.children}
           <Pagination  pageSelected={onPageSelected}/> 
        </Context.Provider>
    )
    }
export default ReactProvider