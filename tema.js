const CLAVE = "tema"; 
 
// Lee la preferencia guardada o la del sistema operativo
function modoOscuro() {
  const guardado = localStorage.getItem(CLAVE);
  if (guardado) return guardado;

  // Devuelve el modo 
  if (window.matchMedia("(dark)").matches) {
    return "dark";
  }
  return "light";
}
 

function aplicarTema(tema) {
  
  document.documentElement.classList.toggle("dark", tema === "dark"); // toggle añade la clase si es "dark", o la quita si es otra cosa
  localStorage.setItem(CLAVE, tema);
}
 

function obtenerIcono(tema) { // Devuelve el icono usando un if
  if (tema === "dark") {
    return "☀️";
  }
  return "🌙";
}
 

export function iniciarTema() { // Inyecta el botón en #contenedor-tema y le asigna el evento
  const tema = modoOscuro();
  aplicarTema(tema);
 
  const contenedor = document.getElementById("contenedor-tema");
  if (!contenedor) return;
 
  const boton = document.createElement("button");
  boton.textContent = obtenerIcono(tema);
  boton.className = "text-2xl hover:scale-110 transition-transform cursor-pointer";
 
  boton.addEventListener("click", () => { // Revisa si la clase "dark" existe actualmente en el HTML
    
    const esOscuro = document.documentElement.classList.contains("dark");
    
    
    if (esOscuro) { // Si es oscuro lo cambia a claro, si no, a oscuro
      aplicarTema("light");
      boton.textContent = obtenerIcono("light");
    } else {
      aplicarTema("dark");
      boton.textContent = obtenerIcono("dark");
    }
  });
 
  contenedor.appendChild(boton);
}