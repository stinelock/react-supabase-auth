import { Link } from "react-router";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

export default function Home() {
	const [email, setEmail] = useState(null);

	useEffect(() => {
		async function LoadSession() {
			const {
				data: { session },
			} = await supabase.auth.getSession();

			setEmail(session?.user.email);
		}

		LoadSession();
	}, []);

	return (
		<div className="auth-container">
			<div className="auth-card">
				<h1>React Supabase Auth</h1>
				<p className="auth-subtitle">
					Create an account, log in and take a look at your JWT
				</p>

				<nav className="home-links">
					{email ? (
						<>
							<p>Logged in as {email}</p>
							<Link to="/profile" className="btn-primary">
								View profile
							</Link>
						</>
					) : (
						<>
							<Link to="/register" className="btn-primary">
								Create Account
							</Link>
							<Link to="/login" className="btn-secondary">
								Log In
							</Link>
						</>
					)}
				</nav>
			</div>
		</div>
	);
}
