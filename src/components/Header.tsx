import { useState } from "react";
import { Burger, Menu, Transition } from "@mantine/core";
import logo from "../assets/logo.png";

interface Props{
	background?: string
}

export default function Header(props: Props) {

    const [openMenu, setOpenMenu] = useState(false);

	return (
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
								className={`w-screen absolute left-0 top-20 py-4 flex flex-col border-b border-gray-800 text-primary items-center gap-4 text-lg ${ props.background || 'bg-[#d3eaf4]' }`}
							>
								<a
									href="#"
									className="px-4 text-center font-semibold"
								>
									Beranda
								</a>
								<a
									href="#"
									className="px-4 text-center font-semibold"
								>
									Capaian dan Tujuan
								</a>
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
										<Menu.Item>Daftar Pustaka</Menu.Item>
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
					<a href="#" className="text-center font-semibold">
						Capaian dan Tujuan
					</a>
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
	);
}
