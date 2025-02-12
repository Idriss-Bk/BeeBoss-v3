import React from "react";
import { quicklinks, legalpages } from "@/lib/footer-menu";
import Link from "next/link";
import {
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Newsletter from "@/components/global/footer/Newsletter";
import Image from "next/image";
import FooterLogo from "../../../../public/BeeBoss-LOGO-PNG.png"

interface SettingsData {
  allSettings: {
    generalSettingsTitle: string;
  };
}

const Footer = () => {
  // const [data, setData] = useState<SettingsData | null>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(`${process.env.NEXT_PUBLIC_GRAPHQL_URL}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         query: `
  //           query getPosts {
  //             allSettings {
  //               generalSettingsTitle
  //             }
  //           }
  //         `,
  //       }),
  //     });

  //     const { data } = await res.json();
  //     setData(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="mt-16">
      <footer className="bg-black shadow border-t-2 border-gray-100 w-full py-20 mt-16 px-5 lg:px-0 xl:px-0">
        <div className="max-w-[1250px] mx-auto">
          <div className="lg:flex gap-8">
            <div className="lg:w-4/12">
              <div>
                <section>
                  <Image src={FooterLogo} alt="Logo" width={200} height={100} />
                </section>
                <p className="max-w-[320px] text-left text-[15px] text-white font-medium mb-4">
                BeeBoss is an all-in-one e-commerce solution designed to streamline your online business journey.
                </p>
                <Newsletter />
              </div>
            </div>
            <div className="lg:w-2/12">
              <div className="mt-10 lg:mt-0 xl:mt-0">
                <section>
                  <h3 className="mb-4 text-[20px] text-white font-bold uppercase">
                    Quick Links
                  </h3>
                </section>
                <ul className="">
                  {quicklinks.map((footerlink, index) => (
                    <li className="mb-[5px]" key={index}>
                      <FaAngleRight className="h-4 w-4 inline-block mr-1 -mt-0.5 text-yellow-100" />
                      <Link
                        href={footerlink.slug}
                        className="text-md text-slate-200 hover:text-white transition-all font-semibold"
                      >
                        {footerlink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-2/12">
              <div className="mt-10 lg:mt-0 xl:mt-0">
                <section>
                  <h3 className="mb-4 text-[20px] text-white font-bold uppercase">
                    Legal Pages
                  </h3>
                </section>
                <ul className="">
                  {legalpages.map((legalpage, index) => (
                    <li className="mb-[5px]" key={index}>
                      <FaAngleRight className="h-4 w-4 inline-block mr-1 -mt-0.5 text-yellow-100" />
                      <Link
                        href={legalpage.slug}
                        className="text-md text-slate-200 hover:text-white transition-all font-semibold"
                      >
                        {legalpage.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-4/12">
              <div className="mt-10 lg:mt-0 xl:mt-0">
                <section>
                  <h3 className="mb-4 text-[20px] text-white font-bold uppercase">
                    Informations
                  </h3>
                </section>
                <ul className="">
                  <li className="text-slate-200 text-md mb-1.5">
                    <strong className="text-white">Email:</strong>{" "}
                    info@beeboss.ai
                  </li>
                  <li className="text-slate-200 text-md mb-1.5">
                    <strong className="text-white">Phone:</strong> +41 79 196
                    7985
                  </li>
                  <li className="text-slate-200 text-md mb-1.5">
                    <strong className="text-white">Address:</strong> Dubai |
                    Schweiz | Deutschland
                  </li>
                </ul>
                <div className="text-sm font-semibold text-white block mt-3">
                  Follow us on:
                </div>
                <ul className="flex justify-start items-center gap-2 mt-1.5">
                  <li>
                    <Link href="/" aria-label="Follow us on Facebook">
                      <FaInstagram className="h-6 w-6 text-slate-200 hover:text-yellow-200" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" aria-label="Follow us on Instagram">
                      <FaFacebook className="h-6 w-6 text-slate-200 hover:text-yellow-200" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      aria-label="Subscribe to our Youtube channel"
                    >
                      <FaYoutube className="h-6 w-6 text-slate-200 hover:text-yellow-100" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/" aria-label="Follow us on Pinterest">
                      <FaPinterest className="h-6 w-6 text-slate-200 hover:text-yellow-100" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="p-4 text-center bg-black border-t-[1px] border-gray-900 uppercase text-sm tracking-wider text-white font-medium">
        Copyright © 2025 Beeboss
      </div>
    </div>
  );
};

export default Footer;
