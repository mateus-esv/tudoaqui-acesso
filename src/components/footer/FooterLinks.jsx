
const FooterLinks = ({ links }) => (
  <div>
    {links.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className="text-white text-decoration-none d-inline-block"
        style={{ margin: "0px 20px" }}
      >
        {item.label}
      </a>
    ))}
  </div>
);

export default FooterLinks;
