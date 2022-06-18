import React from 'react'
import './shipinfo.scss'
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function Contact() {
    const onSubmit = (e) => {
e.preventDefault()
alert(" Thank you for your order ")

    };
    return (


        <div className='des'>
            <main>
                <div class="container">

                    <div class="row">
                        <div class="col-md-4 order-md-2 mb-4">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-muted">Your cart</span>
                                <span class="badge badge-secondary badge-pill">3</span>
                            </h4>
                            <ul class="list-group mb-3">
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 class="my-0">Product name</h6>
                                        <small class="text-muted">Brief description</small>
                                    </div>
                                    <span class="text-muted">$12</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 class="my-0">Second product</h6>
                                        <small class="text-muted">Brief description</small>
                                    </div>
                                    <span class="text-muted">$8</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between lh-condensed">
                                    <div>
                                        <h6 class="my-0">Third item</h6>
                                        <small class="text-muted">Brief description</small>
                                    </div>
                                    <span class="text-muted">$5</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between bg-light">
                                    <div class="text-success">
                                        <h6 class="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span class="text-success">-$5</span>
                                </li>
                                <li class="list-group-item d-flex justify-content-between">
                                    <span>Total (USD)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>

                            <form class="card p-2">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Promo code" />
                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-secondary">Redeem</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6 order-md-1">
                            <h4 class="mb-3">Billing address</h4>

                            <form onSubmit={(onSubmit)} >



                                <div class="row g-2">

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            name="email"
                                            type="text"

                                        />
                                    </div>

                                    <p>Shipping address</p>



                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="floatingInputGrid" placeholder="Country/region" required />


                                        <label for="floatingSelectGrid">Country/region</label>
                                    </div>
                                    <div className="form-group">
                                        <label>Full Name</label>
                                        <input
                                            name="fullname"
                                            type="text"

                                        />

                                        <br />
                                        <br />

                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <div class="col-md">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputGrid" placeholder="Last name" required />
                                            <label for="floatingInputGrid">Last name</label>
                                        </div>
                                    </div>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="address" id="floatingTextarea" required></textarea>
                                        <label for="floatingTextarea">Address</label>
                                    </div>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Address" id="floatingTextarea" required></textarea>
                                        <label for="floatingTextarea">Address</label>
                                    </div>
                                    <div class="col-md">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="floatingInputGrid" placeholder="City" required />
                                            <label for="City"> City</label>
                                        </div>
                                    </div>
                                    <div class="col-md">
                                        <div class="form-floating">
                                            <input type="number" class="form-control" id="floatingInputGrid" placeholder="Postal code " required />
                                            <label for="floatingInputGrid">Postal code </label>
                                        </div>
                                    </div>
                                    <div class="form-floating">
                                        <textarea class="form-control" placeholder="Phonee" id="floatingTextarea" required></textarea>
                                        <label for="Phone">Phone</label>
                                    </div>


                                </div>

                                <hr class="mb-4" />

                                <h4 class="mb-3">Payment</h4>



                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="cc-name">Name on card</label>
                                        <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                        <small class="text-muted">Full name as displayed on card</small>
                                        <div class="invalid-feedback">
                                            Name on card is required
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="cc-number">Credit card number</label>
                                        <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-3 mb-3">
                                        <label for="cc-expiration">Expiration</label>
                                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Expiration date required
                                        </div>
                                    </div>
                                    <div class="col-md-3 mb-3">
                                        <label for="cc-cvv">CVV</label>
                                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                        <div class="invalid-feedback">
                                            Security code required
                                        </div>
                                    </div>
                                </div>
                                <hr class="mb-4" />

                                <Button type="submit" class="btn btn-primary px-4 py-2 ">Continue to checkout
                                </Button>
                                <Link to='/product ' class="btn  ms-2 px-3 py-2 ">Return to Shopping</Link>


                            </form>
                        </div>
                    </div>


                </div>
            </main>
        </div>

    );
}
