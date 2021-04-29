import emoji from "./emoji.json";

const Line = ({ search, setSearch }) => {
  const displayHome = () => {
    return emoji.slice(0, 20).map((x, index) => {
      return (
        <div>
          <p
            key={index}
            className="emoji"
            onClick={() => navigator.clipboard.writeText(x.symbol)}
          >
            {x.symbol} {x.title}{" "}
            <span className="emoji-text"> Click to copy!</span>
          </p>
        </div>
      );
    });
  };

  const searchFunc = (x, index) => {
    if (x.keywords.toLowerCase().includes(search.toLowerCase())) {
      return (
        <p
          key={index}
          className="emoji"
          onClick={() => navigator.clipboard.writeText(x.symbol)}
        >
          {x.symbol} {x.title}{" "}
          <span className="emoji-text"> Click to copy!</span>
        </p>
      );
    }
  };
  const searchEngine = () => {
    return emoji.map((x, index) => {
      return searchFunc(x, index);
    });
  };
  return (
    <div>
      <p> {search.length > 0 ? searchEngine() : displayHome()}</p>
    </div>
  );
};
export default Line;
