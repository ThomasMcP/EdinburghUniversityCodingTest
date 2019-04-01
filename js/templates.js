const assessmentTemplate = function(assessment) {
  return `
  <tr>
    <td>${assessment.name}</td>
    <td>${assessment.weight.toPrecision(4) * 100 + '%'}</td>
    <td>${assessment.mark}</td>
    <td>${calculateGrade(assessment.mark)}</td>
  </tr>
  `;
}

const calculateGrade = function(mark) {
  if (mark >= 0 && mark <= 9) {
    return "H";
  } else if (mark >= 10 && mark <= 19) {
    return "G";
  } else if (mark >= 20 && mark <= 29) {
    return "F";
  } else if (mark >= 30 && mark <= 39) {
    return "E";
  } else if (mark >= 40 && mark <= 49) {
    return "D";
  } else if (mark >= 50 && mark <= 59) {
    return "C";
  } else if (mark >= 60 && mark <= 69) {
    return "B";
  } else if (mark >= 70 && mark <= 100) {
    return "A";
  }
}

// | 0 - 9     | H     | Red    |
// | 10 - 19   | G     | Red    |
// | 20 - 29   | F     | Red    |
// | 30 - 39   | E     | Orange |
// | 40 - 49   | D     | Orange |
// | 50 - 59   | C     | Orange |
// | 60 - 69   | B     | Green  |
// | 70 - 100  | A     | Green  |

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
    <img class="book-thumbnail" src= "images/${list.image}" alt="images/404.png">
  </div>
  `
}

const readingListsTemplate = function(course) {
  let result = '';
  // // TODO: Sort readingList in Ascending order.
  for (index of course.readingList) {
    if (index.image === null){
      index.image = "404.png";
    }
    result += readingListTemplate(index);
  }
  return result;
}

const topicsAndReadingListTemplate = function(course) {
  return `
    <h3>Topics</h3>
      <div class="topics-wrapper">
        ${topicsTemplate(course)}
      </div>

    <h3>Reading List</h3>
      <div class="reading-list-wrapper">
        ${readingListsTemplate(course)}
      </div>
  `
}

// function handleClick(course) {
//   div = document.querySelector(`#course-details-${course.id}`);
//   topicsAndReadingListTemplate(course);
// }

// ${topicsAndReadingListTemplate(course)}

const courseTemplate = function(course) {
  return `<h2>${course.name}</h2>
  <div id="course-details-${course.id}">
    ${topicsAndReadingListTemplate(course)}
  </div>
    <button class="course-details-btn" id="button-${course.id}" type="button">Show More Details</button>
  <table class="table">
    <!-- Add Grade & Overall Grade here -->
    <thead>
      <th>Assessment</th>
      <th>Weighting</th>
      <th>Mark</th>
      <th>Grade</th>
    </thead>
    <tbody>
      ${assessmentsTemplate(course)}
    </tbody>
  </table>`;
}
