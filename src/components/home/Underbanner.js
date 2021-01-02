import React, { Component } from 'react';
import './Underbanner.css';
import {underbanner_export} from '../free_div/Images';
class Underbanner extends Component {
    constructor(props) {
        super(props);
        this.state={
            src:[]
        };
    }
    componentDidMount(){
        const src = underbanner_export();
        this.setState({src});
    }

    render() {
        return (
            <div className="underbanner d-flex">
                {
                    this.state.src.map((item,index)=>{
                        return <div key={index} className="ub_item">
                                    <a href="#" title="Nội thất khuyến mãi" className="w-100"><img src={item} className="w-100" alt="unbn1"></img></a>
                                </div>
                    })
                }
            </div>
        );
    }
}

export default Underbanner;