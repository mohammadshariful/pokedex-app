import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const url = `https://pokeapi.co/api/v2/pokemon/${searchQuery}`;
  const { data, isLoading } = useQuery(["data", searchQuery], () =>
    fetch(url).then((res) => res.json())
  );

  const handleForm = (event) => {
    event.preventDefault();
    const query = event.target.query.value;
    setSearchQuery(query.toLowerCase());
  };

  return (
    <main
      className="w-[90%] mx-auto mt-20 py-10"
      style={{
        backgroundColor: "#24292E",
        borderRadius: "8px",
      }}
    >
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="query"
          placeholder="search pokemon"
          className="input input-bordered block input-accent lg:w-96 max-w-sm  mx-auto"
          required
        />
        <input
          type="submit"
          value="Search"
          className="input input-bordered block btn-accent text-white  max-w-sm  mx-auto mt-4"
        />
      </form>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : data ? (
        <section className="mt-5 text-white">
          <div className="card max-w-md  bg-base-100 shadow-md mx-auto">
            <div className="card-body">
              <img
                className="w-24 mx-auto"
                src={data?.sprites?.other.dream_world?.front_default}
                alt=""
              />
              <div>
                <h3 className="text-center text-accent">{data?.name}</h3>
                <hr />
                <div className="flex justify-between items-center mt-2">
                  {/* <span>
                    HP
                    {Math.floor(Math.random() * data?.stats[0]?.base_stat) + 1}/
                    {data?.stats[0]?.base_stat}
                  </span> */}
                  <span>XP {data?.base_experience}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                {/*  <div>
                   <p>
                    {data?.types[0]?.type?.name} / {data?.types[1]?.type?.name}
                  </p>
                  <small>Type</small>
                </div> */}
                <div>
                  <p>{data?.weight}kg</p>
                  <small>Weight</small>
                </div>
                <div>
                  <p>{data?.height}m</p>
                  <small>Height</small>
                </div>
              </div>
              <hr />
              <div className="flex justify-between items-center">
                <div>
                  <p>{Math.floor(Math.random() * 10000 + 1)}</p>
                  <p>Stardust</p>
                </div>
                <div>
                  <p>{Math.floor(Math.random() * 200 + 1)}</p>
                  <p>{data.name} Candy</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <p className="text-center mt-2 text-error">
          No Result found.Search Again !
        </p>
      )}
    </main>
  );
};

export default Home;
