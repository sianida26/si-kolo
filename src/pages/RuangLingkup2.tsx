import Footer from "../components/Footer";
import Header from "../components/Header";
import judulRuangLingkup2 from "../assets/judulRuangLingkup2.png";
import illustration25 from "../assets/illustration25.png";
import illustration26 from "../assets/illustration26.png";
import illustration27 from "../assets/illustration27.png";
import { getPdfUrl } from "../utils/helper";

export default function RuangLingkup2() {
	return (
		<div className="w-screen">
			<div className="bg-ruang-lingkup">
				<Header background="bg-[#0E66D2]" />
				<img src={judulRuangLingkup2} />
			</div>
			<div className="flex flex-col gap-5 px-4 py-8 max-w-screen-xl mx-auto">
				<h1 className="text-primary font-bold text-2xl underline">
					PENDAHULUAN
				</h1>
				<div className="flex flex-col md:flex-row">
					<div className="flex flex-col gap-2 px-4 md:flex-row md:flex-shrink-0 md:items-start">
						<img src={illustration25} alt="Ilustrasi susu" className="md:w-32" />
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

				<h1 className="text-primary font-bold text-2xl underline">
					VIDEO PEMBELAJARAN
				</h1>

				<div className="">
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

				<h1 className="text-primary font-bold text-2xl underline">
					BAHAN AJAR & LKPD
				</h1>
				<div className="flex flex-col gap-4 md:flex-row">
					<iframe
						src={getPdfUrl("example.pdf")}
						className="w-full h-96 md:w-[560px] md:h-[620px]"
					></iframe>
					<iframe
						src={getPdfUrl("example.pdf")}
						className="w-full h-96 md:w-[560px] md:h-[620px]"
					></iframe>
				</div>
			</div>
			<Footer />
		</div>
	);
}
