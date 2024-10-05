import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/Cards";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-72 pb-20'>
        <Cards />
      </div>
    </div>
  );
};

export default App;
