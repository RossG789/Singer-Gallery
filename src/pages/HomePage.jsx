import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div className="main-blurbs">
      <h1>Welcome to the Singer curation site</h1>
      <p>
        Although Singer does a great job showcasing their cars, this one is made
        with React{" "}
        <span>
          <img
            className="react-img"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          />
        </span>
      </p>
      <Link className="linkTags" to="/about">
        About
      </Link>
    </div>
  );
}
