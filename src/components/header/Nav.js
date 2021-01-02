import React, { Component } from 'react';
import './Header.css';
import {BrowserRouter as Router,Switch,Route,NavLink} from "react-router-dom";

class Nav extends Component {
    componentDidMount() {
        setInterval(()=>{
            this.navActiveBegin.bind(this)();
        })
      
    }
    navActiveBegin() {
        const arr = document.querySelectorAll('.menu__item > .active');
        if (arr.length === 1) {
            document.querySelectorAll('.menu__item > .active')[0].classList.add('nav_active');
        } else {
            document.querySelectorAll('.menu__item > .active')[0].classList.remove('nav_active');
            document.querySelectorAll('.menu__item > .active')[1].classList.add('nav_active');
        }
    }
   
    render() {
        
        return (
            <div className="nav">
                {/*menu dropdown*/}
                <div className="menu__nav">
                    <ul className="menu d-flex mb-0 p-0">
                        <li className="menu__item pl-0">
                            <NavLink to="/">Trang chủ  
                                 <i className="fas fa-angle-down ml-1" /></NavLink>
                            <ul className="dropdown__menu">
                                <li className="dropdown__item">Kiểu hiển thị Header 1</li>
                                <li className="dropdown__item">Kiểu hiển thị Header 2</li>
                                <li className="dropdown__item">Kiểu hiển thị Header 3</li>
                            </ul>
                        </li>
                        <li className="menu__item"><NavLink to="/san-pham">
                            Sản phẩm <i className="fas fa-angle-down" /></NavLink>
                            <ul className="dropdown__menu">
                                <li className="dropdown__item">Sản phẩm khuyến mãi </li>
                                <li className="dropdown__item">Nội thất phòng khách</li>
                                <li className="dropdown__item d-flex justify-content-between align-items-center">Nội thất phòng ngủ <i className="fas fa-angle-right" /></li>
                                <li className="dropdown__item">Phụ kiện trang trí</li>
                            </ul>
                        </li>
                        <li className="menu__item"><a href="#">Product Preview <i className="fas fa-angle-down" /></a>
                            <ul className="dropdown__menu">
                                <li className="dropdown__item">Product view 01</li>
                                <li className="dropdown__item">Product view 02</li>
                                <li className="dropdown__item">Product view 03</li>
                            </ul>
                        </li>
                        <li className="menu__item"><NavLink to="/tin-tuc">Blog</NavLink></li>
                        <li className="menu__item"><NavLink to="/gioi-thieu">Giới thiệu</NavLink></li>
                        <li className="menu__item"><NavLink to="/lien-he">Liên hệ</NavLink></li>
                    </ul>
                </div>
                <div className="header__search-991">
                    <form>
                        <label htmlFor="search" />
                        <input type="text" id="search" name="search" placeholder="Tìm kiếm sản phẩm..." required />
                        <button type="submit"><svg width="1.2em" height="1.2em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z" />
                            <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                            </svg></button>
                    </form>
                </div>
                {/*menu hide */}
                <div className="menu__nav-hide">
                    <ul className="menu-hide">
                        <li className="menu__item-hide"><a href="#">TRANG CHỦ</a><i className="fas fa-angle-right" /></li>
                        <li className="menu__item-hide"><a href="#">SẢN PHẨM</a><i className="fas fa-angle-right" /></li>
                        <li className="menu__item-hide"><a href="#">PRODUCT PREVIEW</a><i className="fas fa-angle-right" /></li>
                        <li className="menu__item-hide"><a href="#">BLOG</a></li>
                        <li className="menu__item-hide"><a href="#">GIỚI THIỆU</a></li>
                        <li className="menu__item-hide"><a href="#">LIÊN HỆ</a></li>
                    </ul>
                    <ul className="menu-hide-tchu">
                        <li className="menu__item-hide"><a href="#"><i className="fas fa-angle-left" />&nbsp;&nbsp;&nbsp; QUAY VỀ</a></li>
                        <li className="menu__item-hide"><a href="#">Xem tất cả "Trang chủ"</a><i className="fas fa-angle-right" /></li>
                        <li className="menu__item-hide"><a href="#">- Kiểu hiển thị header 1</a></li>
                        <li className="menu__item-hide"><a href="#">- Kiểu hiển thị header 2</a></li>
                        <li className="menu__item-hide"><a href="#">- Kiểu hiển thị header 3</a></li>
                    </ul>
                    <ul className="menu-hide-product">
                        <li className="menu__item-hide"><a href="#"><i className="fas fa-angle-left" />&nbsp;&nbsp;&nbsp; QUAY VỀ</a></li>
                        <li className="menu__item-hide"><a href="#">Xem tất cả "Sản phẩm"</a><i className="fas fa-angle-right" /></li>
                        <li className="menu__item-hide"><a href="#">- Sản phẩm khuyến mãi</a></li>
                        <li className="menu__item-hide"><a href="#">- Nội thất phòng khách</a></li>
                        <li className="menu__item-hide"><a href="#">- Nội thất phòng ngủ <i className="fas fa-angle-right" /></a></li>
                        <li className="menu__item-hide"><a href="#">- Phụ kiện trang trí</a></li>
                    </ul>
                    <div className="menu__contact-hide">
                        <p>BẠN CẦN HỖ TRỢ? HÃY LIÊN HỆ CHÚNG TÔI QUA</p>
                        <div className="contact__phone"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                            </svg>&nbsp;&nbsp;&nbsp; <span>1900.325.345</span>
                        </div>
                        <div className="contact__mail">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-open" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z" />
                            </svg>&nbsp;&nbsp;&nbsp;&nbsp;<span>UrbanHome@gmail.com</span> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;