const HeaderSection = (title) => {
  return `
    <div id="divTitleSection" class="text-center mt-2">
    <h3>${title}</h3>
    </div>

  <div class="container text-center">
    <div class="row align-items-start mt-2">
      <div class="col">
        <p class="fs-5">Preguntas</p>
      </div>
      <div class="col">
        <p class="fs-5">Opciones</p>
        <p>1= Totalmente en desacuerdo y 5 = Totalmente de acuerdo</p>
      </div>
    </div>
  </div>
    `;
};
