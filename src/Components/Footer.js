// import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className=" flex justify-center font-headings bg-black text-white sm:mt-10 pt-10 grid gap-4 grid-cols-3">
        <div className="max-w-6xl m-auto flex flex-wrap justify-left">
          <ul>
            <li>Our Favorite</li>
            <li>Why Books</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <ul>
            <li>Team</li>
            <li>Save Libraries</li>
            <li>Strand</li>
          </ul>
        </div>

        <div className="max-w-6xl m-auto flex flex-wrap justify-right">
          <ul>
            <li>Medium</li>
            <li>Insta</li>
            <li>Twitter</li>
          </ul>
        </div>
        <p className="flex items-stretch items-end pb-1.5 px-3 m-auto pt-2 border-t border-gray-500 text-white-200 text-sm flex-col">
          &copy;{new Date().getFullYear()} Tsundoku | All Rights Reserved |
          Terms Of Service | Privacy
        </p>
      </footer>
    </div>
  );
}
export default Footer;
