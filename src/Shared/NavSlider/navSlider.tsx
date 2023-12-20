import NavBarWrapper from "@/components/Client/navBarWrapper/navBarWrapper";
import NavButton from "@/components/Client/navButton/navButton";
import { NavLinks, socialIcons } from "@/data/NavSlider";
import Image from "next/image";
import Link from "next/link";

const NavSlider = () => {
  return (
    <NavBarWrapper>
      {/* <div className="navbar-logo">
        <Link href="/">
          <Image
            width={500}
            height={500}
            src="/svgs/main-logo.svg"
            alt="main-logo"
          />
        </Link>
      </div> */}
      <div className="nav-wrap flex">
        <div className="nav-social">
          <div className="nav-social-line flex">
            <Image
              width={24}
              height={200}
              className="max-h-[40.661vh]"
              src="/svgs/LINE.svg"
              alt="line"
            />
          </div>

          {/* all social icons in the left  //MT */}
          <ul>
            {socialIcons.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <Image
                    width={500}
                    height={500}
                    src={item.iconPath}
                    alt={item.name}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* NavSlider links   //MT */}
        <nav className="main-nav">
          <ul>
            {NavLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <NavButton>{item.label}</NavButton>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-contact">
          <ul>
            <li>
              <Link href="www.webtricker.com">
                {" "}
                <Image
                  width={500}
                  height={500}
                  src="/svgs/nav-web.svg"
                  alt="web"
                />
                <span>www.webtricker.com</span>
              </Link>
            </li>
            <li>
              <Link href="mailto:info@gmail.com">
                <Image
                  width={500}
                  height={500}
                  src="/svgs/nav-mail.svg"
                  alt="mail"
                />{" "}
                <span>info@webtricker.com</span>
              </Link>
            </li>
            <li>
              <Link href="tel:+1(682)472-6184">
                <Image
                  width={500}
                  height={500}
                  src="/svgs/nav-tel.svg"
                  alt="tel"
                />{" "}
                <span>+1(682)472-6184</span>
                
              </Link>
            </li>
            <li>
              <Link href="tel:+8801712377577">
                <Image
                  width={500}
                  height={500}
                  src="/svgs/nav-tel.svg"
                  alt="tel"
                />{" "}
                
                <span>+8801712377577</span>
            
              </Link>
            </li>
            <li>
              <Link href="tel:+8801811377577">
                <Image
                  width={500}
                  height={500}
                  src="/svgs/nav-tel.svg"
                  alt="tel"
                />{" "}
                
             
                <span>+8801811377577</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.google.com/maps/place/Hurst,+%E0%A6%9F%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%B8%E0%A6%BE%E0%A6%B8,+%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%95%E0%A6%BF%E0%A6%A8+%E0%A6%AF%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A6%BE%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0/@32.846729,-97.1748229,12043m/data=!3m2!1e3!4b1!4m6!3m5!1s0x864e78d33bcc71a1:0x4fd295e26ca67746!8m2!3d32.8234621!4d-97.1705678!16zL20vMDEwOWNn?entry=ttu">
                <Image
                  width={500}
                  height={500}
                  src="/svgs/nav-address.svg"
                  alt="address"
                />
                <span>
                  {" "}
                  <span className="font-bold">US Office:</span> Hurst, Texas, United States
                </span>
              </Link>
            </li>
           
         
            <li>
              <Link href="https://www.google.com/maps/place/Probal+Valley/@23.8206598,90.4371704,166m/data=!3m1!1e3!4m10!1m2!2m1!1sProbal+Valley,+Plot+%23+112-113,+Block+%23+I,+Road+%23+5,+Bashundhara+R%2FA,+Dhaka.!3m6!1s0x3755c7dbc6c35235:0xbe3fc542e0891c5c!8m2!3d23.8205636!4d90.4373351!15sCktQcm9iYWwgVmFsbGV5LCBQbG90ICMgMTEyLTExMywgQmxvY2sgIyBJLCBSb2FkICMgNSwgQmFzaHVuZGhhcmEgUi9BLCBEaGFrYS6SARJhcGFydG1lbnRfYnVpbGRpbmfgAQA!16s%2Fg%2F11j7vywy_k?entry=ttu">
                <Image
                  width={500}
                  height={500}
                  src="/svgs/nav-address.svg"
                  alt="address"
                />{" "}
                <span> Dhaka Office: Probal Valley, Plot # 112-113, Block # I, Road # 5, Bashundhara R/A, Dhaka.</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.google.com/maps/place/Webtricker+Web+Design+%26+Development+Agency/@24.9143954,89.9413507,229m/data=!3m1!1e3!4m5!3m4!1s0x0:0x209802aa6366f9da!8m2!3d24.9141901!4d89.9414119">
                <Image
                  width={500}
                  height={500}
                  src="/svgs/nav-address.svg"
                  alt="address"
                />{" "}
                <span>Jamalpur Office: House No-46, Zia College Moar Beside Sohid Minar, Jamalpur, Bangladesh.</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NavBarWrapper>
  );
};

export default NavSlider;
