
let add_btn = document.querySelector(".add_btn");


function add_func() {
  let input_field = document.querySelector(".input_field").value;
  let target_list = document.querySelector(".unsorted_list");

  let new_node = document.createElement("li");
  let new_span = document.createElement("span");
  new_span.classList.add("list_text");

  let new_content = document.createTextNode(input_field);

  let delete_button = document.createElement("button");
  delete_button.classList.add("material-symbols-outlined");
  delete_button.id = "delete_btn";
  delete_button.textContent = "delete";




  new_span.appendChild(new_content);
  new_node.appendChild(new_span);
  new_node.appendChild(delete_button);

  target_list.appendChild(new_node);
  
  delete_button.addEventListener("click", function(){
    new_node.classList.add('animate__animated','animate__hinge');
    new_node.addEventListener("animationend", function(){
      new_node.remove();
    });
  });

  document.querySelector(".input_field").value = "";
}


