/**
 * Picks the section whose top has passed under the header and mirrors its
 * data-header-theme onto body for CSS (light ink vs light-on-dark).
 */
export function initHeaderTheme(): void {
  const run = () => {
    const header = document.querySelector<HTMLElement>(".header");
    const body = document.body;
    const sections = document.querySelectorAll<HTMLElement>(
      "main [data-header-theme]"
    );

    if (!header || sections.length === 0) {
      body.dataset.headerTheme = "light";
      return;
    }

    const threshold = header.getBoundingClientRect().bottom;
    let theme: "light" | "dark" = "light";

    for (const section of sections) {
      const r = section.getBoundingClientRect();
      if (r.top <= threshold) {
        const t = section.dataset.headerTheme;
        theme = t === "dark" ? "dark" : "light";
      }
    }

    body.dataset.headerTheme = theme;
  };

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      run();
    });
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", run);
  window.addEventListener("hashchange", run);
  window.addEventListener("load", () => {
    requestAnimationFrame(() => setTimeout(run, 0));
  });

  if (document.readyState === "complete") {
    run();
  } else {
    document.addEventListener("DOMContentLoaded", run);
  }
}
