(() => {
  "use strict";

  function revisarPortafolio() {
    console.log("1. Revisando el portafolio... (entra y sale rapido de la pila)");
  }

  function prepararPerfil() {
    revisarPortafolio();
    console.log("2. Perfil validado (prepararPerfil termina ahora)");
  }

  function empezarDia() {
    prepararPerfil();
    console.log("3. Listo para trabajar (pila vacia)");
  }

  empezarDia();

  const nombreDev = "Antonio Edgar Encinas Maida";
  let proyectosCompletados = 4;

  const esFreelance = true;
  const aniosExperiencia = 5;
  const saludo = `Hola, soy ${nombreDev}`;

  const habilidades = ["JavaScript", "PHP", "Laravel", "Vue"];
  const experiencia = {
    anios: aniosExperiencia,
    enfoque: ["QA", "Automatizacion", "Full Stack"]
  };

  function crearContadorDeProyectos(inicial = 0) {
    let contador = inicial;
    return {
      incrementar: () => {
        contador += 1;
        return `Ahora tienes ${contador} proyectos completados.`;
      },
      obtenerTotal: () => contador
    };
  }

  const miContador = crearContadorDeProyectos(proyectosCompletados);
  console.log(miContador.incrementar());
  console.log(miContador.obtenerTotal());

  const misProyectos = [
    {
      nombre: "Portafolio Personal",
      tecnologias: ["HTML", "CSS", "JavaScript"],
      completado: false
    },
    {
      nombre: "Panel de Inventarios",
      tecnologias: ["PHP", "Laravel", "MySQL"],
      completado: true
    },
    {
      nombre: "Dashboard QA",
      tecnologias: ["Vue", "Node.js"],
      completado: false
    }
  ];

  const stackStats = misProyectos
    .flatMap((proyecto) => proyecto.tecnologias)
    .reduce((acc, tecnologia) => {
      acc[tecnologia] = (acc[tecnologia] || 0) + 1;
      return acc;
    }, {});

  const proyectosVue = misProyectos.filter((proyecto) => proyecto.tecnologias.includes("Vue"));
  const nombresProyectos = misProyectos.map((proyecto) => proyecto.nombre);

  console.log({
    saludo,
    esFreelance,
    habilidades,
    experiencia,
    stackStats,
    proyectosVue,
    nombresProyectos
  });

  const root = document.documentElement;

  const temas = {
    claro: {
      "--backgroundbackground-1": "#000000",
      "--accentaccent-1": "#000000",
      "--textparagraph-1": "#ffffff",
      "--textparagraph-2": "#ababab",
      "--divdersdivider-1": "#383838",
      "--textlink": "#ffffff"
    },
    azul: {
      "--backgroundbackground-1": "#0b2e57",
      "--accentaccent-1": "#0e3d73",
      "--textparagraph-1": "#eaf3ff",
      "--textparagraph-2": "#c4d7ef",
      "--divdersdivider-1": "#2f527a",
      "--textlink": "#ffffff"
    }
  };

  const UI = {
    alternarColor() {
      const esAzul = document.body.dataset.temaActual === "azul";
      const nuevoTema = esAzul ? "claro" : "azul";
      const vars = temas[nuevoTema];

      Object.entries(vars).forEach(([nombre, valor]) => {
        root.style.setProperty(nombre, valor);
      });

      document.body.dataset.temaActual = nuevoTema;
    },

    irAseccion(id) {
      const seccion = document.getElementById(id);
      if (seccion) {
        seccion.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  function asegurarPanelAccionesRapidas() {
    let panel = document.getElementById("quick-actions");

    if (!panel) {
      panel = document.createElement("div");
      panel.id = "quick-actions";
      panel.style.position = "fixed";
      panel.style.right = "20px";
      panel.style.bottom = "20px";
      panel.style.display = "flex";
      panel.style.flexDirection = "column";
      panel.style.gap = "10px";
      panel.style.zIndex = "999";
      document.body.appendChild(panel);
    }

    return panel;
  }

  function asegurarBoton(id, texto, onClick) {
    let boton = document.getElementById(id);

    if (!boton) {
      boton = document.createElement("button");
      boton.id = id;
      boton.type = "button";
      boton.textContent = texto;
      boton.style.padding = "10px 14px";
      boton.style.border = "1px solid #6b7280";
      boton.style.borderRadius = "10px";
      boton.style.background = "#111827";
      boton.style.color = "#ffffff";
      boton.style.fontFamily = "Schibsted Grotesk, Helvetica, sans-serif";
      boton.style.fontSize = "13px";
      boton.style.cursor = "pointer";
      boton.style.boxShadow = "0 4px 14px rgba(0, 0, 0, 0.25)";
      asegurarPanelAccionesRapidas().appendChild(boton);
    }

    boton.addEventListener("click", onClick);
    return boton;
  }

  function obtenerSeccionExperiencia() {
    const seccion = document.querySelector(".experience-section");
    if (!seccion) {
      return null;
    }

    if (!seccion.id) {
      seccion.id = "proyectos";
    }

    return seccion;
  }

  function obtenerTarjetasExperiencia() {
    return Array.from(document.querySelectorAll(".job, .job-2, .job-3, .job-4"));
  }

  function obtenerTituloTarjeta(tarjeta) {
    const heading = tarjeta.querySelector("h3, .text-wrapper-4, .text-wrapper-6");
    return heading ? heading.innerText.trim() : "Sin nombre";
  }

  function manejarClickEnExperiencia(evento, contenedor) {
    const tarjeta = evento.target.closest(".job, .job-2, .job-3, .job-4");
    if (!tarjeta || !contenedor.contains(tarjeta)) {
      return;
    }

    const titulo = obtenerTituloTarjeta(tarjeta);
    alert(`Has hecho clic en: ${titulo}`);
  }

  function asegurarBuscadorExperiencia(seccion) {
    let buscador = document.getElementById("buscador-proyectos");
    if (!buscador) {
      buscador = document.createElement("input");
      buscador.id = "buscador-proyectos";
      buscador.type = "search";
      buscador.placeholder = "Buscar experiencia...";
      buscador.setAttribute("aria-label", "Buscar experiencia");
      buscador.style.width = "100%";
      buscador.style.padding = "12px";
      buscador.style.marginBottom = "16px";
      buscador.style.borderRadius = "10px";
      buscador.style.border = "1px solid var(--divdersdivider-1)";
      buscador.style.backgroundColor = "var(--accentaccent-1)";
      buscador.style.color = "var(--textparagraph-1)";

      const ancla = seccion.querySelector(".text-content");
      seccion.insertBefore(buscador, ancla || seccion.firstChild);
    }

    let mensaje = document.getElementById("sin-resultados");
    if (!mensaje) {
      mensaje = document.createElement("p");
      mensaje.id = "sin-resultados";
      mensaje.textContent = "No se encontraron experiencias con ese termino.";
      mensaje.style.display = "none";
      mensaje.style.marginTop = "12px";
      mensaje.style.color = "var(--textparagraph-2)";
      seccion.appendChild(mensaje);
    }

    return { buscador, mensaje };
  }

  function configurarBusquedaExperiencia(seccion) {
    const tarjetas = obtenerTarjetasExperiencia();
    if (!tarjetas.length) {
      return;
    }

    const { buscador, mensaje } = asegurarBuscadorExperiencia(seccion);

    buscador.addEventListener("input", () => {
      const termino = buscador.value.toLowerCase().trim();
      let visibles = 0;

      tarjetas.forEach((tarjeta) => {
        const coincide = tarjeta.innerText.toLowerCase().includes(termino);
        tarjeta.style.display = coincide ? "" : "none";
        if (coincide) {
          visibles += 1;
        }
      });

      mensaje.style.display = visibles ? "none" : "block";
    });
  }

  function inicializarInteracciones() {
    asegurarBoton("btn-tema", "Cambiar tema", () => UI.alternarColor());

    const seccionExperiencia = obtenerSeccionExperiencia();
    if (!seccionExperiencia) {
      return;
    }

    asegurarBoton("ver-proyectos", "Ver experiencia", () => UI.irAseccion("proyectos"));
    seccionExperiencia.addEventListener("click", (evento) => manejarClickEnExperiencia(evento, seccionExperiencia));

    configurarBusquedaExperiencia(seccionExperiencia);
  }

  inicializarInteracciones();
})();
