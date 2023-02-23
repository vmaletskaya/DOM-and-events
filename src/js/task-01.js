const categoriesList = document.querySelector('#categories');

const categories = categoriesList.querySelectorAll('li.item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const categoryTitle = category.querySelector('h2');
  
  const categoryItems = category.querySelectorAll('li');
  
         console.log(`Category: ${categoryTitle.textContent} 
         Elements: ${categoryItems.length}`);
});

