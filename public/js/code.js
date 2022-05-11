const newCodeFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#new-project-name").value.trim();
    const description = document
      .querySelector("#new-project-description")
      .value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/projects`, {
        method: "POST",
        body: JSON.stringify({ name, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to create project");
      }
    }
  };
  
  
  const delButtonHandler = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute("data-id")) {
      const id = event.target.getAttribute("data-id");
  
      const response = await fetch(`/api/projects/${id}`, {
        method: "DELETE",
      });
      console.log(id);
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to delete project");
      }
    }
  };
  
  document
    .querySelector(".new-project-form")
    .addEventListener("submit", newProjectFormHandler);
  
  const projectList = document.querySelectorAll(".project-list");
  for (var i = 0; i < projectList.length; i++) {
    projectList[i].addEventListener("click", delButtonHandler);
  }
  