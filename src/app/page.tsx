import Link from "next/link";

export default function Page() {
	return (
		<div>
			<h1>Home</h1>
			<Link href="/about">About</Link>
			<p>p의 거짓</p>
		</div>
	);
}
