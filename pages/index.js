import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import StatsCard from "../components/StatsCard"

export default function Home() {
  return (
    <div className="mx-auto">
       <h1 className="bg-blue-300">Hello World</h1>
       <div>
         <button className="btn">Click me!</button>
       </div>
       <StatsCard/>
    </div>
  )
}
