import React from 'react';
import logo from '../../images/logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Welcome to Dillon's Portfolio Website - Powered with <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >React</a> and some old-school HTML
                </p>
                <p><a className="App-link"
                      href="pages/PortfolioMain.html">
                    Enter
                </a>
                </p>
            </header>
        </div>
    );
}

export default App;
