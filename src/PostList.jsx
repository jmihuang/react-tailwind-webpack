import React, { useState } from "react";
import { Plus, User, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PostList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "我的第一篇文章",
      content: "這是我的第一篇部落格文章的內容...",
      author: "作者名稱",
      date: "2024-12-01",
    },
    {
      id: 2,
      title: "React 學習心得",
      content: "今天學習了 React 的基本概念，包括組件、狀態管理...",
      author: "技術愛好者",
      date: "2024-12-02",
    },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 test-class">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">文章列表</h1>
          <button
            onClick={() => navigate("/create")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Plus size={20} />
            新增文章
          </button>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-semibold text-gray-800 hover:text-indigo-600 cursor-pointer transition-colors">
                  {post.title}
                </h2>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                  #{post.id}
                </span>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <User size={16} />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </span>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline">
                  閱讀更多
                </button>
              </div>
            </div>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Plus size={64} className="mx-auto mb-4 opacity-50" />
            </div>
            <h3 className="text-xl text-gray-600 mb-2">還沒有文章</h3>
            <p className="text-gray-500">
              點擊上方按鈕開始創建你的第一篇文章吧！
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostList;
