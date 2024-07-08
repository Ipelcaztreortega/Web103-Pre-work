/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string;
    readonly VITE_SUPABASE_API_KEY: string;
    // add more environment variables here...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }