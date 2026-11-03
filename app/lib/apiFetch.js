import { supabase } from "./supabase";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export async function apiFetch(path, options = {}) {
	const {
		data: { session },
	} = await supabase.auth.getSession();

    const token = session?.access_token;
}
