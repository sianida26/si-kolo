import { useState } from "react";
import { Burger, Menu, Transition } from "@mantine/core";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import judulRuangLingkup1 from "../assets/judulRuangLingkup1.png";
import gambar1 from "../assets/gambar1_1.png";
import gambar2 from "../assets/gambar2_1.png";
import gambar3 from "../assets/gambar3_1.png";
import gambar4 from "../assets/gambar4_1.png";
import gambar5 from "../assets/gambar5_1.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getPdfUrl } from "../utils/helper";

export default function RuangLingkup1() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className="max-w-screen">
			<div className="bg-ruang-lingkup">
				<Header background="bg-[#0E66D2]" />
				<img
					src={judulRuangLingkup1}
					className="lg:-mt-44 z-0 relative"
				/>
			</div>

			<div className="flex flex-col gap-5 bg-white px-4 md:px-8 py-8 max-w-screen-xl mx-auto">
				<h1 className="text-primary font-bold underline text-3xl md:text-4xl judul">
					PENDAHULUAN
				</h1>
				<div className="flex flex-col md:flex-row gap-3 w-full">
					<div className="flex flex-col md:flex-row gap-2 md:flex-shrink-0">
						<img
							src={gambar1}
							className="md:w-28 lg:w-36 md:self-start"
						/>
						<img
							src={gambar2}
							className="md:w-28 lg:w-36 md:self-start"
						/>
					</div>
					<div className="arial">
						<span>
							Sebelum memasuki bagaimana kalian mengetahui koloid,
							ingat kembali pemahaman kalian mengenai campuran.
							Pada campuran terbagi menjadi dua yaitu homogen dan
							heterogen. Untuk membedakan kedua hal tersebut
							tentunya kalian sudah sangat paham bagaimana
							ciri-ciri keduanya, seperti air gula yang termasuk
							ke dalam campuran homogen karena tidak terlihat lagi
							perbedaan komponennya, dan pada kopi tentunya
							merupakan contoh dari campuran heterogen. Kopi
							sekilas tampak campuran dari bubuk kopi dan air
							panas yang menyatu bukan? namun apa yang terjadi
							jika didiamkan beberapa saat? kopi tersebut akan
							terlihat sisa-sisa bubuk yang tidak terlarut.{" "}
						</span>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-3 w-full">
					<div className="flex flex-col gap-2 md:flex-shrink-0">
						<img
							src={gambar3}
							className="md:w-56 lg:w-72 md:self-center"
						/>
						<div className="flex flex-col md:flex-row gap-2 md:flex-shrink-0">
							<img
								src={gambar4}
								className="md:w-28 lg:w-36 md:h-52 md:self-start"
							/>
							<img
								src={gambar5}
								className="md:w-28 lg:w-36 md:h-52 md:self-start"
							/>
						</div>
					</div>
					<div>
						<p className="arial">
							Jika kalian sudah memahami apa yang membedakan
							campuran homogen dan heterogen, maka akan timbul
							dalam diri kalian, bagaimana jika terdapat minuman
							yang sebenarnya sekilas memiliki endapan didalamnya
							namun tidak pernah mengendap? Perhatikan susu di
							samping, jika kalian perhatikan maka susu merupakan
							larutan atau campuran homogen yang terdiri dari
							bubuk susu dan air yang melarutkan. Namun, saat
							kalian perhatikan susu yang dituangkan air panas
							akan menggumpal sebelum diaduk bukan? Susu yang
							sekilas tampak seperti homogen jika kita saring
							menggunakan saringan halus maka akan terpisahkan
							komponen susu dan air susunya seperti pada gambar.
							Yang menjadi pertanyaan adalah bagaimana bisa jika
							susu memiliki endapan didalamnya namun tidak
							sekalipun mengendap di bagian bawah dan justru
							tampak terlarut dalam air? Dari perumpamaan susu dan
							kopi diatas, yang terjadi dengan susu merupakan
							contoh dari koloid. Untuk memahami lebih jelas
							bagaimana kaitannya sistem koloid dan jenis-jenis
							koloid dalam ruang lingkup 1, silahkan simak dan
							pelajari bahan ajar dan lkpd yang sudah disediakan
							di bawah.
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-5 bg-white px-4 md:px-8 py-8 max-w-screen-xl mx-auto">
				<h1 className="text-primary font-bold underline text-3xl md:text-4xl judul">
					VIDEO PEMBELAJARAN
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
					<iframe
						src="https://www.youtube.com/embed/UktHPe4oQLc"
						className="w-full aspect-video"
					></iframe>
					<iframe
						src="https://www.youtube.com/embed/QLjMB2YSgWQ"
						className="w-full aspect-video"
					></iframe>
					<iframe
						src="https://www.youtube.com/embed/V7IOq2DFwns"
						className="w-full aspect-video"
					></iframe>
					<div className="hidden lg:flex"></div>
					<iframe
						src="https://www.youtube.com/embed/XGxYr4HnyLk"
						className="w-full aspect-video"
					></iframe>
				</div>
			</div>

			<div className="flex flex-col gap-5 bg-white px-4 md:px-8 py-8 mb-5 max-w-screen-xl mx-auto">
				<h1 className="text-primary font-bold underline text-3xl md:text-4xl judul">
					BAHAN AJAR & LKPD
				</h1>
				<div className="flex flex-col md:flex-row gap-5 w-full mx-auto items-center justify-around">
					<iframe
						src={getPdfUrl("bahan-ajar-koloid.pdf")}
						className="w-full h-96 md:w-[560px] md:h-[620px]"
					/>
					<iframe
						src={getPdfUrl("lkpd-koloid.pdf")}
						className="w-full h-96 md:w-[560px] md:h-[620px]"
					/>
				</div>
				{/* navs */}
				<div className="flex justify-between flex-col md:flex-row items-center gap-4 lg:px-4">
					{[0, 2].map((x, i) =>
						!x ? (
							<div className=""></div>
						) : (
							<Link to={`../ruang-lingkup-${x}`}>
								<button
									className={`rounded-md bg-white border-2 border-[#0E66D2] flex px-4 py-2 gap-2 text-[#0E66D2] font-medium text-lg shadow-xl hover:bg-[#0E66D2] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0E66D2] ${
										i && "flex-row-reverse"
									}`}
								>
									{i ? (
										<i className="bi bi-arrow-right" />
									) : (
										<i className="bi bi-arrow-left" />
									)}
									Ruang Lingkup {x}
								</button>
							</Link>
						)
					)}
				</div>
			</div>

			{/* footer */}
			<Footer />
		</div>
	);
}
