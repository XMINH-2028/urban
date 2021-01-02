import React, { Component } from 'react';
import '../blog/Blog.css'

class Intro extends Component {
    render() {
        return (
            <div className="blog-main">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Giới thiệu</li>
                    </ol>
                </nav>
                <div className="blog-main-dflex">
                    <div className="blog-main-left">
                    <div className="info-main-content">
                        <h2>Giới thiệu</h2>
                        <p>Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.</p>
                        <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
                        <div className="list-content">
                        <ul>
                            <li>Bạn là ai</li>
                            <li>Giá trị kinh doanh của bạn là gì</li>
                            <li>Địa chỉ cửa hàng</li>
                            <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                            <li>Bạn kinh doanh ngành hàng online được bao lâu</li>
                            <li>Đội ngũ của bạn gồm những ai</li>
                            <li>Thông tin liên hệ</li>
                            <li>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</li>
                        </ul>
                        </div>
                        <p>Bạn có thể chỉnh sửa hoặc xoá bài viết này tại <a href="#">đây</a> hoặc thêm những bài viết mới trong phần quản lý <a href="#">Trang nội dung</a>.</p>
                    </div>
                    </div>
                    <div className="blog-main-right">
                        <div className="page-stick">
                            <div className="menu-group">
                            <h2>Danh mục trang</h2>
                            <ul className="menulist">
                                <li className="menulist-border"><a href="#"><span>Tìm kiếm</span></a></li>
                                <li className="menulist-border dam"><a href="#"><span>Giới thiệu</span></a></li>
                                <li className="menulist-border"><a href="#"><span>Chính sách đổi trả</span></a></li>
                                <li className="menulist-border"><a href="#"><span>Chính sách bảo mật</span></a></li>
                                <li><a href="#"> Điều khoản dịch vụ</a></li>
                            </ul>
                            </div>
                        </div>    
                        <div className="page-stick-banner">
                            <a href="#">
                            <img src="./images/contact-1.webp" className="w-100" />
                            </a>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Intro;