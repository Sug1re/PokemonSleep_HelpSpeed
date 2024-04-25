import React from 'react'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center h-[20vh] bg-gray-300 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-blue-950 dark:text-blue-900">
        おてスピチェック
      </h1>
      <div>
        Let’s check your Pokemon’s speed.
      </div>
    </header>
  )
}

export default Header