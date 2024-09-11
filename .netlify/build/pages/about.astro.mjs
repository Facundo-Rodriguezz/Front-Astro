import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro } from '../chunks/astro/server_CwFyZmz3.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<body> <h1>Mi sitio Astro</h1> <h1>Sobre mi</h1> <h2>... ¡y mi nuevo sitio Astro!</h2> <p>Estoy trabajando en el tutorial introductorio de Astro. Esta es la segunda página de mi sitio web, ¡y es la primera que he construido yo mismo!</p> <p>Este sitio se irá actualizando a medida que vaya completando más partes del tutorial, ¡así que no dejes de visitarlo para ver cómo va mi viaje!</p> </body>`;
}, "C:/Users/fakun/OneDrive/Desktop/Proyect/ProyectoSoul/pale-eclipse/src/pages/about.astro", void 0);

const $$file = "C:/Users/fakun/OneDrive/Desktop/Proyect/ProyectoSoul/pale-eclipse/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
