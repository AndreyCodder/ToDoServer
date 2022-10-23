import React from 'react';
import LoaderClass from './Loader.module.css'

const Loader = () => {
    return (
        <div style={{display: 'flex', justifyContent:'center', marginTop: '50px'}}>
            <div className={LoaderClass.loader}>
            
            </div>
        </div>
    );
};

export default Loader;