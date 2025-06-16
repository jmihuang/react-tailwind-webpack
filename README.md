# React + Webpack 開發環境建立教學

> 官方的 `npx create-react-app my-app` 現已改為使用 **Vite + Rollup**，不再倚賴 Webpack。  
> 不過若你對 Webpack 打包流程更熟悉，仍可手動建立 React 專案。

---

## 為什麼使用 Webpack？

使用 Webpack 的目的：

1. 安裝 Webpack 並自訂設定檔
2. 使用 Babel 編譯 React 的 JSX 語法
3. 打包 JS、HTML、CSS 等檔案
4. 利用 dev server 啟用 hot reload

---

## 建立 React + Webpack 專案

### 1. 初始化專案

```bash
mkdir react_with_webpack
cd react_with_webpack
npm init -y
```

使用 `-y` 可快速產生預設的 `package.json`。

---

### 2. 安裝 Webpack 與開發用套件

```bash
npm install --save-dev webpack webpack-cli webpack-dev-server
```

安裝後 `package.json` 會出現：

```json
"devDependencies": {
  "webpack": "^5.x.x",
  "webpack-cli": "^x.x.x",
  "webpack-dev-server": "^x.x.x"
}
```

> 「^」代表安裝相容的最新版，但實務上會用固定版本避免相容問題，版本會鎖在 `package-lock.json`。

---

### 3. 安裝 Babel + HTML 套件

```bash
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev html-webpack-plugin
```

---

### 4. 建立 Webpack 設定檔 `webpack.config.js`

```js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 3000,
    hot: true,
  },
};
```

---

### 5. 建立 Babel 設定檔 `.babelrc`

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

---

### 6. 加入啟動指令到 `package.json`

```json
"scripts": {
  "start": "webpack serve --open --mode development",
  "build": "webpack --mode production"
}
```

---

## 專案目錄結構

```
react_with_webpack/
├── public/
│   └── index.html
├── src/
│   └── index.jsx
├── .babelrc
├── package.json
├── webpack.config.js
```

---

## HTML 範本 `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- ✅ React 掛載點 -->
  </body>
</html>
```

---

## React 程式碼 `src/index.jsx`

```jsx
import React from "react";
import { createRoot } from "react-dom/client";

const App = () => <h1>Hello React with Webpack!</h1>;

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```
