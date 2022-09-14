let id = 0;
document.getElementById("inputForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (this.inputName.value.trim() == "") {
    this.inputName.classList.add("is-invalid");
    this.inputName.focus();
    this.inputName.nextElementSibling.nextElementSibling.innerText =
      "Name is required";
  } else {
    this.inputName.classList.remove("is-invalid");
    this.inputName.nextElementSibling.nextElementSibling.innerText = "";
    addItem(this);
    this.inputName.value = "";
  }
});

document.getElementById("btnClearItems").addEventListener("click", function () {
  deleteAllItem();
});

/*add item to list*/
var addItem = (eForm) => {
  var valueItem = eForm.inputName.value;
  var divItem = document.createElement("div");
  divItem.id = "item-" + id;
  divItem.classList.add("row", "ml-0", "mr-0", "mb-2");

  divItem.innerHTML =
    '<div class="col-sm-8 col-md-10 col-lg-11 p-0 text-left">' +
    '<p class="m-0 pl-2">' +
    valueItem +
    "</p>" +
    "</div>" +
    '<div class="col-sm-4 col-md-2 col-lg-1 p-0">' +
    '<i class="fa fa-edit text-primary ml-1" onclick="editItem(this);"></i>' +
    '<i class="fa-regular fa-circle-xmark text-danger ml-1" onclick="deleteItem(this);"></i>' +
    "</div>";

  eForm.nextElementSibling.appendChild(divItem);
  id++;
};

/*edit item*/
var editItem = (e) => {
  var parentIClick = e.parentElement;
  var sibling = parentIClick.previousElementSibling.firstChild.innerText;

  var inputForm = document.getElementById("inputForm");
  inputForm.inputName.value = sibling;
  deleteItem(e);
};

/*delete item*/
var deleteItem = (e) => {
  var parent = e.parentElement;
  var parentId = parent.parentElement.id;
  var element = document.getElementById(parentId);
  element.remove();
};

/*delete all item*/
var deleteAllItem = (e) => {
  var inputForm = document.getElementById("inputForm");
  var items = inputForm.nextElementSibling;
  while (items.hasChildNodes()) {
    items.removeChild(items.firstChild);
  }
};
