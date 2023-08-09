import { Inter } from 'next/font/google'
import NavBar from '@/components/Navbar/index'
import Card from '@/components/Card/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <div>
      <NavBar />
      <h1 className="pro-head">LATEST PRODUCTS:</h1>
      <Card />
    </div>
  )
}

