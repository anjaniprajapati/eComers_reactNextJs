const Slider = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://sportsun.in/cdn/shop/files/slider-3.jpg?v=1683797931" className="d-block w-100" alt="Slide 1" height="400px" width="700px"/>
          </div>
          <div className="carousel-item">
            <img src="https://ziener.com/media/k2/items/cache/7f56ca91ae4eb82b8754d752cd736c76_XL.jpg" className="d-block w-100" alt="Slide 2" height="400px" width="700px"/>
          </div>
          <div className="carousel-item">
            <img src="a.jpeg" className="d-block w-100" alt="Slide 3" height="400px" width="700px"/>
          </div>
          {/* <div className="carousel-item">
            <img src="a1.jpeg" className="d-block w-100" alt="Slide 4" height="400px" width="700px"/>
          </div> */}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

 
      {/* Updated script tags for Bootstrap 5 */}
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  );
}
  
  export default Slider;


