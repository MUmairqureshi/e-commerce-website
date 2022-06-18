
import home from './logo.svg'

import { Product } from '../product/product'


export function Home() {

  return (
    <div >

      <div className="container justify-content-center mx-auto   py-3">
        <div className=" mx-auto justify-content-center row py-5 " >
          <br />
          <div className="col-md-5  py-5">

            <h2 className="h2 col-sm-20 display-3 " > <b>  Superpowers Lorem Ipsum is simply dummy </b> </h2>
            <p className="lead-l p  "> <b>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</b>
            </p>
          </div>

          <div className="col-md-6">
            <img className=" mx-auto " src={home} height="450px" />
          </div>
        </div>
      </div>
      <Product />

    </div>
  );
}

