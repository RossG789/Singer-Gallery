import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <div className="main-blurbs">
      <h1>Why do this?</h1>
      <p>
        As a long time fan of Porsches and, especially, Singer Porsches I wanted
        to try my hand at curating their amazing collection of cars for myself.
      </p>
      <Link className="linkTags" to="/cars">
        <h2>See some of my favourites</h2>
      </Link>
    </div>
  );
}
