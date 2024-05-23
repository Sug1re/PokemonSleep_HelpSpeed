import { Link } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className=' bg-gray-900 p-4 mx-auto container flex flex-col items-center max-w-full'>
      <h1 className="text-4xl font-bold text-gray-400 ">
        おてスピチェック
      </h1>
      <div className='text-white'>
        Let’s check your Pokemon’s Speed.
      </div>
    </header>
  )
}

export default Header