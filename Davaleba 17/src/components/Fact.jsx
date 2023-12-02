import React from 'react';
import { useParams } from 'react-router-dom';

const facts = [
  { id: '1', content: 'Fact 1: John Doe can code in multiple languages.' },
  { id: '2', content: 'Fact 2: John Doe loves to travel.' },
];

const Fact = () => {
  const { factId } = useParams();
  const fact = facts.find(fact => fact.id === factId);

  return (
    <div>
      {fact ? <p>{fact.content}</p> : <p>Fact not found.</p>}
    </div>
  );
};

export default Fact;
