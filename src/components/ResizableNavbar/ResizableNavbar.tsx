"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";

import { LogoMark } from "@/components/LogoMark";
import { cn } from "@/lib/cn";
import {
  alternateHref,
  LOCALE_NAMES,
  LOCALES,
  localeFromPath,
} from "@/lib/i18n";
import type { NavItem, RouteKey } from "@/lib/nav";

import styles from "./ResizableNavbar.module.css";

// Barra fija sencilla (inspirada en anthropic.com): enlaces en pastillas
// finas, la primera mitad a la izquierda, el logo centrado y la segunda
// mitad a la derecha. No se encoge ni flota: al hacer scroll solo gana una
// línea fina inferior. En móvil, logo a la izquierda y hamburguesa.
const TRANSITION = { duration: 0.2, ease: [0.22, 1, 0.36, 1] as const };
const INSTANT = { duration: 0 };

const NAV_COPY = {
  es: {
    primaryNav: "Navegación principal",
    mobileNav: "Navegación móvil",
    open: "Abrir menú",
    close: "Cerrar menú",
    language: "Idioma",
  },
  gl: {
    primaryNav: "Navegación principal",
    mobileNav: "Navegación móbil",
    open: "Abrir menú",
    close: "Pechar menú",
    language: "Lingua",
  },
};

interface ResizableNavbarProps {
  siteName: string;
  items: NavItem[];
  activeRoute?: RouteKey;
}

export function ResizableNavbar({
  siteName,
  items,
  activeRoute,
}: ResizableNavbarProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [compact, setCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const darkRef = useRef<HTMLDivElement>(null);
  // El idioma sale de la URL (/gl/… es gallego): así los layouts no tienen
  // que pasarlo y el selector siempre apunta a la página equivalente.
  const pathname = usePathname() ?? "/";
  const locale = localeFromPath(pathname);
  const copy = NAV_COPY[locale];
  const homeHref = locale === "gl" ? "/gl/" : "/";

  // Línea inferior en cuanto hay scroll; el logo se comprime a la X un poco
  // más abajo, para que no parpadee con un toque de rueda.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
    setCompact(latest > 48);
  });

  // Si la página se carga ya a media altura (recarga, ancla), el logo
  // empieza comprimido. En un rAF para no encadenar renders en el efecto.
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setScrolled(window.scrollY > 8);
      setCompact(window.scrollY > 48);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  // Inversión de colores sobre el pie, como la cabecera de anthropic.com: la
  // capa oscura de la barra se recorta justo por el borde superior del pie,
  // así que logo y botones cambian de color por la línea por la que va pasando
  // el pie, no de golpe.
  useEffect(() => {
    const dark = darkRef.current;
    const footer = document.querySelector("footer");
    if (!dark || !footer) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const barHeight = dark.offsetHeight;
      const edge = Math.min(
        barHeight,
        Math.max(0, footer.getBoundingClientRect().top),
      );
      dark.style.clipPath = `inset(${edge}px 0 0 0)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [pathname, mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const transition = prefersReducedMotion ? INSTANT : TRANSITION;
  const half = Math.ceil(items.length / 2);
  const groups = [items.slice(0, half), items.slice(half)];

  function renderLinks(list: NavItem[], inverted = false) {
    return list.map((item) => {
      const isActive = activeRoute === item.key;
      return (
        <li key={item.link}>
          <Link
            href={item.link}
            className={cn(styles.chip, isActive && styles.chipActive)}
            aria-current={isActive ? "page" : undefined}
            tabIndex={inverted ? -1 : undefined}
          >
            {item.name}
          </Link>
        </li>
      );
    });
  }

  function renderLanguages(className: string, inverted = false) {
    return (
      <ul className={className} aria-label={copy.language}>
        {LOCALES.map((target) => {
          const isCurrent = target === locale;
          return (
            <li key={target}>
              <Link
                href={alternateHref(pathname, target)}
                lang={target}
                hrefLang={target}
                className={cn(styles.lang, isCurrent && styles.langCurrent)}
                aria-current={isCurrent ? "true" : undefined}
                aria-label={LOCALE_NAMES[target]}
                tabIndex={inverted ? -1 : undefined}
                onClick={() => setMobileOpen(false)}
              >
                {target.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }

  // La misma barra dos veces: la normal y, encima, la copia oscura (decorativa).
  function renderBar(inverted: boolean) {
    return (
      <div className={styles.bar}>
        <nav className={styles.desktopNav} aria-label={copy.primaryNav}>
          <ul className={styles.list}>{renderLinks(groups[0], inverted)}</ul>
          <Link href={homeHref} className={styles.logo} aria-label={siteName}>
            <LogoMark collapsed={compact} />
          </Link>
          <div className={styles.endGroup}>
            <ul className={cn(styles.list, styles.listEnd)}>
              {renderLinks(groups[1], inverted)}
            </ul>
            {renderLanguages(styles.langs, inverted)}
          </div>
        </nav>

        <Link
          href={homeHref}
          className={cn(styles.logo, styles.logoMobile)}
          aria-label={siteName}
        >
          <LogoMark collapsed={compact && !mobileOpen} />
        </Link>

        <button
          ref={inverted ? undefined : toggleRef}
          type="button"
          className={styles.mobileToggle}
          aria-expanded={inverted ? undefined : mobileOpen}
          aria-controls={inverted ? undefined : "site-mobile-menu"}
          tabIndex={inverted ? -1 : undefined}
          aria-label={mobileOpen ? copy.close : copy.open}
          onClick={() => setMobileOpen((value) => !value)}
        >
          <span
            className={cn(
              styles.toggleLine,
              mobileOpen && styles.toggleLineTop,
            )}
          />
          <span
            className={cn(
              styles.toggleLine,
              mobileOpen && styles.toggleLineBottom,
            )}
          />
        </button>
      </div>
    );
  }

  return (
    <header
      className={cn(
        styles.wrapper,
        (scrolled || mobileOpen) && styles.wrapperScrolled,
      )}
    >
      {renderBar(false)}
      {!mobileOpen && (
        <div ref={darkRef} className={styles.dark} aria-hidden="true">
          {renderBar(true)}
        </div>
      )}

      <AnimatePresence initial={false}>
        {mobileOpen && (
          <motion.div
            id="site-mobile-menu"
            className={styles.mobileMenu}
            initial={prefersReducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={prefersReducedMotion ? undefined : { opacity: 0, height: 0 }}
            transition={transition}
          >
            <nav aria-label={copy.mobileNav}>
              <ul className={styles.mobileList}>
                {items.map((item) => {
                  const isActive = activeRoute === item.key;
                  return (
                    <li key={item.link}>
                      <Link
                        href={item.link}
                        className={cn(
                          styles.mobileLink,
                          isActive && styles.mobileLinkActive,
                        )}
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.name}
                        <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {renderLanguages(styles.mobileLangs)}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
