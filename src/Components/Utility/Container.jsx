import React from 'react'

const Container = (Children) => {
  return (
    <div className='container m-auto '>
      {Children}
    </div>
  )
}

export default Container
