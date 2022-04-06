const cats = [
  {
    name: 'Blob',
    age: 10,
  },
  {
    name: 'Harold',
  },
  {
    name: 'Blurt',
    age: 21,
  },
];

// Question 1

const cat = {
  complain: () => console.log('Meow!'),
};

// Envoking the method was not part of the assignment:
// cat.complain();

//Question 2
const heading = document.querySelector('h3');
heading.innerText = 'Updated Heading';

// Question 3
heading.style.fontSize = '2rem';

// Question 4
heading.classList.add('subheading');

// Quewstion 5
// Convert nodelist to array to get access to all array methoods
const paragraphs = [...document.querySelectorAll('p')];
paragraphs.forEach((paragraph) => (paragraph.style.color = 'red'));

// Question 6
// Got premission from Connor O'Brien to not use innerHTML to solve this task.
const resultsContainer = document.querySelector('.results');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New paragraph';
resultsContainer.appendChild(newParagraph);
resultsContainer.style.backgroundColor = 'yellow';

// Question 7
function logNames(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

logNames(cats);

// Question 8
// Got premission from Connor O'Brien to not use innerHTML to solve this task.
// This means that i don't return anything from the function.
function createCats(cats) {
  const catsContainer = document.querySelector('.cat-container');
  for (let i = 0; i < cats.length; i++) {
    const catContainer = document.createElement('div');

    // Create name node
    const catNameElement = document.createElement('h5');
    const catNameText = cats[i].name ? cats[i].name : 'Name unknown';
    catNameElement.textContent = catNameText;

    // Create Age node
    const catAgeElement = document.createElement('p');
    const catAgeText = cats[i].age ? cats[i].age : 'Age unknown';
    catAgeElement.textContent = catAgeText;

    // Append nodes to container
    catContainer.appendChild(catNameElement);
    catContainer.appendChild(catAgeElement);

    // Append single cat container to container
    catsContainer.appendChild(catContainer);
  }
}

createCats(cats);
