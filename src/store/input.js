import React, {Fragment} from 'react'

const Input = React.forwardRef((props,ref) =>{
     /*creating custom input tag*/
    return(
        <Fragment>
            <input {...props.package} ref={ref} onChange={props.onChange}/> 
        </Fragment>
    )

})

export default Input