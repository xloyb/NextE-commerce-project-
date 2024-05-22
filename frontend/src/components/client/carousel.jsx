import React from "react";

const Carousel = () => {
  const carouselData = [
    {
      id: "slide1",
      imgUrl: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754829/images/pc_portable_cz8v2b.jpg",
      prevId: "slide4",
      nextId: "slide2",
    },
    {
      id: "slide2",
      imgUrl: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754821/images/gaer_banniere_40_g1ktuz.jpg",
      prevId: "slide1",
      nextId: "slide3",
    },
    {
      id: "slide3",
      imgUrl: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754784/images/Banner-2-Code-Promo_smhykd.jpg",
      prevId: "slide2",
      nextId: "slide4",
    },
    {
      id: "slide4",
      imgUrl: "https://res.cloudinary.com/iset-sfax/image/upload/v1703754792/images/banniere_smartphone_1_p0ftki.jpg",
      prevId: "slide3",
      nextId: "slide1",
    },
  ];

  return (
    <div>
      <div className="carousel w-full">
        {carouselData.map((item, index) => (
          <div key={index} id={item.id} className="carousel-item relative w-full">
            <img src={item.imgUrl} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href={`#${item.prevId}`} className="btn btn-circle">❮</a> 
              <a href={`#${item.nextId}`} className="btn btn-circle">❯</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
