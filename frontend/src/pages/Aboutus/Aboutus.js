// import React, { useEffect, useState } from 'react';
// import './Aboutus.css'; // Import CSS file
// import Gallery from '../Gallery/Gallery';

// const Aboutus = () => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     // Trigger animation after component mounts
//     setAnimate(true);
//   }, []);

//   return (
//     <div>
//     <div className={`container ${animate ? 'animate' : ''}`}>
//       <div className="row">
//         {/* <div className="column">
//           <img src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/abstract-sports-background_f17TaJ1F_SB_PM.jpg" alt="Your Image" />
//         </div> */}
//         <div className="column">
//           <h2 style={{fontFamily:'monospace',fontWeight:'bold',color:'black'}}>Our Vision</h2>
//           <p>
//           <ul className="list">
//             <li>
//               <span className="tick">&#10003;</span>
//               Our vision is to inspire a global community of athletes, transcending boundaries to foster a culture of passion, perseverance, and performance.            </li>
//             <li>
//               <span className="tick">&#10003;</span>
//               We envision a world where sports empower individuals to push their limits, achieve greatness, and lead healthier, more fulfilling lives            </li>
//           </ul>
//           </p>
//         </div>
//         <div className="column">
//           <h2 style={{fontFamily:'monospace',fontWeight:'bold',color:'black'}}>Our Mission</h2>
//           <p>
//           <ul className="list">
//             <li>
//               <span className="tick">&#10003;</span>
//               We recognize the importance of environmental stewardship and are committed to minimizing our environmental impact through sustainable practices and product innovation.
//             </li>
//             <li>
//               <span className="tick" style={{fontStyle:'bold'}}>&#10003;</span>
//               We are dedicated to providing exceptional customer service, delivering premium-quality products, and continuously striving for excellence in everything we do.
//             </li>
//           </ul>
//           </p>
//         </div>
//       </div>
//     </div>
//     <Gallery/>
//     </div>
//   );
// };

// export default Aboutus;





import React, { useEffect, useState } from 'react';
import './Aboutus.css'; // Import CSS file
import Gallery from '../Gallery/Gallery';

const Aboutus = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div>
    <div className={`container ${animate ? 'animate' : ''}`}>
      <div className="row">
        {/* <div className="column">
          <img src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/abstract-sports-background_f17TaJ1F_SB_PM.jpg" alt="Your Image" />
        </div> */}
        <div className="column">
          <h2 style={{fontFamily:'monospace',fontWeight:'bold',color:'black'}}>Our Vision</h2>
          <p>
          <ul className="list">
            <li>
              <span className="tick">&#10003;</span>
              The vision of our sasti furniture website is to revolutionize the way people furnish their homes by offering high-quality, stylish furniture at affordable prices. </li>
            <li>
              <br></br>
              <span className="tick">&#10003;</span>
              Our platform will provide  a user-friendly interface and transparent pricing. We envision becoming the go-to destination for individuals and families seeking budget-friendly furniture solutions without compromising on quality or style. By empowering our customers to create comfortable and beautiful living spaces within their means, we aspire to enhance their quality of life and promote a sense of pride in their homes.            </li>
          </ul>
          </p>
        </div>
        <div className="column">
          <h2 style={{fontFamily:'monospace',fontWeight:'bold',color:'black'}}>Our Mission</h2>
          <p>
          <ul className="list">
            <li>
              <span className="tick">&#10003;</span>
              Our mission at Sasti Furniture is to democratize the furnishing industry by providing high-quality, stylish furniture at prices that everyone can afford.
              
            </li>
            <br></br>
            <li>
              <span className="tick" style={{fontStyle:'bold'}}>&#10003;</span>
              By prioritizing affordability without compromising on quality, we strive to empower our customers to create spaces they love, fostering comfort, style, and happiness in every home.            </li>
          </ul>
          </p>
        </div>
      </div>
    </div>
    <Gallery/>
    </div>
  );
};

export default Aboutus;





