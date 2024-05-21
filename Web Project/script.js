document.addEventListener("DOMContentLoaded", function () {
  // Add fade-in effect to header, login container, register container, and footer
  document.getElementById("recipeHeader").style.opacity = 1;
  document.getElementById("loginContainer").style.opacity = 1;
  document.getElementById("registerContainer").style.opacity = 1;
  document.getElementById("recipeFooter").style.opacity = 1;
});

function generateList() {
  const recipe = document.getElementById("recipe").value;
  const servings = document.getElementById("servings").value;

  // Example grocery lists for each recipe
  const groceryLists = {
    spaghetti: [
      "Tomatoes",
      "Ground Beef",
      "Onions",
      "Garlic",
      "Spaghetti",
    ],
    chicken: [
      "Chicken Breast",
      "Lettuce",
      "Tomatoes",
      "Cucumbers",
      "Caesar Dressing",
    ],
    lasagna: [
      "Lasagna Noodles",
      "Ricotta Cheese",
      "Spinach",
      "Mozzarella",
      "Tomato Sauce",
    ],
    stirFry: [
      "Chicken Thighs",
      "Broccoli",
      "Bell Peppers",
      "Soy Sauce",
      "Rice",
    ],
    tacos: [
      "Ground Beef",
      "Taco Shells",
      "Lettuce",
      "Tomatoes",
      "Cheese",
    ],
    salmon: ["Salmon Fillets", "Lemon", "Dill", "Olive Oil", "Asparagus"],
    pasta: [
      "Pasta",
      "Mixed Vegetables",
      "Alfredo Sauce",
      "Parmesan Cheese",
    ],
    soup: ["Beans", "Tomatoes", "Carrots", "Onions", "Vegetable Broth"],
    pizza: [
      "Pizza Dough",
      "Tomato Sauce",
      "Mozzarella",
      "Basil",
      "Olive Oil",
    ],
    curry: [
      "Mixed Vegetables",
      "Chicken Thighs",
      "Curry Paste",
      "Coconut Milk",
      "Rice",
    ],
    burgers: [
      "Ground Turkey",
      "Whole Wheat Buns",
      "Lettuce",
      "Tomatoes",
      "Mustard",
    ],
    rice: [
      "Chicken Thighs",
      "Teriyaki Sauce",
      "Broccoli",
      "Rice",
      "Sesame Seeds",
    ],
    quiche: ["Pie Crust", "Eggs", "Spinach", "Feta Cheese", "Milk"],
    shrimp: ["Shrimp", "Garlic", "Butter", "Lemon", "Parsley"],
    risotto: [
      "Arborio Rice",
      "Mushrooms",
      "Chicken Broth",
      "Parmesan Cheese",
    ],
    chili: [
      "Kidney Beans",
      "Tomatoes",
      "Onions",
      "Chili Powder",
      "Ground Beef",
    ],
    wraps: [
      "Chicken Breast",
      "Romaine Lettuce",
      "Caesar Dressing",
      "Whole Wheat Wraps",
    ],
    pancakes: ["Pancake Mix", "Blueberries", "Maple Syrup", "Butter"],
    smoothie: [
      "Mixed Berries",
      "Banana",
      "Yogurt",
      "Honey",
      "Almond Milk",
    ],
    meatballs: [
      "Ground Beef",
      "Breadcrumbs",
      "Egg",
      "Parmesan Cheese",
      "Marinara Sauce",
    ],
  };

  displayGroceryList(groceryLists[recipe]);
}

function displayGroceryList(list) {
  const groceryListElement = document.getElementById("groceryList");
  groceryListElement.innerHTML = "";

  list.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    groceryListElement.appendChild(listItem);
  });
}

function showLogin() {
  // Hide recipe container
  document.getElementById("recipeContainer").style.display = "none";

  // Show login container
  document.getElementById("loginContainer").style.display = "flex";
  document.getElementById("registerContainer").style.display = "none";
}

function showRegister() {
  // Hide recipe container
  document.getElementById("recipeContainer").style.display = "none";

  // Show register container
  document.getElementById("registerContainer").style.display = "flex";
  document.getElementById("loginContainer").style.display = "none";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Simple local storage login logic
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!");

    // Show recipe container
    document.getElementById("recipeContainer").style.display = "flex";

    // Hide login container
    document.getElementById("loginContainer").style.display = "none";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}

function register() {
  const newUsername = document.getElementById("newUsername").value;
  const newPassword = document.getElementById("newPassword").value;

  // Simple local storage registration logic
  localStorage.setItem("username", newUsername);
  localStorage.setItem("password", newPassword);

  alert("Registration successful! You can now log in.");

  // Show recipe container
  document.getElementById("recipeContainer").style.display = "flex";

  // Hide register container
  document.getElementById("registerContainer").style.display = "none";
}