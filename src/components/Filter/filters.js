import { Fragment,useRef } from "react"
import Input from '../../store/input'

const Filters = props =>{
    const inputValue = useRef()

    const inputFnHandler =() =>{
        console.log(inputValue.current.value)
        props.onInputValueChange(inputValue.current.value)
    }
    return(<Fragment>
          <Input package={{type:'text' }} onChange={inputFnHandler} ref={inputValue} />
    </Fragment>)
}

export default Filters