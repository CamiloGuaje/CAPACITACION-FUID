// Datos de la aplicación
const appData = {
  dependencias: [
    { codigo: "100", nombre: "DESPACHO DEL ALCALDE" },
    { codigo: "110", nombre: "CONTROL INTERNO" },
    { codigo: "120", nombre: "SECRETARIA GENERAL Y DE GOBIERNO" },
    { codigo: "121", nombre: "Grupo de Desarrollo Social y Comunitario" },
    { codigo: "122", nombre: "Grupo de Recursos Humanos, Compra, Almacen y Archivo" },
    { codigo: "123", nombre: "Grupo de Justicia Seguridad y Orden Publico" },
    { codigo: "130", nombre: "SECRETARIA DE HACIENDA Y TESORERIA" },
    { codigo: "131", nombre: "Grupo de Presupuesto, Contabilidad, Pagaduria y Rentas" },
    { codigo: "140", nombre: "SECRETARIA DE SALUD Y DESARROLLO COMUNITARIO" },
    { codigo: "150", nombre: "SECRETARIA DE PLANEACIÓN E INFRAESTRUCTURA" },
    { codigo: "151", nombre: "Grupo de Vivienda, Estudios, Proyetos, Planeación Institucional y Desarrollo Municipal" },
    { codigo: "160", nombre: "UNIDAD MUNICIPAL DE ASISTENCIA TÉCNICA AGROPECUARIO Y AMBIENTAL UMATA" },
    { codigo: "170", nombre: "UNIDAD ADMINISTRATIVA MUNICIPAL DE SERVICIOS PÚBLICOS" }
  ],

  series: [
    "ACCIONES CONSTITUCIONALES", "ACTAS", "ACTOS ADMINISTRATIVOS", "AUTORIZACIONES", 
    "AUTORIZACIONES DE AJUSTE DE ÁREAS", "BANCOS DE PROYECTOS DE INVERSIÓN MUNICIPAL",
    "BOLETINES DE DEUDORES MOROSOS DEL ESTADO", "CENTRO DE BIENESTAR ANIMAL", 
    "CERTIFICACIONES", "CIRCULARES", "COMPROBANTES CONTABLES", "COMPROBANTES DE ALMACÉN",
    "CONCEPTOS", "CONCESIONES PARA EL USO DE AGUAS", "CONCESIONES PARA EL USO DE AGUAS Y RECURSOS FORESTALES",
    "CONCILIACIONES BANCARIAS", "CONSECUTIVOS DE COMUNICACIONES OFICIALES", 
    "CONSEJO MUNICIPAL DE JUVENTUDES", "CONTRATOS", "CONVENIOS", "DECLARACIONES TRIBUTARIAS",
    "DECRETOS", "DERECHOS DE PETICIÓN", "ESQUEMA DE ORDENAMIENTO TERRITORIAL", 
    "ESTADOS FINANCIEROS", "ESTUDIOS", "FACTURAS", "FONPET", "HISTORIAL DE VEHÍCULOS",
    "HISTORIALES DE MAQUINARIA Y EQUIPOS", "HISTORIAS DE USUARIOS PÚBLICOS", 
    "HISTORIAS LABORALES", "INFORMES", "INSTRUMENTOS ARCHIVÍSTICOS", 
    "INSTRUMENTOS DE CONTROL", "INVENTARIOS", "LEGALIZACIONES DE ACTUACIÓN URBANÍSTICAS",
    "LIBROS CONTABLES AUXILIARES", "LIBROS CONTABLES PRINCIPALES", 
    "LIBROS DE CONTABILIDAD PRESUPUESTAL", "LICENCIAS", "LICENCIAS URBANÍSTICAS",
    "MANUALES", "MAPA DE RED", "MESA DE LA JUVENTUD", "NOMINA", 
    "PETICIONES QUEJAS RECLAMOS Y SUGERENCIAS", "PLANES", "PLANOS", 
    "PLANTA DE BENEFICIO ANIMAL", "PLATAFORMA DE JUVENTUDES", "PRESUPUESTO MUNICIPAL",
    "PROCESOS", "PROCESOS DISCIPLINARIOS", "PROCESOS JURISDICCIÓN COACTIVA",
    "PROGRAMAS", "QUEJAS POLICIVAS CIVILES", "QUERELLAS POLICIVAS CIVILES",
    "REGISTRO DE ACTIVOS DE INFORMACIÓN", "REGISTRO DE PREDIOS ICA", 
    "REGISTRO DE VACUNACIÓN FIEBRE AFTOSA", "REGISTROS DE MARCAS DE GANADO",
    "SISTEMA DE SEGURIDAD Y SALUD EN EL TRABAJO SST", "SUBSIDIOS DE SERVICIOS PÚBLICOS",
    "TARJETAS DE OPERACIÓN DE EMPRESAS DE TRANSPORTE"
  ],

  // 22 campos del FUID con información completa
  camposFUID: [
    {
      numero: 1,
      nombre: "Entidad Remitente",
      descripcion: "Debe colocarse el nombre de la entidad responsable de la documentación que se va a transferir. Solo aplica para transferencias documentales entre entidades.",
      recomendacion: "Usar el nombre completo y oficial de la entidad tal como aparece en sus documentos constitutivos. Verificar la ortografía y denominación exacta.",
      ejemplo: "Alcaldía Municipal de Cajamarca"
    },
    {
      numero: 2,
      nombre: "Entidad Productora",
      descripcion: "Debe consignarse el nombre completo o razón social de la entidad que produce o produjo los documentos objeto del inventario.",
      recomendacion: "Siempre usar el nombre oficial y completo de la entidad. En el caso de la alcaldía.",
      ejemplo: "Alcaldía Municipal de Cajamarca"
    },
    {
      numero: 3,
      nombre: "Unidad Administrativa",
      descripcion: "Debe consignarse el nombre de la dependencia o unidad administrativa de mayor jerarquía de la cual dependa la oficina productora.",
      recomendacion: "Identificar correctamente la jerarquía administrativa según el organigrama oficial. Usar los nombres exactos del CCD y TRD.",
      ejemplo: "SECRETARIA GENERAL Y DE GOBIERNO"
    },
    {
      numero: 4,
      nombre: "Código Unidad Administrativa",
      descripcion: "Debe colocarse el código de la unidad administrativa según el Cuadro de Clasificación Documental (CCD), Tabla de Retención Documental (TRD) o Tabla de Valoración Documental (TVD).",
      recomendacion: "Verificar el código en las tablas oficiales vigentes y actualizadas de la entidad. Usar exactamente el código asignado sin modificaciones.",
      ejemplo: "120"
    },
    {
      numero: 5,
      nombre: "Oficina Productora",
      descripcion: "Debe colocarse el nombre de la Unidad Administrativa que produce y conserva la documentación objeto del inventario.",
      recomendacion: "Debe coincidir exactamente con la función específica de la oficina y su denominación oficial en las TRD.",
      ejemplo: "Grupo de Recursos Humanos, Compra, Almacen y Archivo"
    },
    {
      numero: 6,
      nombre: "Código Oficina Productora",
      descripcion: "Debe colocarse el código de la oficina productora según el CCD, TRD o TVD vigente.",
      recomendacion: "Debe corresponder exactamente con el código oficial asignado en las tablas documentales. Verificar correspondencia con la oficina productora.",
      ejemplo: "122"
    },
    {
      numero: 7,
      nombre: "Objeto",
      descripcion: "Debe consignar la finalidad del inventario documental que se está elaborando.",
      recomendacion: "Seleccionar una de las opciones predefinidas según el objetivo específico del inventario. No crear opciones nuevas.",
      ejemplo: "TRANSFERENCIAS PRIMARIAS"
    },
    {
      numero: 8,
      nombre: "Registro de Entrada",
      descripcion: "Número de registro de entrada del documento o expediente en la dependencia receptora.",
      recomendacion: "Anotar el número exacto tal como aparece en el libro de registro de entrada. Si no aplica, dejar en blanco.",
      ejemplo: "RE-2024-0125"
    },
    {
      numero: 9,
      nombre: "Número de Orden",
      descripcion: "Consignar en forma consecutiva el número correspondiente a cada registro del inventario.",
      recomendacion: "Numeración secuencial sin saltos, comenzando por 1. Cada unidad documental debe tener un número único y consecutivo.",
      ejemplo: "1, 2, 3, 4, 5..."
    },
    {
      numero: 10,
      nombre: "Código Serie / Subserie",
      descripcion: "Código asignado a la serie o subserie documental según las TRD de la entidad.",
      recomendacion: "Verificar el código exacto en las TRD vigentes. Usar el formato establecido por la entidad sin modificaciones.",
      ejemplo: "120.02 (para Decretos en Secretaría General)"
    },
    {
      numero: 11,
      nombre: "Nombre de la Serie",
      descripcion: "Denominación de la agrupación documental producida en desarrollo de una función específica.",
      recomendacion: "Usar exactamente el nombre establecido en las TRD. No abreviar ni modificar la denominación oficial.",
      ejemplo: "DECRETOS"
    },
    {
      numero: 12,
      nombre: "Nombre de la Subserie o Asuntos",
      descripcion: "Denominación de la subdivisión de la serie documental o descripción del asunto específico.",
      recomendacion: "Si existe subserie en las TRD, usarla. Si no, dejar en blanco.",
      ejemplo: "Decretos de Nombramiento"
    },
    {
      numero: 13,
      nombre: "Nombre de la Unidad Documental",
      descripcion: "Denominación específica del expediente, carpeta o unidad documental inventariada.",
      recomendacion: "Usar un nombre descriptivo y específico que identifique claramente el contenido. Incluir fechas o números identificadores cuando sea pertinente.",
      ejemplo: "Expediente Contrato de Obras Públicas No. 001-2024"
    },
    {
      numero: 14,	
      nombre: "Fechas (AAAA-MM-DD) Inicial y Final",
      descripcion: "Consignar la fecha del documento más antiguo (inicial) y más reciente (final) de cada unidad documental en formato año-mes-día.",
      recomendacion: "Si no tiene fecha, anotar 'S.F.' (sin fecha). Las fechas deben corresponder al documento principal, no a anexos. Verificar formato AAAA-MM-DD.",
      ejemplo: "2024-01-15 / 2024-12-30"
    },
    {
      numero: 15,
      nombre: "Soporte o Formato",
      descripcion: "Debe registrarse si la documentación está en soporte físico, electrónico o híbrido.",
      recomendacion: "Verificar el soporte real predominante de los documentos. Híbrido aplica cuando coexisten ambos soportes en la misma unidad documental.",
      ejemplo: "FÍSICO / ELECTRÓNICO / HÍBRIDO"
    },
    {
      numero: 16,
      nombre: "Caja",
      descripcion: "Número de la caja de archivo donde se encuentra almacenada la unidad documental.",
      recomendacion: "Usar la numeración oficial del sistema de archivo de la entidad. Verificar que coincida con la ubicación física real.",
      ejemplo: "45"
    },
    {
      numero: 17,
      nombre: "Carpeta",
      descripcion: "Número o identificación de la carpeta dentro de la caja que contiene la documentación.",
      recomendacion: "Usar el sistema de numeración establecido por la oficina. Facilita la localización específica dentro de la caja.",
      ejemplo: "13"
    },
    {
      numero: 18,
      nombre: "Tomo / Legajo / Libro",
      descripción: "Identificación cuando la documentación está organizada en tomos, legajos o libros.",
      recomendacion: "Aplicar solo cuando la documentación esté efectivamente organizada en esta forma. Especificar el tipo y número.",
      ejemplo: "Tomo II / Legajo 2024-A / Libro de Actas No. 5"
    },
    {
      numero: 19,
      nombre: "No de Folios (Inicial, Final, Total)",
      descripcion: "Número de folios que comprende la unidad documental, indicando folio inicial, final y total.",
      recomendacion: "Contar solo los folios con contenido. El total debe coincidir con la diferencia entre inicial y final más uno.",
      ejemplo: "Inicial: 001 / Final: 150 / Total: 150"
    },
    {
      numero: 20,
      nombre: "Otro (Tipo y Cantidad)",
      descripcion: "Otros elementos que acompañan la documentación como CDs, fotografías, planos, etc.",
      recomendacion: "Especificar exactamente el tipo de material y su cantidad. Importante para documentación especial o elementos no convencionales.",
      ejemplo: "3 CDs / 15 fotografías / 2 planos arquitectónicos"
    },
    {
      numero: 21,
      nombre: "Signatura Topográfica (Estante/Mueble, Bandeja/Gaveta, Posición)",
      descripcion: "Ubicación física específica de la documentación en el depósito de archivo.",
      recomendacion: "Usar el sistema de codificación de ubicación establecido por el archivo. Debe permitir localización rápida y precisa.",
      ejemplo: "Estante: E-05 / Bandeja: B-03 / Posición: P-12"
    },
    {
      numero: 22,
      nombre: "Notas",
      descripcion: "Se consignarán datos relevantes no registrados en otras columnas, como observaciones sobre el estado de conservación, faltantes, restricciones de acceso, etc.",
      recomendacion: "Incluir información importante como: faltantes, deterioros, documentos con información de DDHH, restricciones legales, observaciones especiales.",
      ejemplo: "Documentos con deterioro por humedad. Faltan folios 45-48. Contiene información clasificada."
    }
  ],

  // Preguntas para evaluación
  preguntasEvaluacion: [
    {
      pregunta: "¿Cuál es el formato correcto para registrar fechas en el FUID?",
      opciones: [
        "DD/MM/AAAA",
        "MM/DD/AAAA", 
        "AAAA-MM-DD",
        "DD-MM-AA"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué significa 'S.F.' en el campo de fechas?",
      opciones: [
        "Segundo Folio",
        "Sin Fecha",
        "Sobre Final",
        "Serie Final"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Cuál es el código de la Secretaría General y de Gobierno?",
      opciones: [
        "100",
        "110",
        "120",
        "130"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué tipo de soporte indica que hay documentos físicos y electrónicos en la misma unidad documental?",
      opciones: [
        "Físico",
        "Electrónico",
        "Híbrido",
        "Mixto"
      ],
      correcta: 2
    },
    {
      pregunta: "¿En qué sección del FUID se anotan los deterioros y faltantes?",
      opciones: [
        "Objeto",
        "Soporte",
        "Observaciones",
        "Notas"
      ],
      correcta: 3
    },
    {
      pregunta: "¿Qué información debe coincidir entre el número inicial, final y total de folios?",
      opciones: [
        "El total debe ser inicial + final",
        "El total debe ser final - inicial + 1",
        "El total debe ser final - inicial",
        "No deben coincidir necesariamente"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Para qué sirve principalmente la signatura topográfica?",
      opciones: [
        "Identificar el tipo de documento",
        "Localizar físicamente el documento",
        "Clasificar por fechas",
        "Determinar el nivel de acceso"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Cuántas dependencias tiene la Alcaldía Municipal de Cajamarca según el sistema?",
      opciones: [
        "10",
        "12", 
        "13",
        "15"
      ],
      correcta: 2
    },
    {
      pregunta: "¿Qué debe hacerse si un documento no tiene fecha?",
      opciones: [
        "Inventar una fecha aproximada",
        "Dejar el campo vacío",
        "Anotar 'S.F.'",
        "Poner la fecha actual"
      ],
      correcta: 2
    }
  ]
};

// Variables globales
let currentSection = 'inicio';
let currentQuestion = 0;
let userAnswers = [];
let evaluationStarted = false;

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  initializeNavigation();
  loadFieldsContent();
  loadDependenciesAndSeries();
  setupPracticeForm();
  setupSearch();
  setupMobileMenu();
  initializeEvaluation();
  
  // Cargar sección desde URL hash si existe
  const hash = window.location.hash.substring(1);
  if (hash && ['inicio', 'aprender', 'practicar', 'dependencias', 'evaluacion'].includes(hash)) {
    navigateToSection(hash);
  }
}

// Sistema de navegación
function initializeNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const moduleCards = document.querySelectorAll('.module-card');
  
  navItems.forEach(item => {
    item.addEventListener('click', function() {
      const section = this.getAttribute('data-section');
      navigateToSection(section);
    });
  });
  
  moduleCards.forEach(card => {
    const button = card.querySelector('button');
    if (button) {
      button.addEventListener('click', function() {
        const section = card.getAttribute('data-section');
        navigateToSection(section);
      });
    }
  });
}

function navigateToSection(sectionName) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Mostrar sección objetivo
  const targetSection = document.getElementById(sectionName);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Actualizar navegación
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
  });
  
  const activeNavItem = document.querySelector(`[data-section="${sectionName}"]`);
  if (activeNavItem) {
    activeNavItem.classList.add('active');
  }
  
  // Actualizar sección actual
  currentSection = sectionName;
  
  // Actualizar URL
  history.pushState({ section: sectionName }, '', `#${sectionName}`);
  
  // Scroll al inicio
  window.scrollTo(0, 0);
}

// Cargar contenido de campos FUID
function loadFieldsContent() {
  const fieldsContainer = document.getElementById('fieldsContainer');
  if (!fieldsContainer) return;
  
  fieldsContainer.innerHTML = '';
  
  appData.camposFUID.forEach(campo => {
    const fieldCard = document.createElement('div');
    fieldCard.className = 'field-card';
    fieldCard.innerHTML = `
      <div class="field-header">
        <div class="field-number">${campo.numero}</div>
        <div class="field-name">${campo.nombre}</div>
      </div>
      <div class="field-content">
        <div class="field-section field-description">
          <h4>📋 Descripción</h4>
          <p>${campo.descripcion}</p>
        </div>
        <div class="field-section field-recommendation">
          <h4>💡 Recomendaciones</h4>
          <p>${campo.recomendacion}</p>
        </div>
        <div class="field-section field-example">
          <h4>📝 Ejemplo</h4>
          <p><strong>${campo.ejemplo}</strong></p>
        </div>
      </div>
    `;
    fieldsContainer.appendChild(fieldCard);
  });
}

// Cargar dependencias y series
function loadDependenciesAndSeries() {
  loadDependencies();
  loadSeries();
  populatePracticeSelects();
}

function loadDependencies() {
  const dependenciesGrid = document.getElementById('dependenciesGrid');
  if (!dependenciesGrid) return;
  
  dependenciesGrid.innerHTML = '';
  
  appData.dependencias.forEach(dep => {
    const depItem = document.createElement('div');
    depItem.className = 'dependency-item';
    depItem.innerHTML = `
      <span class="dependency-code">${dep.codigo}</span> - ${dep.nombre}
    `;
    dependenciesGrid.appendChild(depItem);
  });
}

function loadSeries() {
  const seriesGrid = document.getElementById('seriesGrid');
  if (!seriesGrid) return;
  
  seriesGrid.innerHTML = '';
  
  appData.series.sort().forEach((serie, index) => {
    const serieItem = document.createElement('div');
    serieItem.className = 'series-item';
    serieItem.innerHTML = `
      <span class="series-code">${String(index + 1).padStart(2, '0')}</span> - ${serie}
    `;
    seriesGrid.appendChild(serieItem);
  });
}

// Configurar formulario de práctica
function setupPracticeForm() {
  populatePracticeSelects();
  setupPracticeHandlers();
}

function populatePracticeSelects() {
  const unidadSelect = document.getElementById('practiceUnidadSelect');
  if (unidadSelect) {
    unidadSelect.innerHTML = '<option value="">Seleccione la unidad administrativa...</option>';
    appData.dependencias.forEach(dep => {
      const option = document.createElement('option');
      option.value = dep.codigo;
      option.textContent = `${dep.codigo} - ${dep.nombre}`;
      unidadSelect.appendChild(option);
    });
  }
}

function setupPracticeHandlers() {
  const unidadSelect = document.getElementById('practiceUnidadSelect');
  const codigoUnidad = document.getElementById('practiceCodigoUnidad');
  
  if (unidadSelect && codigoUnidad) {
    unidadSelect.addEventListener('change', function() {
      const selectedDep = appData.dependencias.find(dep => dep.codigo === this.value);
      codigoUnidad.value = selectedDep ? selectedDep.codigo : '';
    });
  }
}

// Configurar búsqueda
function setupSearch() {
  const searchDeps = document.getElementById('searchDeps');
  const searchSeries = document.getElementById('searchSeries');
  
  if (searchDeps) {
    searchDeps.addEventListener('input', function() {
      filterDependencies(this.value.toLowerCase());
    });
  }
  
  if (searchSeries) {
    searchSeries.addEventListener('input', function() {
      filterSeries(this.value.toLowerCase());
    });
  }
}

function filterDependencies(searchTerm) {
  const dependencyItems = document.querySelectorAll('.dependency-item');
  dependencyItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? 'block' : 'none';
  });
}

function filterSeries(searchTerm) {
  const seriesItems = document.querySelectorAll('.series-item');
  seriesItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchTerm) ? 'block' : 'none';
  });
}

// Configurar menú móvil
function setupMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
    
    // Cerrar menú al hacer clic en elementos de navegación en móvil
    const navItems = navMenu.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('active');
        }
      });
    });
  }
}

// Funciones de práctica
function validatePracticeForm() {
  const form = document.getElementById('practiceForm');
  const feedback = document.getElementById('practiceFeedback');
  
  if (!form || !feedback) return;
  
  const formData = new FormData(form);
  let isValid = true;
  let errors = [];
  
  // Validar campos requeridos
  if (!formData.get('unidadAdministrativa')) {
    errors.push('Debe seleccionar una unidad administrativa');
    isValid = false;
  }
  
  // Mostrar feedback
  feedback.style.display = 'block';
  if (isValid) {
    feedback.className = 'practice-feedback success';
    feedback.innerHTML = `
      <h4>✅ ¡Excelente trabajo!</h4>
      <p>Has completado correctamente los campos del formulario de práctica.</p>
      <p>Continúa practicando con diferentes escenarios para dominar el FUID.</p>
    `;
  } else {
    feedback.className = 'practice-feedback error';
    feedback.innerHTML = `
      <h4>❌ Necesitas completar algunos campos</h4>
      <ul>${errors.map(error => `<li>${error}</li>`).join('')}</ul>
    `;
  }
}

function clearPracticeForm() {
  const form = document.getElementById('practiceForm');
  const feedback = document.getElementById('practiceFeedback');
  
  if (form) {
    form.reset();
    document.getElementById('practiceCodigoUnidad').value = '';
  }
  
  if (feedback) {
    feedback.style.display = 'none';
  }
  
  showNotification('Formulario de práctica limpiado', 'info');
}

function generatePracticeExample() {
  const form = document.getElementById('practiceForm');
  if (!form) return;
  
  // Ejemplo automático
  const exampleDep = appData.dependencias[2]; // Secretaría General
  document.querySelector('[name="entidadRemitente"]').value = 'Alcaldía Municipal de Cajamarca Tolima';
  document.querySelector('[name="entidadProductora"]').value = 'Alcaldía Municipal de Cajamarca Tolima';
  document.getElementById('practiceUnidadSelect').value = exampleDep.codigo;
  document.getElementById('practiceCodigoUnidad').value = exampleDep.codigo;
  
  showNotification('Ejemplo generado correctamente', 'success');
}

// Sistema de evaluación
function initializeEvaluation() {
  loadQuestion(0);
}

function loadQuestion(questionIndex) {
  const questionContainer = document.getElementById('questionContainer');
  const progressFill = document.getElementById('progressFill');
  const progressText = document.getElementById('progressText');
  
  if (!questionContainer || questionIndex >= appData.preguntasEvaluacion.length) return;
  
  const question = appData.preguntasEvaluacion[questionIndex];
  const progress = ((questionIndex + 1) / appData.preguntasEvaluacion.length) * 100;
  
  // Actualizar progreso
  if (progressFill) progressFill.style.width = `${progress}%`;
  if (progressText) progressText.textContent = `Pregunta ${questionIndex + 1} de ${appData.preguntasEvaluacion.length}`;
  
  // Cargar pregunta
  questionContainer.innerHTML = `
    <div class="question">
      <h3>Pregunta ${questionIndex + 1}</h3>
      <p>${question.pregunta}</p>
      <div class="options">
        ${question.opciones.map((opcion, index) => `
          <div class="option" onclick="selectOption(${index})" data-option="${index}">
            ${String.fromCharCode(65 + index)}. ${opcion}
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Actualizar botones
  const prevButton = document.getElementById('prevQuestion');
  const nextButton = document.getElementById('nextQuestion');
  const finishButton = document.getElementById('finishEvaluation');
  
  if (prevButton) prevButton.disabled = questionIndex === 0;
  
  if (questionIndex === appData.preguntasEvaluacion.length - 1) {
    if (nextButton) nextButton.style.display = 'none';
    if (finishButton) finishButton.style.display = 'inline-block';
  } else {
    if (nextButton) nextButton.style.display = 'inline-block';
    if (finishButton) finishButton.style.display = 'none';
  }
}

function selectOption(optionIndex) {
  // Limpiar selecciones anteriores
  document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
  
  // Marcar opción seleccionada
  const selectedOption = document.querySelector(`[data-option="${optionIndex}"]`);
  if (selectedOption) {
    selectedOption.classList.add('selected');
  }
  
  // Guardar respuesta
  userAnswers[currentQuestion] = optionIndex;
}

function nextQuestion() {
  if (currentQuestion < appData.preguntasEvaluacion.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
}

function finishEvaluation() {
  const resultsContainer = document.getElementById('evaluationResults');
  const questionContainer = document.getElementById('questionContainer');
  const controls = document.querySelector('.evaluation-controls');
  
  if (!resultsContainer) return;
  
  // Calcular puntaje
  let correctAnswers = 0;
  appData.preguntasEvaluacion.forEach((pregunta, index) => {
    if (userAnswers[index] === pregunta.correcta) {
      correctAnswers++;
    }
  });
  
  const percentage = Math.round((correctAnswers / appData.preguntasEvaluacion.length) * 100);
  let scoreClass, scoreText, message;
  
  if (percentage >= 80) {
    scoreClass = 'score-excellent';
    scoreText = 'Excelente';
    message = '¡Felicitaciones! Dominas muy bien el FUID.';
  } else if (percentage >= 60) {
    scoreClass = 'score-good';
    scoreText = 'Bueno';
    message = 'Buen trabajo. Repasa algunos conceptos para mejorar.';
  } else if (percentage >= 40) {
    scoreClass = 'score-fair';
    scoreText = 'Regular';
    message = 'Necesitas estudiar más los campos del FUID.';
  } else {
    scoreClass = 'score-poor';
    scoreText = 'Deficiente';
    message = 'Te recomendamos repasar todo el módulo de aprendizaje.';
  }
  
  // Mostrar resultados
  resultsContainer.innerHTML = `
    <h3>🎯 Resultados de la Evaluación</h3>
    <div class="score-circle ${scoreClass}">
      ${percentage}%
    </div>
    <h4>${scoreText}</h4>
    <p>Has respondido correctamente ${correctAnswers} de ${appData.preguntasEvaluacion.length} preguntas.</p>
    <p>${message}</p>
    <div style="margin-top: 24px;">
      <button class="btn btn--primary" onclick="restartEvaluation()">Repetir Evaluación</button>
      <button class="btn btn--outline" onclick="navigateToSection('aprender')">Repasar Contenido</button>
    </div>
  `;
  
  // Ocultar otros elementos
  if (questionContainer) questionContainer.style.display = 'none';
  if (controls) controls.style.display = 'none';
  resultsContainer.style.display = 'block';
}

function restartEvaluation() {
  currentQuestion = 0;
  userAnswers = [];
  
  const resultsContainer = document.getElementById('evaluationResults');
  const questionContainer = document.getElementById('questionContainer');
  const controls = document.querySelector('.evaluation-controls');
  
  if (resultsContainer) resultsContainer.style.display = 'none';
  if (questionContainer) questionContainer.style.display = 'block';
  if (controls) controls.style.display = 'flex';
  
  loadQuestion(0);
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 20px;
    border-radius: 8px;
    color: white;
    font-weight: 500;
    z-index: 1000;
    max-width: 350px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  `;
  
  const colors = {
    success: '#2E7D32',
    error: '#d32f2f',
    warning: '#f57c00',
    info: '#1976d2'
  };
  
  notification.style.backgroundColor = colors[type] || colors.info;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 4000);
}

// Funciones globales para HTML
window.navigateToSection = navigateToSection;
window.validatePracticeForm = validatePracticeForm;
window.clearPracticeForm = clearPracticeForm;
window.generatePracticeExample = generatePracticeExample;
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.finishEvaluation = finishEvaluation;
window.restartEvaluation = restartEvaluation;

// Manejo del historial del navegador
window.addEventListener('popstate', function(event) {
  if (event.state && event.state.section) {
    currentSection = event.state.section;
    document.querySelectorAll('.section').forEach(section => {
      section.classList.remove('active');
    });
    const targetSection = document.getElementById(currentSection);
    if (targetSection) {
      targetSection.classList.add('active');
    }
    
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    const activeNavItem = document.querySelector(`[data-section="${currentSection}"]`);
    if (activeNavItem) {
      activeNavItem.classList.add('active');
    }
  }
});

// Responsive behavior
window.addEventListener('resize', function() {
  const navMenu = document.getElementById('navMenu');
  if (window.innerWidth > 768 && navMenu) {
    navMenu.classList.remove('active');
  }
});

// Inicializar cuando la página esté completamente cargada
window.addEventListener('load', function() {
  // Scroll suave para las transiciones
  document.documentElement.style.scrollBehavior = 'smooth';
});