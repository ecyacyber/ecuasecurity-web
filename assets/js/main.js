/* ==========================================================================
   MAIN.JS
   Comportamiento de la interfaz: header fijo con sombra al hacer scroll,
   menú móvil, dropdown de servicios, resaltado del enlace activo,
   botón "volver arriba" y año dinámico en el footer.
   ========================================================================== */

(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navOverlay = document.querySelector(".nav-overlay");
  const navLinks = document.querySelectorAll(".nav-link");
  const dropdownItem = document.querySelector(".nav-item--dropdown");
  const dropdownToggle = dropdownItem ? dropdownItem.querySelector(".nav-item__toggle") : null;
  const backToTop = document.querySelector(".back-to-top");
  const yearEl = document.getElementById("current-year");

  /* --- Sombra/fondo del header al hacer scroll --- */
  const onScroll = () => {
    const scrolled = window.scrollY > 12;
    header.classList.toggle("is-scrolled", scrolled);
    if (backToTop) {
      backToTop.classList.toggle("is-visible", window.scrollY > 480);
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* --- Menú móvil --- */
  function closeMobileMenu() {
    navMenu.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navOverlay.classList.remove("is-visible");
    document.body.style.overflow = "";
    if (dropdownItem) dropdownItem.classList.remove("is-open");
  }

  function openMobileMenu() {
    navMenu.classList.add("is-open");
    navToggle.setAttribute("aria-expanded", "true");
    navOverlay.classList.add("is-visible");
    document.body.style.overflow = "hidden";
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("is-open");
      isOpen ? closeMobileMenu() : openMobileMenu();
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener("click", closeMobileMenu);
  }

  /* --- Cerrar el menú móvil al elegir un enlace (excepto el toggle de dropdown) --- */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 860) closeMobileMenu();
    });
  });

  /* --- Dropdown "Servicios" en móvil (clic en lugar de hover) --- */
  if (dropdownToggle && dropdownItem) {
    dropdownToggle.addEventListener("click", (event) => {
      if (window.innerWidth <= 860) {
        event.preventDefault();
        dropdownItem.classList.toggle("is-open");
      }
    });
  }

  /* --- Cerrar menú móvil con tecla Escape --- */
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileMenu();
  });

  /* --- Resaltar enlace de navegación activo según la sección visible --- */
  const sections = document.querySelectorAll("main section[id]");
  if (sections.length && "IntersectionObserver" in window) {
    const navLinkMap = new Map();
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        navLinkMap.set(href.slice(1), link);
      }
    });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = navLinkMap.get(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((l) => l.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  /* --- Botón "volver arriba" --- */
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* --- Año dinámico en el footer --- */
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* --- Formulario de contacto → WhatsApp --- */
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const nombre = contactForm.nombre.value.trim();
      const telefono = contactForm.telefono.value.trim();
      const email = contactForm.email.value.trim();
      const servicioSelect = contactForm.servicio;
      const servicio = servicioSelect.selectedIndex > 0
        ? servicioSelect.options[servicioSelect.selectedIndex].text
        : "";
      const mensaje = contactForm.mensaje.value.trim();

      let text = "Hola ECUASECURITY, deseo solicitar información.\n\n";
      text += "Nombre: " + nombre + "\n";
      if (telefono) text += "Teléfono: " + telefono + "\n";
      text += "Correo: " + email + "\n";
      if (servicio) text += "Servicio de interés: " + servicio + "\n";
      text += "\nMensaje:\n" + mensaje + "\n\n";
      text += "Enviado desde web.ecuasecurity.net";

      const url = "https://wa.me/593939226390?text=" + encodeURIComponent(text);
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
})();
