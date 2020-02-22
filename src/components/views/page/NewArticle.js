import React, { Component } from 'react'
import NavbarTop from '../navbar/NavbarTop';
import NavbarBottom from '../navbar/NavbarBottom';
import picture from './../../../assets/img/picture.png';
import Category from '../Category';
import {Link} from 'react-router-dom';
import menu from '../../../assets/img/menu.png';
import left from './../../../assets/img/left-arrow.png';
export class Report extends Component {
    render() {
        return (
            <div className="home">     
                <div style={{backgroundColor:"#141AA2",fontSize:"22px",fontFamily:"Muli",width:"100%",color:"white",padding:"16px 0px"}}>
                    <div className="menu" style={{position:"absolute",top:"7px"}}>
                        <img src={menu} alt=""/>
                    </div>
                    New Article
                </div>
                
                <div style={{ color: "black" }} style={{ width: "100%" }}>
                    <div className="search" style={{ width: "100%" }}>
                        <Link to='/article'>
                        <div className="row">
                            <div style={{ width: "20%",float:"left",marginLeft:"-10px" }}>
                                    <img src={left} alt="filter" /> 
                            </div>
                            
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="Report" style={{width:"85%"}}>
                    <div className="label" style={{hight:"30"}}>
                        <div className="row" style={{fontSize:"22px",color:" #A4A6B3"}}>
                            Title
                        </div>
                        <input className="input-form-full" type="text" placeholder="-- Title your article --"/>
                    </div>
                    <div className="label">
                        <div className="row" style={{fontSize:"22px",color:" #A4A6B3"}}>
                            Description
                        </div>
                        <input className="input-form-full" type="text" placeholder="Description"/>
                    </div>
                    <div className="label">
                        <div className="row" style={{fontSize:"22px",color:" #A4A6B3"}}>
                            Intruction
                        </div>
                        <textarea className="input-form-textarea" type="text-area" placeholder="..."/>
                    </div>
                    
                    <div className="row" style={{width:"30%",marginBottom:"70px",float:"right"}}>
                            <button className="button" type="submit">
                                <Link to="/problemsolve" style={{color:"#FFF",fontSize:"20px"}}>
                                        submit
                                </Link>
                            </button>
                    </div>
                </div>
                <NavbarBottom active="Home"/>
            </div>
        )
    }
}

export default Report
