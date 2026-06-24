// import React from "react";

// function RightSection({ imageURL, productName, productDesription, learnMore }) {
//   return (
//     <section className="container mt-5">
//       <div className="row align-items-center">
//         <div className="col-6 p-5">
//           <h1>{productName}</h1>
//           <p>{productDesription}</p>
//           <a href={learnMore}>Learn More</a>
//         </div>
//         <div className="col-6">
//           <img src={imageURL} alt={`${productName} platform`} className="img-fluid" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default RightSection;




import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore}>Learn More</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
