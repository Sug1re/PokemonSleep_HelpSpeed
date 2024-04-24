import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center h-[20vh] bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-blue-950 dark:text-gray-100">
        おてスピチェック
      </h1>
      <div>
        Let’s check your Pokemon’s speed.
      </div>
    </header>
  )
}

export default Header