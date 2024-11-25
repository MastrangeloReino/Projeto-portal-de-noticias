/**
 * load_html - carrega um html na pagina
 *
 * @param {*} htmlElement - o elemento que vc quer que receba seu html
 * @param {*} location - destino do elemento que vc quer carregar
 */
function load_html(htmlElement, location) {
  if (!window.event) return;
  fetch(location)
    .then((res) => res.text())
    .then((html) => (htmlElement.innerHTML = html));
}

/**
 * ele esta dentro dessa pasta source mas poderia ficar em qlq lugar
 */
