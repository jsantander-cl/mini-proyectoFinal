const portafolioDatos = {
 
 
  // 1. HEADER
  
  header: {
    logo: "FUNVAL",
    nav: [
      { texto: "SOBRE MI",    href: "#sobre-mi"   },
      { texto: "HABILIDADES", href: "#habilidades" },
      { texto: "PROYECTOS",   href: "#empresas"   },
    ],
    botonContacto: {
      texto: "CONTACTO",
      href: "#contacto",
    },
  },
 
  // 2. HERO 
  hero: {
    nombre:    "Jordan Santander Phillips",
    tituloP1:  "Front End",
    tituloP2:  "Developer",
    imagen:    "./IMG/image_47eb3cbb.png",
    imagenAlt: "Jordan",
    botonProyectos: "PROYECTOS",
 
    tarjetaResena: {
      etiqueta: "Reseña de cliente",
      texto:    "Excelente desarrollador web. Muy recomendable.",
    },
 
    tarjetaConocimientos: {
      etiqueta: "Mis Conocimientos",
      habilidades: [
        { nombre: "Frontend", porcentaje: 95 },
        { nombre: "Backend",  porcentaje: 85 },
      ],
    },
  },
 
  // 3. SOBRE MÍ
  sobreMi: {
    titulo: "SOBRE MI",
    parrafos: [
      "Soy desarrollador Front-End especializado en ReactJS. Además, tengo conocimientos de desarrollo front-end en WordPress con Elementor y WooCommerce.",
      "La programación es mi pasión, por eso trabajo mientras estudio.",
      "En mi tiempo libre, me gusta jugar videojuegos y leer Mangas, la Fotografia. ¡lo cual me resulta muy entretenido y relajante!",
    ],
    boton: "MIS PROYECTOS",
    fotosLaterales: [
      { src: "./IMG/20150222_222553_LLS.JPG",  alt: "Jordan con camara",   rotacion: "-rotate-12" },
      { src: "./IMG/DSCN8677.JPG",             alt: "Jordan con un letrero", rotacion: "rotate-6"  },
      {
        src: "https://scontent.fscl9-2.fna.fbcdn.net/v/t1.6435-9/102938332_10222137809096999_4950925019002731897_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=ca4fef&_nc_eui2=AeFS5YIT28ass_ZcKok9wuSi7W-PilEYip_tb4-KURiKnzEx9Vi0jSxkkPcktObdvbs&_nc_ohc=jMXkwVWu85YQ7kNvwFHztAT&_nc_oc=AdoqNQB-j-IdNqlyOjT1fbSNV0Snbm564zKjHNK2kY1kVyXi3f9pelQu3bXdmvYqPMkLoh5qcQrGbhgf48Jr2edt&_nc_zt=23&_nc_ht=scontent.fscl9-2.fna&_nc_gid=-oaO4_XL9h0Fo85r0tyClg&_nc_ss=7b2a8&oh=00_Af7ShT06vbxW3FpAWYYT_91ys15tZp6ojZMaVfP4hDULAg&oe=6A25E1C7",
        alt: "Jordan foto",
        rotacion: "-rotate-6",
      },
    ],
  },
 
  // 4. HABILIDADES
  habilidades: {
    titulo: "MIS HABILIDADES",
 
    // Los 8 logos principales
    logos: [
      { src: "./IMG/image copy 12.png", alt: "Tecnología 1" },
      { src: "./IMG/image copy.png",    alt: "Tecnología 2" },
      { src: "./IMG/image copy 2.png",  alt: "Tecnología 3" },
      { src: "./IMG/image copy 3.png",  alt: "Tecnología 4" },
      { src: "./IMG/image copy 4.png",  alt: "Tecnología 5" },
      { src: "./IMG/image copy 5.png",  alt: "Tecnología 6" },
      { src: "./IMG/image copy 14.png", alt: "Tecnología 7" },
      { src: "./IMG/image copy 7.png",  alt: "Tecnología 8" },
    ],
 
    // Tarjeta de experiencia
    experiencia: {
      cantidad: 1,
      unidad:   "MES",
      texto:    "de Experiencia",
      boton:    "DESCARGAR MI CV",
      cvUrl:    "./CV/jordan-santander-cv.pdf", // solo prueba
    },
 
    // Habilidades adicionales
    adicionales: [
      { src: "./IMG/image copy 8.png",  alt: "Habilidad adicional 1" },
      { src: "./IMG/image copy 9.png",  alt: "Habilidad adicional 2" },
      { src: "./IMG/image copy 10.png", alt: "Habilidad adicional 3" },
      { src: "./IMG/image copy 11.png", alt: "Habilidad adicional 4" },
    ],
  },
 
  // 5. EMPRESAS
  empresas: {
    titulo:    "EMPRESAS QUE TRABAJAN CON NOSOTROS",
    boton:     "MIS PROYECTOS",
    tarjetas: [
      { src: "./IMG/image copy 15.png", alt: "Plomero",       forma: "rounded-[2.5rem]" },
      { src: "./IMG/image copy 16.png", alt: "Marketing",     forma: "rounded-full"     },
      { src: "./IMG/image copy 17.png", alt: "Empire State",  forma: "rounded-full"     },
    ],
  },
 
  // 6. CONTACTO
  contacto: {
    titulo: "CONTACTAME",
    campos: [
      { tipo: "text",     placeholder: "TU NOMBRE",           name: "nombre"  },
      { tipo: "email",    placeholder: "CORREO ELECTRONICO",  name: "email"   },
      { tipo: "textarea", placeholder: "TU MENSAJE",          name: "mensaje" },
    ],
    botonEnviar: "ENVIAR",
  },
 
};
 
export default portafolioDatos;
