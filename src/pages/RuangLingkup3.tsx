import { useState } from "react";
import { Burger, Menu, Transition } from "@mantine/core";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import judulRuangLingkup3 from "../assets/judulRuangLingkup3.png";
import gambar1 from "../assets/gambar1_3.png";
import gambar2 from "../assets/gambar2_3.png";
import gambar3 from "../assets/gambar3_3.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getPdfUrl } from "../utils/helper";

export default function RuangLingkup3() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="max-w-screen">
      <div className="bg-ruang-lingkup">
        <Header background="bg-[#0E66D2]" />
        <img src={judulRuangLingkup3} />
      </div>

      <div className="flex flex-col gap-5 bg-white px-4 md:px-8 py-8 max-w-screen-xl mx-auto">
        <h1 className="text-primary font-bold underline text-2xl">
          PENDAHULUAN
        </h1>
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <div className="flex flex-col gap-2 md:flex-shrink-0">
            <div className="flex flex-col md:flex-row gap-2 md:flex-shrink-0">
              <img
                src={gambar1}
                className="md:w-32 lg:w-40 md:h-52 md:self-start"
              />
              <img
                src={gambar2}
                className="md:w-48 lg:w-56 md:h-52 md:self-start"
              />
            </div>
            <img src={gambar3} className="md:w-72 lg:w-96 md:self-center" />
          </div>
          <div className="">
            <p>
              Pembelajaran demi pembelajaran sudah kalian lalui, sekarang
              saatnya memasuki ruang lingkup 3. Pada ruang lingkup ini mengajak
              kalian untuk mengingat kembali sifat koloid yaitu liofob dan
              liofil. Kedua sifat ini erat kaitannya dengan kehidupan
              sehari-hari hingga pemecahan permasalahan yang lebih besar.
            </p>
            <p>
              Contoh saja, dengan pengetahuan tersebut kemudian dilengkapi
              dengan pengetahuan ruang lingkup 3, kalian akan memahami cara
              kerja detergent, bagaimana perendaman kain terlalu lama pada
              detergent menyebabkan bau apek hingga bakteri. Selain itu, kalian
              juga akan memahami pula bagaimana jika kain tidak direndam dan
              langsung dikucek apakah lebih mudah untuk membersihkan noda?
            </p>
            <p>
              Contoh yang lebih kontekstual terhadap permasalahan kehidupan
              nyata yaitu fenomena tumpahan minyak di laut yang menyebabkan laut
              tercemar. Hal ini sudah muncul solusi-solusinya, salah satunya
              menyangkut pemahaman ruang lingkup ketiga ini.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 bg-white px-4 md:px-8 py-8 max-w-screen-xl mx-auto">
        <h1 className="text-primary font-bold underline text-2xl">
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
        <h1 className="text-primary font-bold underline text-2xl">
          BAHAN AJAR & LKPD
        </h1>
        <div className="flex flex-col md:flex-row gap-5 w-full mx-auto items-center justify-around">
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

      {/* footer */}
      <Footer />
    </div>
  );
}
