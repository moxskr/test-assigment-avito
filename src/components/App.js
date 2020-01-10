import React from 'react';
import PhotoList from "./PhotoList";

const App = () => {
    return(
        <div className="container-fluid">
            <div className="row header">
                <div className="col-12 text-center">
                    <h1>TEST APP</h1>
                </div>
            </div>
            <div className="row photo-list">
                <PhotoList/>
            </div>
        </div>
    )
};

export default App;