
/* =====================================
   1. BOTÓN VOLVER ARRIBA
===================================== */

const botonArriba = document.getElementById("volverArriba");

window.addEventListener("scroll", function () {
    if (window.scrollY > 350) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
});

botonArriba.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/* =====================================
   2. NAVEGACIÓN ENTRE APARTADOS
===================================== */

const enlaces = document.querySelectorAll(
    '.navegacion a, .barra-lateral a[href^="#"]'
);

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (evento) {
        const destino = enlace.getAttribute("href");
        const seccion = document.querySelector(destino);

        if (seccion) {
            evento.preventDefault();

            seccion.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            history.replaceState(null, "", destino);
        }
    });
});

/* =====================================
   3. CONTADOR DE PALABRAS: TEXTO SAMOA
===================================== */

const textoSamoa = document.getElementById("textoSamoa");

if (textoSamoa) {
    const contador = document.createElement("p");

    contador.className = "contador-palabras";
    contador.setAttribute("aria-live", "polite");

    textoSamoa.insertAdjacentElement("afterend", contador);

    function contarPalabras(texto) {
        const limpio = texto.trim();

        if (limpio === "") {
            return 0;
        }

        return limpio.split(/\s+/).length;
    }

    function actualizarContador() {
        const cantidad = contarPalabras(textoSamoa.value);

        contador.textContent =
            "Palabras escritas: " + cantidad +
            " de 280 a 320 requeridas.";

        contador.classList.remove(
            "contador-correcto",
            "contador-incompleto",
            "contador-excedido"
        );

        if (cantidad < 280) {
            contador.classList.add("contador-incompleto");
        } else if (cantidad <= 320) {
            contador.classList.add("contador-correcto");
        } else {
            contador.classList.add("contador-excedido");
        }
    }

    textoSamoa.addEventListener("input", actualizarContador);

    actualizarContador();
}

/* =====================================
   4. AVISO PARA IMÁGENES NO ENCONTRADAS
===================================== */

document.querySelectorAll(".imagen-evidencia").forEach(function (imagen) {
    imagen.addEventListener("error", function () {
        imagen.classList.add("imagen-no-disponible");
        imagen.alt = "Imagen pendiente de agregar: " + imagen.alt;
    });
});

/* =====================================
   5. MENSAJE DE CONFIRMACIÓN
===================================== */

console.log("Wiki de Antropología cargada correctamente.");
console.log("Categorías disponibles: Evidencia 3 y Evidencia 4.");
