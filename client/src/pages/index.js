// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import { useEffect, useState } from 'react'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavBar from '@/components/Navbar/index'
import Card from '@/components/Card/index'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // const [productsList, setProductsList] = useState([])
  // const [age, setAge] = useState(34)
  
  // const fetchAllProducts = async( ) => {
  //   const res = await fetch('http://localhost:8080/products')
  //   const data = await res.json()
  //   setProductsList(data.productsList)
  // }
  // useEffect(() => {
  //   fetchAllProducts()
  // }, [])

  return (
    <div>
      <NavBar />
    <h1 className="pro-head">LATEST PRODUCTS:</h1>

    <Card />



     {/* {
      productsList.length> 0 ? (
        <div className='Products'>
          {productsList.map((item) => (
          <div className='card'>
            <Image src="/brake-disk.jpg" width={170} height={190} alt='product image' />
            {item.productName}
            {item.productPrice}
            <ShoppingCartIcon onClick={() => alert(item._id)}/>
            </div>))}
        </div>
      ) : "loading"
     } */}


    </div>
  )
}

