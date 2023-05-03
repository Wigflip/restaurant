"use strict";

const menu = {
  starter: {
    s1: {
      name: "Halloumi Sticks & Dip",
      calories: 452,
      price: 4.25,
      type: "Vegetarian",
      description:
        "Five chunky sticks of grilled halloumi with our chilli jam for dipping.",
      image: "images/SLIDER3a.png",
      id: "s1",
      menuType: "starter",
    },
    s2: {
      name: "Spicy Mixed Olives",
      calories: 138,
      price: 3.75,
      type: "Planet-based",
      description:
        "Spicy mixed olives co-starring mushrooms, garlic and red pepper.",
      image: "images/SLIDER3a.png",
      id: "s2",
      menuType: "starter",
    },
    s3: {
      name: "PERi-PERi Nuts",
      calories: 138,
      price: 3.75,
      type: "Vegetarian",
      description:
        "Crunchy almonds, cashews and macadamia nuts in a fiery PERi-PERi seasoning.",
      image: "images/SLIDER3a.png",
      id: "s3",
      menuType: "starter",
    },
    s4: {
      name: "Halloumi Sticks & Dip",
      calories: 452,
      price: 4.25,
      type: "Vegetarian",
      description:
        "Five chunky sticks of grilled halloumi with our chilli jam for dipping.",
      image: "images/SLIDER3a.png",
      id: "s4",
      menuType: "starter",
    },
    s5: {
      name: "Spicy Mixed Olives",
      calories: 138,
      price: 3.75,
      type: "Planet-based",
      description:
        "Spicy mixed olives co-starring mushrooms, garlic and red pepper.",
      image: "images/SLIDER3a.png",
      id: "s5",
      menuType: "starter",
    },
    s6: {
      name: "PERi-PERi Nuts",
      calories: 138,
      price: 3.75,
      type: "Vegetarian",
      description:
        "Crunchy almonds, cashews and macadamia nuts in a fiery PERi-PERi seasoning.",
      image: "images/SLIDER3a.png",
      id: "s6",
      menuType: "starter",
    },
  },
  main: {
    m1: {
      name: "Chicken Butterfly",
      calories: 332,
      price: 8.75,
      type: null,
      description:
        "Two chicken breasts, joined by crispy flame-grilled skin. Infused with PERi-PERi and served in your choice of spice.",
      image: "images/SLIDER3a.png",
      id: "m1",
      menuType: "main",
    },
    m2: {
      name: "Grilled Chicken Wrap",
      calories: 566,
      price: 7.50,
      type: "Planet-based",
      description:
        "Chicken breast infused with PERi-PERi and grilled to your favourite spice. Served in a wrap with lettuce, lightly spiced yoghurt mayo and chilli jam.",
      image: "images/SLIDER3a.png",
      id: "m2",
      menuType: "main",
    },
    m3: {
      name: "1/4 Chicken",
      calories: 566,
      price: 5.25,
      type: null,
      description:
        "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served on the bone with crispy skin, in your choice of spice.",
      image: "images/SLIDER3a.png",
      id: "m3",
      menuType: "main",
    },
    m4: {
      name: "Chicken Butterfly",
      calories: 332,
      price: 8.75,
      type: null,
      description:
        "Two chicken breasts, joined by crispy flame-grilled skin. Infused with PERi-PERi and served in your choice of spice.",
      image: "images/SLIDER3a.png",
      id: "m4",
      menuType: "main",
    },
    m5: {
      name: "Grilled Chicken Wrap",
      calories: 566,
      price: 7.50,
      type: "Planet-based",
      description:
        "Chicken breast infused with PERi-PERi and grilled to your favourite spice. Served in a wrap with lettuce, lightly spiced yoghurt mayo and chilli jam.",
      image: "images/SLIDER3a.png",
      id: "m5",
      menuType: "main",
    },
    m6: {
      name: "1/4 Chicken",
      calories: 566,
      price: 5.25,
      type: null,
      description:
        "Flame-grilled, infused with PERi-PERi and perfect for pairing with sides. Served on the bone with crispy skin, in your choice of spice.",
      image: "images/SLIDER3a.png",
      id: "m6",
      menuType: "main",
    },
  },
};

/////////////// DOCUMENT VARIABLES
const appBody = document.querySelector("body");
const quantityBtn = document.querySelectorAll(".quantity-btn");
const mainMenu = document.querySelector(".mainMenu");
const basketBtn = document.querySelector(".basket-btn");
const slide = document.querySelector(".order-slider");
const orderContent = document.querySelector(".order-content");
const main = document.querySelector("main");
const modalOverlay = document.querySelector(".modal-overlay");
const basketArr = [];

/////////////// DISPLAY MENU ITEMS
function displayItems() {
  //DOCUMENT FRAGMENT TO CREATE/ADD ITEMS?
  mainMenu.innerHTML = "";
  //const menu = Object.values(this);
  //HOW PERFORMANT IS ALL OF THIS?
  for (const item of Object.values(this)) {
    //WHY .VALUES AND NOT .ENTRIES?
    let { name, calories, price, type, description, image, id, menuType } =
      item;
    //create the menu div
    //menuItem.setAttribute("data", `id: ${item.id}`); ALT WAY OF ADDING ATTRIBUTES (BETTER PERFORMANCE)

    //Trim description to word and add ellipses if desription is too long
    //WHY USE TERNARY? SHORTER
    const trimDescription = description.split(" ");
    trimDescription.length > 16
      ? description = trimDescription.slice(0, 15).join(" ") + `...`
      : description;

    //Trim name to word
    const trimName = name.split(" ");
    trimName.length >= 4
      ? name = trimName.slice(0, 3).join(" ") + `...`
      : name;

    //SUBSTRING VERSION - TRIM TO CHARACTER - CAN I DO IT BY WORD?
    //description = description.length > 16 ? description.substring(0, 32) + "..." : description;
    
    //GO OVER TAILWIND STYLES
    const menuItem = `
        <div class="w-[250px] h-[310px] item rounded-lg bg-secondary2 p-5 min-h-full flex flex-col shadow-lg" data-menutype="${menuType}" data-id="${id}" >
            <div class="relative h-1/4">
                <img class="absolute top-[-200%]" src="${image}" />
            </div>
            <h2 class="font-bold text-xl text-amber-500">${name}</h2>
            <div class="mb-1 text-important">
                <span>${calories} kcal</span> 
                <span>${type === null ? "" : `| ${type}`}</span> 
            </div>
            <p class="leading-tight mt-3 text-my-brown">${description}</p>
            <p class="mt-auto text-xl font-bold text-amber-500">£${price.toFixed(2)}</p>
        </div>
        `;
    mainMenu.insertAdjacentHTML("afterbegin", menuItem);
  }
}
displayItems.call(menu['starter']);

///////////////////// Item modal
function itemModal() {

  // console.log(Object.entries(menu[this.dataset.menutype][this.dataset.id]));
  // const [name, calories, price, type, description, _image, id, _menuType] = Object.values(
  //   menu[this.dataset.menutype][this.dataset.id]
  // );

  //FIND BETTER SOLUTION FOR TARGETING NESTED OBJECTS
  //WHAT IF I DONT HAVE ACCESS TO ID/TYPE?
  //TRY WITH "FIND"?
  //SEPERATE THIS AND READ OBJECT VALUES ONCE FOR OTHER FUNCTIONS TO USE?
  const item = menu[this.dataset.menutype][this.dataset.id];
  

  let setQuantity = 1;
  let setPrice = item.price;

  //itemModal.className = 'itemPopUp';
  // main.append(itemModal);
  const itemPopUp = `
    <div class="itemModal bg-secondary w-1/4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg z-20">
        <h1 class="font-bold mb-1 text-xl">${item.name}</h1>
        <span>${item.calories} kcal</span> <span>${item.type === null ? "" : `| ${item.type}`}</span> 
        <p class="description">${item.description}</p>
        <div>
            <span class="quantity-btn inline-block bg-amber-500 cursor-pointer w-[23px] h-[23px] rounded-[100px]" data-type="sub">-</span>
            <span class="set-quantity text-black radius">${setQuantity}</span>
            <span class="quantity-btn inline-block bg-amber-500 cursor-pointer w-[23px] h-[23px] rounded-[100px]" data-type="add">+</span>
        </div>
        <span class="price">£${item.price.toFixed(2)}</span>
        <div class="cursor-pointer my-2">
            <div class="add-order-btn p-4 bg-amber-500 text-white mb-2 text-center text-xl">Add order</div>
            <div class="close-btn p-2 text-black text-center text-xl">Close</div>
        </div>
    </div>
    `;

  appBody.insertAdjacentHTML("afterbegin", itemPopUp);
  //Apply overlay to provent additional popups from being selected
  modalOverlay.style.display = "block";

  //ADD/SUBTRACT BUTTONS
  const quantityBtn = document.querySelectorAll(".quantity-btn");
  const displayQuantity = document.querySelector(".set-quantity");
  const displayPrice = document.querySelector(".price");

  //Get modal for event listener
  const itemModal = document.querySelector(".itemModal");
  itemModal.addEventListener("click", function (e) {
    //Update quantity and price
    if (e.target.classList.contains("quantity-btn")) {
      const type = e.target.dataset.type;

      setQuantity = updateQuantity(type, setQuantity);
      setPrice = updatePrice(setQuantity, item.price);

      //REFACTOR THIS
      if (setQuantity == 1) {
        quantityBtn[0].style.display = "none";
      } else if(setQuantity == 10) {
        quantityBtn[1].style.display = "none";
      } 
      //

      //setPrice = setQuantity * price;
      displayQuantity.textContent = setQuantity;
      displayPrice.textContent = `£${setPrice.toFixed(2)}`;
    }

    //Add order
    if (e.target.classList.contains("add-order-btn")) {
      //Create new object to avoid changing original object
      const itemOrder = {
        name: item.name,
        quantity: setQuantity,
        price: setPrice,
        id: item.id,
      };
      //const [...x] = itemOrder;

      if (basketArr.length === 0) {
        basketArr.push(itemOrder);
        orderNotification("add");
      } else {
        const currentItem = basketArr.find((currentItem) => currentItem.id === itemOrder.id);
        if (currentItem) {
          if (currentItem.quantity < 10) {
            currentItem.quantity += setQuantity;
            currentItem.price += setPrice;
            orderNotification("update");
          } else {
            orderNotification("max");
          }
          //orderNotification(currentItem);
        } else {
          basketArr.push(itemOrder);
          orderNotification("add");
        }
      }
      displayBasket();
      //Reset quantity and price to 1 order of item
      displayQuantity.textContent = 1;
      displayPrice.textContent = `£${itemOrder.price.toFixed(2)}`;
      closeModal(itemModal);
    }

    //Close modal
    if (e.target.classList.contains("close-btn")) {
      closeModal(itemModal);
    }
  });
}

///// Close modal and remove background
function closeModal(theModal){
  theModal.remove();
  modalOverlay.style.display = "none";
}

//////////// Update quantity of order
function updateQuantity(type, quantity) {
  //REFACTOR THIS?
  if (quantity < 10 && type === "add") {
    return ++quantity;
  } else if (quantity > 1 && type === "sub") {
    return --quantity;
  } else {
    return quantity;
  }
}

//////////// Update quantity of order
function updatePrice(quantity, price) {
  return quantity * price;
}

//////////// Order notification
function orderNotification(type) {
  const notification = document.querySelector(".order-note");
  //Can omit curly braces for single line statements. NOT BEST PRATICE
  if (type === "update") {
    notification.textContent = "Order updated";
  } else if (type === "max") {
    notification.textContent = "Max order limit reached";
  } else {
    notification.textContent = "Order added";
  }

  notification.style.display = "block";
  //BETTER WAY TO DO THIS?
  setTimeout(function () {
    notification.style.display = "none";
  }, 1500);
}

////////////// Check for empty basket
function emptyBasket() {
  //reset basket to display new array elements or display message if array is empty
  const message = `<p class="text-center pb-4 text-lg">Your basket is empty!</p>`
  if (basketArr.length === 0) {
    orderContent.innerHTML = message;
  } else {
    orderContent.innerHTML = " ";
  }
}
emptyBasket();

////////////// Display basket
function displayBasket() {
  let total = 0;
  emptyBasket();
  //DIFFERENT WAY OF DISPLAYING BASKET
  basketArr.forEach((order) => {
    total += order.price;
    const content = `
            <div class="mb-6 order-item" data-order="${order.id}">
                <div class="font-bold flex text-amber-500 mb-2">
                    <span>${order.name}</span>
                    <span class="inline-block ml-auto item-price">£${order.price.toFixed(2)}</span>
                </div>
                <span>
                    <span class="quantity-btn" data-type="sub">-</span>
                    <span class="quantity-num">${order.quantity}</span>
                    <span class="quantity-btn" data-type="add">+</span>
                </span>
                <span class="delete-btn delete inline-block bg-red-700 text-white p-1" data-btntype="delete">Remove</span>
            </div>
        `;
    orderContent.insertAdjacentHTML("afterbegin", content);
  });

  const insertTotal = document.querySelector(".total");
  insertTotal.textContent = `£${total.toFixed(2)}`;
}

//////////// Opening item modal - SHOULD BE OUTSIDE FUNCTION. WHEN INSIDE THE EVENT LISTENER
//WAS BEING ADDED EVERYTIME "DISPLAYITEMS" WAS CALLED.
//EVENT DELEGATION VERSION - MORE PERFORMANT FOR GREATER AMOUNT OF ELEMENTS
mainMenu.addEventListener("click", function (e) {
  const target = e.target.closest(".item");

  //guard - IS THERE A BETTER WAY OF DOING THIS?
  if (target === null) return;
  itemModal.call(target);
});

/////////////// NAV BUTTONS
//BETTER WAY TO ACCESS NESTED OBJECT? PERFORMANT?
const navbar = document.querySelector("nav");
const navbuttons = document.querySelectorAll(".nav-btn");
//const basketOverlay = document.querySelector(".basket-overlay"); FOR SLIDE OUT BASKET

navbar.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav-btn");
  //WHY USE THIS?
  if (clicked ===  null) return;

  //USE REGEX TO SEARCH FOR STRING? USE FILTER? REFACTOR
  //SOLUTION 1
  // const x = [...navbuttons];
  // x.find(cur => cur.classList.contains("--open")).classList.remove("--open");

  //SOLUTION 2
  Array.from(navbuttons)
    .find((cur) => cur.classList.contains("--open"))
    .classList.remove("--open");

  clicked.classList.add("--open");
  displayItems.call(menu[clicked.dataset.type]);
});

//////////////// DELETE/CHANGE ORDER IN BASKET
orderContent.addEventListener("click", function (e) {
  const target = e.target;
  //Get the ID from the click item in the basket
  const itemOrder = target.closest(".order-item");
  //"ORDERID" IS BEING READ AS "NULL", WHY?
  const orderId = itemOrder.dataset.order;

  //WORK ON THIS
  //if(target.dataset.btntype != "delete" || target.dataset.type != "quantity") return;

  //Delete order from basket
  if (target.dataset.btntype === "delete") {
    modalOverlay.style.display = "block";

    //Check if user is sure
    const doubleCheck = `
        <div class="checkwindow absolute w-full h-20 bg-green-500 left-0 z-40">
            <p>Are you sure want to delete this order?</p>
            <span class="doublecheck-btn p-4" data-check="yes">Yes</span>
            <span class="doublecheck-btn p-4" data-check="no">No</span>
        </div>`;
    orderContent.insertAdjacentHTML("beforeend", doubleCheck);
    const checkWindow = document.querySelector(".checkwindow");

    checkWindow.addEventListener("click", function (e) {
      const target = e.target.closest(".doublecheck-btn");
      if (target.dataset.check === "yes") {
        const itemIndex = basketArr.findIndex(
          (item) => item.id === orderId
        );
        basketArr.splice(itemIndex, 1);
        displayBasket();
        closeModal(checkWindow);
      } else {
        closeModal(checkWindow);
      }
    });
    modalOverlay.style.display = "none";
  }

  //Change quantity of order
  //WORK ON THIS
  if (target.classList.contains("quantity-btn")) {
    //Find correct item to alter
    const basketItem = basketArr.find((cur) => cur.id === orderId);
    
    //Search 'menu' object for original item price for calculation
    //JSON.stringify?
    let originalPrice;
    //Get button type
    const btnType = target.closest(".quantity-btn").dataset.type;
    //Get updated quantity
    const newQuantity = updateQuantity(btnType, basketItem.quantity);
    Object.values(menu).find((cur) => {
      if (cur[orderId]) {
        originalPrice = cur[orderId].price;
      }
    });
    //Update basket array with new values
    basketItem.price = updatePrice(newQuantity, originalPrice)
    basketItem.quantity = newQuantity;
    
    //Update HTML
    const quantityDisplay = itemOrder.querySelector(".quantity-num");
    const priceDisplay = itemOrder.querySelector(".item-price");
    quantityDisplay.textContent = basketItem.quantity;
    priceDisplay.textContent = `£${basketItem.price.toFixed(2)}`;
  }
});
