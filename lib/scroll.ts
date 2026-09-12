// Smooth-scroll helper shared by every CTA and nav link.
export function scrollToId(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string
) {
  e.preventDefault();
  scrollToId(href);
}
