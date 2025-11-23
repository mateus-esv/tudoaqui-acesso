import { useEffect, useRef } from "react";

const Collapse = ({ title, links, id }) => {
  const collapseRef = useRef(null);
  const collapseId = id || "collapseExample";

  useEffect(() => {
    // Cria a instância do collapse do Bootstrap
    const bsCollapse = new bootstrap.Collapse(collapseRef.current, { toggle: false });
    return () => bsCollapse.dispose(); // Limpa quando desmonta
  }, []);

  // Fecha o offcanvas ao clicar no link
  const handleLinkClick = () => {
    const offcanvasEl = document.getElementById("offcanvasScrolling");
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
    if (bsOffcanvas) bsOffcanvas.hide();
  };

  // Alterna o collapse ao clicar no botão
  const handleToggle = () => {
    const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseRef.current);
    bsCollapse.toggle();
  };

  return (
    <>
      <button
        className="btn btn-link mb-2"
        type="button"
        onClick={handleToggle} // chama o toggle manualmente
        style={{
          width: "100%",
          textDecoration: "none",
          textAlign: "left",
          padding: "0",
          color:"black"
        }}
      >
        {title || "Abrir Collapse"}
      </button>

      <div ref={collapseRef} className="collapse" id={collapseId}>
        <div className="card card-body">
          {links && links.map((link, index) => (
            <a
              key={index}
              className="d-block mb-2"
              href={link.url}
              onClick={handleLinkClick} // fecha o offcanvas
              style={{textDecoration:"none",color:"rgb(110, 35, 160)"}}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Collapse;
