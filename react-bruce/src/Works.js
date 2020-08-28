import React from 'react'
import Book from './Book'

const Works = () => {
    const bookInfo = [
        {
            id: 0,
            title: 'title one',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus sed. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Lectus urna duis convallis convallis. Erat nam at lectus urna duis convallis. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Mi sit amet mauris commodo quis imperdiet. Massa placerat duis ultricies lacus sed turpis tincidunt id. At in tellus integer feugiat scelerisque. Bibendum at varius vel pharetra.',
            bookLink: 'https://www.amazon.com/Charitys-Bite-Jillyn-Book-One/dp/1521754179'
        },
        {
            id: 1,
            title: 'title two',
            desc: 'desc two',
            bookLink: 'https://www.amazon.com/Charitys-Bite-Jillyn-Book-One/dp/1521754179'
        }
    ]

    console.log(bookInfo)

    return (
        <section>
            { bookInfo.map(book => <Book key={book.id} {...book} />) }
        </section>
    )
}

export default Works