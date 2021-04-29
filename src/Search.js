import Line from "./Line.js";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <form>
        <label>
          <input
            type="text"
            placeholder="What emoji are you looking for?"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </label>
      </form>
      <Line search={search} setSearch={setSearch} />
    </div>
  );
};

export default Search;
