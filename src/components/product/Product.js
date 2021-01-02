import React, { Component } from 'react';
import './Product.css';
import classNames from 'classnames';

class Product extends Component {

    returnImage(x,y,z) {
        var text=[];
        let number=0;
        
        if (x.length>1) {
            for (let i=0; i<x.length;i++) {
                for (let child in x[i]){
                    if(child !== 'name' && child==='url0' && x[i].name!==''){
                        text[number]=   <img key={number} className="mr-2" src={x[i][child]} alt={y} 
                                        onMouseEnter={(e)=>this.props.omouseenter(e,z)}></img>;
                        number+=1;
                    }
                } 
            }
        }
        return text;
    }
    returnSale(x) {
        if (x!==0 && x!=='' && x!==undefined && x!==null) {
            return <span className="sale px-2">-{x}%</span> 
        }
    }
    roundPrice(x) {
        let number=0;
        number=x%10000;
        if (number>=5000) {
            number=parseInt(x/10000+1)*10000;
        } else {
            number=parseInt(x/10000)*10000;
        }
        return number;
    }
    addComma(x) {
        let [...number]=[...String(parseInt(x))];
        let y='';
        let z=0;
        for (let i=0;i<=number.length%3-1;i++) {
            y+=number[i];
        }
        if (y!=='') {y+=','}
        for (let i=number.length%3;i<=number.length-1;i++) {
            if (z%3===0&&z!==0) {y+=','};
            y+=number[i];
            z+=1;
        }
        return y;
    }
    priceBefore(x,y) {
        if (y!==0 && y!=='' && y!==undefined && y!==null) {
            return <span><ins className="mr-2">{this.addComma(x)}₫</ins>
                    <del>{this.addComma(this.roundPrice(x/(1-y/100)))}₫</del></span>
                    
        } else {
            return <span className="mr-2">{this.addComma(x)}₫</span>
        }
    }
    imageChange(x,y) {
        var number=0;
        for (let child in x[0]){
            number+=1;
        }
        if (number>2) {
            return <img className="hid_img w-100" src={x[0].url1} alt={y}></img>
        } else  if (x.length>1) {
            return <img className="hid_img w-100" src={x[1].url0} alt={y}></img>
        }      
    }
    countImage(x) {
        var number=0;
        if (x.length>1) {
            return true;
        } else {
            for (let child in x[0]){
                number+=1;
            }
            if (number>2) {
                return true;
            }
        }
    }
   
    render() {
        
        
        return (  
            <div className="product">
                
                {
                    this.props.product.map((item,index)=>{
                        if (index<this.props.children) {
                            return  <div key={index} className="product_item">
                                        <div className="product_image">
                                            <a href='#' title={item.name} className="pr_img">
                                                <img className={classNames('w-100',{'vsb_img':this.countImage(item.color)})} 
                                                src={this.props.product_change[index].color[0].url0} alt={item.name}></img>
                                                {this.imageChange(item.color,item.name)}
                                            </a>
                                            
                                            <div className="product_find">
                                                <a href='#' title='Xem nhanh'><i className="fas fa-search-plus"></i></a>
                                            </div>
                                            {this.returnSale(item.sale)}
                                        </div>
                                        <div className="spt_wrap pl-2">
                                                <div className="product_title">
                                                    <p className="pt-2 mb-0"><a href='#' title={item.name}>{item.name}</a></p>
                                                    <p className="mb-0">
                                                    {this.priceBefore(item.price,item.sale)}</p>
                                                </div>
                                                <div className="product_detail pt-2">
                                                    <div className="img_detail">
                                                        {this.returnImage(item.color,item.name,index)}
                                                    </div>
                                                </div>
                                            </div>
                                        <div className={classNames('mask_banner',{'maskbanner_show':this.props.mask})}>
                                        </div>
                                    </div>
                        }
                    })
                }
               
            </div>   
        );
    }
}
export default Product;

{/*function compare( a, b ) {
  if ( a.last_nom < b.last_nom ){
    return -1;
  }
  if ( a.last_nom > b.last_nom ){
    return 1;
  }
  return 0;
}

objs.sort( compare );
Or inline (c/o Marco Demaio):

objs.sort((a,b) => (a.last_nom > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0));*/}