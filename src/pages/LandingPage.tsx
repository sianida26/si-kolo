import { useState } from "react";
import { Burger, Menu, Transition } from "@mantine/core";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import maskot from "../assets/maskot.png";
import illustration1 from "../assets/illustration1.svg";
import illustration2 from "../assets/illustration2.svg";
import illustration3 from "../assets/illustration3.svg";
import illustration4 from "../assets/illustration4.svg";
import illustration5 from "../assets/illustration5.png";
import illustration6 from "../assets/illustration6.png";
import illustration7 from "../assets/illustration7.png";
import illustration8 from "../assets/illustration8.png";
import illustration9 from "../assets/illustration9.png";
import illustration10 from "../assets/illustration10.png";
import illustration11 from "../assets/illustration11.png";
import fotoKarina from "../assets/karina.png";
import fotoEko from "../assets/eko.png";
import fotoMelinda from "../assets/melinda.png";
import fotoHerunata from "../assets/herunata.png";
import mindmap from "../assets/mindmap.png";

export default function LandingPage() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className="max-w-screen">
			<div className="w-full relative bg-gradient-to-br from-[#d3eaf4] to-[#ddedf4] min-h-screen flex flex-col items-center">
				<header className="w-full">
					<div className="max-w-screen-lg w-full mx-auto flex justify-between px-4 py-2 md:px-6">
						{/* ganjel sm */}
						<div className="md:hidden" />

						{/* logo */}
						<img
							src={logo}
							alt="Logo Si-Kolo"
							className="w-14 object-cover"
						/>

						{/* menu icon */}
						<div className="flex-center md:hidden">
							<div className="px-1 py-0.5 border border-gray-800 text-gray-800 flex-center rounded-md">
								<Burger
									onClick={() => setOpenMenu((prev) => !prev)}
									opened={openMenu}
								/>
							</div>
							<Transition mounted={openMenu} transition="scale-y">
								{(styles) => (
									<div
										style={styles}
										className="w-screen absolute left-0 top-20 py-4 flex flex-col border-b border-gray-800 text-primary items-center gap-4 text-lg bg-[#d3eaf4]"
									>
										<a
											href="#"
											className="px-4 text-center font-semibold"
										>
											Beranda
										</a>
										<Link
											to="/capaian-dan-tujuan-pembelajaran"
											className="px-4 text-center font-semibold"
										>
											Capaian dan Tujuan
										</Link>
										<a
											href="#"
											className="px-4 text-center font-semibold"
										>
											Mind Map
										</a>
										<a
											href="#"
											className="px-4 text-center font-semibold"
										>
											Materi Pembelajaran
										</a>
										<a
											href="#"
											className="px-4 text-center font-semibold"
										>
											Mari Berlatih
										</a>
										<Menu shadow="md" width={200}>
											<Menu.Target>
												<button className="bg-primary-f5 py-2 px-3 rounded-md text-white">
													Lainnya
												</button>
											</Menu.Target>
											<Menu.Dropdown>
												<Menu.Item>
													Daftar Pustaka
												</Menu.Item>
												<Menu.Item>
													Profil Tim Pengembang
												</Menu.Item>
											</Menu.Dropdown>
										</Menu>
									</div>
								)}
							</Transition>
						</div>

						{/* right side */}
						<div className="hidden md:flex text-primary gap-4 items-center">
							<a href="#" className="text-center font-semibold">
								Beranda
							</a>
							<Link to="/capaian-dan-tujuan-pembelajaran" className="text-center font-semibold">
								Capaian dan Tujuan
							</Link>
							<a href="#" className="text-center font-semibold">
								Mind Map
							</a>
							<a href="#" className="text-center font-semibold">
								Materi Pembelajaran
							</a>
							<a href="#" className="text-center font-semibold">
								Mari Berlatih
							</a>
							<Menu shadow="md" width={200}>
								<Menu.Target>
									<button className="bg-primary-f5 py-2 px-3 rounded-md text-white">
										Lainnya
									</button>
								</Menu.Target>
								<Menu.Dropdown>
									<Menu.Item>Daftar Pustaka</Menu.Item>
									<Menu.Item>Profil Tim Pengembang</Menu.Item>
								</Menu.Dropdown>
							</Menu>
						</div>
					</div>
				</header>
				<div className="flex-grow flex flex-col justify-center py-8 md:flex-row max-w-screen-xl">
					<div className="flex flex-col text-primary-f0 font-bold px-4 md:justify-center md:px-6">
						<div className="text-4xl text-center flex items-center justify-center md:justify-start md:text-7xl">
							S
							<img
								src={maskot}
								alt="Maskot si kolo"
								className="h-9 md:h-18 object-cover inline"
							/>{" "}
							- <span className="text-primary-e8">KOLO</span>
						</div>
						<h2 className="text-2xl md:text-3xl text-center md:text-left">
							Sistem Koloid #KimiAsyik
						</h2>
						<p className="text-black font-normal text-center mt-4 md:text-left">
							<strong className="text-primary">Si-KOLO</strong>{" "}
							merupakan terobosan pengembangan media pembelajaran
							online berbasis website yang dikembangkan oleh
							mahasiswa PPG Kimia 01 Pra-Jabatan 2022 Gelombang 2
							Universitas Negeri Malang. Website ini ditujukan
							untuk jenjang SMA/Sederajat dengan harapan dapat
							membantu proses pembelajaran{" "}
							<strong className="text-primary">Bab Koloid</strong>
						</p>
					</div>

					<div className="px-8 md:flex-none md:w-1/2 lg:w-fit flex-center">
						<img src={illustration1} alt="Ilustrasi" className="" />
					</div>
				</div>
			</div>

			{/* mind map */}
			<section id="mind-map" className="py-8 w-full">
				<h1 className="text-center text-2xl text-primary underline underline-offset-8 font-bold px-4 leading-normal">
					Mind Map Ruang Lingkup Kimia Koloid
				</h1>
				<div className="flex flex-col px-4 mt-4 md:flex-row w-full md:gap-2 max-w-screen-xl mx-auto md:items-center">
					<img
						src={mindmap}
						alt="Mindmap"
						className="w-full md:flex-shrink md:w-2/3 object-cover bg-green-400"
					/>
					<div className="">
						<p className="font-medium">
							Pada materi Koloid dalam Si-KOLO terdiri dari 3
							Ruang Lingkup Materi:
						</p>
						<ol className="list-decimal list-inside mt-2 flex flex-col gap-2 md:mt-6">
							<li>
								<span className="font-semibold text-primary underline">
									Ruang Lingkup 1
								</span>
								<p className="pl-4 italic">
									Sistem Koloid dan Jenis-Jenisnya
								</p>
							</li>
							<li>
								<span className="font-semibold text-primary underline">
									Ruang Lingkup 2
								</span>
								<p className="pl-4 italic">
									Sifat-Sifat Koloid
								</p>
							</li>
							<li>
								<span className="font-semibold text-primary underline">
									Ruang Lingkup 3
								</span>
								<p className="pl-4 italic">
									Pembentukan Koloid
								</p>
							</li>
						</ol>
					</div>
				</div>
			</section>

			{/* fasilitas pembelajaran */}
			<section id="fasilitas-pembelajaran" className="py-8 w-full">
				<h1 className="text-center text-2xl text-primary underline underline-offset-8 font-bold px-4 leading-normal">
					Temukan Fasilitas Pembelajaran Si-KOLO di Sini!
				</h1>
				<div className="flex flex-col px-4 mt-8 w-full max-w-screen-xl mx-auto gap-8 md:px-8">
					{[
						{
							illustration: illustration2,
							title: "Ruang Lingkup 1",
							desc: (
								<span>
									<span className="text-primary-da">
										Berisi materi seputar sistem koloid dan
										jenis-jenisnya berdasarkan kehidupan
										sehari-hari
									</span>{" "}
									anda sehingga mudah untuk anda pahami
									implementasinya. Pembelajaran pada ruang
									lingkup ini menggunakan Model pembelajaran{" "}
									<em>Discovery Learning</em> yang menekankan
									eksplorasi konseptual pada peserta didik.
								</span>
							),
						},
						{
							illustration: illustration3,
							title: "Ruang Lingkup 2",
							desc: (
								<span>
									<span className="text-primary-da">
										Berisi materi seputar Sifat-Sifat Koloid
										berdasarkan kehidupan sehari-hari
									</span>{" "}
									anda sehingga mudah untuk anda pahami
									implementasinya. Pembelajaran pada ruang
									lingkup ini menggunakan Model pembelajaran{" "}
									<em>Project Based Learning</em> (PjBL) yang
									mengajak peserta didik menghasilkan suatu
									karya dari proyek yang diberikan.
								</span>
							),
						},
						{
							illustration: illustration4,
							title: "Ruang Lingkup 3",
							desc: (
								<span>
									<span className="text-primary-da">
										Berisi materi seputar Pembentukan
										Koloid, utamanya pada Koloid Asosiasi
									</span>{" "}
									yang akan menghubungkan prior-knowledge anda
									sehingga dapat memahami pada ketiga level
									representasi. Pembelajaran pada ruang
									lingkup ini menggunakan Model pembelajaran{" "}
									<em>Problem Based Learning</em> (PBL) yang
									menekankan eksplorasi kontekstual pada
									peserta didik.
								</span>
							),
						},
					].map((item, i) => (
						<div
							key={i}
							className={`flex flex-col items-center md:gap-4 xl:gap-8 ${
								i % 2 === 0
									? "md:flex-row"
									: "md:flex-row-reverse"
							}`}
						>
							<img
								src={item.illustration}
								alt="Ilustrasi"
								className="w-3/4"
							/>
							<div>
								<h2 className="text-primary text-2xl font-semibold">
									{item.title}
								</h2>
								<p className="">{item.desc}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* kelebihan */}
			<section id="kelebihan" className="py-8 w-full">
				<h1 className="text-center text-2xl text-primary underline underline-offset-8 font-bold px-4 leading-normal">
					Kelebihan Menggunakan Si-KOLO Sebagai Bahan Ajar Kimia
					Koloid
				</h1>
				<div className="grid grid-cols-1 mt-4 px-4 gap-4 md:grid-cols-3 lg:grid-cols-4 max-w-screen-xl mx-auto">
					{[
						{
							illustration: illustration5,
							text: "Pembelajaran yang Holistik",
						},
						{
							illustration: illustration6,
							text: "Berpusat pada Peserta Didik",
						},
						{
							illustration: illustration7,
							text: "Belajar Sesuai dengan Kecepatan Masing-Masing",
						},
						{
							illustration: illustration8,
							text: "Memahami Masalah Dunia Nyata",
						},
						{
							illustration: illustration9,
							text: "Pembelajaran Sepanjang Hayat",
						},
						{
							illustration: illustration10,
							text: "Model Pembelajaran Sesuai Ruang Lingkup",
						},
						{
							illustration: illustration11,
							text: "Berbasis Konseptual dan Kontekstual",
						},
					].map((x, i) => (
						<div key={i} className="flex flex-col items-center">
							<img
								className="w-1/2"
								src={x.illustration}
								alt={x.text}
							/>
							<p className="font-medium text-primary text-center">
								{x.text}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* footer */}
			<footer className="bg-[#d3eaf4] w-full">
				<div className="flex max-w-screen-xl mx-auto flex-col-reverse px-4 py-4 gap-6 md:flex-row">
					<div className="flex-center">
						<img
							src={logo}
							alt="Logo Si-KOLO"
							className="w-12 object-cover md:w-32"
						/>
					</div>
					<div className="flex flex-col gap-4 md:flex-grow">
						<div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
							<div className="text-center">
								<p className="text-2xl font-black">
									Kelompok Peminatan MIPA
								</p>
								<p className="text-xl font-medium lg:whitespace-nowrap">
									Untuk SMA/MA/Sederajat Kelas XI Fase F
								</p>
							</div>
							<div className="flex flex-col text-center lg:items-end">
								<p className="text-lg font-medium text-primary lg:text-right">
									Ada Pertanyaan?
								</p>
								<p className="text-sm lg:text-right">
									Hubungi Cp Sosmed untuk mendapatkan
									informasi selengkapnya mengenai project ini
								</p>
							</div>
						</div>
						<div className="flex flex-col-reverse gap-2 lg:flex-row lg:justify-end lg:items-center">
							<div className="flex justify-center gap-2 lg:order-2">
								{[
									"instagram",
									"twitter",
									"facebook",
									"share-fill",
								].map((x, i) => (
									<button
										key={i}
										className="flex-center w-8 h-8 rounded-full self-center border border-black"
									>
										<i className={`bi bi-${x}`}></i>
									</button>
								))}
							</div>
							<p className="text-xs text-center lg:order-1">
								Share this website content to your
								community/agency
							</p>
							<button className="bg-gradient-to-l from-[#f082c2] to-[#d1579d] px-3 py-2 rounded-lg text-white self-center font-medium lg:order-3">
								Ajukan Pertanyaan
							</button>
						</div>
					</div>
				</div>
			</footer>
			<section id="pengembang" className="bg-[#afcbd6] w-full py-12">
				<div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:px-12">
					<h1 className="text-[#c80000] text-3xl font-bold text-center flex flex-col items-center">
						Tim Pengembang{" "}
						<span className="flex items-center">
							S
							<img
								src={maskot}
								alt="Maskot si kolo"
								className="h-7 md:h-18 object-cover inline"
							/>{" "}
							- <span className="text-primary-e8">KOLO</span>
						</span>
					</h1>
					<div className="grid grid-cols-1 md:grid-cols-3 font-medium text-center text-xl gap-8 mt-8 lg:gap-12">
						{[
							{
								image: fotoKarina,
								name: "Karina Kurnia Sari, S.Si.",
							},
							{
								image: fotoEko,
								name: "Eko Trian Pramono Aji, S.Pd.",
							},
							{
								image: fotoMelinda,
								name: "Melinda Cahyawati, S.Si.",
							},
						].map((item, i) => (
							<div key={i} className="flex flex-col items-center">
								<img
									src={item.image}
									alt={`Foto ${item.name}`}
									className={`bg-[#c80000] ${ i === 0 && "pt-3 lg:pt-4" } md:w-3/5`}
								/>
								<p>{item.name}</p>
							</div>
						))}
					</div>
					<div className="flex flex-col mt-8 md:flex-row md:items-end md:gap-8">
						<img
							src={fotoHerunata}
							alt="Foto Herunata, S.Pd., M.Pd."
                            className="md:w-1/4"
						/>
						<div className="flex flex-col text-center font-bold gap-2 md:text-left">
							<h3 className="text-3xl underline font-bold">
								Herunata, S.Pd., M.Pd.
							</h3>
							<p>
								Dosen Pengampu Mata Kuliah Pengajaran dan
								Pembelajaran & Bauran PPG Kimia Pra-Jabatan 2022
								Gelombang 2
							</p>
                            <p>Expertise in Assesment</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
