import { useState } from "react";
import { Burger, Menu, Transition } from "@mantine/core";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// import maskot from "../assets/maskot.png";

export default function CapaianPage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="max-w-screen">
      <div className="w-full relative bg-gradient-to-br from-[#d3eaf4] to-[#ddedf4] min-h-screen flex flex-col items-center">
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
        <div className="flex flex-col gap-5 items-center justify-center my-auto px-4 py-8 md:flex-row max-w-screen-xl times">
          <div className="flex flex-col gap-5 md:justify-center md:w-1/2 self-start">
            <div className="border-4 border-primary">
              <div className="flex gap-3 bg-primary border border-primary px-2 py-1 font-semibold text-lg text-white items-center">
                <span>1.1 Capaian Pembelajaran</span>
                <div className="flex gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-primary-f0"></div>
                  <div className="w-5 h-5 rounded-full border border-white bg-primary-f5"></div>
                  <div className="w-5 h-5 rounded-full border border-white bg-primary-e8"></div>
                </div>
              </div>
              <div className="p-2 bg-white">
                Peserta didik mampu mengamati, menyelidiki dan menjelaskan
                fenomena sehari-hari sesuai kaidah kerja ilmiah dalam
                menjelaskan konsep kimia dalam keseharian; menerapkan operasi
                matematika dalam perhitungan kimia, mempelajari sifat, struktur
                dan interaksi partikel dalam membentuk berbagai senyawa termasuk
                pengolahan dan penerapannya dalam keseharian; memahami dan
                menjelaskan aspek energi, laju dan kesetimbangan reaksi kimia;
                menggunakan konsep asam-basa dalam keseharian; menggunakan
                transformasi energi kimia dalam keseharian termasuk termokimia
                dan elektrokimia; memaami kimia organik termasuk penerapannya
                dalam keseharian.
              </div>
            </div>
            <div className="border-4 border-primary">
              <div className="flex gap-3 bg-primary border border-primary px-2 py-1 font-semibold text-lg text-white items-center">
                <span>1.2 Ruang Lingkup Materi</span>
                <div className="flex gap-2">
                  <div className="w-5 h-5 rounded-full border border-white bg-primary-f0"></div>
                  <div className="w-5 h-5 rounded-full border border-white bg-primary-f5"></div>
                  <div className="w-5 h-5 rounded-full border border-white bg-primary-e8"></div>
                </div>
              </div>
              <div className="flex flex-col gap-1 p-2 bg-white">
                <span>
                  Melalui pembelajaran ini, peserta didik akan belajar mengenai:
                </span>
                <div className="flex gap-2">
                  <span>1.2.1</span>
                  <span>
                    <strong>Sistem Koloid</strong> - Model Pembelajaran{" "}
                    <em>Discovery Learning</em>
                  </span>
                </div>
                <div className="flex gap-2">
                  <span>1.2.2</span>
                  <span>
                    <strong>Sifat-Sifat Koloid</strong> - Model Pembelajaran{" "}
                    <em>Project Based Learning</em> (PjBL)
                  </span>
                </div>
                <div className="flex gap-2">
                  <span>1.2.3</span>
                  <span>
                    <strong>Pembentukan Koloid</strong> - Model Pembelajaran{" "}
                    <em>Problem Based Learning</em>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-4 border-primary md:w-1/2 self-start">
            <div className="flex gap-3 bg-primary border border-primary px-2 py-1 font-semibold text-lg text-white items-center">
              <span>1.3 Alur Tujuan Pembelajaran</span>
              <div className="flex gap-2">
                <div className="w-5 h-5 rounded-full border border-white bg-primary-f0"></div>
                <div className="w-5 h-5 rounded-full border border-white bg-primary-f5"></div>
                <div className="w-5 h-5 rounded-full border border-white bg-primary-e8"></div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-2 bg-white">
              <div className="flex gap-2">
                <span>1.3.1</span>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Sistem Koloid</span>
                  <ul className="list-disc pl-5">
                    <li>Memproses, menganalisis data dan informasi pengertian koloid berdasarkan perbedaan larutan, koloid dan suspensi</li>
                    <li>Mengkomunikasikan data hasil pengamatan terhadap perbedaan larutan, koloid dan suspensi</li>
                    <li>Mengklasifikasikan jenis-jenis koloid</li>
                    <li>Memproses, menganalisis data dan informasi jenis-jenis koloid</li>
                    <li>Mengkomunikasikan data hasil diskusi tentang jenis-jenis koloid</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-2">
                <span>1.2.2</span>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Sifat-Sifat Koloid</span>
                  <ul className="list-disc pl-5">
                    <li>Mengamati sifat-sifat koloid berdasarkan proyek tentang penjernihan air sederhana menggunakan alat dan bahan di sekitar</li>
                    <li>Mengevaluasi dan refleksi proyek tentang penjernihan air sederhana menggunakan alat dan bahan di sekitar</li>
                    <li>Mengkreasikan penjernihan air sederhana menggunakan alat dan bahan di sekitar</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-2">
                <span>1.2.3</span>
                <div className="flex flex-col gap-2">
                  <span className="font-bold">Pembentukan Koloid</span>
                  <ul className="list-disc pl-5">
                    <li>Menyelidiki proses pembuatan koloid berdasarkan contoh yang ada di kehidupan sehari-hari</li>
                    <li>Mengkomunikasikan data hasil diskusi mengenai proses pembuatan koloid</li>
                    <li>Memproses, menganalisis data dan informasi proses pembuatan koloid</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
