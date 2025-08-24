import { Link } from 'react-router-dom';
function card () {
    return(
        <>
        <h3>📚 Our Books</h3>
        
        <div className="abdeltwab">   
       <div className="card" >
  <img src="https://i.pinimg.com/474x/86/85/1c/86851c4446c5d1a7a576ad3af5518a93.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"> More <i className="bi bi-arrow-right ms-2"></i></a>
  </div>
</div>
<div className="card" >
  <img src="https://i.pinimg.com/474x/01/94/cc/0194cc4f293b15510993e4659264967f.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"> More<i className="bi bi-arrow-right ms-2"></i></a>
  </div>
</div>
<div className="card" >
  <img src="https://i.pinimg.com/474x/9a/85/86/9a8586e67d37307078e500dd413127aa.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary"> More  <i className="bi bi-arrow-right ms-2"></i></a>
  </div>
</div>
        </div>
        <Link to="/products" className="btn btn-primary nos">
        Go to Shop <i className="bi bi-shop ms-2"></i></Link>
        
        </>
    )
    
}
export default card;