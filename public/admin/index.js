// ADMIN NAME
const adminName = document.getElementById("adminName");

// BUTTONS
const btnLogOut = document.getElementById("btnLogOut");

// FILTERS
const selectGeneration = document.getElementById("selectGeneration");
const selectOrder = document.getElementById("selectOrder");

// T BODY TABLE
const tBodyTable = document.getElementById("tBodyTable");

const userAdmin = localStorage.getItem("admin");
if (!userAdmin) {
  window.location = "http://localhost:8080/";
} else {
  adminName.innerText = `Admin - ${userAdmin}`;
}

let selectedOptGeneracion =
  selectGeneration.options[selectGeneration.selectedIndex].value;
let selectedOptionOrder = selectOrder.options[selectOrder.selectedIndex].value;

getDataTable(selectedOptGeneracion, selectedOptionOrder);

// EVENT LISTENER

selectGeneration.addEventListener("change", () => {
  let generacion =
    selectGeneration.options[selectGeneration.selectedIndex].value;
  let order = selectOrder.options[selectOrder.selectedIndex].value;
  getDataTable(generacion, order);
});

selectOrder.addEventListener("change", () => {
    let order = selectOrder.options[selectOrder.selectedIndex].value;
    let generacion =
    selectGeneration.options[selectGeneration.selectedIndex].value;
    getDataTable(generacion, order);
});

btnLogOut.addEventListener("click", () => {
  localStorage.clear();
  window.location = "http://localhost:8080/";
});

function getDataTable(generacion, order) {
  fetch(`http://localhost:8080/predictor/${generacion}/${order}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      renderDataTable(res);
      // res.forEach(({name, noCuenta, generation, risk }) => {
      //     console.log({
      //         name,
      //         noCuenta,
      //         generacion,
      //         risk
      //     });
      // });
    })
    .catch((err) => console.error(err));
}

function renderDataTable(students) {
  let html = ``;
  students.forEach(({ name, noCuenta, generation, risk }, index) => {
    html += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${generation}</td>
            <td>${noCuenta}</td>
            <td>${name}</td>
            <td>${risk} <span class="${getRiskColorFlag(risk)}"></span></td>
        </tr>
        `;
  });
  tBodyTable.innerHTML = html;
}

function getRiskColorFlag(risk) {
  if (risk < 26) {
    return "step green";
  } else {
    if (risk < 66) return "step yellow";
    else return "step red";
  }
}
