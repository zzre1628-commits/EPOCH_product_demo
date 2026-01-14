import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // 确保这里的文件名大小写与你的 src 文件夹里完全一致
import './index.css'

// 这里的 App 组件必须被正确 import 进来，才能被渲染
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)