import React, { useEffect, useRef, useState } from "react";
import "./scroll.scss";
const InfiniteHorizontalScrolling = () => {
  const [currentCard, setCurrentCard] = useState(null);
  const cardWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Optionally adjust scrolling behavior or implement parallax effects here
    };

    const cardWrapper = cardWrapperRef.current;
    if (cardWrapper) {
      cardWrapper.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (cardWrapper) {
        cardWrapper.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleHover = (cardId) => {
    setCurrentCard(cardId);
    // Optionally pause infinite scrolling or implement custom hover actions here
  };

  const handleHoverEnd = () => {
    setCurrentCard(null);
    // Optionally resume infinite scrolling or reset card appearance here
  };
  const cards = [
    {
      id: 1,
      title: "Card 1",
      description: "This is the first card with some description.",
      image: "https://via.placeholder.com/300", // Replace with your image URL
    },
    {
      id: 2,
      title: "Card 2",
      description: "This is the second card with another description.",
      image: "https://via.placeholder.com/300", // Replace with your image URL
    },
    {
      id: 3,
      title: "Card 3",
      description: "This is the third card with even more description.",
      image: "https://via.placeholder.com/300", // Replace with your image URL
    },
    // ...add more cards as needed
  ];
  return (
    <div>
      <div className="container">
        <div className="card-wrapper" ref={cardWrapperRef}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${currentCard === card.id ? "active" : ""}`}
              onMouseEnter={() => handleHover(card.id)}
              onMouseLeave={handleHoverEnd}
            >
              <img src={card.image} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {/* Add any additional card content (buttons, links, etc.) */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteHorizontalScrolling;
