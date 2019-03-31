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

const topicTemplate = function(course) {
  let output = '';
  for (let index of course.topics) {
    output += `<br><td>${index}</td> `;
  }
  return output;
}

const courseTemplate = function(course) {
  return `<h2>${course.name}</h2>
  <div id="course-details-${course.id}">
    <!-- Topics should go here -->
    <h3>Topics</h3>
    <tr>${topicTemplate(course)}</tr>
    <!-- Reading list should go here -->
  </div>
  <table class="table">
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
