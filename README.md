---
title: react-tailwind-webpack
date: 2025-06-04 19:35:35
tags:
  - React.js
  - Webpack
  - Tailwind CSS
categories:
  - 前端技術
---

# React 引用 Tailwind CSS 使用 Webpack 打包工具

github [載點](https://github.com/jmihuang/react-tailwind-webpack)

如不清楚使用 React 安裝 Webpack 可以 [可先看這篇](https://jmihuang.github.io/blog/2025/05/31/React-with-webpack/)

## 1. 安裝必要套件

!! 注意版本號的相依性，之前一直報錯就是在不同版本號不相支援

```bash
npm install -D tailwindcss@3.4.1 postcss@8.4.35 autoprefixer@10.4.19 style-loader css-loader postcss-loader
```

## 2. 新增 webpack 配置

在 `webpack.config.js` 中添加 CSS 處理規則：

```js
module.exports = {
  // ... 其他配置
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
};
```

## 3. 配置 PostCSS

在專案根目錄新增 `postcss.config.js`：

```js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

## 4. 配置 Tailwind

在專案根目錄新增 `tailwind.config.js`：

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 5. 新增 Tailwind 指令

在 `src/style.css` 中添加 Tailwind 指令：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 6. 引入樣式

在 `src/index.jsx` 中引入樣式文件：

```jsx
import "./style.css";
```

## 7. 清除快取並重新啟動

```bash
rm -rf dist && npm run start
```

## 注意事項

1. 確保 `package.json` 中有正確的 scripts：

   ```json
   {
     "scripts": {
       "start": "webpack serve --mode development",
       "build": "webpack --mode production"
     }
   }
   ```

2. 如果遇到樣式不生效的問題，可以：

   - 檢查 `tailwind.config.js` 中的 `content` 配置是否正確
   - 確認 `postcss.config.js` 中的插件配置是否正確
   - 清除 `dist` 目錄並重新啟動開發伺服器

   ```
    rm -rf dist && npm run start
   ```

3. 如果遇到端口被占用的問題（EADDRINUSE），可以：
   - 在 `webpack.config.js` 中修改 `devServer` 的端口：
     ```js
     devServer: {
       port: 3000, // 或其他未被使用的端口
     }
     ```
   - 或者先關閉占用端口的程序
