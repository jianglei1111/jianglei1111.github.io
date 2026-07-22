import { ArrowUp } from "@phosphor-icons/react";
import { profile } from "../data/site.js";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2026 {profile.name}</span>
      <a href="#top">
        回到顶部 <ArrowUp size={16} aria-hidden="true" />
      </a>
    </footer>
  );
}
