import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle,
  EnvelopeSimple,
  GithubLogo,
  WechatLogo,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../components/Footer.jsx";
import { Header } from "../components/Header.jsx";
import { Pagination } from "../components/Pagination.jsx";
import {
  academicOutputs,
  openSourceProjects,
  profile,
  projects,
  researchAreas,
  updates,
} from "../data/site.js";

const PAGE_SIZE = 5;

export function HomePage() {
  const [copyMessage, setCopyMessage] = useState("");
  const [academicPage, setAcademicPage] = useState(1);
  const [projectPage, setProjectPage] = useState(1);
  const [openSourcePage, setOpenSourcePage] = useState(1);

  const academicTotalPages = Math.max(1, Math.ceil(academicOutputs.length / PAGE_SIZE));
  const projectTotalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const openSourceTotalPages = Math.max(1, Math.ceil(openSourceProjects.length / PAGE_SIZE));

  const visibleAcademicOutputs = academicOutputs.slice(
    (academicPage - 1) * PAGE_SIZE,
    academicPage * PAGE_SIZE,
  );
  const visibleProjects = projects.slice(
    (projectPage - 1) * PAGE_SIZE,
    projectPage * PAGE_SIZE,
  );
  const visibleOpenSourceProjects = openSourceProjects.slice(
    (openSourcePage - 1) * PAGE_SIZE,
    openSourcePage * PAGE_SIZE,
  );

  useEffect(() => {
    if (!copyMessage) return undefined;

    const timer = window.setTimeout(() => setCopyMessage(""), 1800);
    return () => window.clearTimeout(timer);
  }, [copyMessage]);

  async function copyContact(value, label) {
    try {
      await navigator.clipboard.writeText(value);
      setCopyMessage(`${label}已复制`);
    } catch {
      setCopyMessage("复制失败，请手动复制");
    }
  }

  return (
    <div id="top" className="site-shell">
      <Header />
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <h1 id="hero-title">{profile.focusTitle}</h1>
            <p className="hero-statement">{profile.statement}</p>
            <p className="hero-status">
              <span aria-hidden="true" />
              目前在做：{profile.current}
            </p>
            <div className="hero-actions">
              <a className="primary-link" href="#research">
                查看研究方向 <ArrowDown size={19} aria-hidden="true" />
              </a>
              <a className="secondary-link" href={profile.github} target="_blank" rel="noreferrer">
                <GithubLogo size={21} aria-hidden="true" /> 访问 GitHub
              </a>
            </div>
          </div>
          <p className="hero-rail" aria-hidden="true">
            数据 / 检索 / 智能
          </p>
        </section>

        <section id="research" className="section research-section" aria-labelledby="research-title">
          <div className="section-heading-row">
            <div>
              <p className="section-index">01 / Research</p>
              <h2 id="research-title">研究方向</h2>
            </div>
            <p>在长期学习与实践中，寻找值得持续投入、反复验证的问题。</p>
          </div>
          <div className="research-grid">
            {researchAreas.map((area) => (
              <article key={area.index}>
                <span>{area.index}</span>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="now" className="section updates-section" aria-labelledby="updates-title">
          <div className="section-heading-row">
            <div>
              <p className="section-index">02 / Now</p>
              <h2 id="updates-title">近期动态</h2>
            </div>
            <p>保留阶段性的思考与进展，也记录方向逐渐清晰的过程。</p>
          </div>
          <ol className="updates-list">
            {updates.map((update) => (
              <li key={update.slug}>
                <Link className="update-row" to={`/updates/${update.slug}`}>
                  <time>{update.date}</time>
                  <div>
                    <h3>{update.title}</h3>
                    <p>{update.description}</p>
                  </div>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <section id="academic" className="section academic-section" aria-labelledby="academic-title">
          <div className="section-heading-row">
            <div>
              <p className="section-index">03 / Academic</p>
              <h2 id="academic-title">学术成果</h2>
            </div>
            <p>让阶段性的探索经过整理、验证与沉淀，形成可以被认真讨论的成果。</p>
          </div>
          <div className="academic-output-list">
            {academicOutputs.length > 0 ? (
              <ol>
                {visibleAcademicOutputs.map((item) => (
                  <li key={item.year + "-" + item.type + "-" + item.title}>
                    <time>{item.year}</time>
                    <div className="academic-output-kind">
                      <span className="academic-output-type">{item.type}</span>
                      {item.status && (
                        <span className="academic-output-status">{item.status}</span>
                      )}
                    </div>
                    <div className="academic-output-content">
                      {item.to ? (
                        <Link to={item.to}>
                          {item.title} <ArrowUpRight size={16} aria-hidden="true" />
                        </Link>
                      ) : item.url ? (
                        <a href={item.url} target="_blank" rel="noreferrer">
                          {item.title} <ArrowUpRight size={16} aria-hidden="true" />
                        </a>
                      ) : (
                        <strong>{item.title}</strong>
                      )}
                      {item.meta && <p>{item.meta}</p>}
                    </div>
                    {item.contribution && (
                      <span className="academic-contribution">{item.contribution}</span>
                    )}
                  </li>
                ))}
              </ol>
            ) : (
              <div className="academic-empty-row">
                <span aria-label="0 项成果">00</span>
                <div>
                  <h3>暂无公开记录</h3>
                  <p>当前处于研究积累阶段，暂无公开成果。</p>
                </div>
              </div>
            )}
          </div>
          <Pagination
            label="学术成果分页"
            page={academicPage}
            totalPages={academicTotalPages}
            onPageChange={setAcademicPage}
          />
        </section>

        <section id="history" className="section history-section" aria-labelledby="history-title">
          <div className="section-heading-row">
            <div>
              <p className="section-index">04 / Projects</p>
              <h2 id="history-title">项目历史</h2>
            </div>
            <p>保留做过的事情，也保留其中形成的方法、经验与判断。</p>
          </div>
          <div className="project-list">
            {visibleProjects.map((project) => (
              <Link className="project-row" to={`/projects/${project.slug}`} key={project.slug}>
                <div
                  className={`project-thumbnail${project.cover?.fit === "contain" ? " project-thumbnail--contain" : ""}${!project.cover ? " project-thumbnail--empty" : ""}`}
                >
                  {project.cover ? (
                    <img src={`${import.meta.env.BASE_URL}${project.cover.src}`} alt="" />
                  ) : (
                    <span aria-hidden="true">{project.shortTitle}</span>
                  )}
                </div>
                <div className="project-row-copy">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                </div>
                <span>{project.period}</span>
                <span className="project-category">
                  {project.category} <ArrowUpRight size={18} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <Pagination
            label="项目历史分页"
            page={projectPage}
            totalPages={projectTotalPages}
            onPageChange={setProjectPage}
          />
        </section>

        <section id="opensource" className="section open-source-section" aria-labelledby="opensource-title">
          <div className="section-heading-row">
            <div>
              <p className="section-index">05 / Open Source</p>
              <h2 id="opensource-title">开源项目</h2>
            </div>
            <p>把有复用价值的实现公开出来，让它们能够被使用、讨论并继续完善。</p>
          </div>
          <div className="open-source-list">
            {visibleOpenSourceProjects.map((project) => (
              <a
                className="open-source-row"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                key={project.url}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.language}</span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
          <Pagination
            label="开源项目分页"
            page={openSourcePage}
            totalPages={openSourceTotalPages}
            onPageChange={setOpenSourcePage}
          />
        </section>

        <section id="about" className="section about-section" aria-labelledby="about-title">
          <div className="about-profile-column">
            <p className="section-index">06 / About</p>
            <h2 id="about-title">关于我</h2>
            {profile.photo && (
              <figure className="profile-photo">
                <img
                  src={`${import.meta.env.BASE_URL}${profile.photo}`}
                  alt={`${profile.name}的个人照片`}
                />
              </figure>
            )}
          </div>
          <div className="about-copy">
            <p className="about-label">自我评价</p>
            <p className="about-statement">{profile.selfEvaluation}</p>
            <dl>
              <div>
                <dt>研究方向</dt>
                <dd>{profile.researchInterests}</dd>
              </div>
              <div>
                <dt>兴趣方向</dt>
                <dd>{profile.interestTopics}</dd>
              </div>
              <div>
                <dt>技能关键词</dt>
                <dd>{profile.skills}</dd>
              </div>
              <div>
                <dt>业余爱好</dt>
                <dd>{profile.hobbies}</dd>
              </div>
              <div>
                <dt>所在地</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
          <p className="section-index">07 / Contact</p>
          <h2 id="contact-title">欢迎交流研究、项目与新的想法。</h2>
          <p>欢迎就 RAG、数据处理分析与智能检索交流，也愿意讨论研究实习、开源协作和工具开发。</p>
          <div className="contact-links">
            <button type="button" onClick={() => copyContact(profile.email, "邮箱")}>
              <EnvelopeSimple size={21} aria-hidden="true" /> {profile.email}
            </button>
            <button type="button" onClick={() => copyContact(profile.github, "GitHub 地址")}>
              <GithubLogo size={21} aria-hidden="true" /> {profile.github.replace("https://", "")}
            </button>
            <button type="button" onClick={() => copyContact(profile.wechat, "微信号")}>
              <WechatLogo size={21} aria-hidden="true" /> {profile.wechat}
            </button>
          </div>
        </section>
      </main>
      {copyMessage && (
        <div className="copy-toast" role="status" aria-live="polite">
          <CheckCircle size={18} weight="fill" aria-hidden="true" /> {copyMessage}
        </div>
      )}
      <Footer />
    </div>
  );
}
