import React from 'react'
import './alert.css'

 export default function Alert(props) {
  return (
     props.alert && <>
 <div className="my-0 alert alert-success alert-dismissible fade show" role="alert">
  <strong>Success!</strong> {props.alert}
</div>
    </>
  )
}
