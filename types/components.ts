// Component-specific types and interfaces
import { Post, Category } from "./database";

// Blog components
export interface BlogClientProps {
  posts: Post[];
  categories: Category[];
}

// Sidebar component
export interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

// Session provider
export interface SessionProviderProps {
  children: React.ReactNode;
}

// Mobile layout
export interface MobileLayoutContextType {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export interface MobileLayoutProviderProps {
  children: React.ReactNode;
}

// Page props
export interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}