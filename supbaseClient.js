import { createClient } from "@supabase/supabase-js";

const supabaseUrl ="https://qadfhzqltaxjqxselfxk.supabase.co";

const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFhZGZoenFsdGF4anF4c2VsZnhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyMzE0MzQsImV4cCI6MjA2MDgwNzQzNH0.joqALb0X4Y7XKO8Crm4txoQzvrsO16D6IdiB4Dg1Wi8";
const supabase = createClient(supabaseUrl,supabaseAnonKey);
export default supabase;