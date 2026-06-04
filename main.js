import datos from "./data.js";
import { iniciarTema } from "./tema.js";
 
// UTILIDAD: inyecta HTML en un elemento por su ID
function render(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}
 
// 1. HEADER
function renderHeader() {
  const { logo, nav, botonContacto } = datos.header;
 
  const linksNav = nav
    .map(
      (link) => `
      <a href="${link.href}" class="hover:text-white dark:hover:text-[#E3FF6A] transition">
        ${link.texto}
      </a>`
    )
    .join("");
 
  render(
    "render-header",
    `
    <div class="font-bold text-5xl tracking-tighter">
      ${logo}
    </div>
 
    <nav class="hidden md:flex gap-30 text-[20px] font-bold tracking-[0.2em] text-[#8892B0]">
      ${linksNav}
      <div id="contenedor-tema"></div>
    </nav>
 
    <a href="${botonContacto.href}">
      <button class="border border-[#E3FF6A] text-[#E3FF6A] px-5 py-2 rounded-full text-[20px] font-bold tracking-widest hover:bg-[#E3FF6A] hover:text-black transition-all">
        ${botonContacto.texto}
      </button>
    </a>
  `
  );
}
 
// 2. HERO
function renderHero() {
  const { nombre, tituloP1, tituloP2, imagen, imagenAlt, botonProyectos, tarjetaResena, tarjetaConocimientos } = datos.hero;
 
  const barras = tarjetaConocimientos.habilidades
    .map(
      (h) => `
      <div>
        <div class="flex justify-between text-[12px] font-bold mb-2 uppercase">
          <span>${h.nombre}</span>
          <span class="text-[#8892B0]">${h.porcentaje}%</span>
        </div>
        <div class="h-[3px] w-full bg-white/10 dark:bg-black/10 rounded-full overflow-hidden">
          <div class="h-full bg-[#E3FF6A]" style="width: ${h.porcentaje}%"></div>
        </div>
      </div>`
    )
    .join("");
 
  render(
    "render-hero",
    `
    <div class="text-center z-10 flex flex-col items-center w-full">
      <h2 class="text-xl md:text-4xl font-light tracking-tight text-white/90 dark:text-[#0B0F1A]/90">
        Soy <span class="text-[#E3FF6A] font-bold dark:text-[#5B7F00]">${nombre}</span>
      </h2>
      <h1 class="mt-4 md:mt-6 flex flex-col md:flex-row items-center justify-center gap-2">
        <span class="border border-white/20 dark:border-black/20 bg-transparent px-5 py-2 md:px-8 md:py-3 rounded-2xl text-3xl md:text-6xl font-bold backdrop-blur-sm shadow-xl tracking-tighter dark:text-[#0B0F1A]">
          ${tituloP1}
        </span>
        <span class="text-3xl md:text-6xl font-bold tracking-tighter dark:text-[#0B0F1A]">
          ${tituloP2}
        </span>
      </h1>
    </div>
 
    <div class="relative w-full max-w-6xl flex justify-center items-end min-h-[400px] md:min-h-[550px] mt-10">
 
      <div class="absolute bottom-20 w-48 h-64 md:w-64 md:h-80 bg-yellow-400/40 rounded-full blur-[100px] z-0"></div>
 
      <div class="relative z-20 w-full max-w-[280px] md:max-w-md flex flex-col items-center">
        <img src="${imagen}" alt="${imagenAlt}" class="w-full h-auto object-contain">
        <button class="-mt-8 z-30 bg-[#E3FF6A] text-black px-10 py-3 rounded-full text-[15px] font-black uppercase shadow-2xl hover:scale-105 transition-transform">
          ${botonProyectos}
        </button>
      </div>
 
      <div class="hidden md:block absolute left-0 lg:left-10 bottom-32 z-30 w-72 lg:w-80 p-8 rounded-3xl bg-[#1E293B]/60 dark:bg-white/80 backdrop-blur-md border border-white/5 dark:border-black/10 -rotate-3 shadow-2xl">
        <p class="text-[11px] font-bold text-[#8892B0] dark:text-[#0B0F1A]/60 mb-3 tracking-[0.2em] uppercase">
          ${tarjetaResena.etiqueta}
        </p>
        <p class="text-[14px] leading-relaxed italic text-white/90 dark:text-[#0B0F1A]">
          "${tarjetaResena.texto}"
        </p>
      </div>
 
      <div class="hidden md:block absolute right-0 lg:right-10 bottom-24 z-30 w-72 lg:w-80 p-8 rounded-3xl bg-[#1E293B]/60 dark:bg-white/80 backdrop-blur-md border border-white/5 dark:border-black/10 rotate-3 shadow-2xl dark:text-black">
        <p class="text-[11px] font-bold text-[#8892B0] dark:text-[#0B0F1A]/60 mb-6 uppercase tracking-[0.2em]">
          ${tarjetaConocimientos.etiqueta}
        </p>
        <div class="space-y-6">
          ${barras}
        </div>
      </div>
 
    </div>
  `
  );
}
 
// 3. SOBRE MÍ
function renderSobreMi() {
  const { titulo, parrafos, boton, fotosLaterales } = datos.sobreMi;
 
  const textosParrafos = parrafos
    .map((p) => `<p>${p}</p>`)
    .join("");
 
  const [fotoIzq1, fotoIzq2, fotoDer] = fotosLaterales;
 
  render(
    "render-sobre-mi",
    `
    <aside class="hidden lg:flex flex-col gap-20 items-center">
      <div class="w-42 h-54 bg-gray-800 dark:bg-gray-200 rounded-2xl ${fotoIzq1.rotacion} overflow-hidden shadow-2xl">
        <img src="${fotoIzq1.src}" alt="${fotoIzq1.alt}" class="w-full h-full object-cover">
      </div>
      <div class="w-46 h-58 bg-gray-800 dark:bg-gray-200 rounded-2xl ${fotoIzq2.rotacion} overflow-hidden shadow-2xl">
        <img src="${fotoIzq2.src}" alt="${fotoIzq2.alt}" class="w-full h-full object-cover">
      </div>
    </aside>
 
    <article class="flex flex-col items-center text-center z-10">
      <h2 class="text-[#E3FF6A] dark:text-[#5B7F00] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">
        ${titulo}
      </h2>
      <div class="space-y-6 text-gray-400 dark:text-gray-600 text-sm md:text-[20px] leading-relaxed">
        ${textosParrafos}
      </div>
      <button class="mt-10 bg-[#E3FF6A] text-black px-10 py-3 rounded-full text-[15px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
        ${boton}
      </button>
    </article>
 
    <aside class="hidden lg:flex flex-col items-center">
      <div class="w-54 h-66 bg-gray-800 dark:bg-gray-200 rounded-2xl ${fotoDer.rotacion} overflow-hidden shadow-2xl">
        <img src="${fotoDer.src}" alt="${fotoDer.alt}" class="w-full h-full object-cover">
      </div>
    </aside>
  `
  );
}
 
// 4. HABILIDADES
function renderHabilidades() {
  const { titulo, logos, experiencia, adicionales } = datos.habilidades;
 
  const gridLogos = logos
    .map(
      (logo) => `
      <div class="bg-[#111827] dark:bg-white aspect-square rounded-2xl flex items-center justify-center border border-white/5 dark:border-black/10 shadow-md">
        <img src="${logo.src}" alt="${logo.alt}" class="w-20 h-20">
      </div>`
    )
    .join("");
 
  const logosAdicionales = adicionales
    .map(
      (logo) => `<img src="${logo.src}" alt="${logo.alt}" class="h-20 w-20">`
    )
    .join("");
 
  render(
    "render-habilidades",
    `
    <h2 class="text-[#E3FF6A] dark:text-[#5B7F00] text-3xl md:text-5xl font-black text-center uppercase mb-12 tracking-tighter">
      ${titulo}
    </h2>
 
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
 
      <div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        ${gridLogos}
      </div>
 
      <div class="lg:col-span-4 bg-[#111827] dark:bg-white rounded-2xl p-10 flex flex-col items-center justify-center text-center border border-white/5 dark:border-black/10 shadow-md h-full">
        <span class="text-7xl font-black text-white dark:text-[#0B0F1A] mb-2">${experiencia.cantidad}</span>
        <p class="text-gray-400 dark:text-gray-600 text-sm font-bold leading-tight mb-8">
          ${experiencia.unidad}<br>${experiencia.texto}
        </p>
        <a href="${experiencia.cvUrl}" download>
          <button class="bg-[#E3FF6A] text-black px-8 py-4 rounded-full text-[13px] font-black uppercase tracking-widest hover:scale-105 transition-transform">
            ${experiencia.boton}
          </button>
        </a>
      </div>
 
    </div>
 
    <div class="mt-12 p-8 bg-[#111827]/50 dark:bg-black/5 rounded-3xl border border-white/5 dark:border-black/10">
      <h3 class="text-[#E3FF6A] dark:text-[#5B7F00] text-center text-[25px] font-bold uppercase mb-8">
        HABILIDADES ADICIONALES
      </h3>
      <div class="flex flex-wrap justify-center gap-20 opacity-50">
        ${logosAdicionales}
      </div>
    </div>
  `
  );
}
 
// 5. EMPRESAS
function renderEmpresas() {
  const { titulo, boton, tarjetas } = datos.empresas;
 
  const [t1, t2, t3] = tarjetas;
 
  render(
    "render-empresas",
    `
    <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-32 lg:pr-10 text-center lg:text-left z-10">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight mb-10 dark:text-[#0B0F1A]">
        ${titulo.replace("TRABAJAN CON", "TRABAJAN CON <br>")}
      </h2>
      <button class="bg-[#E3FF6A] text-black px-20 py-4 rounded-full text-[20px] font-black uppercase shadow-lg hover:scale-105 transition-transform">
        ${boton}
      </button>
    </div>
 
    <div class="w-full pr-0 lg:pr-32 lg:w-1/2 flex items-center justify-center gap-4 h-[500px]">
 
      <div class="relative w-64 lg:w-80 h-full ${t1.forma} overflow-hidden shadow-2xl border border-white/10">
        <img src="${t1.src}" alt="${t1.alt}" class="w-full h-full object-cover">
      </div>
 
      <div class="w-24 md:w-44 h-full ${t2.forma} overflow-hidden shadow-2xl border border-white/10">
        <img src="${t2.src}" alt="${t2.alt}" class="w-full h-full object-cover">
      </div>
 
      <div class="w-24 md:w-44 h-full ${t3.forma} overflow-hidden shadow-2xl border border-white/10">
        <img src="${t3.src}" alt="${t3.alt}" class="w-full h-full object-cover">
      </div>
 
    </div>
  `
  );
}
 
// 6. CONTACTO
function renderContacto() {
  const { titulo, campos, botonEnviar } = datos.contacto;
 
  const inputsHTML = campos
    .map((campo) => {
      if (campo.tipo === "textarea") {
        return `
        <textarea
          name="${campo.name}"
          placeholder="${campo.placeholder}"
          rows="4"
          class="w-full bg-[#E5E7EB] dark:bg-[#F9FAFB] text-[#1F2937] text-[10px] font-bold px-8 py-5 rounded-2xl outline-none resize-none"
        ></textarea>`;
      }
      return `
      <input
        type="${campo.tipo}"
        name="${campo.name}"
        placeholder="${campo.placeholder}"
        class="w-full bg-[#E5E7EB] dark:bg-[#F9FAFB] text-[#1F2937] text-[10px] font-bold px-8 py-5 rounded-2xl outline-none"
      >`;
    })
    .join("");
 
  render(
    "render-contacto",
    `
    <h2 class="text-[#0B0F1A] text-3xl md:text-5xl font-black text-center uppercase mb-12">
      ${titulo}
    </h2>
    <form class="flex flex-col gap-6">
      ${inputsHTML}
      <button type="submit" class="w-full bg-[#E3FF6A] text-[#0B0F1A] text-[11px] font-black uppercase py-5 rounded-full mt-4 shadow-lg hover:scale-105 transition-transform">
        ${botonEnviar}
      </button>
    </form>
  `
  );
}
 
// INICIALIZAR
function init() {
  renderHeader();
  renderHero();
  renderSobreMi();
  renderHabilidades();
  renderEmpresas();
  renderContacto();
  iniciarTema();
}
 
init();