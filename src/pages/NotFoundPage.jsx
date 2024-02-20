import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="main-blurbs">
      <h2>Not Found</h2>
      <Link className="linkTags" to="/">
        Go Home
      </Link>
    </div>
  );
}
