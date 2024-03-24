const Home = () => {
  return (
    <div className="home">
      <div className="home__text">
        <h2>State Exercise</h2>
        <p>
          Ova stranica je dio vježbe za upoznavanje s konceptom useState u
          Reactu. State je mehanizam koji omogućuje komponentama da pamte
          informacije i reagiraju na promjene tih informacija.
        </p>
      </div>
      <div className="home__photo">
        <img
          src="https://source.unsplash.com/random/1000x1000/?coding"
          alt="random photo"
        />
      </div>
    </div>
  );
};

export default Home;
