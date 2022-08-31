import React, { Component } from "react";
import './menu.css'

class Menu extends Component {
    ComponentDidMount(){
        
    }
    render () {
        return (
            <div>
                <ul>
                    <li>
                        <a href="">main1</a>
                        <ul className="submn">
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                        </ul>    
                    </li>
                    <li>
                        <a href="">main2</a>
                        <ul className="submn">
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                        </ul>    
                    </li>
                    <li>
                        <a href="">main3</a>
                        <ul className="submn">
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                        </ul>    
                    </li>
                    <li>
                        <a href="">main4</a>
                        <ul className="submn">
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                            <li><a href="">s_menu</a></li>    
                        </ul>    
                    </li>
                </ul>
            </div>
        )
    }
}

export default Menu;