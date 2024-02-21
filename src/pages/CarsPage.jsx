import { cars } from "../Components/utilities";
import { Link, useSearchParams } from "react-router-dom";

export function CarsPage() {
  // const [searchParams] = useSearchParams();

  // const sortType = searchParams.get("sort");

  // console.log(sortType);

  // const copy = [...otters];

  // // pass by reference vs pass by value
  // if (sortType == "asc") {
  //   // sort alphabeticaly
  //   copy.sort(handleSort);
  // } else if (sortType == "desc") {
  //   // sort other way
  //   copy.sort(handleSort).reverse();
  // }

  // function handleSort(a, b) {
  //   if (a.name < b.name) return -1;
  //   if (a.name > b.name) return 1;
  //   return 0;
  // }

  //.sort() [object Object]
  // optionally take a callbackfunction. that callback function takes two things in the array, and swaps or doesnt swap depending on what comparison you do.

  return (
    <div className="main-container">
      <h1>The Singers</h1>
      <p>
        {" "}
        Below is an assortment of what I believe to be some of the most
        beautiful cars in the world
      </p>
      <div className="sorting">
        <Link className="linkTags" to="/cars">
          Default
        </Link>
        <Link className="linkTags" to="/cars/?sort=asc">
          Sort Commission A - Z
        </Link>
        <Link className="linkTags" to="/cars/?sort=latest">
          Latest
        </Link>
      </div>
      {cars.map((car) => (
        <div key={car.id} className="car-container">
          <h2>The {car.commission}</h2>

          <img className="main-img" src={car.imageLink}></img>
          <h2>Delivered in {car.year}</h2>
        </div>
      ))}
    </div>
  );
}
