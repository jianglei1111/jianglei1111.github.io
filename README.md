# Personal Website

基于 React 和 Vite 的静态个人主页，可直接部署到 GitHub Pages。

## 编辑内容

- 个人信息、项目、动态与文章元数据：`src/data/site.js`
- Markdown 正文：`src/content/notes/*.md`
- 背景图片：`public/images/hero-research-workbench.png`
- 个人照片：放入 `public/images/profile/`，并在 `src/data/site.js` 中填写 `profile.photo`
- 简历：用真实 PDF 替换 `public/resume.txt`，并更新首页链接

## 本地开发

```bash
pnpm install
pnpm dev
```

## GitHub Pages

仓库包含 `.github/workflows/deploy.yml`。推送到 `main` 后，在仓库 Settings > Pages 中将 Source 设为 GitHub Actions，即可自动部署。

项目仓库会自动使用 `/<repository-name>/` 作为资源路径；`username.github.io` 用户主页仓库会自动使用根路径。
