//BUTTONS
const btnLogin = document.getElementById("btnLogin");
const btnNext = document.getElementById("btnNext");
const btnPrevious = document.getElementById("btnPrevious");
const btnSubmit = document.getElementById("btnSubmit");

//DIV FORM SECTIONS
const divSituacionFamiliar = document.getElementById("divSituacionFamiliar");
const divSituacionEscolar = document.getElementById("divSituacionEscolar");
const divSituacionSocioEco = document.getElementById("divSituacionSocioEco");
const divSituacionPersonal = document.getElementById("divSituacionPersonal");

// INPUTS
const nameInput = document.getElementById("nameInput");
const noCuentaInput = document.getElementById("noCuentaInput");
const ageInput = document.getElementById("ageInput");

// RADIO BUTTONS
const step = document.getElementsByClassName("step");

let currentTab = 0;

const contentForm = new ContentForm();
contentForm.loadDataForm();

// loadDataSection(contentForm.sectionFamiliar(), divSituacionFamiliar);

// loadDataSection(contentForm.sectionEscolar(), divSituacionEscolar);

// loadDataSection(contentForm.sectionSocioEco(), divSituacionSocioEco);

// loadDataSection(contentForm.sectionPersonal(), divSituacionPersonal);

showCurrentStep(currentTab);

// BTN LISTENERS
btnLogin.addEventListener("click", () => {
  window.location = "login";
});

btnNext.addEventListener("click", async () => {
  await getAnswersSection(currentTab);
  await getInfoProfile();
  currentTab += 1;
  nextPrev(currentTab);
});

btnPrevious.addEventListener("click", () => {
  currentTab -= 1;
  nextPrev(currentTab);
});

btnSubmit.addEventListener("click", async () => {
  await getAnswersSection(currentTab);
  await getInfoProfile();
});

// FUNCTIONS


async function getInfoProfile() {
  await localStorage.setItem(`name`, nameInput.value);
  await localStorage.setItem(`noCuenta`, noCuentaInput.value);
  await localStorage.setItem(`age`, ageInput.value);
  await getSex();
  
}

async  function getSex() {
  const options = document.getElementsByName("radioSex");
  console.log(options);
  options.forEach(async (option) => {
    if (option.checked) {
      await localStorage.setItem(`sex`, option.value);
      return;
    }
  });
}
async function getAnswersSection(curentStep) {
  for (let i = 1; i <= 10; i++) {
    await getAnswers(i, currentTab);
  }
}

function getAnswers(noQuestion, group) {
  let groupName = getSectionName(group);
  const options = document.getElementsByName(
    `question${noQuestion}${groupName}`
  );
  options.forEach(async (option) => {
    if (option.checked) {
      await localStorage.setItem(
        `Question${noQuestion}${groupName}`,
        option.value
      );
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
      sectionName = "SocioEsco";
      break;
    case 3:
      sectionName = "Personal";
      break;

    default:
      break;
  }

  return sectionName;
}
