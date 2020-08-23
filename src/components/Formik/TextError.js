import React from 'react'

export default function TextError(props) {
    return (
        <span className='error'>
            {props.children}
        </span>
    )
}