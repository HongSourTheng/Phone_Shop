import { Link } from "react-router-dom";
import { data } from "../data/data";
import Card from "../components/Card";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState(data);
  function getIdUser(id) {
    const filterUser = user.filter((e) => {
      if (e.id != id) {
        return e;
      }
    });
    setUser(filterUser);
  }
  return (
    <section>
      <h2 className="product-heading">Home-page</h2>
      <div className="card-container">
        {user.map((e) => {
          return <Card {...e} key={e.id} getId={getIdUser} />;
        })}
      </div>
    </section>
  );
};

export default Home;
