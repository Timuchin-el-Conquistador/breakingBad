import { Fragment } from "react"
import classes from'./Filtering.module.css'


const filterWindow = props =>{
    return(
        <Fragment>
           <div className={classes.container}>
            <button className={classes.filterOpen} onClick={props.state}>Filter Open</button>
           </div>
        </Fragment>
    )
}


export default filterWindow