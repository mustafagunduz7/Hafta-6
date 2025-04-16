document.querySelectorAll("li").forEach((item) => {
    const span = document.createElement("span");
    span.className = "close";
    span.textContent = "\u00D7";
    span.onclick = () => item.remove();
    item.appendChild(span);
  });
  
  const list = document.querySelector("ul");
  list.addEventListener("click", (ev) => {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  });
  
  function newElement() {
    const input = document.getElementById("task");
    const inputValue = input.value.trim();
  
    if (inputValue === "") {
      $(".error").toast("show");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = inputValue;
  
    const span = document.createElement("span");
    span.className = "close";
    span.textContent = "\u00D7";
    span.onclick = () => li.remove();
  
    li.appendChild(span);
    document.getElementById("list").appendChild(li);
    $(".success").toast("show");
  
    input.value = "";
  }
  