import React from 'react'

const Alert = ({ alert }) => {
  //alert is from App.js -- with msg and type
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
      </div>
    )
  )
}

export default Alert
