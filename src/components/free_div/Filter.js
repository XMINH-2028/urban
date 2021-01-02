import React, { Component } from 'react';
import './Filter.css'

class Filter extends Component {
    componentDidMount() {
        window.addEventListener("click", this.closeFilter.bind(this));
    }
    
    closeFilter(e) {
        if (e.target.classList.contains('bodymask')||e.target.classList.contains('filter_close')) {
            document.body.classList.remove('oh_y');
            document.querySelector('.filter').classList.remove('filter_show');
            document.querySelector('.bodymask').classList.remove('bodymask_show');
        }
    }
    render() {
        return (
            <div className="filter">
                <div className="filter_close" />
                <div className="layered px-3">
                    <div className="group-menu">
                        <div className="title_block layered_subtitle dropdown-filter">
                            <span>Danh mục sản phẩm</span>
                            <span className="icon-control">
                                <i className="fa fa-minus" />
                            </span>
                        </div>
                        <div className="layered-content">
                            <ul className="menuList-links">
                                <li>
                                    <a href="/collections/onsale" title="Sản phẩm khuyến mãi">
                                        <span>Sản phẩm khuyến mãi</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/collections/hot-products" title="Sản phẩm nổi bật">
                                        <span>Sản phẩm nổi bật</span>
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="/collections/all" title="Tất cả sản phẩm">
                                        <span>Tất cả sản phẩm</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="block_content">
                        <div className="group-filter" aria-expanded="true">
                            <div className="layered_subtitle dropdown-filter"><span>Thương hiệu</span><span className="icon-control"><i className="fa fa-minus" /></span></div>
                            <div className="layered-content bl-filter filter-brand">
                                <ul className="check-box-list">
                                    <li>
                                        <input type="checkbox" id="data-brand-p1" defaultValue="Khác" name="brand-filter" data-vendor="(vendor:product contains Khác)" />
                                        <label htmlFor="data-brand-p1">Khác</label>   
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group-filter" aria-expanded="true">
                            <div className="layered_subtitle dropdown-filter"><span>Giá sản phẩm</span><span className="icon-control"><i className="fa fa-minus" /></span></div>
                            <div className="layered-content bl-filter filter-price">
                                <ul className="check-box-list">
                                    <li>
                                        <input type="checkbox" id="p1" name="cc" data-price="(price:product<=500000)" />
                                        <label htmlFor="p1">
                                        <span>Dưới</span> 500,000₫
                                        </label>   
                                    </li>
                                    <li>
                                        <input type="checkbox" id="p2" name="cc" data-price="((price:product>500000)&&(price:product<=1000000))" />
                                        <label htmlFor="p2">
                                        500,000₫ - 1,000,000₫
                                        </label>   
                                    </li>
                                    <li>
                                        <input type="checkbox" id="p3" name="cc" data-price="((price:product>1000000)&&(price:product<=1500000))" />
                                        <label htmlFor="p3">
                                        1,000,000₫ - 1,500,000₫
                                        </label>   
                                    </li>
                                    <li>
                                        <input type="checkbox" id="p4" name="cc" data-price="((price:product>2000000)&&(price:product<=5000000))" />
                                        <label htmlFor="p4">
                                        2,000,000₫ - 5,000,000₫
                                        </label>   
                                    </li>
                                    <li>
                                        <input type="checkbox" id="p5" name="cc" data-price="(price:product>=5000000)" />
                                        <label htmlFor="p5">
                                        <span>Trên</span> 5,000,000₫
                                        </label>   
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="group-filter" aria-expanded="true">
                            <div className="layered_subtitle dropdown-filter"><span>Màu sắc</span><span className="icon-control"><i className="fa fa-minus" /></span></div>
                            <div className="layered-content filter-color s-filter">
                                <ul className="check-box-list">
                                    <li>
                                        <input type="checkbox" id="data-color-p1" defaultValue="Hồng" name="color-filter" data-color="(variant:product contains Hồng)" />
                                        <label title="hong" htmlFor="data-color-p1" style={{backgroundColor: '#ef5777'}}>Hồng</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p2" defaultValue="Vàng" name="color-filter" data-color="(variant:product contains Vàng)" />
                                        <label title="vang" htmlFor="data-color-p2" style={{backgroundColor: '#ffd32a'}}>Vàng</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p3" defaultValue="Xám" name="color-filter" data-color="(variant:product contains Xám)" />
                                        <label title="xam" htmlFor="data-color-p3" style={{backgroundColor: '#d2dae2'}}>Xám</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p4" defaultValue="Xanh" name="color-filter" data-color="(variant:product contains Xanh)" />
                                        <label title="xanh" htmlFor="data-color-p4" style={{backgroundColor: '#3c40c6'}}>Xanh</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p5" defaultValue="Xanh lá" name="color-filter" data-color="(variant:product contains Xanh lá)" />
                                        <label title="xanh-la" htmlFor="data-color-p5" style={{backgroundColor: '#0be881'}}>Xanh lá</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p6" defaultValue="Sen" name="color-filter" data-color="(variant:product contains Sen)" />
                                        <label title="sen" htmlFor="data-color-p6" style={{backgroundColor: '#f53b57'}}>Sen</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p7" defaultValue="Xanh biển" name="color-filter" data-color="(variant:product contains Xanh biển)" />
                                        <label title="xanh-bien" htmlFor="data-color-p7" style={{backgroundColor: '#0fbcf9'}}>Xanh biển</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p8" defaultValue="Đen" name="color-filter" data-color="(variant:product contains Đen)" />
                                        <label title="den" htmlFor="data-color-p8" style={{backgroundColor: '#000000'}}>Đen</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p9" defaultValue="Trắng" name="color-filter" data-color="(variant:product contains Trắng)" />
                                        <label title="trang" htmlFor="data-color-p9" style={{backgroundColor: '#ffffff'}}>Trắng</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p10" defaultValue="Đỏ" name="color-filter" data-color="(variant:product contains Đỏ)" />
                                        <label title="do" htmlFor="data-color-p10" style={{backgroundColor: '#ff3f34'}}>Đỏ</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p11" defaultValue="Tím" name="color-filter" data-color="(variant:product contains Tím)" />
                                        <label title="tim" htmlFor="data-color-p11" style={{backgroundColor: '#a55eea'}}>Tím</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p12" defaultValue="Pure Apple" name="color-filter" data-color="(variant:product contains Pure Apple)" />
                                        <label title="pure-apple" htmlFor="data-color-p12" style={{backgroundColor: '#a8cebf'}}>Pure Apple</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p13" defaultValue="Vàng sen" name="color-filter" data-color="(variant:product contains Vàng sen)" />
                                        <label title="vang-sen" htmlFor="data-color-p13" style={{backgroundColor: '#e5a81a'}}>Vàng sen</label>  
                                    </li>
                                    <li>
                                        <input type="checkbox" id="data-color-p14" defaultValue="Cam" name="color-filter" data-color="(variant:product contains Cam)" />
                                        <label title="cam" htmlFor="data-color-p14" style={{backgroundColor: '#fa8231'}}>Cam</label>  
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>          			
            </div>
        );
    }
}

export default Filter;