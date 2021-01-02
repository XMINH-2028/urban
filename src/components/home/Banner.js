import React, { Component } from 'react';
import './Banner.css';
import classNames from 'classnames';
import {banner_export} from '../free_div/Images';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src:[],
            left:[],
            cometo:true,
            comeback:true,
            leftclick:0,
            rightclick:0,
            condition_right:true,
            condition_left:true,
            drag:0,
            condition:false,
            pos_start:0,
            pos_finish:0,
            count:1,
            mask:false
        }  
        
    }

    render_slide() {
        const arr=[];
        let arr1=this.state.src;
        arr1=[arr1[arr1.length-1],...arr1,arr1[0]];
        this.setState({src:arr1});
        let x=this.state.src.length;
        for (let i=0; i<x-1;i++) {
            arr[i+1] = `${100*i}%`;
        }
        arr[0]='-100%';
        arr[x-1]='100%'
        this.setState({left:arr});
    }

    componentDidMount() {
        const src = banner_export()
        this.setState({src})
        setTimeout(()=> {this.render_slide();},1);
    }
   
    slide_left() {
        if (this.state.condition_right){
            this.setState({condition_right:false});
            const arr = this.state.left;
            if(parseFloat(arr[arr.length-2])<=0&&parseFloat(arr[arr.length-2])>-100){
                this.setState({cometo:true,comeback:false});
            }else{
                this.setState({cometo:false,comeback:false});
            }
            setTimeout(() => {
                if (this.state.cometo){
                    for (let i=1; i<arr.length-2;i++) {
                        arr[i] = `${i*100-100}%`;
                    } 
                    arr[arr.length-1]='0%';
                    arr[arr.length-2]='-100%';
                    this.setState({count:1});
                    this.setState({left:arr,cometo:false});
                    setTimeout(()=>{
                        arr[arr.length-2] = `${(arr.length-3-this.state.rightclick)*100}%`;
                        arr[arr.length-1]='100%';
                        arr[0]='-100%';
                        this.setState({leftclick:0,condition_right:true,cometo:true});
                    },251)
                } else {
                    if (parseFloat(arr[arr.length-2])<=-100){
                        this.setState({rightclick:this.state.rightclick+1})
                    };
                    for (let i=1; i<=arr.length-2;i++) {
                        if(Math.abs(parseFloat(arr[i]))%100===0){
                            arr[i] = `${parseFloat(arr[i])-100}%`;
                        } else {
                            if (parseFloat(arr[i])<0) {
                                arr[i] = `${parseFloat(arr[i])-(100-Math.abs(parseFloat(arr[i]))%100)}%`;
                            } else if (parseFloat(arr[i])>0) {
                                arr[i] = `${parseFloat(arr[i])-Math.abs(parseFloat(arr[i]))%100}%`;
                            }
                        }
                    }
                    arr[0]='-100%';
                    arr[arr.length-1]='100%';
                    this.setState({left:arr});
                    arr.map((item,index)=>{
                        if (item==='0%') {
                            this.setState({count:index});
                        }
                        return true;
                    });
                    setTimeout(()=>{
                        this.setState({condition_right:true});
                    },251)
                }
            },1)
        }
    }

    slide_right() {
        if (this.state.condition_left){
            this.setState({condition_left:false});
            const arr = this.state.left;
            if(parseFloat(arr[1])>=0&&parseFloat(arr[1])<100){
                this.setState({comeback:true,cometo:false});
            }else{
                this.setState({comeback:false,cometo:false});}
            setTimeout(() => {
                if (this.state.comeback){
                    for (let i=2; i<arr.length-1;i++) {
                        arr[i] = `${(i-arr.length+2)*100}%`;
                    } 
                    arr[0]='0%';
                    arr[1]='100%'
                    this.setState({count:arr.length-2});
                    this.setState({left:arr,comeback:false});
                    setTimeout(()=>{
                        arr[1] = `${(3-arr.length+this.state.leftclick)*100}%`;
                        arr[arr.length-1]='100%';
                        arr[0]='-100%';
                        this.setState({leftclick:0,condition_left:true});    
                    },251)
                } else {
                    if (parseFloat(arr[1])>=100){this.setState({leftclick:this.state.leftclick+1})};
                    for (let i=1; i<=arr.length-2;i++) {
                        if(Math.abs(parseFloat(arr[i]))%100===0){
                            arr[i] = `${parseFloat(arr[i])+100}%`;
                        } else {
                            if (parseFloat(arr[i])<0) {
                                arr[i] = `${parseFloat(arr[i])+Math.abs(parseFloat(arr[i]))%100}%`;
                            } else if (parseFloat(arr[i])>0) {
                                arr[i] = `${parseFloat(arr[i])+(100-Math.abs(parseFloat(arr[i]))%100)}%`;
                            }
                        }
                    } 
                    arr[0]='-100%';
                    arr[arr.length-1]='100%';
                    this.setState({left:arr});
                    arr.map((item,index)=>{
                        if (item==='0%') {
                            this.setState({count:index});
                        }
                        return true;
                    });
                    setTimeout(()=>{
                        this.setState({condition_left:true})
                    },251)
                }
            },1)
        }
    }

    dragStart(e) {
        e = e || window.event;
        if (e.target.classList.contains('drag')&&this.state.condition_left&&this.state.condition_right) {
            if (e.type === 'touchstart'){
                this.setState({drag:e.touches[0].clientX,condition:true,pos_start:e.touches[0].clientX});
            } else {
                e.preventDefault();
                this.setState({drag:e.clientX,condition:true,pos_start:e.clientX});
            }
            document.onmouseup = this.dragEnd.bind(this);
            document.ontouchend = this.dragEnd.bind(this);
        }
    }
    dragEnd(e) {
        if (e.type === 'touchend'){
            this.setState({pos_finish:this.state.drag});
        } else {
            this.setState({pos_finish:this.state.drag});
        }
        if (this.state.condition) {
            if (this.state.pos_start>this.state.pos_finish) {
                this.slide_left();
            } else if (this.state.pos_start<this.state.pos_finish){
                this.slide_right(); 
            } else {
            }
        }
        this.setState({condition:false,mask:false});
    }
    dragAction(e) {
        if (this.state.condition) {
            var x=0;
            if (e.type === 'touchmove'){
                x=e.touches[0].clientX-this.state.drag;
                if (x!==0) {
                    this.setState({pos_start:this.state.drag});
                    this.setState({drag:e.touches[0].clientX,mask:true})
                }
            } else {
                x=e.clientX-this.state.drag;
                if (x!==0) {
                    this.setState({pos_start:this.state.drag});
                    this.setState({drag:e.clientX,mask:true});
                } 
            }
            const arr = this.state.left;
            if ((e.clientX >= 0 && e.clientX <= window.innerWidth)||
            (e.touches[0].clientX > 0 && e.touches[0].clientX <= window.innerWidth)) {
                for (let i=0; i<=arr.length-1;i++) {
                    arr[i] = `${parseFloat(arr[i])+x/window.innerWidth*100}%`;
                }
                if (parseFloat(arr[arr.length-2])>0) {
                    arr[arr.length-1]='100%';   
                }
            } 
            this.setState({left:arr});
            document.querySelector('.banner').style.cursor='grabbing';
        }
    }

    slide_control(x) {
        this.setState({comeback:false,cometo:false});
        const arr = this.state.left;
        let count=0;
        for (let i=1;i<=arr.length-2;i++){
            if (arr[i]==='0%'){
                    count=i-x;
            }
        }
        arr.forEach((item,index,arr)=>{
            if (index>0 && index<arr.length-1){
                arr[index]=`${parseFloat(item)+count*100}%`
                if (arr[index]==='0%') {
                    this.setState({count:index});
                }
            }
        });
        this.setState({left:arr});
    }

    render() {
        const state = this.state;
        const arr_first=[],arr_last=[];
        state.left.forEach((item,index)=>{
            if (index>0 && index<state.src.length-1){
                if(index===this.state.count) {
                    arr_first[index] = 'close_span 0.5s forwards';
                    arr_last[index]='active_span 0.5s forwards';
                } else {
                    arr_first[index] = 'active_span 0.5s forwards';
                    arr_last[index]='close_span 0.5s forwards';
                }
            }
            
        })
      
        return (
            <div className="banner carousel">
                <ol className="carousel-indicators">
                    {  
                        state.src.map((item,index)=>{
                            if (index>0 && index<state.src.length-1){
                                return  <li key={index} onClick={()=>this.slide_control(index)}>
                                            <span style={{animation:arr_first[index]}}></span>
                                            <span style={{animation:arr_last[index]}}></span>
                                        </li>;
                            }
                            return true;
                        })
                    }
                </ol>
                <div className={classNames('carousel_inner','d-flex')} onMouseDown={(e)=>{this.dragStart(e)}} onMouseMove={(e)=>{this.dragAction(e)}}
                                onTouchStart={(e)=>{this.dragStart(e)}} onTouchMove={(e)=>{this.dragAction(e)}}>
                    {
                        this.state.src.map((item,index,arr) => {
                            return <div key={index} className={classNames('carousel_item','w-100',{'show_banner':(state.left[index]==='0%'&&index===0)||
                            (state.left[index]==='100%'&&index===1),'trans_back':state.comeback||state.cometo||state.condition})} 
                            style={{left:state.left[index]}}>
                                        <a href="#" title="Sản phẩm nổi bật">
                                            <img  src={item} className="d-block w-100 drag" alt="Sản phẩm nổi bật" />
                                        </a>
                                    </div>
                            
                        })    
                    }
                    <div className={classNames('mask_banner',{'maskbanner_show':this.state.mask})}>
                    </div>
                    <div onClick={()=>{this.slide_right()}} className="carousel_control_wrap carousel-control-prev">
                        <div className="carousel_control_prev"></div>
                    </div>
               
              
                    <div onClick={()=>{this.slide_left()}} className="carousel_control_wrap carousel-control-next">
                        <div className="carousel_control_next"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner;
