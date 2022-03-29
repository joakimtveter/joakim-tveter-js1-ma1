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

// Not part of the assignment:
// cat.complain();

//Question 2
const heading = document.querySelector('h3');
heading.innerText = 'Updated Heading';

// Question 3
heading.style.fontSize = '2rem';

// Question 4
heading.classList.add('subheading');

// Quewstion 5
const paragraphs = [...document.querySelectorAll('p')];
paragraphs.forEach((paragraph) => (paragraph.style.color = 'red'));

// Question 6
const resultsContainer = document.querySelector('.results');
const newParagraph = document.createElement('p');
newParagraph.innerText = 'New paragraph';
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
function createCats(cats) {
  const catsContainer = document.querySelector('.cat-container');
  for (let i = 0; i < cats.length; i++) {
    const catContainer = document.createElement('div');

    // Create name node
    const catNameElement = document.createElement('h5');
    const catNameText = cats[i].name ? cats[i].name : 'Name unknown';
    catNameElement.innerText = catNameText;

    // Create Age node
    const catAgeElement = document.createElement('p');
    const catAgeText = cats[i].age ? cats[i].age : 'Age unknown';
    catAgeElement.innerText = catAgeText;

    // Append nodes to container
    catContainer.appendChild(catNameElement);
    catContainer.appendChild(catAgeElement);

    // Append single cat container to container
    catsContainer.appendChild(catContainer);
  }
}

createCats(cats);
