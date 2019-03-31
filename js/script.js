// Get the window we will populate with our content.
const courseWindow = document.getElementById('courses');

for (let course of courses) {
  // Add in each course to the window.
  courseWindow.innerHTML += courseTemplate(course);
}

// Mark it as loaded for screen readers.
courseWindow.setAttribute('aria-busy', 'false');

// Event Listeners
// document.querySelector('')
