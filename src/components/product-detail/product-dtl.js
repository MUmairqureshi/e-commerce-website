import './PdDetails.scss'
import { Link } from 'react-router-dom'
import Skeleton from 'react-skeleton-loader';
import { useParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { Add } from '../hooks/redux'
import { useDispatch } from 'react-redux'

export function Productdtl() {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)

    const { id } = useParams()
    const dispatch = useDispatch()



    let componentMounted = true
    useEffect(() => {
        const getproduct = async () => {
            setLoading(true)
            const data = await fetch(`https://fakestoreapi.com/products/${id}`)


            if (componentMounted) {
                setProduct(await data.json())
                setLoading(false)
            }
            return () => {
                componentMounted = false
            }
        }
        getproduct()
    }, [])

    const Loading = () => {
        return (
            <>
                <div className='col-md-3'> <Skeleton height={350} /></div>
            </>
        )
    }

    const Product = () => {
        return (
            <div >
                <br />

                <div class="row g-0">
                    <div class="col-md-6">
                        <img src={product.image} className="pict w-100" height="400px" alt="..." />
                    </div>
                    <div class="des col-md-6 ">
                        <div class=" card-body">
                            <p class="h5 text-uppercase   text-black-50">{product.category}</p>
                            <h5 class="card-title display-5">{product.title}</h5>
                            <p class="card-text lead  fw-bolder">Rating  {product.rating && product.rating.rate}</p>
                            <h3 class="card-text display-6  my-4">Rs:{product.price}</h3>
                            <p class="lead">   {product.description}</p>
                            <Link to='/card ' onClick={() => dispatch(Add(product))} class="btn btn-outline-dark px-4 py-2 ">ADD TO CART
                            </Link>
                            <Link to='/card ' class="btn btn-dark ms-2 px-3 py-2 ">Go somewhere</Link>
                        </div>
                    </div>
                </div>



            </div>
        )
    }

    return (

        <div>
            {loading ? <Loading /> : <Product />}
        </div>

    );
}
