import "./styles.css";

export default function App() {
  // PowerSet
  function getPowerset(n = "") {
    const array = Array.from(n);
    const base = [""];

    const results = array.reduce((previous, element) => {
      const previousPlusElement = previous.map((el) => `${el}${element}`);
      return previous.concat(previousPlusElement);
    }, base);

    return results;
  }

  // Permutations
  function getPermutations(string, prefix = "") {
    let permutations = "";

    if (string.length <= 1) {
      permutations = [prefix + string];
    } else
      permutations = Array.from(string).reduce((result, char, index) => {
        const reminder = string.slice(0, index) + string.slice(index + 1);
        result = result.concat(getPermutations(reminder, prefix + char));
        return result;
      }, []);

    return permutations;
  }

  const test = "abcd";

  const powerset = getPowerset(test);
  console.log("Powerset:\n" + powerset.join(", "));

  const permutations = getPermutations(test);
  console.log("Permutations:\n" + permutations.join(", "));

  return (
    <div className="App">
      <h1>PowerSet, Permutations</h1>
      <br />
      <h2>PowerSet</h2>
      <h3>{powerset.join(", ")}</h3>
      <br />
      <h2>Permutations</h2>
      <h3>{permutations.join(", ")}</h3>
    </div>
  );
}
