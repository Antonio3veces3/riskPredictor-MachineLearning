class ContentForm {
  constructor() {}

  sectionFamiliar() {
    return {
      numberSection: 1,
      group: "Family",
      section: "Situacion familiar",
      questions: [
        {
          numberQuestion: 1,
          question: "Pregunta 1",
        },
        {
          numberQuestion: 2,
          question: "Pregunta 2",
        },
        {
          numberQuestion: 3,
          question: "Pregunta 3",
        },
        {
          numberQuestion: 4,
          question: "Pregunta 4",
        },
        {
          numberQuestion: 5,
          question: "Pregunta 5",
        },
        {
          numberQuestion: 6,
          question: "Pregunta 6",
        },
        {
          numberQuestion: 7,
          question: "Pregunta 7",
        },
        {
          numberQuestion: 8,
          question: "Pregunta 8",
        },
        {
          numberQuestion: 9,
          question: "Pregunta 9",
        },
        {
          numberQuestion: 10,
          question: "Pregunta 10",
        },
      ],
    };
  }

  sectionEscolar() {
    return {
      numberSection: 2,
      group: "Scholar",
      section: "Situacion escolar",
      questions: [
        {
          numberQuestion: 1,
          question: "Pregunta 1",
        },
        {
          numberQuestion: 2,
          question: "Pregunta 2",
        },
        {
          numberQuestion: 3,
          question: "Pregunta 3",
        },
        {
          numberQuestion: 4,
          question: "Pregunta 4",
        },
        {
          numberQuestion: 5,
          question: "Pregunta 5",
        },
        {
          numberQuestion: 6,
          question: "Pregunta 6",
        },
        {
          numberQuestion: 7,
          question: "Pregunta 7",
        },
        {
          numberQuestion: 8,
          question: "Pregunta 8",
        },
        {
          numberQuestion: 9,
          question: "Pregunta 9",
        },
        {
          numberQuestion: 10,
          question: "Pregunta 10",
        },
      ],
    };
  }

  sectionSocioEco() {
    return {
      numberSection: 3,
      group: "SocioEco",
      section: "Situacion socioeconomica",
      questions: [
        {
          numberQuestion: 1,
          question: "Pregunta 1",
        },
        {
          numberQuestion: 2,
          question: "Pregunta 2",
        },
        {
          numberQuestion: 3,
          question: "Pregunta 3",
        },
        {
          numberQuestion: 4,
          question: "Pregunta 4",
        },
        {
          numberQuestion: 5,
          question: "Pregunta 5",
        },
        {
          numberQuestion: 6,
          question: "Pregunta 6",
        },
        {
          numberQuestion: 7,
          question: "Pregunta 7",
        },
        {
          numberQuestion: 8,
          question: "Pregunta 8",
        },
        {
          numberQuestion: 9,
          question: "Pregunta 9",
        },
        {
          numberQuestion: 10,
          question: "Pregunta 10",
        },
      ],
    };
  }

  sectionPersonal() {
    return {
      numberSection: 4,
      group: "Personal",
      section: "Situacion personal",
      questions: [
        {
          numberQuestion: 1,
          question: "Pregunta 1",
        },
        {
          numberQuestion: 2,
          question: "Pregunta 2",
        },
        {
          numberQuestion: 3,
          question: "Pregunta 3",
        },
        {
          numberQuestion: 4,
          question: "Pregunta 4",
        },
        {
          numberQuestion: 5,
          question: "Pregunta 5",
        },
        {
          numberQuestion: 6,
          question: "Pregunta 6",
        },
        {
          numberQuestion: 7,
          question: "Pregunta 7",
        },
        {
          numberQuestion: 8,
          question: "Pregunta 8",
        },
        {
          numberQuestion: 9,
          question: "Pregunta 9",
        },
        {
          numberQuestion: 10,
          question: "Pregunta 10",
        },
      ],
    };
  }

  loadDataForm() {
    loadDataSection(contentForm.sectionFamiliar(), divSituacionFamiliar);

    loadDataSection(contentForm.sectionEscolar(), divSituacionEscolar);

    loadDataSection(contentForm.sectionSocioEco(), divSituacionSocioEco);

    loadDataSection(contentForm.sectionPersonal(), divSituacionPersonal);
  }
}
