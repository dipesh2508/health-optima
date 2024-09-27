import React from 'react'

const BorderBox = ({children}:{children:string}) => {
  return (
    <div className='border-purple-400 rounded-md border p-2 text-sm font-medium'>
      {children}
    </div>
  )
}

export default BorderBox
