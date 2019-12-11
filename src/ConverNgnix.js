import React from 'react'

export default (props) => {
    
    return(
    <div>
         <p>location /{props.locat}</p>
          <p>proxy_pass {props.proxy}; </p>
          <p> proxy_set_header Accept-Encoding "";</p>
    </div>    
);
}