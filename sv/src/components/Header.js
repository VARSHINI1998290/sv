import React from 'react';

function Header(props) {
    return(
        <header className="row block center">
            <div>
                <a href="#">
                    
                    <h1>shopping platform</h1>
                    
                </a>
            </div>
            <div>
                <a href="#/cart">cart</a>  <a href="#/signin">signin</a>
            </div>
        </header>
    )
}
export default Header;