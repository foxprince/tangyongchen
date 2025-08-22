# tangyongchen

这是一个基于 Vite + React + TypeScript + Tailwind 的前端项目，已配置为一键部署到 GitHub Pages。

## 开发

- 安装依赖：

```bash
npm ci
```

- 启动开发服务器：

```bash
npm run dev
```

## 构建静态文件

- 常规构建（默认 base 为 `/`）：

```bash
npm run build
```

- 若你的仓库不是 `username.github.io`，GitHub Pages 将通过二级路径（`/<repo>/`）访问，请在构建时设置环境变量 `BASE_PATH`：

```bash
# 例如仓库名为 tangyongchen
BASE_PATH=/tangyongchen/ npm run build
```

- 本地预览打包产物：

```bash
npm run preview
```

打包输出目录：`dist/`

## 部署到 GitHub Pages（已自动化）

本仓库已包含 GitHub Actions 工作流：`.github/workflows/deploy.yml`。
当推送到 `main` 或 `master` 分支时，会自动：

1. 安装依赖并构建
2. 自动判断是否为 `username.github.io` 仓库：
   - 如果是，`BASE_PATH=/`
   - 否则，`BASE_PATH=/<repo>/`
3. 复制 `dist/index.html` 为 `dist/404.html` 以支持 SPA 刷新
4. 部署到 GitHub Pages

首次使用时，请在 GitHub 仓库中进行以下设置：

- Settings → Pages：将 Source 选择为“GitHub Actions”。
- 首次部署完成后，Pages 页面会显示访问 URL。

## 常见问题

- Vite 配置里通过 `process.env.BASE_PATH` 读取 base：见 `vite.config.ts`。
- 如果在本地编辑器看到 `process` 类型报错，请安装 Node 类型定义：

```bash
npm i -D @types/node
```

- SPA 路由在 GitHub Pages 刷新 404：工作流已在部署时复制 `404.html` 处理。

## 目录结构

- 入口 HTML：`index.html`
- 源码：`src/`
- 静态资源：`public/`
- Vite 配置：`vite.config.ts`
- 部署工作流：`.github/workflows/deploy.yml`
