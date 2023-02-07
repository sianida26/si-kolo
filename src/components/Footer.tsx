import logo from "../assets/logo.png";

export default function Footer() {
	return (
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
								Hubungi Cp Sosmed untuk mendapatkan informasi
								selengkapnya mengenai project ini
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
							Share this website content to your community/agency
						</p>
						<button className="bg-gradient-to-l from-[#f082c2] to-[#d1579d] px-3 py-2 rounded-lg text-white self-center font-medium lg:order-3">
							Ajukan Pertanyaan
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
