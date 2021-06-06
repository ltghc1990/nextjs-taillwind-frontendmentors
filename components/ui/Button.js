import React from 'react'
import Link from "next/link"

const Button = (props) => {
  if(props.link){
    return (
      <Link href={props.link}>
        <a {...props}>{props.children}</a>
      </Link>
    )
  } else {
    return(
      <button {...props}>{props.children}</button>
    )
  }
   
}

export default Button
