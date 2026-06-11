let button = document.querySelector("#btn");

    button.addEventListener("click", function() {

        let task =
        document.getElementById("name").value;
        let error=document.getElementById("error");
        if(task.trim()===""){
            error.textContent="write the task!!!";
            return;
        }
        error.textContent="";
        let li =
        document.createElement("li");
        
        li.textContent = task;
        li.addEventListener("click",function(){
        li.classList.toggle("completed");
        });
        let deletebtn=document.createElement("button")
        deletebtn.textContent="done"
        deletebtn.addEventListener("click",function(){
            li.remove();
                });
                li.appendChild(deletebtn)       
        document.getElementById("task")
        .appendChild(li);
      document.getElementById("name").value = "";
});
