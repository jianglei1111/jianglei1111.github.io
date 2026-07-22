import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HomePage } from "./pages/HomePage.jsx";
import { ProjectPage } from "./pages/ProjectPage.jsx";
import { NotePage } from "./pages/NotePage.jsx";
import { UpdatePage } from "./pages/UpdatePage.jsx";
import { NotFoundPage } from "./pages/NotFoundPage.jsx";

function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ block: "start" });
      });
      return;
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

const configuredBase = import.meta.env.BASE_URL.replace(/\/$/, "");

export function App() {
  return (
    <BrowserRouter basename={configuredBase || "/"}>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
        <Route path="/updates/:slug" element={<UpdatePage />} />
        <Route path="/notes/:slug" element={<NotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
