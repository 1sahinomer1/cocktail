import HomeNav from "../Components/HomeNav";

function Home() {
  return (
    <div>
      <video
        autoPlay
        muted
        loop
        preload="auto"
        aria-hidden="true"
        className="videoBackground"
      >
        <source src="https://talesofthecocktail.org/wp-content/uploads/2020/03/TOTC-COCKTAILS-16x9-1.mp4" />
      </video>
      <HomeNav />
    </div>
  );
}

export default Home;
