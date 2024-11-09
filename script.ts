const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault(); 

    // collect input values
    const objective = (document.getElementById('objective')as HTMLInputElement).value
    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phone = (document.getElementById('phone')as HTMLInputElement).value
    const address = (document.getElementById('address')as HTMLInputElement).value
    const education = (document.getElementById('education')as HTMLInputElement).value
    const experience = (document.getElementById('experience')as HTMLInputElement).value
    const skills = (document.getElementById('skills')as HTMLInputElement).value
    const achievements = (document.getElementById('achievements')as HTMLInputElement).value

    // generate resume content dynamically 

    const resumeHtml = `
    <h2><b>Editable Resume</b></h2>
    <h3><b>Objective</b></h3>
    <p contenteditable="true">${objective}</p>

    <h3><b>Personal Information</b></h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

    <h3><b>Education</b></h3>
    <p contenteditable="true">${education}</p>

    <h3><b>Experience</b></h3>
    <p contenteditable="true">${experience}</p>

    <h3><b>Skills</b></h3>
    <p contenteditable="true">${skills}</p>

    <h3><b>Achievements</b></h3>
    <p contenteditable="true">${achievements}</p>
`;
  if (resumeDisplayElement){
  resumeDisplayElement.innerHTML = resumeHtml
  }
})