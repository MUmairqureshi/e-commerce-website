import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Increment, Decrement, Remove } from '../hooks/redux'
import './card.scss'
export function Card() {
  const { counter } = useSelector((state) => state);



  const dispatch = useDispatch()

  return (
    <div className="des">
      <br />
      <main>


        <div class="basket">



          <div class="card">
            <div class="row">
              <div class="col-md-8 cart">
                <div class="title">
                  <div class="row">
                    <div class="col"><h4><b>Shopping Cart</b></h4></div>

                  </div>
                </div>
                {counter.map((counter, key) => {
                  return (


                    <div class="row border-top border-bottom">
                      <div class="row main align-items-center">
                        <div class="col-2"><img class="img-fluid" src={counter.image} /></div>
                        <div class="col">

                          <div class="row">{counter.title.substring(0, 10)} </div>

                        </div>

                        <div class="col">
                          {counter.qty > 1 ? <a class="border" onClick={() => dispatch(Decrement(counter))}>-</a> : " "}





                          <a href="#" class="border">{counter.qty}</a><a class="border" onClick={() => dispatch(Increment(counter))}>+</a>

                        </div>

                        <div class="col">&euro; {(counter.price) * (counter.qty)} </div>
                        <div class="col"> <button > <span class="close" onClick={() => dispatch(Remove(counter.id))}> <ClearIcon /></span> </button> </div>
                      </div>
                    </div>)
                })}


                <div class="back-to-shop"><Link to="/"><span class="text-muted">Back to shop <ArrowForwardIcon /></span></Link></div>
              </div>
              <div class="col-md-4 summary">
                <div><h5><b>Summary</b></h5></div>

                <div class="row">
                  <div class="col" >ITEMS {counter.length}</div>

                  <div class="col text-right">&euro; {counter.reduce((total, pro) => total += + (pro.price) * pro.qty, 0)}</div>
                </div>
                <form>
                  <p>SHIPPING</p>
                  <select><option class="text-muted">Standard-Delivery- &euro;5.00</option></select>
                  <p>GIVE CODE</p>
                  <input id="code" placeholder="Enter your code" />
                </form>
                <div class="row" >
                  <div class="col">TOTAL PRICE</div>
                  <div class="col text-right">&euro; {counter.reduce((total, pro) => total += 5.1 + (pro.price) * pro.qty, 0)}</div>
                </div>
                <br />
                <Link to="/contact" class="btn btn-dark ms-2 px-3 py-2 ">CHECKOUT</Link >
              </div>
            </div>

          </div>



















        </div>

      </main>

    </div>
  );
}






