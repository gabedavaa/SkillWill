import React from 'react'


const Book = ({book, infoFun}) => {
return (
    <div className="card">
        <div >
          <div className='img-box'>
            <img src={book.img} alt={book.name} />
          </div>
          <h1 className='card-title'>{book.name}</h1>
          <p>{book.description}</p>
          <p>პერსონაჟები: {book.characters.join(', ')}</p>
          <button onClick={()=>infoFun(book)} className='btn'>INFO</button>
        </div>
    </div>
  );

}

export default Book
