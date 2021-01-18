import React, { Component } from 'react';
import classNames from 'classnames';
import './Home.css';
import Banner from './Banner';
import Underbanner from './Underbanner';
import {newproduct_export} from '../free_div/Images';
import {getScrollbarWidth} from '../free_div/Images';
import {news_export} from '../free_div/Images';
import Product from '../product/Product';
import {product_export} from '../free_div/Images';
import {deepCopyFunction}  from '../free_div/Images';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            newproduct:newproduct_export(),
            sale_mgLeft:'0px',
            news_mgLeft:'0px',
            count_click:0,
            condition:false,
            drag:0,
            count_drag:0,
            pos_start:0,
            pos_finish:0,
            mask:false,
            news:news_export(),
            product:[],
            product_change:[]
        };
    }
    
    componentDidMount() {
        const product = deepCopyFunction(product_export());
        const product_change = deepCopyFunction(product_export());
        product_change.sort((a,b) => (this.change(a.name) > this.change(b.name)) ? 1 : ((this.change(a.name) < this.change(b.name)) ? -1 : 0));
        product.sort((a,b) => (this.change(a.name) > this.change(b.name)) ? 1 : ((this.change(a.name) < this.change(b.name)) ? -1 : 0));
        this.setState({product,product_change});
        const $=document.querySelector.bind(document);
        window.addEventListener("resize", this.onResize.bind(this));
        $(".saleproduct_main").addEventListener("mousedown",this.dragStart.bind(this));
        $(".saleproduct_main").addEventListener("mousemove",this.dragAction.bind(this));
        $(".saleproduct_main").addEventListener("mouseenter",this.onSpEnter.bind(this));
        $(".saleproduct_main").addEventListener("mouseleave",this.onSpLeave.bind(this));
        $(".saleproduct_main").addEventListener("touchstart",this.dragStart.bind(this));
        $(".saleproduct_main").addEventListener("touchmove",this.dragAction.bind(this));
        $(".news_main").addEventListener("mousedown",this.dragBegin.bind(this));
        $(".news_main").addEventListener("mousemove",this.dragActive.bind(this));
        $(".news_main").addEventListener("touchstart",this.dragBegin.bind(this));
        $(".news_main").addEventListener("touchmove",this.dragActive.bind(this));
        
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
    
    onMouseEnter(e,z) {
        const product = this.state.product_change;
        product[z].color[0].url0 = e.target.src;
        this.setState({product_change:product});
    }
    
    rightClick() {
        this.setState({condition:false});
        const $$=document.querySelectorAll.bind(document);
        let number = this.state.count_click;
        number -= 1;
        if (window.innerWidth<=992 && (window.innerWidth>768)) {
            if (number === 2) {number = 1}
            this.setState({ count_click:number,
                            sale_mgLeft:`${-((window.innerWidth-30-getScrollbarWidth())/2-40)*number}px`});
        } else if (window.innerWidth<=768) {
            this.setState({ count_click:number,
                            sale_mgLeft:`${-(window.innerWidth-30-getScrollbarWidth()-50)*number}px`});
        }
        setTimeout(()=> {
            if (this.state.sale_mgLeft==='0px') {
                $$('.carousel-control-prev')[1].classList.remove('prev_opacity');
            } 
            if (window.innerWidth<=992 && (window.innerWidth>768)) {
                if (this.state.sale_mgLeft!==`${-((window.innerWidth-30-getScrollbarWidth())/2-40)*2}px`) {
                    $$('.carousel-control-next')[1].classList.add('next_opacity');
                }
            } else if (window.innerWidth<=768) {
                if (this.state.sale_mgLeft!==`${-(window.innerWidth-30-getScrollbarWidth()-50)*3}px`) {
                    $$('.carousel-control-next')[1].classList.add('next_opacity');
                }
            }    
        },1)
    }
    leftClick() {
        this.setState({condition:false});
        const $$=document.querySelectorAll.bind(document);
        let number = this.state.count_click;
        number += 1;
        if (window.innerWidth<=992 && (window.innerWidth>768)) {
            this.setState({ count_click:number,
                            sale_mgLeft:`${-((window.innerWidth-30-getScrollbarWidth())/2-40)*number}px`});
        } else if (window.innerWidth<=768) {
            this.setState({ count_click:number,
                            sale_mgLeft:`${-(window.innerWidth-30-getScrollbarWidth()-50)*number}px`});
        }
        setTimeout(()=> {
            if (window.innerWidth<=992 && (window.innerWidth>768)) {
                if (this.state.sale_mgLeft===`${-((window.innerWidth-30-getScrollbarWidth())/2-40)*2}px`) {
                    $$('.carousel-control-next')[1].classList.remove('next_opacity');
                } 
            } else if (window.innerWidth<=768) {
                if (this.state.sale_mgLeft===`${-(window.innerWidth-30-getScrollbarWidth()-50)*3}px`) {
                    $$('.carousel-control-next')[1].classList.remove('next_opacity');
                } 
            }
            if (this.state.sale_mgLeft!=='0px') {
                $$('.carousel-control-prev')[1].classList.add('prev_opacity');
            }
        },1)
    }
    onSpEnter() {
        const $$=document.querySelectorAll.bind(document);
        if (window.innerWidth<=992 && (window.innerWidth>768)) {
            if (this.state.sale_mgLeft!=='0px') {
                $$('.carousel-control-prev')[1].classList.add('prev_opacity');
            }
            if (this.state.sale_mgLeft!==`${-((window.innerWidth-30-getScrollbarWidth())/2-40)*2}px`) {
                $$('.carousel-control-next')[1].classList.add('next_opacity');
            }
        } else if (window.innerWidth<=768) {
            if (this.state.sale_mgLeft!=='0px') {
                $$('.carousel-control-prev')[1].classList.add('prev_opacity');
            }
            if (this.state.sale_mgLeft!==`${-(window.innerWidth-30-getScrollbarWidth()-50)*3}px`) {
                $$('.carousel-control-next')[1].classList.add('next_opacity');
            }
        }
    }
    onSpLeave() {
        const $$=document.querySelectorAll.bind(document);
        $$('.carousel-control-prev')[1].classList.remove('prev_opacity');
        $$('.carousel-control-next')[1].classList.remove('next_opacity');
    }
    dragStart(e) {
        e = e || window.event;
        if (window.innerWidth<=992) {
            if (!e.target.classList.contains('carousel_control_wrap')&&!e.target.classList.contains('carousel_control_next')&&
                !e.target.classList.contains('carousel_control_prev')) {
                if (e.type === 'touchstart'){
                    this.setState({drag:e.touches[0].clientX,condition:true,pos_start:e.touches[0].clientX});
                } else {
                    e.preventDefault();
                    this.setState({drag:e.clientX,condition:true,pos_start:e.clientX});
                }
                document.onmouseup = this.dragEnd.bind(this);
                document.ontouchend = this.dragEnd.bind(this);
                document.querySelector('.saleproduct').style.cursor='grab';
            }
        }
    }
    dragAction(e) {
        if (this.state.condition) {
            e = e || window.event;
            var x=0;    
            if (e.type === 'touchmove'){
                x=e.touches[0].clientX-this.state.drag;
                if (x!==0) {
                    this.setState({drag:e.touches[0].clientX,mask:true});
                }    
            } else {
                x=e.clientX-this.state.drag;
                if (x!==0) {
                    this.setState({drag:e.clientX,mask:true});
                }
            }
            if ((e.clientX >= 0 && e.clientX <= window.innerWidth)||
                (e.touches[0].clientX > 0 && e.touches[0].clientX <= window.innerWidth)) {
                this.setState({sale_mgLeft:`${parseFloat(this.state.sale_mgLeft)+x}px`});
            }
            document.querySelector('.saleproduct').style.cursor='grabbing';
        }
    }
    dragEnd(e) {
        if (this.state.condition) {
            if (e.type === 'touchend'){
                this.setState({pos_finish:this.state.drag});
            } else {
                this.setState({pos_finish:this.state.drag});
            }
            if (parseFloat(this.state.sale_mgLeft)>=0) {
                this.setState({sale_mgLeft:'0px',condition:false,count_click:0})
            } else {
                if (window.innerWidth<=992 && window.innerWidth>768) {
                    if (parseFloat(this.state.sale_mgLeft)<=-((window.innerWidth-30-getScrollbarWidth())/2-40)*2) {
                        this.setState({sale_mgLeft:`${-((window.innerWidth-30-getScrollbarWidth())/2-40)*2}px`,
                        condition:false,count_click:2});
                    } else {
                        if (this.state.pos_start>this.state.pos_finish) {
                            this.leftClick();
                        } else if (this.state.pos_start<this.state.pos_finish){
                            this.rightClick();  
                        }   
                    }
                } else {
                    if (parseFloat(this.state.sale_mgLeft)<=-(window.innerWidth-30-getScrollbarWidth()-50)*3) {
                        this.setState({sale_mgLeft:`${-(window.innerWidth-30-getScrollbarWidth()-50)*3}px`,
                        condition:false,count_click:3});
                    } else {
                        if (this.state.pos_start>this.state.pos_finish) {
                            this.leftClick();
                        } else if (this.state.pos_start<this.state.pos_finish){
                            this.rightClick();  
                        }   
                    }
                }
            }
            this.setState({mask:false});
            document.querySelector('.saleproduct').style.cursor='default';
        }
    }
    onResize() {
        if (window.innerWidth>992) {
            this.setState({sale_mgLeft:'0px',news_mgLeft:'0px'});
        } else if (window.innerWidth<=992 && window.innerWidth>768) {
            if (this.state.count_click===3){
            this.setState({sale_mgLeft:`${-((window.innerWidth-30-getScrollbarWidth())/2-40)*2}px`,news_mgLeft:'0px'});
            } else {
                this.setState({sale_mgLeft:`${-((window.innerWidth-30-
                                        getScrollbarWidth())/2-40)*this.state.count_click}px`,news_mgLeft:'0px'});
            }
        } else {
            this.setState({sale_mgLeft:`${-(window.innerWidth-30-getScrollbarWidth()-50)*this.state.count_click}px`});
            this.setState({news_mgLeft:`${-this.state.count_drag*(window.innerWidth-30-getScrollbarWidth()-40)}px`,condition:false});
        }
    }
    dragBegin(e) {
        e = e || window.event;
        if (window.innerWidth<=768) {
            if (e.type === 'touchstart'){
                this.setState({drag:e.touches[0].clientX,condition:true,pos_start:e.touches[0].clientX});
            } else {
                e.preventDefault();
                this.setState({drag:e.clientX,condition:true,pos_start:e.clientX});
            }
            document.onmouseup = this.dragFinish.bind(this);
            document.ontouchend = this.dragFinish.bind(this);
        }
    }
    dragActive(e) {
        if (this.state.condition) {
            e = e || window.event;
            var x=0;    
            if (e.type === 'touchmove'){
                x=e.touches[0].clientX-this.state.drag;
                if (x!==0) {
                    this.setState({drag:e.touches[0].clientX,mask:true});
                }    
            } else {
                x=e.clientX-this.state.drag;
                if (x!==0) {
                    this.setState({drag:e.clientX,mask:true});
                }
            }
            if ((e.clientX >= 0 && e.clientX <= window.innerWidth)||
                (e.touches[0].clientX > 0 && e.touches[0].clientX <= window.innerWidth)) {
                this.setState({news_mgLeft:`${parseFloat(this.state.news_mgLeft)+x}px`});
            }
            document.querySelector('.news').style.cursor='grabbing';
        }
    }
    dragFinish(e) {
        if (this.state.condition) {
            if (e.type === 'touchend'){
                this.setState({pos_finish:this.state.drag});
            } else {
                this.setState({pos_finish:this.state.drag});
            }
            if (parseFloat(this.state.news_mgLeft)>=0) {
                this.setState({news_mgLeft:'0px',condition:false,count_drag:0});
            } else if (parseFloat(this.state.news_mgLeft)>=-(window.innerWidth-30-getScrollbarWidth()-40)) {
                if (this.state.pos_start>this.state.pos_finish) {
                    this.setState({news_mgLeft:`${-(window.innerWidth-30-getScrollbarWidth()-40)}px`,condition:false,count_drag:1});
                } else if (this.state.pos_start<this.state.pos_finish) {
                    this.setState({news_mgLeft:'0px',condition:false,count_drag:0});
                }
            } else if (parseFloat(this.state.news_mgLeft)>=-2*(window.innerWidth-30-getScrollbarWidth()-40)) {
                if (this.state.pos_start>this.state.pos_finish) {
                    this.setState({news_mgLeft:`${-2*(window.innerWidth-30-getScrollbarWidth()-40)}px`,condition:false,count_drag:2});
                } else if (this.state.pos_start<this.state.pos_finish) {
                    this.setState({news_mgLeft:`${-(window.innerWidth-30-getScrollbarWidth()-40)}px`,condition:false,count_drag:1});
                }
            } else {
                this.setState({news_mgLeft:`${-2*(window.innerWidth-30-getScrollbarWidth()-40)}px`,condition:false,count_drag:2});
            }
            this.setState({mask:false});
        }
    }

    render() {
        
        
        return (
            <div className='home'>
                <Banner></Banner>  
                <div className='home_main'>
                    <Underbanner></Underbanner> 
                    {/*newproduct*/}
                    <div className="newproduct">
                        <div className="newproduct_header text-center mb-4">
                            <h4><a href='#' title='Sản phẩm mới'>Sản phẩm mới</a></h4>
                            <p>Cập nhật những sản phẩm mới nhật</p>
                        </div>
                        <div className="newproduct_main">
                        <Product mask={this.state.mask} product={this.state.product} 
                        omouseenter={(e,z)=>this.onMouseEnter(e,z)} product_change={this.state.product_change}>10</Product>
                        </div>
                        <div className="newproduct_footer"> 
                            <div className="newpr_ft_item0">
                                <div className="mg_bottom scale_plus pb-0">
                                    <a href="#" title="Phòng khách" className="abig atop"><img className="w-100" 
                                    src="./images/newpr_ft1.webp" alt="Phòng khách"></img></a>
                                </div>
                                <div className="scale_plus pt-0">
                                    <a href="#" title="Phòng tắm" className="abig abottom"><img className="w-100" 
                                    src="./images/newpr_ft2.webp" alt="Phòng tắm"></img></a>
                                </div>
                            </div>
                            <div className="newpr_ft_item0 scale_plus">
                                <a href="#" title="Nhà bếp" className="abig"><img className="w-100" 
                                src="./images/newpr_ft3.webp" alt="Nhà bếp"></img></a>
                            </div>
                            <div className="newpr_ft_item1" >
                            {
                                this.state.newproduct.map((item,index)=> {
                                    return <div key={index} className="scale_plus">
                                                <div className="border">
                                                    <a href="#" title=" " className="abig"><img className="w-100" src={item.src} alt=" "></img></a>
                                                </div>
                                                <div className="wrap_title">
                                                    <h4 className="wt_title">
                                                        <a href="/collections/onsale" title={item.title}>{item.title}</a>
                                                    </h4>
                                                    <p className="wt_count mb-0">12 sản phẩm</p>
                                                </div>
                                            </div>
                                })
                            
                            }
                            </div>
                        </div>
                    </div> 
                    {/*saleproduct*/}
                    <div className="saleproduct">
                        <div className="saleproduct_header text-center mb-4">
                            <h4><a href='#' title='Sản phẩm mới'>Sản phẩm Khuyến mãi</a></h4>
                            <p>Ưu đãi lên đến 50%</p>
                        </div>
                        <div className={classNames('product','saleproduct_main',{'sale_tran':!this.state.condition})} 
                            style={{marginLeft:this.state.sale_mgLeft}}> 
                            <Product mask={this.state.mask} product={this.state.product} 
                            omouseenter={(e,z)=>this.onMouseEnter(e,z)} product_change={this.state.product_change}>12</Product>
                            <div onClick={()=>this.rightClick()} className="carousel_control_wrap carousel-control-prev">
                                <div className="carousel_control_prev"></div>
                            </div>
                            <div onClick={()=>this.leftClick()} className="carousel_control_wrap carousel-control-next">
                                <div className="carousel_control_next"></div>
                            </div>
                        </div>
                    </div>
                    {/*news*/}
                    <div className="news">
                        <div className="news_header text-center mb-4">
                            <h4><a href='#' title='Sản phẩm mới'>Tin tức</a></h4>
                            <p>Cập nhật tin tức mới nhất!</p>
                        </div>
                        <div className={classNames('news_main',{'sale_tran':!this.state.condition})} style={{marginLeft:this.state.news_mgLeft}}>
                        {
                            this.state.news.map((item,index)=>{
                                return <div key={index} className="news_item">
                                    <div className="news_wrap">
                                        <a href="#" title={item.title}>
                                            <img src={item.src} className="w-100 mb-3"></img>
                                            <span>{item.title}</span>
                                        </a>
                                        <p className="mt-2">
                                            1- Sử dụng nội thất thông minh và tận dụng không gian để lưu trữ đồ đạc...
                                        </p>
                                        <p className="mb-0"><a>Xem thêm</a></p>
                                    </div>
                                </div>
                            })
                        }
                            <div className={classNames('mask_banner',{'maskbanner_show':this.state.mask})}>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;