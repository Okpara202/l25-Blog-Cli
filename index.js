const prompt = require("prompt-sync")({ sigint: true });

// Creating reference for generating Article id
let id = 0;

// Create the blog Articles
const blogArticle = [
  // Creating the already existing news articles
  {
    id: id,
    title: "My mentor is a good person",
    description: "God bless my Mentor... ",
  },
  {
    id: ++id,
    title: "I don't like my code buddy",
    description:
      " I think my partner is very stubborn. Pains me she knows it but won't admit it...😂😂😂 ",
  },
  {
    id: ++id,
    title: "10 tips for writing clean code",
    description:
      "Writing clean code is essential for maintanable software... Take a break and celebrate your little wins. A wise man once told me, 'as long as it shows on the screen, its a win'. ",
  },
];

function blogMenu() {
  // Creating CRUD function / blog flow
  console.log("Favour's Blog \n Select (use number) what you want to do:");
  console.log("1. Create Post");
  console.log("2. Display Post");
  console.log("3. Read Post");
  console.log("4. Update Post");
  console.log("5. Delete Post");
  console.log("6. Close Blog");
}

function createPost() {
  // Create the article
  const article = {
    id: ++id,
    title: prompt("What is the Article title: "),
    description: prompt("Write your article here : "),
  };

  // Add it to the blog
  blogArticle.push(article);
  console.log("\n \n New Blog article has been published \n \n");
}

function displayPost() {
  // Display every object (article) in the blogArticle Array

  if (blogArticle.length === 0) {
    console.log(
      "\n \n Site is down. No post available. To fix this, create a post \n \n",
    );
  }
  blogArticle.forEach((article) =>
    console.log(`\n id : ${article.id} \n title : ${article.title} \n `),
  );
}

function readPost() {
  // Display a selected object(article)

  // Get the id
  const id = Number(prompt("Enter id(number) of the blog you want to read: "));

  const articleIndex = blogArticle.findIndex((article) => article.id === id);

  // check if an article with that id exists
  if (blogArticle[articleIndex]) {
    // Display if it does
    console.log(
      `\n \n id : ${blogArticle[articleIndex].id} \n title : ${blogArticle[articleIndex].title} \n description : ${blogArticle[articleIndex].description} \n \n`,
    );
  } else {
    console.log("\n \n Article not found \n \n");
  }
}

function updatePost() {
  // Making Changes to the Articles

  // Get the id of the blog to be updated
  const id = Number(
    prompt("Enter id(number) of the blog you want to update: "),
  );

  const articleId = blogArticle.findIndex((article) => article.id === id);

  // check if an article with that id exists
  if (blogArticle[articleId]) {
    // Update if it does
    blogArticle[articleId].title = prompt("What is the new Title: ");
    blogArticle[articleId].description = prompt(
      "Write the changes to the Article: ",
    );
    console.log(`\n \nArticle ${id} has been successfully updated\n \n`);
  } else {
    console.log("\n \n Article not found \n \n");
  }
}

function deletePost() {
  // Get the id of the blog to be updated
  const id = Number(
    prompt("Enter id(number) of the blog you want to delete: "),
  );

  const articleIndex = blogArticle.findIndex((article) => article.id === id);

  // check if an article with that id exists
  if (blogArticle[articleIndex]) {
    // use splice to remove the object at the index that is equal to the selected id
    blogArticle.splice(articleIndex, 1);
    console.log(`\n \n Article ${id} deleted \n \n`);
  } else {
    console.log("\n \n Article not found \n \n");
  }
}

function closeBlog() {
  console.log(`\n \n Logging out...`);
  process.exit(0);
}

function handleUserInput(userChoice) {
  // Handle user Navigation
  switch (userChoice) {
    case 1:
      createPost();
      break;
    case 2:
      displayPost();
      break;
    case 3:
      readPost();
      break;
    case 4:
      updatePost();
      break;
    case 5:
      deletePost();
      break;
    case 6:
      closeBlog();
      break;
    default:
      console.log("\n \n Invalid choice. Please choose again \n \n");
  }
}

function blog() {
  while (true) {
    blogMenu();
    const userChoice = Number(prompt("What do you want to do: "));
    handleUserInput(userChoice);
  }
}

blog();
