import React from "react";

function Specialmeals() {
  return (
    <div className="special-meals">
      <div className="sp-header-div">
        <p className="sp-header">Special Meals of the day!</p>

        <p className="sp-header2">
          Check our specials of the day and get discounts on all our meals and
          swift delivery to what ever location within Ilorin.
        </p>
      </div>

      <div className="foods">
        <div className="sp-img-div">
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1684355883/ReactShop/Stir-Fry-Pasta-Thumbnail_j3shvs.jpg"
            alt="pasta"
            className="sp-img"
          />

          <p className="food-name">Stir fry Pasta</p>

          <p className="sp-img-text">
            Stir fry pasta yada yada yada because of Sesan
          </p>
        </div>

        <div className="sp-img-div">
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1684355991/ReactShop/Meatballs-main-500x500_rvd5mv.jpg"
            alt="pasta"
            className="sp-img"
          />

          <p className="food-name">Meat Balls</p>

          <p className="sp-img-text">
            Stir fry pasta yada yada yada because of Sesan
          </p>
        </div>

        <div className="sp-img-div">
          <img
            src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1684356077/ReactShop/Burger-and-Fries_jqv4v7.jpg"
            alt="pasta"
            className="sp-img"
          />

          <p className="food-name">Burger Meal</p>

          <p className="sp-img-text">
            Stir fry pasta yada yada yada because of Sesan
          </p>
        </div>
      </div>
    </div>
  );
}

export default Specialmeals;
