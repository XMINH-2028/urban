import React, { Component } from 'react';
import './Blog.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Blog extends Component {
    render() {
        return (
            <div className="blog-main">
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb py-3">
                    <li className="breadcrumb-item"><Link to="/">Trang chủ</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Blog</li>
                </ol>
                </nav>
                <div className="blog-main-dflex">
                <div className="blog-main-left">
                    <div className="blog-main-content">
                    <h2>Tin tức</h2>
                    <div className="blog-content">
                        <div className="blog-main-content-left">
                        <a href="#"><img src="images/blog-1.webp" alt="Mua sofa giường mang cả thiên đường đến những căn hộ nhỏ" /></a>
                        </div>
                        <div className="blog-main-content-right">
                        <h4>Mua sofa giường mang cả thiên đường đến những căn hộ nhỏ</h4>
                        <span>Người viết: Khoa nguyễn / 22.05.2020</span>
                        <p>1- Sử dụng nội thất thông minh và tận dụng không gian để lưu trữ đồ đạc. Với một không gian chật hẹp thì điều đầu...</p>
                        </div>
                    </div>
                    <div className="blog-content">
                        <div className="blog-main-content-left">
                        <a href="#"><img src="images/blog-2.webp" alt="Những điều cần biết để lựa chọn bộ bàn ăn phù hợp với ngôi nhà bạn" /></a>
                        </div>
                        <div className="blog-main-content-right">
                        <h4>Những điều cần biết để lựa chọn bộ bàn ăn phù hợp với ngôi nhà bạn</h4>
                        <span>Người viết: Khoa nguyễn / 22.05.2020</span>
                        <p>1- Sử dụng nội thất thông minh và tận dụng không gian để lưu trữ đồ đạc. Với một không gian chật hẹp thì điều đầu...</p>
                        </div>
                    </div>
                    <div className="blog-content">
                        <div className="blog-main-content-left">
                        <a href="#"><img src="images/blog-3.webp" alt="Thiết kế nội thất chung cư đẹp cho đôi vợ chồng trẻ" /></a>
                        </div>
                        <div className="blog-main-content-right">
                        <h4>Thiết kế nội thất chung cư đẹp cho đôi vợ chồng trẻ</h4>
                        <span>Người viết: Khoa nguyễn / 22.05.2020</span>
                        <p>1- Sử dụng nội thất thông minh và tận dụng không gian để lưu trữ đồ đạc. Với một không gian chật hẹp thì điều đầu...</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="blog-main-right">
                    <div className="blog-main-news" id="blog-main-news">
                    <div className="blog-main-news-blog">
                        <h2>BÀI VIẾT MỚI NHẤT</h2>
                        <hr />
                        <div className="blog-news">
                        <div className="blog-news-left">
                            <div className="over-flow">
                            <a href="#"><img src="images/blog-1.webp" alt="Mua sofa giường mang cả thiên đường đến những căn hộ nhỏ" /></a>
                            </div>
                        </div>
                        <div className="blog-news-right">
                            <h4><a href="#">Mua sofa giường mang cả thiên đường đến những căn hộ nhỏ</a></h4>
                            <span>Khoa nguyễn 22.05.2020</span>
                        </div>
                        </div>
                        <div className="blog-news">
                        <div className="blog-news-left">
                            <div className="over-flow">
                            <a href="#"><img src="images/blog-2.webp" alt="Những điều cần biết để lựa chọn bộ bàn ăn phù hợp với ngôi nhà bạn" /></a>
                            </div>
                        </div>
                        <div className="blog-news-right">
                            <h4><a href="#">Những điều cần biết để lựa chọn bộ bàn ăn phù hợp với ngôi nhà bạn</a></h4>
                            <span>Khoa nguyễn 22.05.2020</span>
                        </div>
                        </div>
                        <div className="blog-news">
                        <div className="blog-news-left">
                            <div className="over-flow">
                            <a href="#"><img src="images/blog-3.webp" alt="Thiết kế nội thất chung cư đẹp cho đôi vợ chồng trẻ" /></a>
                            </div>
                        </div>
                        <div className="blog-news-right">
                            <h4><a href="#">Thiết kế nội thất chung cư đẹp cho đôi vợ chồng trẻ</a></h4>
                            <span>Khoa nguyễn 22.05.2020</span>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="blog-main-news-list">
                    <div className="blog-main-news-blog">
                        <h2 className="mb-4">DANH MỤC BLOG</h2>
                        <hr className="mb-0" />
                        <div className="blog-list-menu">
                            <ul>
                                <li className="list-border">
                                    <div className="blog-list-menu-left">
                                        <a href="#">Trang chủ</a>
                                    </div>
                                    <div className="blog-list-menu-right" id="list-1" data-toggle="collapse" data-target="#list-menu-1">
                                        <span><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                        </svg></span>
                                    </div>
                                    <div className="blog-list-hidden collapse" id="list-menu-1">
                                        <ul>
                                        <li><a href="#">Kiểu hiển thị header 1</a></li>
                                        <li><a href="#">Kiểu hiển thị header 2</a></li>
                                        <li><a href="#">Kiểu hiển thị header 3</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-border">
                                    <div className="blog-list-menu-left">
                                        <a href="#">Sản phẩm</a>
                                    </div>
                                    <div className="blog-list-menu-right" id="list-2" data-toggle="collapse" data-target="#list-menu-2">
                                        <span><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                        </svg></span>
                                    </div>
                                    <div className="blog-list-hidden collapse" id="list-menu-2">
                                        <ul>
                                        <li><a href="#">Sản phẩm khuyến mãi</a></li>
                                        <li><a href="#">Nội thất phòng khách</a></li>
                                        <li><a href="#">Nội thất phòng ngủ</a></li>
                                        <li><a href="#">Phụ kiện trang trí</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="list-border">
                                    <span className="blog-list-menu-left">
                                        <a href="#">Product view</a>
                                    </span>
                                    <div data-toggle="collapse" data-target="#list-menu-3">
                                        <span className="blog-list-menu-right" id="list-3"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                        </svg></span>
                                    </div>
                                    <ul className="blog-list-hidden collapse" id="list-menu-3">
                                        <li><a href="#">Product view 1</a></li>
                                        <li><a href="#">Product view 2</a></li>
                                        <li><a href="#">Product view 3</a></li>
                                    </ul>
                                </li>
                                <li className="blog-list-pad"><a href="#"><strong>Blog</strong></a></li>
                                <li className="blog-list-pad"><a href="#">Giới thiệu</a></li>
                                <li className="blog-list-pad"><a href="#">Liên hệ</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Blog;