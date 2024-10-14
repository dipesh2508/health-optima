import React from 'react'

const BorderBox = ({children}:{children:string}) => {
  return (
    <div className='border-purple-400 rounded-md border p-2 text-sm font-medium hover:bg-gradient-to-r from-primary-5 to-primary-2 hover:text-white hover:border-none text-primary-9'>
      {children}
    </div>
  )
}

export default BorderBox
