const data = ["apple", "apricot", "application"];

const searchBox = document.getElementById("search");

const searchInput = document.createElement("input");
searchInput.type = "text";
searchInput.id = "searchInp";
searchInput.placeholder = "Search products";

searchBox.appendChild(searchInput);

const showResult = document.getElementById("output");

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const displayResults = (results) => {
  showResult.innerHTML = "";

  if (results.length === 0) {
    showResult.textContent = "No results found";
    return;
  }

  results.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    showResult.appendChild(div);
  });
};
const searchProducts = (query) => {
  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  displayResults(filteredData);
};

searchInput.addEventListener(
  "input",
  debounce((event) => {
    const query = event.target.value;
    searchProducts(query);
  }, 500)
);
