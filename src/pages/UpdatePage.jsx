import { ArrowLeft, PencilSimple } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { updates } from "../data/site.js";
import { getUpdateMarkdown } from "../lib/content.js";
import { NotFoundPage } from "./NotFoundPage.jsx";

const markdownComponents = {
  table({ children }) {
    return (
      <div className="markdown-table-scroll" role="region" aria-label="数据表格" tabIndex="0">
        <table>{children}</table>
      </div>
    );
  },
  img({ src, alt }) {
    const resolvedSource = src?.startsWith("images/")
      ? import.meta.env.BASE_URL + src
      : src;

    return (
      <a
        className="markdown-image-link"
        href={resolvedSource}
        target="_blank"
        rel="noreferrer"
        aria-label={alt ? `查看大图：${alt}` : "查看大图"}
      >
        <img src={resolvedSource} alt={alt ?? ""} loading="lazy" decoding="async" />
      </a>
    );
  },
};

export function UpdatePage() {
  const { slug } = useParams();
  const update = updates.find((item) => item.slug === slug);
  const markdown = getUpdateMarkdown(slug);

  if (!update) return <NotFoundPage />;

  const editUrl = `https://github.com/jianglei1111/jianglei1111.github.io/edit/main/src/content/updates/${slug}.md`;

  return (
    <div className="site-shell detail-shell">
      <Header />
      <main id="main-content" className="article-page update-page">
        <Link className="back-link" to="/#now">
          <ArrowLeft size={18} aria-hidden="true" /> 返回近期动态
        </Link>
        <header className="article-header">
          <p>近期动态 · {update.date}</p>
          <h1>{update.title}</h1>
          <p>{update.description}</p>
          <div className="tag-list">
            {update.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </header>
        {markdown ? (
          <>
            <article className="markdown-body">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {markdown}
              </ReactMarkdown>
            </article>
            <a className="edit-link" href={editUrl} target="_blank" rel="noreferrer">
              <PencilSimple size={18} aria-hidden="true" /> 在 GitHub 中编辑此文档
            </a>
          </>
        ) : (
          <section className="update-empty-detail" aria-labelledby="update-empty-title">
            <p className="section-index">Material Pending</p>
            <h2 id="update-empty-title">详细内容待补充</h2>
            <p>这项工作的详细记录尚未公开，待相关材料整理完成后更新。</p>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
