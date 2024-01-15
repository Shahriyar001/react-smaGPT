const Test = () => {
  function reversestring(str) {
    const reverse = str.split("").reverse().join("");
    const flat = reverse.split("").reverse().join("");
    return flat;
  }

  console.log(reversestring("string"));

  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  console.log(factorial(4));

  return <div></div>;
};

export default Test;
