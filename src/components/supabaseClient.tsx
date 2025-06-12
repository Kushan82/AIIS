import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://drxibkwwexsbumsnrqvm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyeGlia3d3ZXhzYnVtc25ycXZtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQ5OTIzOSwiZXhwIjoyMDY0MDc1MjM5fQ.iHGQ61yAFLMvxnMfg1XdGXpip0pF2gGTJmFyBCPfn_4"

export const supabase = createClient(supabaseUrl, supabaseKey);
