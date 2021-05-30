import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(process.env.supabaseUrl as string, process.env.supabaseKey as string);
