import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterContacts from "./FooterContacts";

const Footer = ({ backgroundColor, image, imageWidth, imageHeight, links, contacts }) => {
  return (
    <footer className="text-white text-center py-4 mt-5"  
    style={{
        backgroundColor,
        position: "fixed",
        bottom: "0",
        width: "100%",
        left: "0"
    }}>
      <div className="container">

        <FooterLogo image={image} width={imageWidth} height={imageHeight} />

        <FooterLinks links={links} />

        <FooterContacts contacts={contacts} />

        <p className="mt-3 small opacity-75">
          © {new Date().getFullYear()} Tudo Aqui — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
