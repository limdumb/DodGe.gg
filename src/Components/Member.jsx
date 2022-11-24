import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";

export default function Member({ name, git, blog, email }) {
  return (
    <div className="Member">
      <h6>{name}</h6>
      <ul className="Member__List">
        <li className="Member__List__Item">
          <a href={git}>
            GitHub <AiFillGithub />
          </a>
        </li>

        <li className="Member__List__Item">
          <a href={blog}>
            Blog <FaBlogger />
          </a>
        </li>
        <li className="Member__List__Item">
          <span>{email}</span>
        </li>
      </ul>
    </div>
  );
}
