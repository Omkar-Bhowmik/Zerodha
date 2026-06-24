// import React from "react";
// import Hero from "./Hero";
// import LeftSection from "./LeftSection";

// function ProductPage() {
//   return (
//     <main>
//       <Hero />
//       <LeftSection
//         imageURL="media/images/kite.png"
//         productName="Kite"
//         productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more."
//         tryDemo="https://kite.zerodha.com"
//         learnMore="/signup"
//         googlePlay="https://play.google.com/store/apps/details?id=com.zerodhatech.kite3"
//         appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1449453802"
//       />
//     </main>
//   );
// }

// export default ProductPage;







import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Univers";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite.zerodha.com"
        learnMore="/signup"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodhatech.kite3"
        appStore="https://apps.apple.com/in/app/kite-by-zerodha/id1449453802"
      />
      <RightSection
        imageURL="media/images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="/signup"
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com"
        learnMore="/signup"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodhatech.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"
      />
      <RightSection
        imageURL="media/images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="/signup"
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity mobile"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo="https://zerodha.com/varsity/"
        learnMore="https://zerodha.com/varsity/"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/zerodha-varsity/id1530200502"
      />
      <p className="text-center mt-5 mb-5">
        Want to know more about our technology stack? Check out the Zerodha.tech
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductPage;
