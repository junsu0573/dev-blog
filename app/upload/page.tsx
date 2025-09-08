"use client";

import { useState } from "react";
import Link from "next/link";
import type { UploadResponse } from "@/types";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<UploadResponse | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.name.endsWith(".md")) {
        setFile(selectedFile);
        setResult(null);
      } else {
        alert("Please select a .md file");
        e.target.value = "";
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    setUploading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data: UploadResponse = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        error: "Failed to upload file",
      });
    } finally {
      setUploading(false);
    }
  };

  const resetForm = () => {
    setFile(null);
    setResult(null);
    const fileInput = document.getElementById("file-input") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Upload Blog Post
        </h1>
        <p className="text-xl text-gray-600">
          Upload a markdown file with YAML frontmatter to create a new blog
          post.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">
          Required Frontmatter Format:
        </h3>
        <pre className="text-sm text-blue-800 bg-blue-100 p-3 rounded overflow-x-auto">
          {`---
title: "Your Blog Post Title"
slug: "your-blog-post-slug"
summary: "Brief description of your post (optional)"
category: "Category Name"
published: true
publishedAt: "2024-01-01" (optional, uses current date if published is true)
---

# Your markdown content starts here...`}
        </pre>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="file-input"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Select Markdown File (.md)
          </label>
          <input
            id="file-input"
            type="file"
            accept=".md"
            onChange={handleFileChange}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            disabled={uploading}
          />
        </div>

        {file && (
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm text-gray-600">
              Selected file: <span className="font-medium">{file.name}</span>
            </p>
            <p className="text-sm text-gray-500">
              Size: {(file.size / 1024).toFixed(1)} KB
            </p>
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={!file || uploading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {uploading && (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            {uploading ? "Uploading..." : "Upload Post"}
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300"
            disabled={uploading}
          >
            Reset
          </button>
        </div>
      </form>

      {result && (
        <div
          className={`p-4 rounded-lg border ${
            result.success
              ? "bg-green-50 border-green-200"
              : "bg-red-50 border-red-200"
          }`}
        >
          {result.success ? (
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className="text-green-800 font-medium">{result.message}</p>
              </div>

              {result.post && (
                <div className="bg-green-100 p-3 rounded">
                  <p className="text-sm text-green-700 space-y-1">
                    <span className="block">
                      <strong>Title:</strong> {result.post.title}
                    </span>
                    <span className="block">
                      <strong>Slug:</strong> {result.post.slug}
                    </span>
                    <span className="block">
                      <strong>Category:</strong> {result.post.category}
                    </span>
                    <span className="block">
                      <strong>Status:</strong>{" "}
                      {result.post.published ? "Published" : "Draft"}
                    </span>
                  </p>

                  <div className="mt-3 flex gap-2">
                    <Link
                      href={`/blog/${result.post.slug}`}
                      className="text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      View Post
                    </Link>
                    <Link
                      href="/blog"
                      className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    >
                      View All Posts
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <p className="text-red-800 font-medium">{result.error}</p>
              </div>

              {result.details && result.details.length > 0 && (
                <div className="bg-red-100 p-3 rounded">
                  <p className="text-sm font-medium text-red-800 mb-2">
                    Validation Errors:
                  </p>
                  <ul className="text-sm text-red-700 space-y-1">
                    {result.details.map((detail, index) => (
                      <li key={index}>
                        <strong>{detail.field}:</strong> {detail.message}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
