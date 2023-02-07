import maskot from "../assets/maskot.png";
import Header from "../components/Header";
import herunata from "../assets/herunata.png";
import eko from "../assets/eko.png";
import melinda from "../assets/melinda.png";
import karina from "../assets/karina.png";
import Footer from "../components/Footer";

const profiles = [
	{
		image: herunata,
		name: "Herunata, S.Pd., M.Pd.",
		descriptions: [
			"Dosen Pengampu Mata Kuliah",
			"Pengajaran dan Pembelajaran Daring & Bauran PPG Kimia Pra-Jabatan 2022 Gelombang 2",
			"Expertise in Assessment",
		],
	},
	{
		image: eko,
		name: "Eko Trian Pramono Aji, S.Pd.",
		descriptions: [
			"Mahasiswa",
			"PPG Kimia Pra-Jabatan 2022 Gelombang 2",
			"Universitas Negeri Malang",
		],
	},
	{
		image: melinda,
		name: "Melinda Cahyawati, S.Pd.",
		descriptions: [
			"Mahasiswa",
			"PPG Kimia Pra-Jabatan 2022 Gelombang 2",
			"Universitas Negeri Malang",
		],
	},
	{
		image: karina,
		name: "Karina Kurnia Sari, S.Pd.",
		descriptions: [
			"Mahasiswa",
			"PPG Kimia Pra-Jabatan 2022 Gelombang 2",
			"Universitas Negeri Malang",
		],
	},
];

export default function Profil() {
	return (
		<div className="max-w-screen">
			<div className="max-w-screen-xl mx-auto px-4">
				<Header background="bg-white" />
				<h1 className="text-primary-e5 text-3xl md:text-5xl font-bold underline text-center mt-4">
					Profil Portofolio
				</h1>
				<h2 className="text-c8 text-2xl md:text-4xl font-bold text-center flex items-center justify-center gap-1 md:mt-2">
					<span>Tim Pengembang </span>
					<span className="flex items-center">
						S
						<img
							src={maskot}
							alt="Maskot si kolo"
							className="object-cover inline"
							style={{ height: "1em" }}
						/>{" "}
						- <span className="text-primary-e8">KOLO</span>
					</span>
				</h2>

				<div className="mt-4 flex flex-col text-xl text-center md:text-left font-medium gap-4">
					{profiles.map((profile, i) => (
						<div
							className="flex flex-col items-center md:flex-row md:gap-6 md:items-start"
							key={i}
						>
							<img
								src={profile.image}
								className="bg-c8 pt-2 md:w-1/4"
								alt={`Foto ${profile.name}`}
							/>
							<div className="">
								<h3 className="font-bold underline md:text-3xl">
									{profile.name}
								</h3>
								{profile.descriptions.map((desc, j) => (
									<p className="" key={j}>
										{desc}
									</p>
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="py-4" />
			<Footer />
		</div>
	);
}
