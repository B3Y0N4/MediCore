import React from 'react';
import cardData from '../card.json';

// Desc metnini belirtilen satır sayısıyla sınırlayan fonksiyon
const truncateText = (text, maxSentences) => {
  const sentences = text.split('.').filter(sentence => sentence.trim() !== '');
  const truncatedText = sentences.slice(0, maxSentences).join('. ') + '.';
  return truncatedText;
};

const Card = () => {
  return (
    <div className='main'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {cardData.map((card) => (
          <div className="col d-flex justify-content-center align-items-center" key={card.id}>
            <div className="card" style={{ width: "18rem", height: "30rem" }}>
              <img src={card.img} className="card-img-top" alt="..." />
              <div className="card-body text-center bg-white rounded-5">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">
                  {truncateText(card.desc, 1.5)}
                </p>
                <a href="#" className="btn btn-primary">
                  Devamını Oku
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
