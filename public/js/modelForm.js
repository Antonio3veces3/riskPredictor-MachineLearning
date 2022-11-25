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
          question: "¿Tus ambos padres trabajan?",
        },
        {
          numberQuestion: 2,
          question: "¿Recibes apoyo de tu familia para continuar con tus estudios?",
        },
        {
          numberQuestion: 3,
          question: "¿Tu familia te motiva a seguir con tus estudios?",
        },
        {
          numberQuestion: 4,
          question: "¿Consideras que la relación entre tus padres es buena?",
        },
        {
          numberQuestion: 5,
          question: "¿Elegiste esta carrera porque tu familia o alguien más te lo dijo?",
        },
        {
          numberQuestion: 6,
          question: "¿En tu familia consideran que tener estudios es una meta importante?",
        },
        {
          numberQuestion: 7,
          question: "¿Elegiste esta carrera por seguir los pasos de algún familiar o un conocido?",
        },
        {
          numberQuestion: 8,
          question: "¿Actualmente vives con tus padres o con algún familiar?",
        },
        {
          numberQuestion: 9,
          question: "¿Tienes la responsbilidad de cuidar a algún familiar enfermo?",
        },
        {
          numberQuestion: 10,
          question: "¿Consideras que el ambiente en tu casa es sano?",
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
          question: "¿Esta carrera fue tu primera opción para estudiar en nivel superior?",
        },
        {
          numberQuestion: 2,
          question: "¿Has llegado a extraordinario o regularización en alguna de las siguientes materias? (matemáticas, física, programación, informática, sistemas embebidos, circuitos eléctricos)",
        },
        {
          numberQuestion: 3,
          question: "¿Te consideras un alumno responsable y dedicado?",
        },
        {
          numberQuestion: 4,
          question: "¿Has sido víctima de bullying o acoso en tu escuela?",
        },
        {
          numberQuestion: 5,
          question: "¿Consideras que es buena la forma en la que te relacionas con tus compañeros?",
        },
        {
          numberQuestion: 6,
          question: "¿Anteriormente estuviste en otra carrera de nivel superior?",
        },
        {
          numberQuestion: 7,
          question: "Hasta el momento, ¿Te ha gustado la carrera que elegiste? ",
        },
        {
          numberQuestion: 8,
          question: "¿Tienes hábitos de estudio o alguna estrategia para mejorar tu aprendizaje?",
        },
        {
          numberQuestion: 9,
          question: "¿En tu bachillerato de procedencia estuviste en algún área de tecnología?",
        },
        {
          numberQuestion: 10,
          question: "¿Asistes regularmente a clases?",
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
          question: "¿Eres foraneo?",
        },
        {
          numberQuestion: 2,
          question: "¿Existen dificultades económicas en tu familia que puedan afectar tu permanencia en la Facultad?",
        },
        {
          numberQuestion: 3,
          question: "¿Actualmente trabajas  para poder pagar tus estudios?",
        },
        {
          numberQuestion: 4,
          question: "¿Se te dificulta trasladarte todos los días para asistir a clases porque es un gasto elevado?",
        },
        {
          numberQuestion: 5,
          question: "¿Dependes de tus padres o algún familiar para cubrir los gastos de tus estudios?",
        },
        {
          numberQuestion: 6,
          question: "¿Actualmente vives con pareja o estas casado?",
        },
        {
          numberQuestion: 7,
          question: "¿Hay personas que dependen de ti económicamente?",
        },
        {
          numberQuestion: 8,
          question: "¿Cuentas con alguna beca que te apoye para pagar tus estudios?",
        },
        {
          numberQuestion: 9,
          question: "¿Cuentas con computadora o laptop propia?",
        },
        {
          numberQuestion: 10,
          question: "¿Alguna vez has suspendido tus estudios por problemas económicos?",
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
          question: "¿Tienes alguna enfermedad/discapacidad que te impida cumplir con las asignaturas de la escuela?",
        },
        {
          numberQuestion: 2,
          question: "¿Tuviste presión social al momento de elegir esta carrera?",
        },
        {
          numberQuestion: 3,
          question: "¿Consideras que tu interés en concluir tus estudios es alto?",
        },
        {
          numberQuestion: 4,
          question: "¿Tienes algún problema de ansiedad y/o depresion?",
        },
        {
          numberQuestion: 5,
          question: "¿Se te dificulta asistir a clases por la distancia entre tu casa y la Universidad?",
        },
        {
          numberQuestion: 6,
          question: "¿Te han detectado algún transtorno psicológico?",
        },
        {
          numberQuestion: 7,
          question: "¿En un futuro aspiras a ser un profesionista?",
        },
        {
          numberQuestion: 8,
          question: "¿Has tenido problemas por mala conducta?",
        },
        {
          numberQuestion: 9,
          question: "¿Tienes problemas de falta de atención?",
        },
        {
          numberQuestion: 10,
          question: "¿Tienes algún problema de adicción?",
        },
      ],
    };
  }

  loadDataForm() {
    loadDataSection(this.sectionFamiliar(), divSituacionFamiliar);

    loadDataSection(this.sectionEscolar(), divSituacionEscolar);

    loadDataSection(this.sectionSocioEco(), divSituacionSocioEco);

    loadDataSection(this.sectionPersonal(), divSituacionPersonal);
  }
}
