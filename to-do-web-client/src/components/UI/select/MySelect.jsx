import React from 'react';

const MySelect = (props) => {
    return (
        <div>
            <select defaultValue={props.defaultValue || ''} onChange={e => props.sort(e.target.value)}>
                <option value="" disabled>{props.default}</option>
                {
                    props.options.map(option =>
                        <option value={option.value} key={option.value}>{option.text}</option>  
                    )
                }
            </select>
        </div>
    );
};

export default MySelect;