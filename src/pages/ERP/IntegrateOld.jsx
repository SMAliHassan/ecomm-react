// import React from 'react';
// import { Link } from 'react-router-dom';

// import shopeeLogo from '../../assets/images/logo/shopee.svg';
// import lazadaLogo from '../../assets/images/logo/lazada.svg';
// import tokopediaLogo from '../../assets/images/logo/tokopedia.svg';
// import blibliLogo from '../../assets/images/logo/blibli.svg';
// import shopifyLogo from '../../assets/images/logo/shopify.svg';

// import '../../assets/css/integrate.css';

// const logos = {
//   tokopedia: tokopediaLogo,
//   shopee: shopeeLogo,
//   lazada: lazadaLogo,
//   blibli: blibliLogo,
//   shopify: shopifyLogo,
// };

// const PartnerCard = ({ name }) => {
//   return (
//     <Link to={`/auth-channel/${name}`} className="partner-card">
//       <div className="partner-card__img">
//         <img src={logos[name]} alt={name} />
//       </div>
//       <div className="partner-card__title">{name}</div>
//     </Link>
//   );
// };

// const Integrate = () => {
//   return (
//     <div className="row" style={{ '--bs-gutter-x': 0 }}>
//       <div className="card mt-3">
//         <div className="card-body" style={{ minHeight: '40vh' }}>
//           <h5>Marketplace Integration</h5>

//           <div className="partner-container">
//             {Object.keys(logos).map(logo => (
//               <PartnerCard name={logo} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Integrate;
