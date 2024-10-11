document.addEventListener("DOMContentLoaded", () => {
    // Get reference to the form and display area
    const form = document.getElementById("resumeform") as HTMLFormElement;
    const resumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement;

    // Handle form submission
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Collect input values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const education = (document.getElementById("edu") as HTMLInputElement).value;
        const experience = (document.getElementById("exp") as HTMLInputElement).value;
        const skills = (document.getElementById("skill") as HTMLInputElement).value;

        // Generate resume content dynamically
        const resumeHTML = `
            <h2><b>Editable Resume</b></h2>
            <h3>Personal Information</h3>
            <p><b>Name:</b> <span contenteditable="true"> ${name} </span></p>
            <p><b>Email:</b> <span contenteditable="true"> ${email} </span> </p>
            <p><b>Phone:</b> <span contenteditable="true">${phone}</p>
            <h3>Education</h3>
            <p contenteditable="true">${education}</p>
            <h3>Experience</h3>
            <p contenteditable="true">${experience} </p>
            <h3>Skills</h3>
            <p contenteditable="true">${skills} </p>
        `;

        // Display generated resume in the resume-display element
        if (resumeDisplayElement) {
            resumeDisplayElement.innerHTML = resumeHTML;
        } else {
            console.error("The Resume Display Element is missing!");
        }
    });
});
