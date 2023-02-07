import { useState } from "react";
import { Burger, Menu, Transition } from "@mantine/core";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

interface Props {
	background?: string;
}

const menus = [
	{
		to: "/",
		text: "Beranda",
	},
	{
		to: "/capaian-dan-tujuan-pembelajaran",
		text: "Capaian dan Tujuan",
	},
	{
		to: "/",
		text: "Mind Map",
	},
	{
		to: "/",
		text: "Materi Pembelajaran",
	},
	{
		to: "/",
		text: "Mari Berlatih",
	},
];

export default function Header(props: Props) {
	const [openMenu, setOpenMenu] = useState(false);

	const dropdownMenu = () => (
		<Menu shadow="md" width={200} >
			<Menu.Target>
				<button className="bg-primary-f5 py-2 px-3 rounded-md text-white montserrat">
					Lainnya
				</button>
			</Menu.Target>
			<Menu.Dropdown>
				<Menu.Item className="montserrat">Daftar Pustaka</Menu.Item>
				<Menu.Item>
					<Link to="/profil" className="montserrat">
						Profil Tim Pengembang
					</Link>
				</Menu.Item>
			</Menu.Dropdown>
		</Menu>
	);

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
								className={`w-screen absolute left-0 top-20 py-4 gilroy-extrabold flex flex-col border-b border-gray-800 text-primary items-center gap-4 text-lg ${
									props.background || "bg-[#d3eaf4]"
								}`}
							>
								{menus.map((menu, i) => (
									<Link
										key={i}
										to={menu.to}
										className="px-4 text-center font-semibold"
									>
										{menu.text}
									</Link>
								))}
								{ dropdownMenu() }
							</div>
						)}
					</Transition>
				</div>

				{/* right side */}
				<div className="hidden md:flex text-primary gap-4 items-center">
					{menus.map((menu, i) => (
						<Link
							key={i}
							to={menu.to}
							className="text-center font-semibold"
						>
							{menu.text}
						</Link>
					))}
					{ dropdownMenu() }
				</div>
			</div>
		</header>
	);
}
