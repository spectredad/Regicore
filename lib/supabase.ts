import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://arpahgkedggeybrpoquc.supabase.co";
const supabaseAnonKey = "sb_publishable_bOTwRDK4LpRAWTmsBGVhCA_Yj72shm_";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
