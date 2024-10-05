const URL = `https://fakestoreapi.com/products`;
let category_api = "/category/";

function getUrl(category) {
  if (category === "all") {
    return URL;
  }
  let cat = "";
  switch (category) {
    case "men":
      cat = "men's clothing";
      break;
    case "women":
      cat = "women's clothing";
      break;
    case "accessory":
      cat = "jewelery";
      break;
  }
  return `${URL}${category_api}${cat}`;
}

export default getUrl;
