import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";

export default function Member({ name, git, blog, email }) {
  return (
    <div className="Member">
      <h6>{name}</h6>
      <p>
        <a className="Member__Icon" href={git}>
          GitHub <AiFillGithub />
        </a>
      </p>
      <p>
        <a className="Member__Icon" href={blog}>
          Blog <FaBlogger />
        </a>
      </p>
      <p>{email}</p>
    </div>
  );
}
