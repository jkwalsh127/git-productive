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

//event listener for new code snippet
document
  .querySelector(".add-code-btn")
  .addEventListener("click", newCodeFormHandler);
