import React from 'react';
import loader from '../../assets/img/loading.gif'
import './index.css'

const Loader = props => (
    <div>
        <img src={loader} alt="loader gif"></img>
    </div>
)

export default Loader;