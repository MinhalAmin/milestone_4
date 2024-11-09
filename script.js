var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var objective = document.getElementById('objective').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var achievements = document.getElementById('achievements').value;
    // generate resume content dynamically 
    var resumeHtml = "\n    <h2><b>Editable Resume</b></h2>\n    <h3><b>Objective</b></h3>\n    <p contenteditable=\"true\">".concat(objective, "</p>\n\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b><span contenteditable=\"true\">").concat(name, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n    <h3><b>Education</b></h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3><b>Experience</b></h3>\n    <p contenteditable=\"true\">").concat(experience, "</p>\n\n    <h3><b>Skills</b></h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n\n    <h3><b>Achievements</b></h3>\n    <p contenteditable=\"true\">").concat(achievements, "</p>\n");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
});
