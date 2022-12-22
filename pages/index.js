import { Inter } from "@next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
	return (
		<>
			<Head>
				<title>Events App</title>
				<meta
					name='description'
					content='Generated by create next app'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header>
				<nav>
					<img />
					<Link href='/'>Home</Link>
					<Link href='/events'>Events</Link>
					<Link href='/about-us'>About Us</Link>
				</nav>
			</header>

			<main className={styles.main}>
				{data.map((place) => (
					<Link key={place.id} href={`/events/${place.id}}`}>
						<Image width={200} height={100} src={place.image} />
						<h2> {place.title}</h2>
						<p>{place.description}</p>
					</Link>
				))}
			</main>
		</>
	);
}

export async function getServerSideProps() {
	const { events_categories } = await import("/data/data.json");

	return {
		props: {
			data: events_categories,
		},
	};
}
