

export const UserInformation = () => {
  return (
    <section className="User__Information__Container">
      <article className="User__Profil">
        <div className="Information__Contents">
        <img className="Icon__Image" src={process.env.PUBLIC_URL + './Image/Icon.jpg'}/>
        <span className="User__Name">늑 사 덤</span>
        </div>
      </article>
      <div className="Tier__InforMation">하이바이</div>
    </section>
  );
}
