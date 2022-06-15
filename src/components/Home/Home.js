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
  if (isLoading) {
    return <Loading loading={isLoading} />;
  }

  return (
    <main className="w-[90%] mx-auto mt-20">
      <form onSubmit={handleForm}>
        <input
          type="text"
          name="query"
          placeholder="search pokemon"
          class="input input-bordered block input-accent lg:w-96 max-w-sm  mx-auto"
          required
        />
        <input
          type="submit"
          value="Search"
          class="input input-bordered block btn-accent text-white  max-w-sm  mx-auto mt-4"
        />
      </form>
    </main>
  );
};

export default Home;
