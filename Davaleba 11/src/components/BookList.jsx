import React from 'react';
import kravtaDumili from '../assets/kravtha-dumili.webp';
import secondImg from '../assets/forkify.PNG'
import '../style/style.css'; 
import Book from './Book';


const books = [
    {
        name: 'კრავთა დუმილი',
        img: kravtaDumili,
        description:
          'კრავთა დუმილი“ რომანი-გამოცნაა. აქ ერთმანეთს უპირისპირდებიან გამოძიების ფედერალური ბიუროს აკადემიის სტუდენტი კლარის სტარლინგი, რომელიც სერიული მკვლელის დანაშაულებს იძიებს და მისი „კონსულტანტი და მოკავშირე“ – ბრწყინვალე ფსიქიატრი და ამავე დროს, მკვლელი და კანიბალი-გურმანი, ექიმი ჰანიბალ ლექტერი. ვერავინ იგრძნობს თავს უსაფრთხოდ, თუკი ლექტერი ფსიქიატრიული საავადმყოფოს სპეციალურ საკანში არ იქნება დამწყვდეული',
        id: 1,
        characters: ['Clarice Starling', 'Dr. Hannibal Lecter', 'Buffalo Bill'],
      },  {
        name: 'example 2',
        img: secondImg,
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ratione magni aspernatur quidem placeat libero quasi quibusdam, aliquam facere blanditiis eveniet. Eum deserunt ipsam quae non saepe necessitatibus molestiae consequuntur.',
        id: 2,
        characters: ['Charecter 1', 'charecter 2 '],
      },
];

const BookList = () => {
    function logInfo(arg){
        console.log(`სახელი: ${arg.name}`)

        console.log(`პერსონაჟები: ${arg.characters.join(', ')}`)
    }

  return (
    <div className='card-list'>
      {books.map((book) => (
        <Book book={book} infoFun={logInfo} key={book.id}/>
      ))}
    </div>
  );
};

export default BookList;
