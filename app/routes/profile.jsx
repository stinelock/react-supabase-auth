import { redirect } from "react-router";
import { supabase } from "../lib/supabase";

export async function clientLoader() {
	const { data, error } = await supabase.auth.getUser();

	if (error || !data.user) {
		return redirect("/");
	}
}

export default function Profile() {
	return <h1>My Profile</h1>;
}
