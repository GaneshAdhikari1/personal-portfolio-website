(() => {
  const prefersReducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const progress = document.querySelector(".scroll-progress span");
  if (progress) {
    let ticking = false;
    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - innerHeight;
      const ratio = distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0;
      progress.style.transform = `scaleX(${ratio})`;
      ticking = false;
    };
    addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; } }, { passive: true });
    updateProgress();
  }

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (toggle && nav) {
    const close = () => { toggle.setAttribute("aria-expanded", "false"); nav.classList.remove("open"); document.body.classList.remove("menu-open"); };
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open)); nav.classList.toggle("open", !open); document.body.classList.toggle("menu-open", !open);
    });
    nav.addEventListener("click", (event) => { if (event.target.closest("a")) close(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") { close(); toggle.focus(); } });
  }

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("revealed"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else revealItems.forEach((item) => item.classList.add("revealed"));

  const tiltCard = document.querySelector("[data-tilt-card]");
  if (tiltCard && !prefersReducedMotion && matchMedia("(pointer: fine)").matches) {
    tiltCard.addEventListener("pointermove", (event) => {
      const rect = tiltCard.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      tiltCard.style.setProperty("--tilt-x", `${x * 4}deg`);
      tiltCard.style.setProperty("--tilt-y", `${y * -4}deg`);
    });
    tiltCard.addEventListener("pointerleave", () => {
      tiltCard.style.setProperty("--tilt-x", "0deg");
      tiltCard.style.setProperty("--tilt-y", "0deg");
    });
  }

  const search = document.querySelector("#resource-search");
  if (search) {
    const cards = [...document.querySelectorAll(".resource-card")];
    const filters = [...document.querySelectorAll(".filter-button")];
    const status = document.querySelector("#resource-status");
    const empty = document.querySelector("#resource-empty");
    let category = "All";
    const update = () => {
      const term = search.value.trim().toLowerCase(); let count = 0;
      cards.forEach((card) => { const matchText = !term || `${card.dataset.title} ${card.dataset.description}`.includes(term); const matchCat = category === "All" || card.dataset.category === category; card.hidden = !(matchText && matchCat); if (!card.hidden) count++; });
      status.textContent = `${count} resource${count === 1 ? "" : "s"} shown`;
      empty.hidden = count !== 0;
    };
    search.addEventListener("input", update);
    filters.forEach((button) => button.addEventListener("click", () => { category = button.dataset.category; filters.forEach((b) => { b.classList.toggle("active", b === button); b.setAttribute("aria-pressed", String(b === button)); }); update(); }));
    filters.forEach((b,i)=>b.setAttribute("aria-pressed",String(i===0))); update();
  }

  const form = document.querySelector("#consultation-form");
  if (form) {
    const status = document.querySelector("#form-status");
    const button = form.querySelector("button[type=submit]");
    const clearErrors = () => { form.querySelectorAll(".field-error").forEach((x)=>x.textContent=""); form.querySelectorAll("[aria-invalid]").forEach((x)=>x.removeAttribute("aria-invalid")); };
    const showErrors = (errors = {}) => Object.entries(errors).forEach(([name,message]) => { const field=form.elements[name]; if(!field) return; field.setAttribute("aria-invalid","true"); const slot=field.closest("label")?.querySelector(".field-error"); if(slot) slot.textContent=message; });
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); clearErrors(); status.className="form-status"; status.textContent="";
      const data=Object.fromEntries(new FormData(form).entries());
      if (!form.checkValidity()) { form.querySelectorAll(":invalid").forEach((field)=>{ field.setAttribute("aria-invalid","true"); const slot=field.closest("label")?.querySelector(".field-error"); if(slot) slot.textContent=field.validationMessage; }); const first=form.querySelector(":invalid"); status.classList.add("error"); status.textContent="Please check the highlighted fields."; status.focus(); first?.focus(); return; }
      button.disabled=true; button.classList.add("loading");
      try {
        const response=await fetch(form.action,{method:"POST",headers:{"content-type":"application/json","accept":"application/json"},body:JSON.stringify(data)});
        const result=await response.json();
        if(!response.ok || result.success === false || result.success === "false") { showErrors(result.errors); throw new Error(result.message || "The request could not be accepted."); }
        status.classList.add("success"); status.textContent="Thank you—your consultation request was sent. I’ll review it and reply by email."; form.reset();
      } catch (error) { status.classList.add("error"); status.textContent=error.message || "Something went wrong. Please retry."; }
      finally { button.disabled=false; button.classList.remove("loading"); status.focus(); }
    });
  }
})();
