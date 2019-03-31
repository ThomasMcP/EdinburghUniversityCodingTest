// Get the window we will populate with our content.
const courseWindow = document.getElementById('courses');

for (let course of courses) {
  // Add in each course to the window.
  courseWindow.innerHTML += courseTemplate(course);
}

// Mark it as loaded for screen readers.
courseWindow.setAttribute('aria-busy', 'false');

// EventListener - Buttons
// for (let course of courses) {
//   document.querySelector('#course-details-btn').addEventListener('click', (course) => {
//     const selectedDiv = document.querySelector(`#course-details-${course.id}`);
//     selectedDiv.innerHTML = topicsAndReadingListTemplate(course);
//   })
// }
