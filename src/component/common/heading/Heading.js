import React from 'react'

const Heading = ({title,subtitle}) => {
  return (
    <>
        <div className="heading">
        <h4>{title}</h4>
        <h2>{subtitle}</h2>
      </div>
    </>
  )
}

export default Heading