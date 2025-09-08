// API response types

export interface UploadResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: Array<{ field: string; message: string }>;
  post?: {
    id: string;
    title: string;
    slug: string;
    published: boolean;
    category: string;
  };
}

export interface ApiError {
  message: string;
  details?: Array<{ field: string; message: string }>;
}

export interface ApiSuccess<T = unknown> {
  success: true;
  data: T;
  message?: string;
}