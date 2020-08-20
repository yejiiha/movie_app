import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "pizza",
    image:
      "https://www.hapskorea.com/wp-content/uploads/2019/08/octopusbomb-pizza.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "sashimi",
    image:
      "https://casasensei.com/wp-content/uploads/2019/07/sushi-vs-sashimi.jpg",
    rating: 4.8,
  },
  {
    id: 3,
    name: "pasta",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522172096.jpg",
    rating: 4.6,
  },
  {
    id: 4,
    name: "beef",
    image:
      "https://www.thespruceeats.com/thmb/5cv2uGBNm4qhLIYl9RlefAUq7P0=/4048x2277/smart/filters:no_upscale()/marinated-rump-roast-3058682-hero-01-0977a498722f47debaa7034c13053048.jpg",
    rating: 4,
  },
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
}; //내가 얻고 싶은 props에 대한 설명

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
