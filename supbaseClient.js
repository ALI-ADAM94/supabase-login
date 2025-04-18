import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zwpvdgukjqicaghnwbdv.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3cHZkZ3VranFpY2FnaG53YmR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwMDE2MjQsImV4cCI6MjA2MDU3NzYyNH0.y25G0T_aPDB5QU9UP9rnguTa98THpgt4Hf5endX7lhk";
const supabase = createClient(supabaseUrl,supabaseAnonKey);
export default supabase;