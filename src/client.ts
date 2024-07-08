import { createClient } from '@supabase/supabase-js';

const URL = import.meta.env.VITE_SUPABASE_URL as string;
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY as string;

console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_API_KEY:', import.meta.env.VITE_SUPABASE_API_KEY);
export const supabase = createClient(URL, API_KEY);