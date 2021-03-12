// error page
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div
      className="font-headings
     text-center bg-offwhite h-screen pt-10 py-1"
    >
      <ul className="pt-15">
        <li>
          <h1 className="md:flex md:justify-center mb-6 text-7xl pt-12">404</h1>
        </li>
        <li>
          <h2 className="text-5xl p-10">Page Not Found</h2>
        </li>
        <li>
          <h2 className="font-bold text-2xl">Keep searching for books </h2>
        </li>
        <li>
          <Link to="/search">
            <div className="md:flex md:justify-center mb-6 pt-5">
              {" "}
              <img
                className="w-8 h-8 "
                src="https://www.svgrepo.com/show/315365/arrow-left-o.svg"
              ></img>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ErrorPage;
