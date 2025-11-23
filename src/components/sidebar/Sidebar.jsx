import Collapse from "../collapse/Collapse";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div>
            <button id="button-sidebar" style={{ backgroundColor: "#ff6b21", outlineColor: "orange", border: "none" }} className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Categorias</button>

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Todas categorias</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <Collapse
                        id="lojas-beleza"           // ID único do collapse
                        title="Beleza" // Texto do botão
                        links={[
                            { label: "Bella Center Cosméticos", url: "/bella-center" },
                            { label: "Glamour Beauty Store", url: "/glamour-beauty" },
                            { label: "Essência Pura Cosméticos", url: "/essencia-pura" },
                            { label: "MakeUP House", url: "/makeup-house" },
                            { label: "Studio Beleza Vip", url: "/beleza-vip" },
                            { label: "Rosa Chic", url: "/rosa-chic" }
                        ]}

                    />

                    <Collapse
                        id="lojas-saude"           // ID único do collapse
                        title="Saúde"               // Texto do botão
                        links={[
                            { label: "Farmácia Medalha Milagrosa", url: "/farmacia-medalha-milagrosa" },
                            { label: "Farmácia Tem Tem", url: "/farmacia-tem-tem" },
                            { label: "Drogaria São Paulo", url: "/drogaria-sao-paulo" },
                            { label: "Clínica Vida Saudável", url: "/clinica-vida-saudavel" },
                            { label: "Laboratório Exame Rápido", url: "/laboratorio-exame-rapido" },
                            { label: "Centro Médico Bem-Estar", url: "/centro-medico-bem-estar" }
                        ]}
                    />

                    {/* Collapse Móveis */}
                    <Collapse
                        id="lojas-moveis"
                        title="Móveis"
                        links={[
                            { label: "Vitória Móveis", url: "/vitoria-moveis" },
                            { label: "Móveis Modernos", url: "/moveis-modernos" },
                            { label: "Casa & Conforto", url: "/casa-conforto" },
                            { label: "Moveleira São João", url: "/moveleira-sao-joao" },
                            { label: "Lar Ideal", url: "/lar-ideal" }
                        ]}
                    />

                    {/* Collapse Tecnologia */}
                    <Collapse
                        id="lojas-tecnologia"
                        title="Tecnologia"
                        links={[
                            { label: "Tech Store", url: "/tech-store" },
                            { label: "InovaTech", url: "/inovatech" },
                            { label: "Eletrônicos Brasil", url: "/eletronicos-brasil" },
                            { label: "Computadores & Cia", url: "/computadores-cia" },
                            { label: "Gadgets Modernos", url: "/gadgets-modernos" }
                        ]}
                    />

                    {/* Collapse Eletrônicos */}
                    <Collapse
                        id="lojas-eletronicos"
                        title="Eletrônicos"
                        links={[
                            { label: "EletroCenter", url: "/eletrocenter" },
                            { label: "Casa Eletrônica", url: "/casa-eletronica" },
                            { label: "Som & Imagem", url: "/som-imagem" },
                            { label: "Eletrônica Rápida", url: "/eletronica-rapida" },
                            { label: "Smart Tech", url: "/smart-tech" }
                        ]}
                    />
                    {/* Collapse Açougue */}
                    <Collapse
                        id="lojas-acougue"
                        title="Açougue"
                        links={[
                            { label: "Açougue do Zé", url: "/acougue-do-ze" },
                            { label: "Carnes Premium", url: "/carnes-premium" },
                            { label: "Açougue Central", url: "/acougue-central" },
                            { label: "Corte Fino", url: "/corte-fino" },
                            { label: "Casa da Carne", url: "/casa-da-carne" }
                        ]}
                    />

                    {/* Collapse Supermercados */}
                    <Collapse
                        id="lojas-supermercados"
                        title="Supermercados"
                        links={[
                            { label: "Supermercado São Jorge", url: "/super-sao-jorge" },
                            { label: "Mercado Central", url: "/mercado-central" },
                            { label: "Super Bom Preço", url: "/super-bom-preco" },
                            { label: "Mercadão da Cidade", url: "/mercadao-da-cidade" },
                            { label: "Super Popular", url: "/super-popular" }
                        ]}
                    />

                    {/* Collapse Mercearias */}
                    <Collapse
                        id="lojas-mercearias"
                        title="Mercearias"
                        links={[
                            { label: "Mercearia Ponto Certo", url: "/mercearia-ponto-certo" },
                            { label: "Armazém do Bairro", url: "/armazem-do-bairro" },
                            { label: "Mini Mercado Feliz", url: "/mini-mercado-feliz" },
                            { label: "Mercearia São Lucas", url: "/mercearia-sao-lucas" },
                            { label: "Armazém Popular", url: "/armazem-popular" }
                        ]}
                    />

                    {/* Collapse Padarias */}
                    <Collapse
                        id="lojas-padarias"
                        title="Padarias"
                        links={[
                            { label: "Padaria Pão Nosso", url: "/padaria-pao-nosso" },
                            { label: "Padaria Delícia", url: "/padaria-delicia" },
                            { label: "Panificadora São José", url: "/panificadora-sao-jose" },
                            { label: "Padaria do Bairro", url: "/padaria-do-bairro" },
                            { label: "Pão Quente", url: "/pao-quente" }
                        ]}
                    />

                    {/* Collapse Deliveys */}
                    <Collapse
                        id="lojas-deliveys"
                        title="Deliveys"
                        links={[
                            { label: "iFood", url: "/ifood" },
                            { label: "Uber Eats", url: "/uber-eats" },
                            { label: "Rappi", url: "/rappi" },
                            { label: "James Delivery", url: "/james-delivery" },
                            { label: "Delivery Local", url: "/delivery-local" }
                        ]}
                    />

                </div>
            </div>
        </div>
    );
};

export default Sidebar;
