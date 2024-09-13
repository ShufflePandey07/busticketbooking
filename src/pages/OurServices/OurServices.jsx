// import React from "react";
// import "./OurServices.css"; // You'll need to create this CSS file

// const ServiceCard = ({ icon, title, description, highlighted }) => (
//   <div className={`service-card ${highlighted ? "highlighted" : ""}`}>
//     <img
//       src={`/src/images/icons/${icon}.svg`}
//       alt={title}
//       className="service-icon"
//     />
//     <h3>{title}</h3>
//     <p>{description}</p>
//   </div>
// );

// const OurServices = () => {
//   return (
//     <div className="our-services-container">
//       <h1 className="title">
//         We Provide <span className="highlight">Best Services</span> For You
//       </h1>
//       <p className="description">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua
//       </p>
//       <div className="services-grid">
//         <ServiceCard
//           icon="shield"
//           title="Safety Guarantee"
//           description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//         />
//         <ServiceCard
//           icon="tag"
//           title="Discount & Promo"
//           description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//         />
//         <ServiceCard
//           icon="certificate"
//           title="Professional Staff"
//           description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//         />
//         <ServiceCard
//           icon="clock"
//           title="Schedule On Time"
//           description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//         />
//         <ServiceCard
//           icon="mobile"
//           title="Online Booking"
//           description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//         />
//         <ServiceCard
//           icon="support"
//           title="24/7 Support"
//           description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
//         />
//       </div>
//     </div>
//   );
// };

// export default OurServices;

import React from "react";
import "./OurServices.css"; // You'll need to create this CSS file

const ServiceCard = ({ title, description, highlighted, icon }) => (
  <div className={`service-card ${highlighted ? "highlighted" : ""}`}>
    <img
      src={icon} // Directly use the icon path
      alt={title}
      className="service-icon"
    />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const OurServices = () => {
  // Define the icons directly in the component
  const shieldIcon = "https://cdn-icons-png.flaticon.com/512/9645/9645004.png"; // Adjust the path as necessary
  const tagIcon =
    "https://www.pngfind.com/pngs/m/300-3000498_fair-pricing-price-tag-for-car-hd-png.png"; // Adjust the path as necessary
  const certificateIcon =
    "https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/id_card.png"; // Adjust the path as necessary
  const clockIcon =
    "https://www.pngfind.com/pngs/m/49-492180_bell-times-clock-icon-clock-icon-png-yellow.png"; // Adjust the path as necessary
  const mobileIcon =
    "https://www.pngkey.com/png/detail/47-478912_transparent-mobile-phone-icon-mobile-icon-color-png.png"; // Adjust the path as necessary
  const supportIcon =
    "https://icons.veryicon.com/png/Business/Flatastic%205/24%207.png"; // Adjust the path as necessary

  return (
    <div className="our-services-container">
      <h1 className="title">
        We Provide <span className="highlight">Best Services</span> For You
      </h1>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className="services-grid">
        <ServiceCard
          icon={shieldIcon}
          title="Safety Guarantee"
          description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
        <ServiceCard
          icon={tagIcon}
          title="Discount & Promo"
          description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
        <ServiceCard
          icon={certificateIcon}
          title="Professional Staff"
          description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
        <ServiceCard
          icon={clockIcon}
          title="Schedule On Time"
          description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
        <ServiceCard
          icon={mobileIcon}
          title="Online Booking"
          description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
        <ServiceCard
          icon={supportIcon}
          title="24/7 Support"
          description="Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
        />
      </div>
    </div>
  );
};

export default OurServices;
