export default function Member({ name, git, blog, email }) {
  return (
    <div className="Member_Details">
      <p>이름: {name}</p>
      <p>
        깃헙: <a href={git}>{git}</a>
      </p>
      <p>
        블로그: <a href={blog}>{blog}</a>
      </p>
      <p>
        이메일: <a href={email}>{email}</a>
      </p>
    </div>
  );
}
