import { useState } from "react";
import { Burger, Menu, Transition } from "@mantine/core";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import maskot from "../assets/maskot.png";

export default function CapaianPage() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="max-w-screen">
      <div className="w-full relative bg-gradient-to-br from-[#d3eaf4] to-[#ddedf4] min-h-screen flex flex-col items-center">
        {/* Header */}
        <Header />
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
      <Footer />
    </div>
  );
}
