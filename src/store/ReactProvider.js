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
    fetchHandler('https://www.breakingbadapi.com/api/characters')
    .then(recievedData=> setFetchedData(recievedData) )
    fetchHandler('https://www.breakingbadapi.com/api/quotes')
    .then(recievedData=> setFetchedQuotes(recievedData) )
    },[])
    const endingIndex = page*10
    const startingIndex = endingIndex-10
 
    const onPageSelected = pageSelected =>{
        setPage(Number.parseInt(pageSelected))
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