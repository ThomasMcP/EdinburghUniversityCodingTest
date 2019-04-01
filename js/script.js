// Get the window we will populate with our content.
const courseWindow = document.getElementById('courses');

for (let course of courses) {
  // Add in each course to the window.
  courseWindow.innerHTML += courseTemplate(course);

}

// Mark it as loaded for screen readers.
courseWindow.setAttribute('aria-busy', 'false');

// EventListener - Buttons
// let divs = document.querySelectorAll(".course-details-btn");
// for (var i = 0; i < divs.length; i++) {
//   let each = divs[i];
//   each.addEventListener('click', (event) => {
//     const courseId = document.getElementById(`course-details-${event.target.id}`);
//     // Assign div selection to variable
//     // add selected render to div.
//     // topicsAndReadingListTemplate()
//     courseId.appendChild(event.target)
//     console.log(event.target);
//     console.log("Hi I'm here!");
//   })
