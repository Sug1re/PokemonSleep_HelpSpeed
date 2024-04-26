import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center h-[14vh] bg-gray-900 ">
      <h1 className="text-4xl font-bold text-blue-700 ">
        おてスピチェック
      </h1>
      <div className='text-white'>
        Let’s check your Pokemon’s speed.
      </div>
    </header>
  )
}

export default Header