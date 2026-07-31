let add_btn = document.querySelector(".add_btn");








let load_data = JSON.parse(localStorage.getItem("list")) || [ ];

load_data.forEach(function (item) {
  toDorender(item);
});



function delete_func(text) {
  let todos = JSON.parse(localStorage.getItem("list")) || [];

  todos = todos.filter(item => item !== text);

  localStorage.setItem("list", JSON.stringify(todos));
};


function storage_func(input_field) {
  let todos = JSON.parse(localStorage.getItem("list")) || [];

  todos.push(input_field);

  localStorage.setItem("list", JSON.stringify(todos));
};



function add_func() {
  let input_field = document.querySelector(".input_field").value;
 
  document.querySelector(".input_field").value = "";
  
  storage_func(input_field);
  toDorender(input_field);

};



function toDorender(input_field) {
  let target_list = document.querySelector(".unsorted_list");

  let new_node = document.createElement("li");

  let new_span = document.createElement("span");
  new_span.classList.add("list_text");
  new_span.textContent = input_field;

  

  let delete_button = document.createElement("button");
  delete_button.classList.add("material-symbols-outlined");
  delete_button.id = "delete_btn";
  delete_button.textContent = "delete";


  new_node.appendChild(new_span);
  new_node.appendChild(delete_button);

  target_list.appendChild(new_node);
  
  


  delete_button.addEventListener("click", function(){
    new_node.classList.add('animate__animated','animate__hinge');
    new_node.addEventListener("animationend", function(){
      new_node.remove();
      delete_func(input_field);
    });
  });
};
