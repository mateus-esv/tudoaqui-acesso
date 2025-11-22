
const FooterContacts = ({ contacts }) => (
  <div className="row justify-content-center mb-3">
    {contacts.map((item, index) => (
      <a
        key={index}
        href={item.href}
        className="text-white text-decoration-none d-block mb-2"
        style={{ margin: "0px 20px" }}
      >
        <img src={item.icon} width={30} height={30} /> {item.text}
      </a>
    ))}
  </div>
);

export default FooterContacts;
