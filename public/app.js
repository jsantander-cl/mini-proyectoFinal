document.addEventListener('DOMContentLoaded', () => {
  inicializarMenu();
  inyectarPerfil();
  inyectarSobreMi();
  inyectarHabilidades();
  inyectarContacto();
});

// 1. Control del menú móvil desplegable (Toggle)
function inicializarMenu() {
  const botonToggle = document.getElementById('menu-toggle');
  const menuNavegacion = document.getElementById('menu-navegacion');
  
  if (botonToggle && menuNavegacion) {
    botonToggle.addEventListener('click', () => {
      menuNavegacion.classList.toggle('hidden');
    });
  }
}

// 2. Inyección del encabezado y la sección de bienvenida
function inyectarPerfil() {
  const logoSitio = document.getElementById('logo-sitio');
  const contenedorHero = document.getElementById('contenedor-hero');
  
  if (logoSitio) {
    logoSitio.textContent = portafolioDatos.perfil.logo;
  }
  
  if (contenedorHero) {
    contenedorHero.innerHTML = `
      <h1 class="text-xl md:text-3xl text-gray-400 tracking-wide mb-2">
        Soy <span class="text-[#d4ec43] font-bold">${portafolioDatos.perfil.nombre}</span>
      </h1>
      <p class="text-4xl md:text-7xl font-extrabold tracking-tight mb-8">
        ${portafolioDatos.perfil.titulo}
      </p>
      <a href="proyectos.html" class="inline-block bg-[#d4ec43] text-black px-8 py-3 rounded-full font-bold shadow-md hover:scale-105 active:scale-95 transition-all duration-200">
        ${portafolioDatos.perfil.textoBotonHero}
      </a>
    `;
  }
}

// 3. Inyección de la información personal de la sección sobre mí
function inyectarSobreMi() {
  const contenedorSobreMi = document.getElementById('contenedor-sobremi');
  
  if (!contenedorSobreMi) {
    return;
  }
  
  contenedorSobreMi.innerHTML = `
    <h2 class="text-3xl font-extrabold text-white tracking-widest mb-6">
      ${portafolioDatos.sobreMi.titulo}
    </h2>
    <p class="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
      ${portafolioDatos.sobreMi.descripcion}
    </p>
    <p class="text-gray-400 text-base md:text-lg leading-relaxed mb-4">
      ${portafolioDatos.sobreMi.pasion}
    </p>
    <p class="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
      ${portafolioDatos.sobreMi.pasantiempos}
    </p>
    <div class="text-sm font-semibold tracking-wider text-[#d4ec43] mb-6">
      ${portafolioDatos.sobreMi.experiencia}
    </div>
    <button class="inline-block bg-transparent border border-[#d4ec43] text-[#d4ec43] hover:bg-[#d4ec43] hover:text-black px-6 py-2 rounded-full font-bold text-sm shadow-md transition">
      ${portafolioDatos.sobreMi.textoBotonCv}
    </button>
  `;
}

// 4. Inyección estructurada de habilidades principales y adicionales
function inyectarHabilidades() {
  const contenedorHab = document.getElementById('contenedor-habilidades');
  const contenedorAdi = document.getElementById('contenedor-habilidades-adicionales');
  
  if (contenedorHab) {
    contenedorHab.innerHTML = '';
    
    portafolioDatos.habilidades.forEach((hab) => {
      contenedorHab.innerHTML += `
        <div class="bg-[#161f32] p-6 rounded-xl border border-gray-800 flex flex-col justify-between shadow-lg hover:border-[#d4ec43] transition">
          <div class="text-lg font-bold tracking-wide mb-2">
            ${hab.nombre}
          </div>
          <div class="w-full bg-gray-800 h-2 rounded-full overflow-hidden mb-2">
            <div class="bg-[#d4ec43] h-full rounded-full transition-all duration-1000" style="width: ${hab.nivel}"></div>
          </div>
          <div class="text-right text-xs font-semibold text-gray-400">
            ${hab.nivel}
          </div>
        </div>
      `;
    });
  }
  
  if (contenedorAdi) {
    contenedorAdi.innerHTML = '';
    
    portafolioDatos.habilidadesAdicionales.forEach((adi) => {
      contenedorAdi.innerHTML += `
        <span class="bg-gray-800 text-gray-300 text-xs px-4 py-2 rounded-full border border-gray-700 hover:border-[#d4ec43] hover:text-white transition">
          ${adi.nombre}
        </span>
      `;
    });
  }
}

// 5. Inyección de textos estáticos y lógica de validación de envío
function inyectarContacto() {
  const tituloContacto = document.getElementById('titulo-contacto');
  const botonFormulario = document.getElementById('boton-formulario');
  const formulario = document.getElementById('formulario-contacto');
  
  if (tituloContacto) {
    tituloContacto.textContent = portafolioDatos.contacto.titulo;
  }
  
  if (botonFormulario) {
    botonFormulario.textContent = portafolioDatos.contacto.textoBoton;
  }
  
  if (!formulario) {
    return;
  }
  
  formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const campoNombre = document.getElementById('nombre');
    const campoEmail = document.getElementById('email');
    const campoMensaje = document.getElementById('mensaje');
    
    if (!campoNombre.value.trim() || !campoEmail.value.trim() || !campoMensaje.value.trim()) {
      alert('Por favor, rellene todos los campos del formulario.');
      return;
    }
    
    const destino = portafolioDatos.contacto.correoDestino;
    const asunto = encodeURIComponent(`Contacto de: ${campoNombre.value}`);
    const cuerpo = encodeURIComponent(`Nombre: ${campoNombre.value}\nCorreo: ${campoEmail.value}\nMensaje: ${campoMensaje.value}`);
    
    window.location.href = `mailto:${destino}?subject=${asunto}&body=${cuerpo}`;
    
    formulario.reset();
  });
}