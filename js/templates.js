const assessmentTemplate = function(assessment) {
  console.log(assessment.weight);
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

const renderTopics = function(course) {
  let result = '';
  for (let index of course.topics) {
    result += `
    <div<p>${index}</p> `;
  }
  return result;
}

const renderReadingList = function(course) {
  let result = '';
  // // TODO: Sort readingList in Ascending order.
  for (index of course.readingList) {
    result +=`
    <div class="readingListItem">
      <p><b>${index.title}</b></p>
      <p>By ${index.author}</p>
      <img class="book-thumbnail" src= "images/${index.image}" alt="Book Image">
    </div>
    `
  }
  return result;
}

const courseTemplate = function(course) {
  return `<h2>${course.name}</h2>
  <div id="course-details-${course.id}">
    <!-- Topics should go here -->
    <h3>Topics</h3>
    <!-- Added wrapper for potential CSS use -->
      <div class="topics-wrapper"
        ${renderTopics(course)}
      </div>
    <!-- Reading list should go here -->
    <h3>Reading List</h3>
    <!-- Added wrapper for potential CSS use -->
      <div class="reading-list-wrapper">
        ${renderReadingList(course)}
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
