import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import "./Layout.css"
import "bootstrap"
import { Link, Outlet } from "react-router-dom"
import { NavBar } from "./NavBar"
import { SearchBox } from "./"
import { useDispatch, useSelector } from "react-redux"
import { clearStorage, fromStorage, isEmpty, isString } from "../lib"
import { clearUser, setUser } from "../store"
import { useEffect, useState } from "react"
import http from "../http"

export const Layout = () => {

    const [qty, setQty] = useState(0)
    const [total, setTotal] = useState(0)

    const user = useSelector(st => st.user.value)
    const cart = useSelector(st => st.cart.value)

    const dispatch = useDispatch()

    useEffect(() => {
        if(isEmpty(user)){
            const token = fromStorage('user_token')

            if(!isEmpty(token)) {
                http.get('profile/details')
                    .then(({data}) => {
                        dispatch(setUser(data))
                    })
                    .catch(err => {
                        clearStorage('user_token')
                    })
            }
        }
    }, [user])

    useEffect(() => {
        if(Object.keys(cart).length){
            let qt = 0, tl = 0

            for(let k in cart){
                qt += isString(cart[k].qty) ? parseInt(cart[k].qty) : cart[k].qty
                tl += cart[k].qty * (isEmpty(cart[k].product.
                discounted_price) ? cart[k].product.price : cart[k].product.
                discounted_price)
            }

            setQty(qt)
            setTotal(tl)
        }else{
            setQty(0)
            setTotal(0)
        }
    }, [cart])

    const handleLogout = (ev) => {
        ev.preventDefault()
        
        dispatch(clearUser())
        clearStorage('user_token')
    }

    return <div className="container-fluid">

        <div className="row min-vh-100">
            <div className="col-12">
                <header className="row">
                    <div className="col-12 bg-dark py-2 d-md-block d-none">
                        <div className="row">
                            <div className="col-auto me-auto">
                                <ul className="top-nav">
                                    <li>
                                        <a href="#"><i className="fa fa-phone-square me-2"></i>+123-456-7890</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa fa-envelope me-2"></i>mail@carshopecommerce.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-auto">
                                {isEmpty(user) ? 
                                <ul className="top-nav">
                                    <li>
                                        <Link to="/register"><i className="fas fa-user-edit me-2"></i>Register</Link>
                                    </li>
                                    <li>
                                        <Link to="/login"><i className="fas fa-sign-in-alt me-2"></i>Login</Link>
                                    </li>
                                </ul>: 
                                <ul className="top-nav">
                                    <li>
                                        <Link to="/profile"><i className="fas fa-user-circle me-2"></i>{user.name}</Link>
                                    </li>
                                    <li>
                                        <a href="#" onClick={handleLogout}><i className="fas fa-sign-in-alt me-2"></i>Logout</a>
                                    </li>
                                </ul>}
                            </div>
                        </div>
                    </div>

                    <div className="col-12 bg-white pt-4">
                        <div className="row">
                            <div className="col-lg-auto">
                                <div className="site-logo text-center text-lg-left">
                                <Link to="/" className="navbar-brand">
                                  Dhiraj Motors
                                </Link>
                                </div>
                            </div>
                            <div className="col-lg-5 mx-auto mt-4 mt-lg-0">
                                <SearchBox />   
                            </div>
                            <div className="col-lg-auto text-center text-lg-left header-item-holder">
                                
                                <Link to="/cart" className="header-item">
                                    <i className="fas fa-shopping-bag me-2">
                                        </i><span id="header-qty" className="me-3">
                                            {qty}</span>
                                    <i className="fas fa-money-bill-wave me-2"></i><span id="header-price">Rs. {total}</span>
                                </Link>
                            </div>
                        </div>

                        <NavBar />

                    </div>

                </header>
            </div>

            <Outlet />

            <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                minus expedita dicta assumenda distinctio ipsa iure, repellendus
                placeat blanditiis. Aliquam nisi dolorum laudantium nostrum
                minus doloribus tempora adipisci quisquam quaerat, reiciendis
                dignissimos ea excepturi quidem vel repellendus aperiam odio
                reprehenderit. Vero, est ex? Ex vel modi dicta ducimus placeat
                labore!
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/contacts">Contact Us</Link>
                </li>
                <li>
                  <Link to="termscon">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6 text-center text-sm-left">
              <div className="row">
                <div className="col-12 text-uppercase">
                  <h6>Newsletter</h6>
                </div>
                <div className="col-12">
                  <form action="#">
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your email..."
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <button className="btn btn-outline-light text-uppercase">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
        </div>

    </div>
}