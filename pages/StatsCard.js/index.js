import React from 'react'
import StatsCard from "../../components/StatsCard"

const Components = () => {
  return (
    <div>
      <StatsCard 
        title="Get insights that help your business grow."
        description="Discover the benefits of data analytics and make better decisions regarding revenue, customer 
        experience, and overall efficiency."
        threeCol={
          ["10k+ companies","314 templates", "12mil+ queries"]
        }
        image="/images/image-header-desktop.jpg"/>
    </div>
  )
}

export default Components
