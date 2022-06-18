import Skeleton from 'react-skeleton-loader';

import { Col } from "reactstrap"


import {  useEffect, useState } from 'react';


import './product.css'

import { Link } from 'react-router-dom'


export function Product() {


  const [prodstate, setProdstate] = useState([])
  const [filter, setFilter] = useState(prodstate)

  const [error, setError] = useState(null)
  const [isloaded, setLoaded] = useState(false)




  const componentMounted = true





  useEffect(() => {
    const getprod = async () => {
      setLoaded(true)
      const data = await fetch("https://fakestoreapi.com/products/")
      if (componentMounted) {
        setProdstate(await data.clone().json())
        setFilter(await data.json())
        setLoaded(false)
        console.log(filter)
      }
      return () => {
        componentMounted = false

      }
    }
    getprod();
  }, [])
  const Loading = () => {
    return (
      <>
        <div className='container my-5 py-5'>
          <div className="row">

            <div className="row justify-content-center">
              <div className='col-md-3'>
                <Skeleton height={350} />
              </div>
              <div className='col-md-3'> <Skeleton height={350} /></div>
              <div className='col-md-3'> <Skeleton height={350} /></div>
              <div className='col-md-3'> <Skeleton height={350} /></div>
            </div>
          </div>
        </div>
      </>
    )
  }

  console.log(prodstate)

  console.log(filter)



  const getproduct = (cat) => {
    const updateprod = prodstate.filter((x) => x.category === cat)
    setFilter(updateprod)
  }
  const Showproduct = () => {

    return (

      <div className='container my-5 py-5 '>
        <div className='row justify-content-center'>

          <div className="buttons d-flex justify-content-center mb-5 pb-5 g-0" >

          </div>

          <br />
          <br />
          <div className="row" >

            {filter.map((data) => {
              return (
                <Col lg="3"
                  md="4"
                  sm="6"
                  xs="6" >

                  <div className="product-item g-0">
                    <div className="pi-pic">
                      <img

                        alt=""
                        src={data.image}
                        className="lazyload g-0 w-70 " height="200px"
                      />
                    </div>
                    <Link to={`/product/${data.id}`} style={{ minHeight: "42px" }} className="d-flex align-items-center">
                      <div className="pi-text">

                        <h5>{data.title.substring(0, 12)}</h5>

                        <div className="ratings">

                        </div>
                        <div className="product-price">{data.price}</div>
                      </div>
                    </Link>
                  </div>

                </Col>)
            })}
 

          </div>
        </div>
      </div>

    )
  }
  return (
    <div>

      {isloaded ? <Loading /> : <Showproduct />}
    </div>

  )
}

