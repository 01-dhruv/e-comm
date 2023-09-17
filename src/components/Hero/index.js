import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products/1')
        const data = await response.json()
        console.log(data)
        setProducts(data)
      }
      fetchProducts()
  }, [])

  return (

    <section className="text-gray-600 body-font">
  <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-4 ml-10'> Top Product</h1>
  <div className="container mx-auto flex px-5 py-1 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-1 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{products.title}</h1>
      <p className="mb-8 leading-relaxed">{products.description}</p>
      <div className="flex justify-center">
        <Link to={'products/1'} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">View</Link>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-contain max-h-[400px] object-center rounded " alt="hero" src={products.image}/>
    </div>
  </div>
</section>


    )
}

export default Hero