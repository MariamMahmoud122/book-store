// import './Navbar.css';
// function Navbar(){

//   return (
//     <nav className="navbar navbar-expand-lg">
//       <div className="container-fluid">
//         <a className="w navbar-brand" href="#">Logo</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
        
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="w nav-link active" aria-current="page" href="#">Home</a>
//             </li>
//             <li className="nav-item">
//               <a className="w nav-link" href="#">Shop</a>
//             </li>
//             <li className="nav-item">
//               <a className="w nav-link" href="#">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="w nav-link" href="#">Contact Us</a>
//             </li>
//           </ul>

//           {/* زر "أضف للـ سلة" */}
//           <div className="d-flex">
//           <div className="w register">
//               <span>Register</span>
//             </div>

           
            
//             {/* سلة المشتريات */}
//             <div className="cart-icon nav-link w position-relative ms-2">
//               <i className="fas fa-shopping-cart fa-lg"></i>
              
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import './Navbar.css';

function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="w navbar-brand" href="#">Logo</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="w nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="w nav-link" href="#">Shop</a>
            </li>
            <li className="nav-item">
              <a className="w nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="w nav-link" href="#">Contact Us</a>
            </li>
          </ul>

          <div className="d-flex">
            <div className="w register">
              <span>Register</span>
            </div>
            <div className="cart-icon nav-link w position-relative ms-2">
              <i className="fas fa-shopping-cart fa-lg"></i>
              {cartCount > 0 && (
                <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
