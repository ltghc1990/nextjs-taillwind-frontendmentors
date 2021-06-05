import React from 'react'

const StatsCard = () => {
  return (
    <div className="bg-cardBg container mx-auto md:flex text-white items-center">
      <div className="border-2 md:w-1/2">
        <img className="h-full w-full" src="/images/image-header-desktop.jpg"></img>
      </div>
      <div className="px-10 py-8 text-center md:w-1/2 md:text-left lg:p-20 xl:p-32 border-2">
        <h1 className="text-3xl text-gray-100 font-bold mb-4 lg:text-4xl">Get <span className="text-indigo-500">insights</span> that help your business grow.</h1>
        <p className="py-4 mb-6 text-gray-400">Discover the benefits of data analytics and make better decisions regarding revenue, customer 
  experience, and overall efficiency.</p>
        <div className="flex flex-col border-2 md:flex-row items-center">
          <div className="w-2/6 py-3" >
            <p className="text-xl font-bold">10k+</p>
            <p className="text-gray-400 uppercase text-xs">companies</p>
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
