import React, {useState} from 'react'
import { tsPropertySignature } from '@babel/types'

export default (props) => {

    var znach;
    const [value, setValue] = useState('')

    const valueChangeHandler = event =>{
        setValue(event.target.value)
        console.log(event.target.value)
    }
    const value2ChangeHandler = event =>{
        znach=event.target.value
        console.log(znach)
    }

    return(
<div>
<div class="input-group mb-3 mt-3">
  <div class="input-group-prepend">
    <button class="btn btn-outline-secondary" type="button" onClick={()=> props.onVibor(znach)}>Choice</button>
  </div>
  <select class="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon" onClick={value2ChangeHandler}>
    <option selected>Choose...</option>
    <option value="userId">UserId</option>
    <option value="id">Id</option>
    <option value="title">Title</option>
    <option value="body">Body</option>
  </select>
</div>
    <div className="input-group mb-3 mt-3">
            <input 
            type="text" 
            className="form-control"
            value={value}
            onChange={valueChangeHandler}/>
            <div className="input-group-append">
                 <button 
                 className="btn btn-outline-secondary" 
                 id="button-addon2"
                 onClick={() => props.onSearch(value)}>Search</button>
            </div>
    </div>
        </div>
    )
}