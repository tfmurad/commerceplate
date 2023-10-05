"use client";

import Logo from "@/components/Logo";
import Social from "@/components/Social";
import config from "@/config/config.json";
import menu from "@/config/menu.json";
import social from "@/config/social.json";
import { markdownify } from "@/lib/utils/textConverter";
import Link from "next/link";

const Footer = () => {
  const { copyright } = config.params;

  return (
    <footer className="bg-theme-light dark:bg-darkmode-theme-light">
      <div className="container">
        <div className="row items-center py-10">
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:text-left">
            <Logo />
          </div>
          <div className="mb-8 text-center lg:col-6 lg:mb-0">
            <ul>
              {menu.footer.map((menu) => (
                <li className="nav-link inline-block text-light" key={menu.name}>
                  <Link href={menu.url}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 text-center lg:col-3 lg:mb-0 lg:mt-0 lg:text-right">
            <Social source={social.main} className="social-icons" />
          </div>
        </div>
      </div>
      <div className="border-t border-border py-7 dark:border-darkmode-border">
        <div className="container flex flex-col md:flex-row justify-between items-center text-light dark:text-darkmode-light">
          <ul>
            {menu.footerCopyright.map((menu) => (
              <li className="nav-link inline-block text-text" key={menu.name}>
                <Link href={menu.url}>{menu.name}</Link>
              </li>
            ))}
          </ul>

          <p dangerouslySetInnerHTML={markdownify(copyright)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
