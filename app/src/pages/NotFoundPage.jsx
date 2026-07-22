import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <main className="not-found" id="main-content">
      <p>404</p>
      <h1>没有找到这个页面</h1>
      <Link to="/">
        <ArrowLeft size={18} aria-hidden="true" /> 返回首页
      </Link>
    </main>
  );
}
