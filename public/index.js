//BUTTONS
const btnLogin = document.getElementById("btnLogin");
const btnNext = document.getElementById("btnNext");
const btnPrevious = document.getElementById("btnPrevious");
const btnSubmit = document.getElementById("btnSubmit");
const btnCloseResult = document.getElementById("btnCloseResult");

//DIV FORM SECTIONS
const divSituacionFamiliar = document.getElementById("divSituacionFamiliar");
const divSituacionEscolar = document.getElementById("divSituacionEscolar");
const divSituacionSocioEco = document.getElementById("divSituacionSocioEco");
const divSituacionPersonal = document.getElementById("divSituacionPersonal");
const divModalResult = document.getElementById("divModalResult");

// INPUTS
const nameInput = document.getElementById("nameInput");
const noCuentaInput = document.getElementById("noCuentaInput");
const ageInput = document.getElementById("ageInput");
const generacionInput = document.getElementById("generacionInput");

const inputsProfile = document.getElementsByName("inputProfile");

// RADIO BUTTONS
const step = document.getElementsByClassName("step");

// TEXT
const textResult = document.getElementById("textResult");

let currentTab = 0;

let data = {};

let testData = {
  name: "",
  noCuenta: "",
  age: 0,
  generation: "",
  sex: "",
  answers: {
    Family: {},
    Scholar: {},
    SocioEco: {},
    Personal: {},
  },
};

const contentForm = new ContentForm();
contentForm.loadDataForm();

showCurrentStep(currentTab);

// BTN LISTENERS
btnLogin.addEventListener("click", () => {
  window.location = "login";
});

btnNext.addEventListener("click", async () => {
  await getAnswersSection(currentTab);
  await saveInfoProfile();
  if (!validateAnswersRequired(currentTab) || !validateInfoProfile())
    return alert("Debes contestar todas las preguntas de esta sección");
  currentTab += 1;
  nextPrev(currentTab);
});

btnPrevious.addEventListener("click", () => {
  currentTab -= 1;
  nextPrev(currentTab);
});

btnSubmit.addEventListener("click", async () => {
  await getAnswersSection(currentTab);
  await saveInfoProfile();
  if (!validateAnswersRequired(currentTab) || !validateInfoProfile())
    return alert("Debes contestar todas las preguntas de esta sección");
  //const allAnswers = await getValuesInputs();

  fetch("http://localhost:8080/predictor", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testData),
  })
    .then((res) => res.json())
    .then((res) => {
      textResult.innerText = `${res.prediction} %`;
    });
  divModalResult.style.display = "block";
  testData = {
    name: "",
    noCuenta: "",
    age: 0,
    generation: "",
    sex: "",
    answers: {
      Family: {},
      Scholar: {},
      SocioEco: {},
      Personal: {},
    },
  };
});

btnCloseResult.addEventListener("click", () => {
  divModalResult.style.display = "none";
  location.href = "http://localhost:8080/";
});

// FUNCTIONS

async function saveInfoProfile() {
  testData.name = nameInput.value;
  testData.noCuenta = noCuentaInput.value;
  testData.age = parseInt(ageInput.value);
  testData.generation = generacionInput.value;
  await getSex();
}

async function getSex() {
  const options = document.getElementsByName("radioSex");
  let sex;
  options.forEach((option) => {
    if (option.checked) {
      testData.sex = option.value;
      return;
    }
  });
}
async function getAnswersSection(curentStep) {
  for (let i = 1; i <= 10; i++) {
    await getAnswers(i, curentStep);
  }
}

function getAnswers(noQuestion, group) {
  let groupName = getSectionName(group);
  const options = document.getElementsByName(
    `question${noQuestion}${groupName}`
  );
  options.forEach((option) => {
    if (option.checked) {
      testData.answers[`${groupName}`][`q${noQuestion}`] =
        parseInt(option.value) / 5;
      return;
    }
  });
}

function loadDataSection(data, divSection) {
  divSection.innerHTML += HeaderSection(data.section);

  data.questions.forEach((question) => {
    divSection.innerHTML += Questions(
      question.question,
      question.numberQuestion,
      data.group
    );
  });
}

function nextPrev(index) {
  showCurrentStep(index);
  if (index > 0 && index < 3) {
    btnPrevious.style.display = "block";
    btnNext.style.display = "block";
    btnSubmit.style.display = "none";
  }
  if (index == 0) {
    btnPrevious.style.display = "none";
    btnNext.style.display = "block";
    btnSubmit.style.display = "none";
  }
  if (index == 3) {
    btnPrevious.style.display = "block";
    btnNext.style.display = "none";
    btnSubmit.style.display = "block";
  }

  switch (index) {
    case 0:
      divSituacionFamiliar.style.display = "block";
      divSituacionEscolar.style.display = "none";
      divSituacionSocioEco.style.display = "none";
      divSituacionPersonal.style.display = "none";
      break;
    case 1:
      divSituacionFamiliar.style.display = "none";
      divSituacionEscolar.style.display = "block";
      divSituacionSocioEco.style.display = "none";
      divSituacionPersonal.style.display = "none";
      break;
    case 2:
      divSituacionFamiliar.style.display = "none";
      divSituacionEscolar.style.display = "none";
      divSituacionSocioEco.style.display = "block";
      divSituacionPersonal.style.display = "none";
      break;
    case 3:
      divSituacionFamiliar.style.display = "none";
      divSituacionEscolar.style.display = "none";
      divSituacionSocioEco.style.display = "none";
      divSituacionPersonal.style.display = "block";
      break;
    default:
      break;
  }
}

function showCurrentStep(index) {
  step[index].className = "step current";
}

function getSectionName(index) {
  let sectionName;
  switch (index) {
    case 0:
      sectionName = "Family";
      break;
    case 1:
      sectionName = "Scholar";
      break;
    case 2:
      sectionName = "SocioEco";
      break;
    case 3:
      sectionName = "Personal";
      break;

    default:
      break;
  }

  return sectionName;
}

function validateAnswersRequired(currentSection) {
  let sectionName = getSectionName(currentSection);
  if (Object.keys(testData.answers[`${sectionName}`]).length != 10)
    return false;
  else return true;
}

function validateInfoProfile() {
  if (
    testData.name == "" ||
    testData.noCuenta == "" ||
    testData.age == NaN ||
    testData.generation == "" ||
    testData.sex == ""
  )
    return false;
  else return true;
}
