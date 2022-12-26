import React from 'react'

const BaseLabel = ({ className, children }) => {
  return (
    <>
        { 
            <label className={className}>{ children }</label>
         }
        
    </>
  )
}

export default BaseLabel