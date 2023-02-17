import Footer from "../components/Footer";
import Header from "../components/Header";
import judulRuangLingkup2 from "../assets/judulRuangLingkup2.png";
import illustration25 from "../assets/illustration25.png";
import illustration26 from "../assets/illustration26.png";
import illustration27 from "../assets/illustration27.png";
import { getPdfUrl } from "../utils/helper";
import { Link } from "react-router-dom";

export default function RuangLingkup2() {
	return (
		<div className="max-w-screen">
			<div className="bg-ruang-lingkup">
				<Header background="bg-[#0E66D2]" />
				<img
					src={judulRuangLingkup2}
					className="lg:-mt-44 z-0 relative"
				/>
			</div>
			<div className="flex flex-col gap-5 px-4 py-8 max-w-screen-xl mx-auto">
				<h1 className="text-primary font-bold text-3xl md:text-4xl judul underline">
					PENDAHULUAN
				</h1>
				<div className="flex flex-col md:flex-row arial">
					<div className="flex flex-col gap-2 px-4 md:flex-row md:flex-shrink-0 md:items-start">
						<img
							src={illustration25}
							alt="Ilustrasi susu"
							className="md:w-32"
						/>
						<div className="flex flex-col gap-2">
							<img src={illustration26} className="md:w-28" />
							<img src={illustration27} className="md:w-28" />
						</div>
					</div>
					<p>
						Setelah memahami pembelajaran pada ruang lingkup 1 di
						pertemuan 1 dan 2 tentunya kalian sudah paham mengenai
						fenomena yang diberikan yaitu susu. Pada ruang lingkup 2
						ini akan dibahas sifat-sifat yang menyertai sistem
						koloid. Susu merupakan koloid yang memiliki partikel
						lebih kecil dari suspensi namun lebih besar dari larutan
						dan juga tidak menimbulkan endapan. Fenomena susu
						tersebut dijelaskan pada sifat koloid yaitu gerak brown,
						dimana adanya tumbukan yang tidak berimbang dengan fase
						pendispersi sehingga tumbukan terjadi secara terus
						menerus dengan lintasan mirip zig-zag. Dengan adanya
						tumbukan zig-zag ini, partikel susu dalam medium
						pendispersi air terus menerus bertabrakan di
						tengah-tengah koloid susu sehingga tidak ada endapan
						yang terbentuk.
					</p>
				</div>

				<h1 className="text-primary font-bold text-3xl md:text-4xl judul underline mt-4">
					VIDEO PEMBELAJARAN
				</h1>

				<div className="mb-8">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6">
						<iframe
							src="https://www.youtube.com/embed/XEAiLm2zuvc"
							className="w-full aspect-video col-span-2"
						></iframe>
						<iframe
							src="https://www.youtube.com/embed/26r4rBnfU7A"
							className="w-full aspect-video col-span-2"
						></iframe>
						<iframe
							src="https://www.youtube.com/embed/13bGTEYhDwY"
							className="w-full aspect-video col-span-2"
						></iframe>
						<iframe
							src="https://www.youtube.com/embed/CztiMpdv0qg"
							className="w-full aspect-video col-span-2 lg:col-start-2"
						></iframe>
						<iframe
							src="https://www.youtube.com/embed/J44wh7muLC4"
							className="w-full aspect-video col-span-2 col-start-2 lg:col-start-4"
						></iframe>
					</div>
				</div>

				<h1 className="text-primary font-bold text-3xl md:text-4xl judul underline">
					BAHAN AJAR & LKPD
				</h1>
				<div className="flex flex-col gap-4 md:flex-row justify-around">
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
					{[1, 3].map((x, i) =>
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
			<Footer />
		</div>
	);
}
