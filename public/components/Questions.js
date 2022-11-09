 const Questions = ( question, noQuestion,sectionName) => {
  return `
    <!-- PREGUNTA 2 -->
    <div class="row mt-1" style="padding-left: 3rem;">
      <!--QUESTION-->
      <div class="col">
        <p>${noQuestion}.- ${question}</p>
      </div>
      <!--OPTIONS-->
      <div class="col d-flex justify-content-center">
        <div class="row-auto w-50 ">
          <div id="options" class="col">
            <div>
              <label for="radio1">1</label>
              <input type="radio" id="radio1" name="question${noQuestion}${sectionName}" value="1">
            </div>
            <div>
              <label for="radio2">2</label>
              <input type="radio" id="radio2" name="question${noQuestion}${sectionName}" value="2">
            </div>
            <div>
              <label for="radio3">3</label>
              <input type="radio" id="radio3" name="question${noQuestion}${sectionName}" value="3">
            </div>
            <div>
              <label for="radio4">4</label>
              <input type="radio" id="radio4" name="question${noQuestion}${sectionName}" value="4">
            </div>
            <div>
              <label for="radio5">5</label>
              <input type="radio" id="radio5" name="question${noQuestion}${sectionName}" value="5">
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
};



