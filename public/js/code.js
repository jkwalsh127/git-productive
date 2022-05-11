const newCodeFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector(".code-title").value.trim();
  const description = document.querySelector(".code-description").value.trim();
  const content = document.querySelector(".code-content").value.trim();

  if (title && description && content) {
    try {
      const response = await fetch(`/api/codes`, {
        method: "POST",
        body: JSON.stringify({ title, description, content }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/codes"); //by id?
      } else {
        alert("Failed to create codes");
      }
    } catch (err) {
      res.status(400).json(err);
    }
  }
};

const delButtonHandler = async (event) => {
  event.preventDefault();
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/codes/${id}`, {
      method: "DELETE",
    });
    console.log(id);

    if (response.ok) {
      document.location.replace("/codes");
    } else {
      alert("Failed to delete project");
    }
  }
};

//event listener for new code snippet
document
  .querySelector(".add-code-btn")
  .addEventListener("click", newCodeFormHandler);


const codeList = document.querySelectorAll(".code-list");
for (var i = 0; i < codeList.length; i++) {
  codeList[i].addEventListener("click", delButtonHandler);
}


// activeNote is used to keep track of the note in the textarea
// let activeNote = {};

// const renderActiveCode = () => {
//   // hide(saveNoteBtn);

//   if (activeNote.id) {
//     noteTitle.setAttribute('readonly', true);
//     noteText.setAttribute('readonly', true);
//     noteTitle.value = activeNote.title;
//     noteText.value = activeNote.text;
//   } else {
//     noteTitle.removeAttribute('readonly');
//     noteText.removeAttribute('readonly');
//     noteTitle.value = '';
//     noteText.value = '';
//   }
// };


//on click of new notes button