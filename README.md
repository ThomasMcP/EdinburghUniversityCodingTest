# Exercise

## Introduction

For this exercise, we're going to make some amendments to some HTML & JS we've provided.

We're looking for you to demonstrate the following:
 - You can write *semantically accurate* and *accessible* HTML.
 - You are comfortable writing simple JavaScript.
 - Your code is easy-to-read / understand.
 - You structure code in a clear, logical & reusable way.

We're going to update a page of a student's course results that is rendered based on some data held in the JavaScript file data.js
You can imagine how we might have this data setup to come from an API in a similar format to in this file, and how we would then have a separate view to display to students defined using HTML, CSS & JavaScript.

This is just using vanilla JS with some ES2015 functionality, so it won't immediately work in older browsers (e.g. IE11).
You can also rely on ES2015 functionality if you wish.
**You may not load in any additional libraries.**
**Do not modify `js/data.js`.**

Look at all the files and read through all the code before you begin any exercises.

## Tasks

### 1. Display weighting as percentage. (Done)
The weighting should be displayed as a percentage to 2 decimal places.
Update `js/templates.js` to do this.

### 2. Display the topics per course. (Done)
Beneath the course title, display a list of the topics on each course.
You can see this data defined for each course in `js/data.js`.
There is a comment noting where this should appear in `js/templates.js`.

### 3. Add the reading list per course. (Done, not in order)
Additionally, list *in order* the reading list of a course.
The output should be in ascending order by the due date.
You can see this data for each course in `js/data.js`.
You should display the book title, author, and a thumbnail of the book cover.
There is a comment noting where this should appear in `js/templates.js`.

### 4. Calculate and display the overall course mark.
Each assessment has a weighting defining how much that assessment contributes to the overall course.
Using the marks and weighting of each assessment, update `js/templates.js` to display the final overall course mark for each course.
This should be rounded to the nearest integer.

### 5. Show grades based on the marks. (Can show Grade and Colour!)
Grades are defined as below based on marks:

| Mark      | Grade | Colour |
|-----------|:-----:|--------|
| 0 - 9     | H     | Red    |
| 10 - 19   | G     | Red    |
| 20 - 29   | F     | Red    |
| 30 - 39   | E     | Orange |
| 40 - 49   | D     | Orange |
| 50 - 59   | C     | Orange |
| 60 - 69   | B     | Green  |
| 70 - 100  | A     | Green  |

Using the Bootstrap 3 `.label` class, display the grade next to each mark on all of the assessments in the colour specified per grade.

### 6. Add in the overall grade
Add in the overall grade to be shown next to the overall final course mark that you added in #4.

### 7. Make the topics & reading list hidden by default, and display on click. (Incomplete!)
Make the `div` that wraps the topics & reading lists that you added in #2 and #3 appear hidden by default.
Add a button that appears after each course title to "Show more details".
This should toggle the display of this `div` for each course on click.
