
export const UserInformation = () => {
  return (
    <section className="User__Information__Container">
      <article className="User__Profil">
        <div className="Information__Contents">
          <img
            className="Icon__Image"
            src={process.env.PUBLIC_URL + "./Image/Icon.jpg"}
          />
          <span className="User__Name">늑 사 덤</span>
        </div>
      </article>
      <div className="Tier__InforMation">
          <div className="Tab__Tier__Container">
            <img
              className="Icon__Image"
              src={process.env.PUBLIC_URL + "./Image/PlatinumImage.png"}
            />
            <div className="Tab__Tier__Contents">
              <span className="Tab__Tier__Contents__1">Platinum 3</span>
              <span className="Tab__Tier__Contents__2">29LP</span>
            </div>
          </div>
      </div>
    </section>
  );
};
