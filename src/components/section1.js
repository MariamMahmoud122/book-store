
function section1 (){
    return(
        <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.pinimg.com/474x/20/2a/1b/202a1b76930b3e33826c378423bae5f3.jpg" className="d-block w-100" alt="..."/>
            
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/474x/81/7f/e6/817fe65ad7e1f6a8c7c3200f975db51e.jpg" className="d-block w-100" alt="..."/>
            
          </div>
          <div className="carousel-item">
            <img src="https://i.pinimg.com/474x/e3/60/5f/e3605f20806c7ba8a6937465563a510a.jpg" className="d-block w-100" alt="..."/>
            
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}
export default section1;