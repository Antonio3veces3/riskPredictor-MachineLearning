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
          question: "¿Frecuentemente cambias de domicilio?",
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
          question: "¿Tu familia influye en tus decisiones para tu formación profesional?",
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
          question: "¿En tu familia hay casos de enfermedades genéticas (hereditarias)?",
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
          question: "¿Has reprobado algunas de las siguientes materias? (matemáticas, física, programación, informática, sistemas embebidos, circuitos eléctricos)",
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
          question: "¿En tu bachillerato de procedencia llevaste alguna materia similar a las del plan de estudios de la Ing. En Tecnologías de Internet?",
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
          question: "¿Tuviste que mudarte de otro Estado o Municipio para estudiar la carrera en Ing. En Tecnologías de internet? (Eres foráneo)",
        },
        {
          numberQuestion: 2,
          question: "¿Hay problemas económicos en tu familia que puedan afectar tu permanencia en la Facultad?",
        },
        {
          numberQuestion: 3,
          question: "¿Actualmente trabajas ( mas de 4hrs ) para poder pagar tus estudios?",
        },
        {
          numberQuestion: 4,
          question: "¿Se te dificulta trasladarte todos los días para asistir a clases? (Por distancia o por un gasto elevado)",
        },
        {
          numberQuestion: 5,
          question: "¿Dependes de tus padres o algún familiar para cubrir los gastos de tus estudios?",
        },
        {
          numberQuestion: 6,
          question: "Conforme a tu estado civil, ¿Eres soltero?",
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
          question: "¿Tienes alguna enfermedad que te impida cumplir con las asignaturas de la escuela?",
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
          question: "¿Frecuentemente tienes problemas de depresión?",
        },
        {
          numberQuestion: 5,
          question: "¿Tienes algún problema de ansiedad?",
        },
        {
          numberQuestion: 6,
          question: "¿Te han detectado algún problema psicológico?",
        },
        {
          numberQuestion: 7,
          question: "¿En un futuro te ves como una persona superada profesionalmente?",
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
    loadDataSection(contentForm.sectionFamiliar(), divSituacionFamiliar);

    loadDataSection(contentForm.sectionEscolar(), divSituacionEscolar);

    loadDataSection(contentForm.sectionSocioEco(), divSituacionSocioEco);

    loadDataSection(contentForm.sectionPersonal(), divSituacionPersonal);
  }
}
