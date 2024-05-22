import React from "react";

const meilleuresOffres = () => {
  const products = [
    {
      id: 1,
      name: "Soft Plushy Cushion Chair",
      description: "Soft Plushy Cushion Chair",
      imageUrl: "https://www.dropbox.com/s/mlor33hzk73rh0c/x14423.png?dl=1",
      price: 29.99,
    },
    {
      id: 2,
      name: "Comfortable Wooden Chair",
      description:"Comfortable Wooden Chair",
      imageUrl: "https://www.dropbox.com/s/8ymeus1n9k9bhpd/y16625.png?dl=1",
      price: 39.99,
    },
    {
      id: 3,
      name: "Multipurpose Wooden Trolly",
      description:"Multipurpose Wooden Trolly",
      imageUrl:
        "https://www.dropbox.com/s/ykdro56f2qltxys/hh2774663-87776.png?dl=1",
      price: 19.99,
    },
    {
      id: 4,
      name: "Multipurpose Wooden Tool",
      description:"Multipurpose Wooden Tool",
      imageUrl: "https://www.dropbox.com/s/1fav310i2eqkdz8/tool2.png?dl=1",
      price: 34.99,
    },
  ];
  return (
    <>
        <br/>
        <h1 className="text-5xl font-bold">Les meilleures offres du moment!</h1>
      <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0">
        <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start ">
          {products.map((product) => (
            // <section key={product.id} className={`p-5 py-10 bg-purple-50 text-center transform duration-500 hover:-translate-y-2 cursor-pointer`}>
            //     <img src={product.imageUrl} alt={product.name} />
            //     <div className="space-x-1 flex justify-center mt-10">
            //         {[...Array(4)].map((_, index) => (
            //             <svg key={index} className="w-4 h-4 mx-px fill-current text-orange-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            //                 <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
            //             </svg>
            //         ))}
            //     </div>
            //     <h1 className="text-3xl my-5">{product.name}</h1>
            //     <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, incidunt!</p>
            //     <h2 className="font-semibold mb-5">${product.price}</h2>
            //     <button className={`p-2 px-6 bg-${product.color}-500 text-white rounded-md hover:bg-${product.color}-600`}>Add To Cart</button>
            // </section>
            <div key={product.id} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={product.imageUrl}
                  alt={product.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default meilleuresOffres;
