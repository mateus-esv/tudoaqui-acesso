
const FooterLinks = ({ links }) => (
  <div className="row justify-content-center mb-3">
    {links.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className="text-white text-decoration-none d-block mb-2"
        style={{ margin: "0px 20px" }}
      >
        {item.label}
      </a>
    ))}
  </div>
);

export default FooterLinks;
