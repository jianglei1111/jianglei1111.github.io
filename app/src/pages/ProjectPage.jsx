import { ArrowLeft, ArrowUpRight, GithubLogo } from "@phosphor-icons/react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { projects } from "../data/site.js";
import { NotFoundPage } from "./NotFoundPage.jsx";

export function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFoundPage />;

  return (
    <div className="site-shell detail-shell">
      <Header />
      <main id="main-content" className="detail-page">
        <Link className="back-link" to="/#history">
          <ArrowLeft size={18} aria-hidden="true" /> 返回项目历史
        </Link>
        <header className="detail-header">
          <p>{project.category} · {project.period}</p>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </header>
        <dl className="project-facts">
          <div><dt>我的角色</dt><dd>{project.role}</dd></div>
          <div><dt>阶段结果</dt><dd>{project.result}</dd></div>
          <div><dt>关键词</dt><dd>{project.tags.join(" / ")}</dd></div>
        </dl>
        {project.images?.length > 0 && (
          <div className={`project-gallery${project.galleryStyle === "compact" ? " project-gallery--compact" : ""}`}>
            {project.images.map((image) => (
              <figure key={image.src} data-fit={image.fit ?? "cover"}>
                <div className="project-image-frame">
                  <img
                    src={`${import.meta.env.BASE_URL}${image.src}`}
                    alt={image.alt}
                    loading="lazy"
                  />
                </div>
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
        <div className="project-sections">
          {project.sections.map((section, index) => (
            <section key={section.title}>
              <span>0{index + 1}</span>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </section>
          ))}
        </div>
        {project.repository ? (
          <a className="external-placeholder" href={project.repository} target="_blank" rel="noreferrer">
            <GithubLogo size={19} aria-hidden="true" /> 查看 GitHub 仓库
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ) : (
          <Link className="external-placeholder" to="/#contact">
            联系我了解这个项目 <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        )}
      </main>
      <Footer />
    </div>
  );
}
