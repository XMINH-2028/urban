import React, { Component } from 'react';
import classNames from 'classnames';
import './Allproduct.css';
import Product from '../product/Product';
import {product_export} from '../free_div/Images';
import {deepCopyFunction}  from '../free_div/Images';


class Allproduct extends Component {
    constructor(props) {
        super(props);
        this.state={
            mask:false,
            product:[],
            product_change:[]
        };
    }

    componentDidMount() {
        const product = deepCopyFunction(product_export());
        product.sort((a,b) => (this.change(a.name) > this.change(b.name)) ? 1 : ((this.change(a.name) < this.change(b.name)) ? -1 : 0));
        this.setState({product,product_change:deepCopyFunction(product_export())});
    }
    onMouseEnter(e,z) {
        const product = this.state.product_change;
        product[z].color[0].url0 = e.target.src;
        this.setState({product_change:product});
    }
    change(str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        return str;
    }
    random(x) {
        let random_array=[0];
        const [...arr]=[...x]
        for (let i=0;i<x.length;) {
            let k=0;  
            random_array[i] = Math.floor(Math.random() * (x.length));
            for (let j = 0; j < i; j++){
                if (random_array[i] === random_array[j]){
                    k = k + 1;
                }
            }
            if (k === 0){
                i = i + 1;
            }
        }
        random_array.forEach((item,index)=>{
            x[index] = arr[item];
        })
        return x;
    }
    sort(e) {
        const arr = this.state.product;
        if (e.target.value === 'Giá: Tăng dần') {
            arr.sort((a,b) => (a.price > b.price) ? 1 : ((a.price < b.price) ? -1 : 0));
        } else if (e.target.value === 'Giá: Giảm dần') {
            arr.sort((a,b) => (a.price < b.price) ? 1 : ((a.price > b.price) ? -1 : 0));
        } else if (e.target.value === 'Tên: A-Z') {
            arr.sort((a,b) => (this.change(a.name) > this.change(b.name)) ? 1 : ((this.change(a.name) < this.change(b.name)) ? -1 : 0));
        } else if (e.target.value === 'Tên: Z-A') {
            arr.sort((a,b) => (this.change(a.name) < this.change(b.name)) ? 1 : ((this.change(a.name) > this.change(b.name)) ? -1 : 0));
        } else {this.random(arr)}
        this.setState({product:deepCopyFunction(arr),product_change:deepCopyFunction(arr)})
        
    }
    filterShow() {
        document.body.classList.add('oh_y');
        document.querySelector('.filter').classList.add('filter_show');
        document.querySelector('.bodymask').classList.add('bodymask_show');
    }
    render() {
        return (
            <div className="allproduct">
                <div className="path_product">
                    <ol className="path_list m-0 py-3 px-0">
                        <li itemProp="path_item">
                            <a href="/" target="_self"><span>Trang chủ</span></a>
                            <span className="mx-2">/</span>		
                        </li>
                        <li itemProp="path_item">
                            <a href="/collections" target="_self">
                                <span itemProp="name">Danh mục</span>
                            </a>
                            <span className="mx-2">/</span>	
                        </li>
                        <li className="path_item">
                            <span itemProp="name">Tất cả sản phẩm</span>
                        </li>
                    </ol>
                </div>
                <div className="allpr_banner">
                    <img src="./images/pr_banner01.webp" className="w-100"></img>
                </div>
                <div className="allpr_title">
                    <div className="sort" onClick={()=>this.filterShow()}>
                        <i className="fa fa-sliders mr-1"></i>
                        <span>Bộ lọc</span>
                    </div>
                    <h3 className="text-center mb-lg-0"><a href='#' title='Sản phẩm mới'>Tất cả sản phẩm</a></h3>
                    <div className="quicksort">
                        <label className="quicksort_label" htmlFor="sort">
                            <i className="fa fa-sort-alpha-asc" aria-hidden="true" />
                        </label>
                        <select id="sort" className="border rounded" onChange={(e)=>this.sort(e)}>
                            <option value="Sản phẩm nổi bật">Sản phẩm nổi bật</option>
                            <option value="Giá: Tăng dần">Giá: Tăng dần</option>
                            <option value="Giá: Giảm dần">Giá: Giảm dần</option>
                            <option value="Tên: A-Z">Tên: A-Z</option>
                            <option value="Tên: Z-A">Tên: Z-A</option>
                            <option value="Cũ nhất">Cũ nhất</option>
                            <option value="Mới nhất" >Mới nhất</option>
                            <option value="Bán chạy nhất">Bán chạy nhất</option>
                        </select>
                    </div>
                </div>
                <div className="allpr_main">
                    <Product mask={this.state.mask} product={this.state.product} 
                        omouseenter={(e,z)=>this.onMouseEnter(e,z)} product_change={this.state.product_change}>12</Product>
                </div>
            </div>
        );
    }
}

export default Allproduct;