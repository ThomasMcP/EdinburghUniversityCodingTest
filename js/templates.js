const assessmentTemplate = function(assessment) {
  return `
  <tr>
    <td>${assessment.name}</td>
    <td>${assessment.weight.toPrecision(4) * 100 + '%'}</td>
    <td>${assessment.mark}</td>
  </tr>
  `;
}

const assessmentsTemplate = function(course) {
  // Check if there are no assessments.
  if (course.assessments.length === 0) return `<tr colspan="100%"><td>No assessments found.</td></tr>`;

  let output = '';
  for (let assessment of course.assessments) {
    output += assessmentTemplate(assessment);
  }

  return output;
}

const topicTemplate = function(topic){
  return `
  <div class="topic">
  <p>${topic}</p>
  </div>
  `
}
const topicsTemplate = function(course) {
  let result = '';
  for (let index of course.topics) {
    result += topicTemplate(index);
  }
  return result;
}

const readingListTemplate = function(list) {
  return `
  <div class="reading-list-item">
    <p><b>${list.title}</b></p>
    <p>By ${list.author}</p>
    <img class="book-thumbnail" src= "images/${list.image}" alt="Book Image">
  </div>
  `
}

const readingListsTemplate = function(course) {
  let result = '';
  // // TODO: Sort readingList in Ascending order.
  for (index of course.readingList) {
    result += readingListTemplate(index);
  }
  return result;
}

const courseTemplate = function(course) {
  return `<h2>${course.name}</h2>
  <!-- Hidden by Default -->
  <button id="course-details-btn" type="button">Show Course Details</button>
  <div id="course-details-${course.id}" >
    <!-- Topics should go here -->
    <h3>Topics</h3>
      <div class="topics-wrapper">
        ${topicsTemplate(course)}
      </div>
    <!-- Reading list should go here -->


    <!-- Hidden by Default -->
    <h3>Reading List</h3>
      <div class="reading-list-wrapper">
        ${readingListsTemplate(course)}
      </div>
  </div>
  <table class="table">
    <!-- Add Grade & Overall Grade here -->
    <thead>
      <th>Assessment</th>
      <th>Weighting</th>
      <th>Mark</th>
    </thead>
    <tbody>
      ${assessmentsTemplate(course)}
    </tbody>
  </table>`;
}
