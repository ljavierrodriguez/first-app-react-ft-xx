import React from 'react';
import "./App.css";
import "./App.scss";

const App = () => {
    return (
        <>
        <h1>App React usando Webpack</h1>
        <div className='box'>
            <div className="content">
                A
            </div>
        </div>
        <div className="card w-50">
            <div className="card-header">
                <h1 className="card-title">Home</h1>
            </div>
            <div className="card-body">
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente maiores consequatur asperiores natus facilis iste atque earum modi adipisci, a ullam pariatur, odio aut obcaecati at nesciunt molestias numquam optio.</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">More Info</button>
            </div>
        </div>
        </>
    )
}

export default App;