import { Link } from "react-router-dom";

import mediumIcon from "../Images/icons/medium-icon.png";
import nyplIcon from "../Images/icons/nypl-icon.png";
import bookstoreIcon from "../Images/icons/bookstore-icon.png";

function Footer() {
  return (
    <div className="h-full">
      <footer className="flex flex-wrap justify-between font-headings bg-dark text-white text-lg py-24">
        <div className="flex flex-wrap justify-evenly w-screen items-center">
          <div>
            <ul className="py-4 px-10">
              <Link to="/aboutus">
                <li>Our Favorite Books</li>
              </Link>
              <Link to="/mission">
                <li>Why Books</li>
              </Link>
              <Link to="/aboutus">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div>
            <ul className="py-4 px-10">
              <a href="https://nypl.overdrive.com/">
                <li>NYPL Overdrive</li>
              </a>
              <a href="https://www.gutenberg.org/">
                <li>Gutenberg</li>
              </a>
              <a href="https://www.strandbooks.com/">
                <li>Strand Bookstore</li>
              </a>
            </ul>
          </div>
          <div className="flex justify-between">
            <ul className="py-4 px-10 flex justify-evenly items-center">
              <a href="https://kwikbrain.medium.com/the-neurology-of-reading-fb4e29efa2b5">
                <li>
                  <img
                    className="w-9 h-auto m-3"
                    src={mediumIcon}
                    alt="medium"
                  />
                </li>
              </a>
              <a href="https://www.nypl.org/locations">
                <li>
                  <img className="w-7 h-auto m-3" src={nyplIcon} alt="NYPL" />
                </li>
              </a>
              <a href="http://westsiderbooks.com/bookstore.html">
                <li>
                  <img
                    className="w-7 h-auto m-3"
                    src={bookstoreIcon}
                    alt="bookstore"
                  />
                </li>
              </a>
            </ul>
          </div>

          <p className="flex border-t border-gray-500 text-white-200 pr-8 pl-8 text-xs flex-col flex items-baseline md:items-center">
            &copy; {new Date().getFullYear()} Tsundoku | All Rights Reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
