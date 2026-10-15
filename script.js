/*
  GAME VAULT — catálogo demonstrativo
  1) Troque WHATSAPP_NUMBER pelo número da loja com código do país e DDD,
     somente números. Exemplo de formato: 5511999999999.
  2) Edite os produtos abaixo. Não use dados fictícios quando publicar a loja.
*/
const WHATSAPP_NUMBER = "559984378163"; // SUBSTITUA pelo seu número real

const products = [
  {
    id: 1, name: "Conta Blox Fruits #01", game: "Blox Fruits", price: 20.99,
    description: "LV2800 + V4 CYBORG (FULL) + GOD + CDK + SG.",
    tags: ["Conta de Blox Fruits","12 em Stock"], symbol: "B", badge: "OFERTA"
  },
  {
    id: 2, name: "Conta Free Fire #01", game: "Free Fire", price: 39.90,
    description: "MANDELA, COELHÃO, KALAHARI, TRANSFORMAÇÃO , 6 ANOS, 200 PEITORAIS.",
    tags: ["Conta de jogo", "Detalhes a confirmar"], symbol: "FF", badge: "OFERTA"
  },
  {
    id: 3, name: "SEM STOCK", game: "Roblox", price: 00,00,
    description: ".",
    tags: ["Conta de jogo", "Detalhes a confirmar"], symbol: "ESGOTADO", badge: ""
  },
  {
    id: 4, name: "SEM STOCK", game: "Blox Fruits", price: 59.90,
    description: "Exemplo de anúncio. Substitua pelo nível, itens e características reais.",
    tags: ["Conta de jogo", "Detalhes a confirmar"], symbol: "B", badge: ""
  },
  {
    id: 5, name: "Conta Free Fire #02", game: "Free Fire", price: 79.90,
    description: "Exemplo de anúncio. Confirme os itens e a disponibilidade antes de publicar.",
    tags: ["Conta de jogo", "Detalhes a confirmar"], symbol: "FF", badge: ""
  },
  {
    id: 6, name: "SEM STOCK", game: "Outros jogos", price: 49.90,
    description: "Exemplo de anúncio. Troque pelo jogo e pela descrição da oferta real.",
    tags: ["Conta de jogo", "Detalhes a confirmar"], symbol: "GV", badge: "NOVO"
  }
];

const productGrid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const filterList = document.getElementById("filterList");
let activeFilter = "Todos";

function formatPrice(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const visual = document.createElement("div");
  visual.className = "product-visual";
  const symbol = document.createElement("div");
  symbol.className = "product-symbol";
  symbol.textContent = product.symbol || "GV";
  visual.appendChild(symbol);

  if (product.badge) {
    const badge = document.createElement("span");
    badge.className = "product-badge";
    badge.textContent = product.badge;
    visual.appendChild(badge);
  }
  const game = document.createElement("span");
  game.className = "product-game";
  game.textContent = product.game;
  visual.appendChild(game);

  const content = document.createElement("div");
  content.className = "product-content";
  const title = document.createElement("h3");
  title.textContent = product.name;
  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  const tags = document.createElement("div");
  tags.className = "product-tags";
  (product.tags || []).forEach(tagText => {
    const tag = document.createElement("span");
    tag.textContent = tagText;
    tags.appendChild(tag);
  });

  const bottom = document.createElement("div");
  bottom.className = "product-bottom";
  const priceWrap = document.createElement("div");
  const priceLabel = document.createElement("span");
  priceLabel.className = "price-label";
  priceLabel.textContent = "PREÇO INFORMADO";
  const price = document.createElement("span");
  price.className = "product-price";
  price.textContent = formatPrice(Number(product.price) || 0);
  priceWrap.append(priceLabel, price);

  const buy = document.createElement("button");
  buy.className = "buy-button";
  buy.type = "button";
  buy.textContent = "Consultar no WhatsApp ↗";
  buy.addEventListener("click", () => contactWhatsApp(product));

  bottom.append(priceWrap, buy);
  content.append(title, description, tags, bottom);
  card.append(visual, content);
  return card;
}

function contactWhatsApp(product) {
  const number = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!number || number === "5500000000000" || number.length < 12) {
    alert("O WhatsApp da loja ainda não foi configurado. Abra o arquivo script.js e substitua WHATSAPP_NUMBER pelo número da loja com código do país e DDD.");
    return;
  }
  const message = `Olá! Tenho interesse no anúncio "${product.name}" (${product.game}), anunciado por ${formatPrice(Number(product.price) || 0)}. Ele ainda está disponível? Pode me passar os detalhes e as condições?`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function renderProducts() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const filtered = products.filter(product => {
    const matchesFilter = activeFilter === "Todos" || product.game === activeFilter;
    const searchable = `${product.name} ${product.game} ${product.description} ${(product.tags || []).join(" ")}`.toLocaleLowerCase("pt-BR");
    return matchesFilter && searchable.includes(term);
  });

  productGrid.replaceChildren(...filtered.map(createProductCard));
  resultCount.textContent = String(filtered.length);
  emptyState.hidden = filtered.length !== 0;
  productGrid.hidden = filtered.length === 0;
}

filterList.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  filterList.querySelectorAll(".filter-chip").forEach(chip => {
    const selected = chip === button;
    chip.classList.toggle("active", selected);
    chip.setAttribute("aria-pressed", String(selected));
  });
  renderProducts();
});
searchInput.addEventListener("input", renderProducts);

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}));
document.getElementById("year").textContent = new Date().getFullYear();
renderProducts();
