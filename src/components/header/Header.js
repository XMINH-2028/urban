import React, { Component } from 'react';
import './Header.css';
import {getOffset} from '../free_div/Images'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            count_login:0,
            count_cart:0
        };

    }
    
    componentDidMount() {
        window.addEventListener("click", this.closeLogin.bind(this));
        document.querySelector('.hotline_wrap').addEventListener('click',this.closeAll.bind(this));
        const arr = document.querySelectorAll('.menu__item');
        arr.forEach((item)=>{
            item.addEventListener('click',this.closeAll.bind(this));
        })
        
    }

    closeLogin(e) {
        if (e.target.classList.contains('bodymask')) {
            document.querySelector('.login').style.transform='scale(0)';
            document.querySelector('.bodymask').classList.remove('bodymask_show1');
            document.querySelector('.cart').style.transform='scale(0)';
        }
    }
    loginShow() {
        document.querySelector('.login').style.transform='scale(1)';
        document.querySelector('.cart').style.transform='scale(0)';
        document.querySelector('.bodymask').classList.add('bodymask_show1');
        let x = this.state.count_login;
        x = (x===0) ? 1:0
        this.setState({count_login:x,count_cart:0});
        if (x===1) {
            document.querySelector('.login').style.transform='scale(1)';
            document.querySelector('.cart').style.transform='scale(0)';
            document.querySelector('.bodymask').classList.add('bodymask_show1');
        } else {
            document.querySelector('.login').style.transform='scale(0)';
            document.querySelector('.bodymask').classList.remove('bodymask_show1');
        }

    }
    cartShow() {
        let x = this.state.count_cart;
        x = (x===0) ? 1:0
        this.setState({count_cart:x,count_login:0});
        if (x===1) {
            document.querySelector('.cart').style.transform='scale(1)';
            document.querySelector('.login').style.transform='scale(0)';
            document.querySelector('.bodymask').classList.add('bodymask_show1');
        } else {
            document.querySelector('.cart').style.transform='scale(0)';
            document.querySelector('.bodymask').classList.remove('bodymask_show1');
        }
        
    }
    closeAll() {
        document.querySelector('.login').style.transform='scale(0)';
        document.querySelector('.bodymask').classList.remove('bodymask_show1');
        document.querySelector('.cart').style.transform='scale(0)';
    }
    render() {
        
        return (
           
                <div className="header">
                    {/*header xanh ngọc trên cùng*/}
                    <div className="containter-fluid header__top">
                    <p className="mb-0">Trang mua hàng nội thất trực tuyến chính hãng!</p>
                    </div>
                    {/*HEADER - HÀNG CÓ LOGO*/}
                    <div className="header__middle ">
                        <div className="header__logo">Urban Home</div>
                        <div className="header__bars-icon"> 
                            <div className="bar1" />
                            <div className="bar2" />
                            <div className="bar3" />
                        </div>
                        <div className="header__search">
                            <input type="search" placeholder="Tìm kiếm sản phẩm..." />
                            <button className="btn btn-primary" type="submit"><i className="fas fa-search" /></button>
                        </div>
                        <div className="header__info">
                            <a href="tel:1900636099" className="hotline_wrap">
                                <div className="header__hotline">
                                    <div className="hotline__img"><img src="Images/hotline-icon.png" alt="" /></div>
                                    <div className="hotline__text">
                                        <p className="text-top">Hotline:</p>
                                        <p className="text-bot">1900.636.099</p>
                                    </div>
                                </div>
                            </a>
                            <div className="header__user" onClick={()=>this.loginShow()}>
                                <i className="far fa-user" />
                                <div className="user__text">
                                    <p className="text-top">Đăng nhập/ Đăng ký</p>
                                    <p className="text-bot">Tài khoản của tôi <i className="fas fa-angle-down" /></p>
                                </div>
                                <div className="login">
                                    <div className="login__title">
                                        <h3>ĐĂNG NHẬP TÀI KHOẢN</h3>
                                        <p>Nhập email và tài khoản của bạn</p>
                                    </div>
                                    <div className="login__input">
                                        <input type="text" placeholder="Email" />
                                        <input type="password" placeholder="Mật khẩu" required />
                                    </div>
                                    <div className="login__text">
                                        <p>This site is protected by reCAPCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service </a>apply</p>
                                    </div>
                                    <div className="button__submit">
                                        <button type="submit" className="btn btn-outline-primary">ĐĂNG NHẬP</button>
                                    </div>
                                    <div className="login__text text-center">
                                        <p>Khách hàng mới? <a href="#">Tạo tài khoản</a></p>
                                        <p>Quên mật khẩu? <a href="#">Khôi phục mật khẩu</a></p>
                                    </div>
                                </div>
                                <div className="change__password">
                                    <div className="login__title">
                                    <h3>KHÔI PHỤC MẬT KHẨU</h3>
                                    <p>Nhập email của bạn:</p>
                                    </div>
                                    <div className="login__input">
                                    <input type="email" placeholder="Email" required />
                                    </div>
                                    <div className="login__text">
                                    <p>This site is protected by reCAPCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service </a>apply</p>
                                    </div>
                                    <div className="button__submit">
                                    <button type="submit" className="btn btn-outline-primary">KHÔI PHỤC</button>
                                    </div>
                                    <div className="login__text text-center">
                                    <p>Bạn nhớ mật khẩu? <a href="#">Trở về đăng nhập</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="header__cart">
                                <div className="cart_wrap d-flex" onClick={()=>this.cartShow()}>
                                    <div className="cart__icon">
                                        <svg width="24px" height="24px" viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                        <div className="cart__quantity">0</div>
                                    </div>
                                    <div className="cart__text">Giỏ hàng</div>
                                </div>
                                <div className="cart">
                                    <div className="cart__title">
                                        <h1>GIỎ HÀNG</h1>
                                    </div>
                                    <div className="cart__product">
                                        <svg width="24px" height="24px" viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                        <p>Hiện chưa có sản phẩm</p>
                                    </div>
                                    <div className="cart__cost">
                                        <p>TỔNG TIỀN</p>
                                        <span>0đ</span>
                                    </div>
                                    <div className="button__submit d-flex justify-content-between">
                                        <button type="submit" className="btn btn-outline-primary">XEM GIỎ HÀNG</button>
                                        <button type="submit" className="btn btn-outline-primary ml-3">THANH TOÁN</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            
        );
    }
}

export default Header;