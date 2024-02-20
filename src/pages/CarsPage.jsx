import { cars } from "../Components/utilities";
import { Link, useSearchParams } from "react-router-dom";

export function CarsPage() {
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  return (
    <div className="main-container">
      <h1>The Singers</h1>
      <p>
        {" "}
        Below is an assortment of what I believe to be some of the most
        beautiful cars in the world
      </p>
      <div className="sorting">
        <Link className="linkTags" to="/cars/?">
          Default
        </Link>
        <Link className="linkTags" to="/cars/?sort=asc">
          Sort A - Z
        </Link>
        <Link className="linkTags" to="/cars/?sort=latest">
          Latest
        </Link>
      </div>
      {cars.map((car) => (
        <div key={car.id} className="car-container">
          <h2>{car.commission}</h2>

          <img className="main-img" src={car.imageLink}></img>
          <h2>Delivered in {car.year}</h2>
        </div>
      ))}
    </div>
  );
}
