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

import Header from "../components/Header"
import Footer from "../components/Footer";

export default function LandingPage() {

	return (
		<div className="max-w-screen">
			<div className="w-full relative bg-gradient-to-br from-[#d3eaf4] to-[#ddedf4] min-h-screen flex flex-col items-center">
				<Header />
				<div className="flex-grow flex flex-col justify-center py-8 md:flex-row max-w-screen-xl">
					<div className="flex flex-col text-primary-f0 font-bold px-4 md:justify-center md:px-6">
						<div className="text-4xl text-center blogger-sans flex items-center justify-center md:justify-start md:text-7xl">
							S
							<img
								src={maskot}
								alt="Maskot si kolo"
								className="h-9 md:h-18 object-cover inline"
							/>{" "}
							- <span className="text-primary-e8">KOLO</span>
						</div>
						<h2 className="text-2xl md:text-3xl blogger-sans text-center md:text-left">
							Sistem Koloid #KimiAsyik
						</h2>
						<p className="text-black font-normal montserrat text-center mt-4 md:text-left">
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
				<h1 className="text-center text-3xl md:text-4xl tracking-wider haettenschweiler text-primary underline underline-offset-8 font-bold px-4 pb-8 leading-normal">
					Mind Map Ruang Lingkup Kimia Koloid
				</h1>
				<div className="flex flex-col px-4 mt-4 md:flex-row w-full gap-4 max-w-screen-xl mx-auto md:items-center">
					<img
						src={mindmap}
						alt="Mindmap"
						className="w-full md:flex-shrink md:w-2/3 object-cover bg-green-400"
					/>
					<div className="montserrat">
						<p className="font-semibold">
							Pada materi Koloid dalam Si-KOLO terdiri dari 3
							Ruang Lingkup Materi:
						</p>
						<ol className="list-decimal list-inside mt-3 flex flex-col gap-2 md:mt-6">
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
				<h1 className="text-center text-2xl md:text-4xl tracking-wider haettenschweiler text-primary underline underline-offset-8 font-bold px-4 pb-8 leading-normal">
					Temukan Fasilitas Pembelajaran Si-<span className="text-primary-e8">KOLO di Sini!</span>
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
							to: "/ruang-lingkup-1",
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
							to: "/ruang-lingkup-2",
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
							to: "/ruang-lingkup-3",
						},
					].map((item, i) => (
						<Link
							to={item.to}
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
								<h2 className="text-primary text-2xl font-semibold blogger-sans">
									{item.title}
								</h2>
								<p className="arial">{item.desc}</p>
							</div>
						</Link>
					))}
				</div>
			</section>

			{/* kelebihan */}
			<section id="kelebihan" className="py-8 w-full">
				<h1 className="text-center text-2xl md:text-4xl tracking-wider haettenschweiler text-primary underline underline-offset-8 font-bold px-4 pb-8 leading-normal">
					Kelebihan Menggunakan Si-<span className="text-primary-e8">KOLO Sebagai Bahan Ajar Kimia
					Koloid</span>
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
							<p className="font-medium text-primary text-center arial">
								{x.text}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* footer */}
			<Footer />

			<section id="pengembang" className="bg-[#afcbd6] w-full py-12">
				<div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:px-12">
					<h1 className="text-[#c80000] text-3xl font-bold impact text-center flex flex-col items-center md:flex-row md:justify-center gap-2 pb-8">
						Tim Pengembang{" "}
						<span className="flex items-center blogger-sans md:relative md:top-1.5">
							S
							<img
								src={maskot}
								alt="Maskot si kolo"
								style={{ height: "1em" }}
								className="object-cover inline relative bottom-1"
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
									className={`bg-c8 ${ i === 0 && "pt-3 lg:pt-4" } md:w-3/5`}
								/>
								<p className="gilroy-extrabold">{item.name}</p>
							</div>
						))}
					</div>
					<div className="flex flex-col mt-8 md:flex-row md:items-end md:gap-8">
						<img
							src={fotoHerunata}
							alt="Foto Herunata, S.Pd., M.Pd."
                            className="md:w-1/4"
						/>
						<div className="flex flex-col text-center font-bold gap-2 md:text-left gilroy-extrabold">
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
