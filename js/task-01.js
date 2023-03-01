
  
const categoriesRefs = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesRefs.length}`);

categoriesRefs.forEach((category) => {
const categoryTitle = category.firstElementChild.textContent;
const categoryElements = category.lastElementChild.children.length;
console.log(`Category: ${categoryTitle}`);
console.log(`Elements: ${categoryElements}`);
});