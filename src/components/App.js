import React from 'react';
import PhotoList from "./PhotoList";

const App = () => {
    return(
        <div className="container-fluid d-flex flex-column min">
            <div className="content flex-grow-1">
                <header className="row header">
                    <div className="col-12 text-center">
                        <h1>TEST APP</h1>
                    </div>
                </header>
                <div className="row photo-list ">
                    <PhotoList/>
                </div>
            </div>
            <footer className="footer">
                <div className="footer-content">
                    © 2018-2019
                </div>
            </footer>
        </div>
    )
};

export default App;