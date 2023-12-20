import NavSlider from "@/Shared/NavSlider/navSlider";
import NavBar from "@/Shared/NaveBar/NavBar";
import Footer from "@/Shared/footer/footer";
import LenisSmooth from "@/components/Client/lenisSmooth";
import "../globals.css";

type LayoutPropsType = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: LayoutPropsType) => {
  return (
    <>
      <LenisSmooth>
        <main className="main-wrap">
          <NavBar />
          {children}

          <Footer />
          <NavSlider />
        </main>
      </LenisSmooth>
    </>
  );
};
export default RootLayout;
