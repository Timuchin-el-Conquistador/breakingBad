
import {useState} from 'react'
import ReactProvider from './store/ReactProvider'
import BreakingBadCharactersList from './components/characters/BreakingBadCharactersList'
import FilterBreakingBadCharacters from './components/Filter/filterBreakingBadCharacters'


function App() {
  const [inputValue, setInputValue] = useState('')
  const filterCharacterByName = onFilterCharactersByName =>{
    setInputValue(onFilterCharactersByName)
  }
  

 return (
  <ReactProvider>
      <FilterBreakingBadCharacters onFilterCharactersByName={filterCharacterByName}/>
      <BreakingBadCharactersList onNameInputChange ={inputValue}/>
      
  </ReactProvider>
  );
}

export default App;
