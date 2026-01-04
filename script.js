// Dark / Light Theme Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent = document.body.classList.contains("dark")
        ? "☀️"
        : "🌙";
});

// Editable About Me Section
const editBtn = document.getElementById("editBtn");
const aboutText = document.getElementById("aboutText");

editBtn.addEventListener("click", () => {
    const isEditable = aboutText.getAttribute("contenteditable") === "true";

    aboutText.setAttribute("contenteditable", !isEditable);
    editBtn.textContent = isEditable ? "Edit" : "Save";
});
