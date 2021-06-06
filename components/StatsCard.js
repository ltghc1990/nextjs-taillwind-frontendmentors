import React from 'react'

const StatsCard = ({title, description, threeCol}) => {
  // all this to color the second word
 
  const arrayTitle = title.split(" ")
  const [firstWord, secondWord] = [arrayTitle[0], arrayTitle[1]]

  const colorSecondWord = <span className="text-indigo-500">{secondWord}</span>
 
  const restofTitle=arrayTitle.filter((title, index) => index > 1)
  const stringTitle = restofTitle.join(" ")

  return (
    <div className="bg-cardBg container mx-auto md:flex text-white items-center">
      <div className="md:w-1/2">
        <img className="w-full h-full object-cover" src="/images/image-header-desktop.jpg"></img>
      </div>
      <div className="px-10 py-8 text-center md:w-1/2 md:text-left lg:p-20 xl:p-32">
        <h1 className="text-3xl text-gray-100 font-bold mb-4 lg:text-4xl">{firstWord} {colorSecondWord} {stringTitle}</h1>
        <p className="py-4 mb-6 text-gray-400">{description}</p>
        <div className="flex flex-col items-center md:flex-row">
          <div className="w-2/6 py-3" >
            <p className="text-xl font-bold">{threeCol[0]}</p>
            <p className="text-gray-400 uppercase text-xs"></p>
          </div>
          <div className="w-2/6 py-3">
            <p className="text-xl font-bold">314</p>
            <p className="text-gray-400 uppercase text-xs">templates</p>
          </div>
          <div className="w-2/6 py-3">
            <p className="text-xl font-bold">12m+</p>
            <p className="text-gray-400 uppercase text-xs">queries</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatsCard
