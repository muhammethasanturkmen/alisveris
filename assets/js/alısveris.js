let contactForm = document.querySelector(".contact-form");
let silme = document.querySelector(".silme");
let students = document.querySelector(".students");
let student = []

if(typeof localStorage.student !== 'undefined') {
  student = JSON.parse(localStorage.student);
  renderstudent();
}

function handlesubmit(e) {
  e.preventDefault();
  let formData = new FormData(contactForm);
  let formObj = Object.fromEntries(formData);
  student.push(formObj);
  contactForm.reset();
  save();
  renderstudent();
}
contactForm.addEventListener('submit', handlesubmit);

function save() {
  localStorage.student = JSON.stringify(student);
}

function renderstudent() {
  students.innerHTML = '';
  for(let i = 0; i < student.length; i++){
    students.innerHTML += `<div class="student">
    <h5>${student[i].name} - ${student[i].surname}</h5>
    <h6>${student[i].message} - ${student[i].email}</h6>
  </div>`;
  }
}

function delet() {
  localStorage.clear();
  student = [];
  renderstudent();
}

silme.addEventListener("click",delet);


