import { Fragment,useState } from "react"
import FilterWindow from './filterWindow'
import Filters from './filters'

const FilterBreakingBadCharacters = props =>{
    const [ThisFilterState, SetFilterState] = useState(false)

    const filterWindowOpen = state =>{
        SetFilterState(state)
    }
    const inputValue = onInputValueChange => {
         props.onFilterCharactersByName(onInputValueChange)
    }
    return(
    <Fragment>
         <header>
             {!ThisFilterState && <FilterWindow state={filterWindowOpen}/>}
             {ThisFilterState && <Filters onInputValueChange={inputValue}/>}
         </header>
    </Fragment>
    )
}

export default FilterBreakingBadCharacters