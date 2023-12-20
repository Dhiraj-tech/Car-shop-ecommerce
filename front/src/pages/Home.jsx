import { Carousel } from "react-bootstrap";
import { ProductList } from "../components/ProductList"

export const Home = () => {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        <img id="slider-img" className="d-block w-100" src="slider-1.jpg" alt="First slide"  />
        <Carousel.Caption className="slider-text">
          <h2 id="head1"> 
            Say Hello To <span className="color-theme">Dhiraj Motors !</span>
          </h2>
          <p className="slide-desc">
          Dhiraj Motors is a business theme. Perfectly suited for Auto Mechanic, Car
          Repair Shops, Car Wash, Garages, <br />
          Automobile Mechanicals, Mechanic
          Workshops, Auto Painting, Auto Centres.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img id="slider-img" className="d-block w-100" src="slider-2.jpg" alt="Second slide" />
        <Carousel.Caption className="slider-text">
          <h2 id="head1">
            Say Hello To <span className="color-theme">Dhiraj Motors !</span>
          </h2>
          <p className="slide-desc">
          Dhiraj Motors is a business theme. Perfectly suited for Auto Mechanic, Car
          Repair Shops, Car Wash, Garages, <br />
          Automobile Mechanicals, Mechanic
          Workshops, Auto Painting, Auto Centres.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img id="slider-img" className="d-block w-100" src="slider-3.jpg" alt="Third slide" />
        <Carousel.Caption className="slider-text">
          <h2 id="head1">
            Say Hello To <span className="color-theme">Dhiraj Motors !</span>
          </h2>
          <p className="slide-desc">
          Dhiraj Motors is a business theme. Perfectly suited for Auto Mechanic, Car
          Repair Shops, Car Wash, Garages, <br />
          Automobile Mechanicals, Mechanic
          Workshops, Auto Painting, Auto Centres.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  <ProductList title="Featured Products" uri="product/featured" />

  <div className="col-12">
  <hr />
</div>

<ProductList title="Latest Products" uri="product/latest" />

<div className="col-12">
    <hr />
</div>

<ProductList title="Top Selling Products" uri="product/top-selling" />
</>
  );
};
