(() => {
  const list = document.querySelector("#list"),
    form = document.querySelector("form"),
    item = document.querySelector("#item");

  document.addEventListener("DOMContentLoaded", () => {
    form.addEventListener(
      "submit",
      (e) => {
        e.preventDefault();
        list.innerHTML += "<li>" + item.value + "</li>";
        store();
        item.value = "";
      },
      false
    );

    list.addEventListener(
      "click",
      (e) => {
        const t = e.target;
        t.classList.contains("checked")
          ? t.parentNode.removeChild(t)
          : t.classList.add("checked");
        store();
      },
      false
    );
  });

  const store = () => {
    window.localStorage.myItems = list.innerHTML;
  };

  const getValues = () => {
    const storedValues = window.localStorage.myItems;
    if (storedValues) list.innerHTML = storedValues;
  };

  getValues();
})();
