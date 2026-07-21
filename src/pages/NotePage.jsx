import { ArrowLeft, PencilSimple } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { notes } from "../data/site.js";
import { getNoteMarkdown } from "../lib/content.js";
import { NotFoundPage } from "./NotFoundPage.jsx";

export function NotePage() {
  const { slug } = useParams();
  const note = notes.find((item) => item.slug === slug);
  const markdown = getNoteMarkdown(slug);

  if (!note || !markdown) return <NotFoundPage />;

  const editUrl = `https://github.com/jianglei1111/personal-website/edit/main/site/src/content/notes/${slug}.md`;

  return (
    <div className="site-shell detail-shell">
      <Header />
      <main id="main-content" className="article-page">
        <Link className="back-link" to="/#notes">
          <ArrowLeft size={18} aria-hidden="true" /> 返回笔记
        </Link>
        <header className="article-header">
          <p>{note.date} · {note.readingTime}</p>
          <h1>{note.title}</h1>
          <p>{note.summary}</p>
          <div className="tag-list">
            {note.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </header>
        <article className="markdown-body">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </article>
        <a className="edit-link" href={editUrl} target="_blank" rel="noreferrer">
          <PencilSimple size={18} aria-hidden="true" /> 在 GitHub 中编辑此文档
        </a>
      </main>
      <Footer />
    </div>
  );
}
