import React, { Fragment } from 'react'
import Header from '../components/Header'
import Product from '../components/Productcontainer/Product'
import Search from '../components/Search/Search'

function Home() {
  return (
   <Fragment>
     <Header/>
     <Search />
     <Product/>
   </Fragment>
  )
}

export default Home