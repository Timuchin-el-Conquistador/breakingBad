import { Fragment, useContext,useState} from "react"
import Context from '../../store/Context'
import classes from './BreakingBadCharactersList.module.css'
import BreakingBadCharacters from './BreakingBadCharacters'
const BreakingBadCharactersList = props =>{
    const recievedContext = useContext(Context)
    const [thisState,setState] = useState(false)
    const [thisAuthor, setAuthor] = useState({
        name:'',
        nickname:''
    })

    const onQuotesOpen = (name) =>{
        console.log(name)
        setAuthor(()=>{return{name:name[0],nickname:name[1]}})
        setState(true)
    }
    const closeQuoteWindow= () =>{
        setState(false)
    }

    return (
        <Fragment>
            {thisState && <div className={classes.quotes}>{
                recievedContext.quotes
                .map(el => el.author===thisAuthor.name||el.author.includes(thisAuthor.nickname)?<p>''{el.quote}''</p>:'')}
                <button className={classes.canselQuotes} onClick={closeQuoteWindow}>Close</button></div>}
            <BreakingBadCharacters onQuoteButton={onQuotesOpen} state={thisState} filterInputDat={props.onNameInputChange}/>
      
        </Fragment>
    )
}

export default BreakingBadCharactersList