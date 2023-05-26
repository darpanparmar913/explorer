import React from "react"


function NevList(){
    let navl = {alignItem: "center"}
    let listyle = {listStyle: "none", padding: 20}
    let astyle = {textDecoration: "none", color:"White"}
    return(
        <nav style={navl}>
            <ul className="row">
                <li style={listyle}>
                    <a href="#" className="active">Home</a>
                </li>
                <li style={listyle}>
                    <a href="#" style={astyle}>Pages</a>
                </li>
                <li style={listyle}>
                    <a href="#" style={astyle}>Menus</a>
                </li>
                <li style={listyle}>
                    <a href="#" style={astyle}>Shop</a>
                </li>
                <li style={listyle}>
                    <a href="#" style={astyle}>Blog</a>
                </li>
            </ul>
        </nav>
    )
}

export default NevList
