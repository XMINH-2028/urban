import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    componentDidMount() {
        const arr = document.querySelectorAll('footer .bi-arrow-down-short');
        arr.forEach((item,index) => {
            item.addEventListener('click',function() {
                if (index > 0) {
                    document.querySelectorAll('.contact_infor_item')[index-1].classList.toggle('ft_block');
                    item.classList.toggle('ft_rotate');
                }
            })
        })
    }
    contactInfor() {
        document.querySelector('.contact-infor').classList.toggle('ft_show');
        document.querySelector('#click-button').classList.toggle('ft_rotate');
    }
    render() {
        return (
            <footer>
                <div className="contact-email">
                    <h2>HÃY LIÊN HỆ VỚI CHÚNG TÔI!</h2>
                    <p>Luôn sẵn sáng hỗ trợ và tư vấn cho bạn để có sản phẩm tốt nhất.</p>
                    <div className="contact-email-in">
                        <input type="email" required placeholder="Nhập email của bạn" />
                        <button className="__btn">GỬI</button>
                    </div>
                </div>
                <div className="contact-intro">
                    <div className="contact-intro-1">    
                        <div className="contact-intro-1-left">
                            <img src="./images/icon-1.webp" alt="" />
                        </div>
                        <div className="contact-intro-1-right">
                            <h4>Giao hàng nhanh chóng</h4>
                            <p>Miễn phí với đơn hàng trên 3 triệu.</p>
                        </div>
                    </div>
                    <div className="contact-intro-2">
                        <div className="contact-intro-1-left">
                            <img src="./images/icon-2.webp" alt="" />
                        </div>
                        <div className="contact-intro-1-right">
                            <h4>Chính sách bảo hành</h4>
                            <p>Bảo hành 12 tháng, đổi trả 15 ngày.</p>
                        </div>
                    </div>
                    <div className="contact-intro-3">
                        <div className="contact-intro-1-left">
                            <img src="./images/icon-3.webp" alt="" />
                        </div>
                        <div className="contact-intro-1-right">
                            <h4>Hỗ trợ 24/7</h4>
                            <p>Với các kênh chat, email &amp; phone.</p>
                        </div>
                    </div>
                </div>
                <div className="button-hidden" onClick={()=>this.contactInfor()}>
                    <span>Thông tin khác</span> 
                    <span>
                        <div id="click-button">
                            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                            </svg>
                        </div>
                    </span>
                </div>
                <div className="contact-infor">
                    <div id="contact-hidden">
                        <div className="contact-infor-left">
                            <div className="contact-infor-1">
                                <h4 className="d-flex">Giới thiệu <span className="ml-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                    </svg></span></h4>
                                <div className="contact_infor_item">
                                    <p>Trang mua sắm trực tuyến nội thất mang phong cách việt, giúp bạn cập nhập và nắm bắt xu hướng mới</p>
                                    <img src="./images/icon-4.webp" alt="" className="mb-3" />
                                </div>
                            </div>
                            <div className="contact-infor-2">
                                <h4 className="d-flex">Liên kết <span className="ml-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                    </svg></span></h4>
                                <ul className="contact_infor_item">
                                    <li><a href="#">Tìm kiếm</a></li>
                                    <li><a href="#">Giới thiệu</a></li>
                                    <li><a href="#">Chính sách đổi trả</a></li>
                                    <li><a href="#">Chính sách bảo mật</a></li>
                                    <li><a href="#">Điều khoản dịch vụ</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-infor-right">
                            <div className="contact-infor-3">
                            <h4 className="d-flex">Thông tin liên hệ <span className="ml-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                </svg></span></h4>
                            <ul className="contact_infor_item">
                                <li>
                                    <div className="icon-contact">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </div>
                                    <div className="intro-contact">
                                        <span>Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.</span>
                                    </div>    
                                </li>
                                <li>
                                    <div className="icon-contact">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-telephone-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z" />
                                        </svg>
                                    </div>
                                    <div className="intro-contact">
                                        <span>1900.636.099</span>
                                    </div>    
                                </li>
                                <li>
                                    <div className="icon-contact">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-newspaper" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                                        <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                                        </svg>
                                    </div>
                                    <div className="intro-contact">
                                        <span>1900.636.099</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon-contact">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                        </svg>
                                    </div>
                                    <div className="intro-contact">
                                        <span>hi@haravan.com</span>
                                    </div>
                                </li>
                            </ul>
                            </div>
                            <div className="contact-infor-4">
                                <h4 className="d-flex">Fanpage<span className="ml-auto"><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-down-short" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z" />
                                    </svg></span></h4>
                                <iframe className="contact_infor_item" src="https://reach.org.vn/?lang=en" frameBorder={0} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-end">
                    <p className="mb-0">Copyright © 2020 Urban Home. Powered by Haravan</p>
                </div>
            </footer>
        );
    }
}

export default Footer;