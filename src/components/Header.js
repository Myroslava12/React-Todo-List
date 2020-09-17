import React from 'react';


const Header = () => {
    return (
        <header className="app--header container">
            <span className="header--date">{new Date().getDate() + '-' + (new Date().getMonth()+1) + '-' + new Date().getFullYear()}</span>
            <div>
                <h1 className="header--title all--title">The to do list bungle</h1>
                <h4 className="create--title all--title">Create new task</h4>
            </div>
        </header>
    )
}


export default Header;