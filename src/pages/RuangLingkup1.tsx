import { useState } from "react";
import { Burger, Menu, Transition } from "@mantine/core";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import maskot from "../assets/maskot.png";

export default function RuangLingkup1() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="max-w-screen">
      <div className="w-full relative bg-[#0E66D2] min-h-screen flex flex-col items-center">
        {/* Header */}
        <header className="w-full">
          <div className="max-w-screen-lg w-full mx-auto flex justify-between px-4 py-2 md:px-6">
            {/* ganjel sm */}
            <div className="md:hidden" />

            {/* logo */}
            <img src={logo} alt="Logo Si-Kolo" className="w-14 object-cover" />

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
                    <a href="#" className="px-4 text-center font-semibold">
                      Beranda
                    </a>
                    <Link
                      to="/capaian-dan-tujuan-pembelajaran"
                      className="px-4 text-center font-semibold"
                    >
                      Capaian dan Tujuan
                    </Link>
                    <a href="#" className="px-4 text-center font-semibold">
                      Mind Map
                    </a>
                    <a href="#" className="px-4 text-center font-semibold">
                      Materi Pembelajaran
                    </a>
                    <a href="#" className="px-4 text-center font-semibold">
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
                )}
              </Transition>
            </div>

            {/* right side */}
            <div className="hidden md:flex text-primary gap-4 items-center">
              <a href="#" className="text-center font-semibold">
                Beranda
              </a>
              <Link
                to="/capaian-dan-tujuan-pembelajaran"
                className="text-center font-semibold"
              >
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

        
      </div>

      {/* footer */}
      <footer className="bg-[#afcbd6] w-full">
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
                <p className="text-2xl font-black">Kelompok Peminatan MIPA</p>
                <p className="text-xl font-medium lg:whitespace-nowrap">
                  Untuk SMA/MA/Sederajat Kelas XI Fase F
                </p>
              </div>
              <div className="flex flex-col text-center lg:items-end">
                <p className="text-lg font-medium text-primary lg:text-right">
                  Ada Pertanyaan?
                </p>
                <p className="text-sm lg:text-right">
                  Hubungi Cp Sosmed untuk mendapatkan informasi selengkapnya
                  mengenai project ini
                </p>
              </div>
            </div>
            <div className="flex flex-col-reverse gap-2 lg:flex-row lg:justify-end lg:items-center">
              <div className="flex justify-center gap-2 lg:order-2">
                {["instagram", "twitter", "facebook", "share-fill"].map(
                  (x, i) => (
                    <button
                      key={i}
                      className="flex-center w-8 h-8 rounded-full self-center border border-black"
                    >
                      <i className={`bi bi-${x}`}></i>
                    </button>
                  )
                )}
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
    </div>
  );
}
