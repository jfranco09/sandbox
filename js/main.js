let newElements = [];

//Start buttons
//button 1
const changeAllAction = () => {
  const list = [...document.querySelectorAll(".list div")];
  const input = document.getElementById("modifierAll");
  list.forEach((item) => {
    item.innerHTML = input.value;
  });
};
//button listner 1
const btn1 = document.getElementById("btnChangeAll");
btn1.addEventListener("click", changeAllAction);

//button 2
const changeLastAction = () => {
  const list = [...document.querySelectorAll(".list div")];
  const input = document.getElementById("modifierLast");
  list.forEach((item, index, list) => {
    if (index == list.length - 1) {
      item.innerHTML = input.value;
    }
  });
};
//button listner 2
const btn2 = document.getElementById("btnChangeLast");
btn2.addEventListener("click", changeLastAction);

//button 3
const addAsideElement = (parent, id) => {
  const newElement = document.createElement("aside");
  newElement.setAttribute("id", id);
  parent.appendChild(newElement);
};

const addElementHandler = (event) => {
  const id = Math.floor(Math.random() * 100);
  newElements.push(id);
  const parent = document.querySelector("#items div:last-child");
  addAsideElement(parent, id);
};
//button listner 3
const btn3 = document.getElementById("btnAddElement");
btn3.addEventListener("click", addElementHandler);

//button 4
const removeElementHandler = (event) => {
  if (newElements?.length == 0) return;

  const id = newElements.pop();
  console.log(id);
  removeElement(id);
};
const removeElement = (id) => {
  const node = document.getElementById(id);
  node.remove();
};
//button listner 4
const btn4 = document.getElementById("btnRemoveElement");
btn4.addEventListener("click", removeElementHandler);

//End buttons

const listItems = document.getElementById("items");
const lastItem = document.querySelector("#items div:last-child");

const observerConfig = {
  childList: true,
  subtree: true,
  attributes: true,
  characterData: true
};

const callback = (mutationRecords) => {
  mutationRecords.forEach((mutation) => {
    console.log("type", mutation.type);
    console.log("target", mutation.target);
    console.log("addedNodes", mutation.addedNodes);
    console.log("removedNodes", mutation.removedNodes);
    console.log("removed node id", mutation.removedNodes[0]?.id);
    console.log("removed node id", mutation.removedNodes);
  });
};

let observer = new MutationObserver(callback);

observer.observe(listItems, observerConfig);
observer.observe(lastItem, observerConfig);
