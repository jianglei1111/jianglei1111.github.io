import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { profile } from "../data/site.js";

const base = import.meta.env.BASE_URL;

const navigation = [
  ["研究", "research"],
  ["动态", "now"],
  ["成果", "academic"],
  ["项目", "history"],
  ["开源", "opensource"],
  ["关于", "about"],
  ["联系", "contact"],
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        跳到正文
      </a>
      <a className="identity-lockup" href={base} aria-label="返回首页">
        <span className="wordmark">{profile.name}</span>
        <span className="identity-role">{profile.role}</span>
      </a>

      <nav className="desktop-nav" aria-label="主导航">
        {navigation.map(([label, id]) => (
          <a key={id} href={`${base}#${id}`}>
            {label}
          </a>
        ))}
      </nav>

      <button
        className="menu-button"
        type="button"
        aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        {menuOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="移动端导航">
          {navigation.map(([label, id]) => (
            <a key={id} href={`${base}#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
