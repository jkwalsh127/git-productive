//create new code snippet
const newCodeFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector(".code-title").value.trim();
  const description = document.querySelector(".code-description").value.trim();
  const content = document.querySelector(".code-content").value.trim();
  console.log(title, content, description)

  if (title && description && content) {
      const response = await fetch(`/api/codes`, {
        method: "POST",
        body: JSON.stringify({ title, description, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/code"); 
      } else {
        alert("Failed to create codes");
      }
  }
};

// Cancel creation of new snippet (close modal)
const exitCodeFormHandler = async (event) => {
  event.preventDefault();
  document.location.replace("/code");
};

//delete code snippet
const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/codes/${id}`, {
      method: "DELETE",
    });
    console.log(id);

    if (response.ok) {
      document.location.replace("/code");
    } else {
      alert("Deleted snippet");
    }
  }
};

//event listener for new code snippet
document.querySelector("#add-code-btn").addEventListener("click", newCodeFormHandler);
document.querySelector("#cancel-code-btn").addEventListener("click", exitCodeFormHandler);

//event listener for deleting code snippet
const codeList = document.querySelectorAll(".code-list");
for (var i = 0; i < codeList.length; i++) {
  codeList[i].addEventListener("click", delButtonHandler);
}





