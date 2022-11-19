const menu = [
  {
    id: 1,
    title: "Nutella Pancakes",
    category: "breakfast",
    price: 15.99,
    img: "images/item1.jpg",
    desc: "Pancakes STUFFED NEATLY with Nutella and topped with Strawberries, Bananas!",
  },

  {
    id: 2,
    title: "Fruits & Oatmeal",
    category: "breakfast",
    price: 10.99,
    img: "images/item2.jpg",
    desc: "A tummy feeling recipe that has some juicy fruits giving company to oats!",
  },

  {
    id: 3,
    title: "Caesar Salad",
    category: "lunch",
    price: 29.99,
    img: "images/item3.jpg",
    desc: "a salad of romaine lettuce tossed with an olive oil and grated cheese and topped with croutons",
  },

  {
    id: 4,
    title: "Fruit  Salad",
    category: "dinner",
    price: 25.99,
    img: "images/item4.jpg",
    desc: "Layers of fresh fruit are soaked a citrusy sauce in this colorful salad.",
  },

  {
    id: 5,
    title: "Fruit Yogurt",
    category: "breakfast",
    price: 20.99,
    img: "images/item5.jpg",
    desc: "Greek Yogurt with Sautéed Dried Fruits",
  },

  {
    id: 6,
    title: "Green Detox Smoothie",
    category: "shakes",
    price: 9.99,
    img: "images/item6.jpg",
    desc: "Smoothie with Kiwi, Cucumber, Green Apple, Spinach, Mint",
  },

  {
    id: 7,
    title: "Avocado Toast with Egg",
    category: "breakfast",
    price: 12.99,
    img: "images/item7.jpg",
    desc: "It's a simple healthy protein-packed breakfast, snack or light meal!",
  },

  {
    id: 8,
    title: "Red Velvet Cake",
    category: "lunch",
    price: 4.99,
    img: "images/item8.jpg",
    desc: "Silky texture, moist, but never dense!",
  },

  {
    id: 9,
    title: "Blueberry Cheesecake",
    category: "lunch",
    price: 5.99,
    img: "images/item9.jpg",
    desc: "This Cheesecake is bursting with blueberries is an understatement!",
  },

  {
    id: 10,
    title: "Oreo Milkshake",
    category: "shakes",
    price: 7.99,
    img: "images/item10.jpg",
    desc: "Combined with ice cream, milk, chocolate sauce, and Oreos. Topped with whipped cream!",
  },
];

//targeting elements
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  dsiplayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(
    (item) =>
      `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title} />
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                  </header>
                  <p class="item-text">
                  ${item.desc}
                  </p>
                </div>
              </article>`
  );
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function dsiplayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(
      (
        category
      ) => `<button class="filter-btn" type="button" data-id="${category}">
              ${category}
            </button>`
    )
    .join("");
  btnContainer.innerHTML = categoryBtns;

  //buttons are added dynamically so it can be accessed only once it has been added to the DOM
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        //       console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      //     console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
