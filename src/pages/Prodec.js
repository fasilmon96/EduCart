import React, { Fragment } from 'react'
import { useSelector } from 'react-redux';


import Header from '../components/Header'
import Tabel from '../components/Tabel/Tabel'

function Product() {


  return (
   <Fragment>
      <Header/>
   <Tabel/>
   </Fragment>
  )
}

export default Product