import React from 'react'

const Book = (props) => {
    return (
        <div className='bookBlock'>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            <a href={props.bookLink} target='_blank' rel="noopener noreferrer">Get Book</a>
        </div>
    )
}

export default Book