# VAN LOTUS – Proyecto Web

## Resumen: ¿Cómo funciona React y qué es un componente?

- **React** es una biblioteca de JavaScript para construir interfaces de usuario declarativas y componibles. En vez de manipular el DOM directamente, describes el estado de tu UI y React calcula cómo actualizar el DOM eficientemente.
- **Componentes**: son piezas reutilizables de UI que aceptan entradas (props) y devuelven una estructura visual (JSX). Se pueden componer entre sí para formar interfaces complejas.
  - **Funcionales**: funciones que retornan JSX. Pueden usar hooks como `useState` y `useEffect` para estado y efectos.
  - **Props**: datos que el componente recibe desde fuera. Inmutables dentro del componente.
  - **Estado (state)**: datos internos que cambian con la interacción del usuario o eventos.
  - **Unidireccionalidad**: los datos fluyen de padres a hijos; los eventos viajan de hijos a padres mediante callbacks.

### Ejemplo conceptual

```jsx
function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>
}
```

## Implementación en este proyecto: Islas de React

- Este proyecto es mayormente HTML+Bootstrap. Añadimos una **isla de React (Preact)** en el `hero` para el efecto "Fluid Glass" sin reescribir el sitio.
- Montaje: se inyecta un `div` con id `hero-react-root` en `index.html` y se usa un script `type="module"` con `htm/preact` para renderizar el componente.

Ubicación clave:
- `index.html` → sección `hero`: punto de montaje `#hero-react-root` y script de Preact/HTM.
- `assets/css/styles.css` → estilos `fluid-glass`, blobs decorativos y layout.

## Flujo de trabajo de preguntas teóricas

- A partir de ahora, cada pregunta teórica sobre React o React-Bits será respondida y además se agregará un apunte en este `README.md` bajo la sección "Apuntes".

## Apuntes

- document.documentElement: referencia al elemento raíz `<html>` del documento. Útil para setear atributos globales como `data-theme` y que los estilos CSS reaccionen a ese estado.

- localStorage.getItem(key): lee un valor persistente (string) guardado en el almacenamiento del navegador por dominio. Sobrevive a recargas y cierres. Ej.: `localStorage.getItem('theme')` devuelve `'light'`, `'dark'` o `null` si no existe.

- innerHTML: propiedad que escribe/lee HTML dentro de un elemento. Ej.: `btn.innerHTML = '<i class="fas fa-sun"></i>'` reemplaza el contenido del botón por ese ícono. Úsalo con contenido de confianza para evitar XSS.

- const vs let (y cómo “constante” funciona):
  - const crea una referencia inmutable, no reasignable. El valor referenciado puede ser mutable (objetos/arrays) pero la referencia no cambia.
  - let crea una variable reasignable.
  - Ejemplos:
    - `const root = document.documentElement;` defines una referencia fija al `<html>`. Luego llamas métodos sobre esa referencia (p. ej. `root.setAttribute(...)`). No reasignas `root`.
    - `const btn = document.getElementById('themeToggle');` guarda la referencia al botón; después cambias su `innerHTML` o agregas listeners, pero no reasignas `btn`.
    - Si necesitaras cambiar completamente la referencia (apuntar a otro elemento), usarías `let`.

- Patrón usado en el tema:
  - Leer preferencia: `const stored = localStorage.getItem('theme')`.
  - Si no hay preferencia, setear `data-theme="light"` en `document.documentElement` y guardar `localStorage.setItem('theme','light')`.
  - Al pulsar el botón, alternar el atributo y actualizar `localStorage`.

### Ejemplos (con comentarios)

```js
// document.documentElement: referencia al <html>
const root = document.documentElement;
// Establece atributo global para que CSS reaccione (p. ej., tema)
root.setAttribute('data-theme', 'light');
```

```js
// localStorage: guardar y leer un string persistente
localStorage.setItem('theme', 'light');   // guarda preferencia
const stored = localStorage.getItem('theme'); // 'light' | 'dark' | null
```

```js
// innerHTML: reemplaza el HTML interno de un elemento
const btn = document.getElementById('themeToggle');
btn.innerHTML = '<i class="fas fa-sun"></i>'; // pon un icono dentro del botón
```

```js
// const vs let
const arr = [1, 2];
arr.push(3); // ok: modificas el contenido, no la referencia
// arr = [] // ❌ no permitido: no puedes reasignar una const

let count = 0; // let permite reasignación
count = 1;     // ✅
```

```js
// Patrón simplificado de inicialización de tema (primera visita => claro)
(function initTheme() {
  const root = document.documentElement;            // <html>
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');     // 'light' | 'dark' | null

  if (!stored) {
    root.setAttribute('data-theme', 'light');       // default claro
    localStorage.setItem('theme', 'light');         // persistir
    if (btn) btn.innerHTML = '<i class="fas fa-sun"></i>';
  } else if (stored === 'light') {
    root.setAttribute('data-theme', 'light');
    if (btn) btn.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    // stored === 'dark'
    if (btn) btn.innerHTML = '<i class="fas fa-moon"></i>';
  }
})();
```