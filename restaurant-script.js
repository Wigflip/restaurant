"use strict";

const menu = {
  starter: {
    s1: {
      name: "Halloumi Sticks & Dip",
      calories: 452,
      price: 4.25,
      type: "vegetarian",
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
      type: "planet-based",
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
      type: "vegetarian",
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
      type: "vegetarian",
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
      type: "planet-based",
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
      type: "vegetarian",
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
      price: 7.5,
      type: "planet-based",
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
      price: 7.5,
      type: "planet-based",
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

    //Trim and add ellipses if desription is too long
    //USE SUBSTRING INSTEAD? WHY USE TERNARY?
    const desc = description.split(" ");
    desc.length > 16
      ? (description = desc.slice(0, 16).join(" ") + `...`)
      : description;
    //REMOVE INLINE STYLE FROM THIS WHEN FINISHED
    const menuItem = `
        <div style="width: 250px; height: 310px"class="item rounded-lg bg-yellow-100 p-5 h-auto min-h-full flex flex-col shadow-lg" data-menutype="${menuType}" data-id="${id}" >
            <div class="relative h-1/4">
                <img style="top:-200%;" class="absolute" src="${image}" />
            </div>
            <h2 class="font-bold text-xl text-amber-500">${name}</h2>
            <div class="mb-1">
                <span>${calories} kcal</span> 
                <span>${type === null ? "" : `| ${type}`}</span> 
            </div>
            <p class="leading-tight mt-4">${description}</p>
            <p class="mt-auto text-lg font-bold text-amber-500">£${price}</p>
        </div>
        `;
    mainMenu.insertAdjacentHTML("afterbegin", menuItem);
  }
}

///////////////////// Item modal
function itemModal() {
  //FIND BETTER SOLUTION FOR TARGETING NESTED OBJECTS
  //WHAT IF I DONT HAVE ACCESS TO ID/TYPE?
  //TRY WITH "FIND"?
  //SEPERATE THIS AND READ OBJECT VALUES ONCE FOR OTHER FUNCTIONS TO USE?
  //DONT NEED
  const [name, calories, price, type, description, , id] = Object.values(
    menu[this.dataset.menutype][this.dataset.id]
  );
  //const itemModal = document.createElement('div');

  let setQuantity = 1;
  let setPrice = price;

  //itemModal.className = 'itemPopUp';
  // main.append(itemModal);
  const itemPopUp = `
    <div class="itemModal bg-orange-700 w-1/4 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg z-20">
        <h1 class="font-bold mb-1 text-xl">${name}</h1>
        <span>${calories} kcal</span> <span>${
    type === null ? "" : `| ${type}`
  }</span> 
        <p class="description">${description}</p>
        <div>
            <span>Quantity:</span>
            <span class="quantity-btn cursor-pointer hidden" data-type="sub">-</span>
            <span class="set-quantity" style="margin-left: 10.3px;">${setQuantity}</span>
            <span class="quantity-btn cursor-pointer" data-type="add">+</span>
        </div>
        <span class="price">£${price}</span>
        <div class="cursor-pointer my-2">
            <div class="add-order-btn p-6 bg-green-600 text-white mb-2">Add order</div>
            <div class="close-btn p-6 border-2 border-white text-white">Close</div>
        </div>
    </div>
    `;
  //itemModal.innerHTML = display;

  document.querySelector("body").insertAdjacentHTML("afterbegin", itemPopUp);
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
      setPrice = updatePrice(setQuantity, price);

      //REFACTOR THIS
      if (setQuantity == 1) {
        quantityBtn[0].style.display = "none";
        displayQuantity.style.marginLeft = "10.3px";
      } else if (setQuantity == 10) {
        quantityBtn[1].style.display = "none";
      } else {
        quantityBtn[0].style.display = "inline";
        quantityBtn[1].style.display = "inline";
        displayQuantity.style.marginLeft = "0px";
      }
      //

      //setPrice = setQuantity * price;
      displayQuantity.textContent = setQuantity;
      displayPrice.textContent = `£${setPrice.toFixed(2)}`;
    }

    //Add order
    if (e.target.classList.contains("add-order-btn")) {
      console.log(id);
      //DO I REALLY NEED TO CREATE AN OBJECT HERE?
      const itemOrder = {
        itemName: name,
        itemQuantity: setQuantity,
        itemPrice: setPrice,
        itemId: id,
      };
      //const [...x] = itemOrder;

      if (basketArr.length === 0) {
        basketArr.push(itemOrder);
        orderNotification();
      } else {
        const currentItem = basketArr.find((item) => item.itemId === id);
        if (currentItem) {
          if (currentItem.itemQuantity < 10) {
            currentItem.itemQuantity += setQuantity;
            currentItem.itemPrice += price;
            orderNotification("update");
          } else {
            orderNotification("max");
          }
          orderNotification(currentItem);
        } else {
          basketArr.push(itemOrder);
          orderNotification("add");
        }
      }
      displayBasket();
      //Reset quantity and price to 1 order of item
      displayQuantity.textContent = 1;
      displayPrice.textContent = `£${price}`;
      itemModal.remove();
      modalOverlay.style.display = "none";
    }

    //Close modal
    if (e.target.classList.contains("close-btn")) {
      console.log("close modal");
      itemModal.remove();
      modalOverlay.style.display = "none";
    }
  });
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
  } else if (type === "add") {
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
  if (basketArr.length === 0) {
    return (orderContent.innerHTML =
      '<p class="text-center pb-4 text-lg">Your basket is empty!</p>');
  } else {
    return (orderContent.innerHTML = " ");
  }
}
emptyBasket();

////////////// Display basket
function displayBasket() {
  let total = 0;
  emptyBasket();
  //DIFFERENT WAY OF DISPLAYING BASKET
  basketArr.forEach((order) => {
    //DO I NEED TO DESTRUCT THIS OBJECT? CAN I DO THIS ELSEWHERE?
    const {
      itemName: name,
      itemQuantity: quantity,
      itemPrice: price,
      itemId: id,
    } = order;
    total += price;
    const content = `
            <div class="mb-6 order-item" data-order="${id}">
                <div class="font-bold flex text-amber-500 mb-2">
                    <span>${name}</span>
                    <span class="inline-block ml-auto item-price">£${price}</span>
                </div>
                <span>
                    <span class="quantity-btn" data-type="sub">-</span>
                    <span class="quantity-num">${quantity}</span>
                    <span class="quantity-btn" data-type="add">+</span>
                </span>
                <span class="delete-btn delete inline-block bg-red-700 text-white p-1" data-btntype="delete">Remove</span>
            </div>
        `;
    orderContent.insertAdjacentHTML("afterbegin", content);
  });

  const insertTotal = document.querySelector(".total");
  insertTotal.textContent = `£${total}`;
}

//////////// Opening item modal - SHOULD BE OUTSIDE FUNCTION. WHEN INSIDE THE EVENT LISTENER
//WAS BEING ADDED EVERYTIME "DISPLAYITEMS" WAS CALLED.
//EVENT DELEGATION VERSION - MORE PERFORMANT FOR GREATER AMOUNT OF ELEMENTS
mainMenu.addEventListener("click", function (e) {
  const target = e.target.closest(".item");

  //guard - IS THERE A BETTER WAY OF DOING THIS?
  if (!target.dataset.menutype) return;
  else itemModal.call(target);
});

/////////////// NAV BUTTONS
//BETTER WAY TO ACCESS NESTED OBJECT? PERFORMANT?
const navbar = document.querySelector("nav");
const navbuttons = document.querySelectorAll(".nav-btn");
//const basketOverlay = document.querySelector(".basket-overlay"); FOR SLIDE OUT BASKET

navbar.addEventListener("click", function (e) {
  const clicked = e.target.closest(".nav-btn");
  //WHY USE THIS?
  if (!clicked) return;

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
  const orderId = itemOrder.dataset.order;
  //const quantityDisplay =

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
          (item) => item.itemId === orderId
        );
        basketArr.splice(itemIndex, 1);
        displayBasket();
        1;
        checkWindow.remove();
      } else {
        checkWindow.remove();
      }
    });
    modalOverlay.style.display = "none";
  }

  //Change quantity of order
  //WORK ON THIS
  if (target.classList.contains("quantity-btn")) {
    console.log(orderId);
    //Get button type
    const btnType = target.closest(".quantity-btn").dataset.type;
    //Find correct item to alter
    const item = basketArr.find((cur) => cur.itemId === orderId);
    //Desctruct obejects for use (REWRITE THIS)
    const { itemPrice, itemQuantity } = item;
    //Get updated quantity
    const updatedQuantity = updateQuantity(btnType, itemQuantity);
    //Search 'menu' object for original item price
    //JSON.stringify?
    let originalPrice;
    Object.values(menu).find((cur) => {
      if (cur[orderId]) {
        originalPrice = cur[orderId].price;
      }
    });
    //Update basket array with new values
    item.itemQuantity = updatedQuantity;
    item.price = updatePrice(updatedQuantity, originalPrice);
    //Update HTML
    const quantityDisplay = itemOrder.querySelector(".quantity-num");
    const priceDisplay = itemOrder.querySelector(".item-price");
    quantityDisplay.textContent = item.itemQuantity;
    priceDisplay.textContent = `£${item.price.toFixed(2)}`;
  }
});
