import { Fragment, useContext} from "react"
import Context from '../../store/Context'
import classes from './BreakingBadCharactersList.module.css'


const BreakingBadCharacters = (props) => {
    const recievedContext = useContext(Context)
    if(props.filterInputDat.length>0){   /*to filter list of characters based on input data*/
        recievedContext.list = recievedContext.list
        .filter(el => el.name.substr(0,props.filterInputDat.length).toLowerCase()===(props.filterInputDat.toLowerCase()))
       
    }
    
    console.log(recievedContext.quotes)
    console.log(recievedContext.list)
    
    const onQuotesButtonClicked = (event) =>{
        props.onQuoteButton(event.target.name.split(',')) /*to split button name attr into 2 items array*/
    }
    const items = <main className={`${classes.wrapper} ${props.state?classes.backdrop:''}`}>
        {recievedContext.list.map(el=> {return <section 
        className={classes.mainContainer}
        key={el.char_id}
        >
        
       <div className={classes.container}>
       <img src={el.img} alt={el.name} className={classes.charImages}/>
       <div className={classes.subContainer}>
       <h1>{el.name}</h1>
       <label htmlFor='birthday'style={{fontWeight:'bold'}}>Date of Birth: </label>
       <p id='birthday'>{el.birthday}</p>
       <label htmlFor='occupation'style={{fontWeight:'bold'}}>occupations: </label>
       <ul className={classes.occupationLists} id='occupations'>
        {el.occupation.map(elem=> <li>{elem}</li>)}
       </ul>
       <label htmlFor='status'style={{fontWeight:'bold'}}>status: </label>
       <p id='status'>{el.status}</p>
       <label htmlFor='nickname'style={{fontWeight:'bold'}}>nickname: </label>
       <p id='nickname'>{el.nickname}</p>
       <label htmlFor='portrayed'style={{fontWeight:'bold'}}>portrayed: </label>
       <p id='portrayed'>{el.portrayed}</p>
       <label htmlFor='appearance'style={{fontWeight:'bold'}}>appearance: </label>
       <p id='appearance'>{`${Math.min(...el.appearance)}-${Math.max(...el.appearance)}`}</p>
       <button name={[el.name,el.nickname]} type='button' 
       onClick={onQuotesButtonClicked}
       className={classes.quoteButton}
       >Quotes</button>
       </div>
       </div>
       

        </section>
      })
      }
     </main>
   return(
       <Fragment>
           {items}
       </Fragment>
   )
}

export default BreakingBadCharacters