function loadMyDodo() {
  function store() {
    window.localStorage.myItems = document.querySelector("#list").innerHTML;
  }

  function addItems() {
    document.addEventListener("DOMContentLoaded", createList);
    function createList() {
      document.querySelector("form").addEventListener("submit", saveItem);
      function saveItem(e) {
        e.preventDefault();
        document.querySelector("#list").innerHTML +=
          "<li>" + document.querySelector("#item").value + "</li>";
        store();
        document.querySelector("#item").value = "";
      }
      false;

      document.querySelector("#list").addEventListener("click", clickItem);
      function clickItem(e) {
        e.target.classList.contains("checked")
          ? e.target.parentNode.removeChild(e.target)
          : e.target.classList.add("checked");
        store();
      }
      false;
    }
  }

  addItems();

  function getValues() {
    if (window.localStorage.myItems)
      document.querySelector("#list").innerHTML = window.localStorage.myItems;
  }
  getValues();
}

loadMyDodo();
