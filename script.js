const svgToDataUrl = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const posterSvg = ({ title, subtitle, accentA, accentB, motif, badge }) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${accentA}" />
      <stop offset="100%" stop-color="${accentB}" />
    </linearGradient>
    <radialGradient id="glow" cx="0.3" cy="0.2" r="0.9">
      <stop offset="0%" stop-color="rgba(255,255,255,0.9)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0)" />
    </radialGradient>
  </defs>
  <rect width="800" height="1000" rx="42" fill="url(#bg)" />
  <circle cx="180" cy="140" r="180" fill="rgba(255,255,255,0.12)" />
  <circle cx="650" cy="170" r="120" fill="rgba(255,255,255,0.1)" />
  <circle cx="610" cy="820" r="220" fill="rgba(255,255,255,0.08)" />
  <text x="64" y="110" fill="white" font-size="34" font-family="Arial, PingFang SC, Noto Sans SC" opacity="0.9">数学节嘉年华</text>
  <text x="64" y="220" fill="white" font-size="78" font-weight="800" font-family="Arial, PingFang SC, Noto Sans SC">${title}</text>
  <text x="64" y="292" fill="white" font-size="34" font-family="Arial, PingFang SC, Noto Sans SC" opacity="0.92">${subtitle}</text>
  <g transform="translate(64 390)">
    ${motif}
  </g>
  <rect x="64" y="865" width="240" height="68" rx="34" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.28)" />
  <text x="94" y="910" fill="white" font-size="30" font-family="Arial, PingFang SC, Noto Sans SC">${badge}</text>
</svg>`;

const motifs = {
  hero: `
    <circle cx="180" cy="160" r="112" fill="rgba(255,255,255,0.16)" />
    <circle cx="180" cy="160" r="68" fill="none" stroke="white" stroke-width="12" />
    <path d="M180 48 L196 116 L264 132 L196 148 L180 216 L164 148 L96 132 L164 116 Z" fill="white" opacity="0.95" />
    <text x="330" y="120" fill="white" font-size="36" font-family="Arial, PingFang SC, Noto Sans SC">谜题 / 几何 / 博弈 / 手作</text>
    <text x="330" y="185" fill="white" font-size="92" font-weight="900" font-family="Arial, PingFang SC, Noto Sans SC">π × ∞</text>
    <text x="330" y="250" fill="white" font-size="30" font-family="Arial, PingFang SC, Noto Sans SC" opacity="0.92">把数学变成一场很好逛的嘉年华</text>
  `,
  puzzle: `
    <rect x="10" y="40" width="220" height="220" rx="34" fill="rgba(255,255,255,0.18)" />
    <path d="M58 152 h52 a24 24 0 1 0 0 -48 h52 v52 a24 24 0 1 1 48 0 v52 h-52 a24 24 0 1 0 0 48 H58z" fill="white" />
    <text x="300" y="124" fill="white" font-size="70" font-weight="900" font-family="Arial, PingFang SC, Noto Sans SC">逻辑谜题站</text>
    <text x="300" y="194" fill="white" font-size="32" font-family="Arial, PingFang SC, Noto Sans SC" opacity="0.92">和朋友组队解谜，限时通关超有成就感</text>
  `,
  geometry: `
    <polygon points="110,40 220,240 0,240" fill="rgba(255,255,255,0.22)" stroke="white" stroke-width="10" />
    <polygon points="110,84 178,212 42,212" fill="white" opacity="0.92" />
    <circle cx="320" cy="84" r="34" fill="rgba(255,255,255,0.18)" stroke="white" stroke-width="8" />
    <text x="20" y="334" fill="white" font-size="72" font-weight="900" font-family="Arial, PingFang SC, Noto Sans SC">几何拼搭馆</text>
    <text x="20" y="400" fill="white" font-size="32" font-family="Arial, PingFang SC, Noto Sans SC" opacity="0.92">把图形真的搭出来，看见空间直觉的魅力</text>
  `,
  game: `
    <circle cx="92" cy="92" r="64" fill="rgba(255,255,255,0.18)" />
    <circle cx="212" cy="92" r="64" fill="rgba(255,255,255,0.18)" />
    <circle cx="152" cy="198" r="64" fill="rgba(255,255,255,0.18)" />
    <text x="54" y="114" fill="white" font-size="56" font-weight="900">A</text>
    <text x="174" y="114" fill="white" font-size="56" font-weight="900">B</text>
    <text x="114" y="220" fill="white" font-size="56" font-weight="900">C</text>
    <text x="20" y="344" fill="white" font-size="72" font-weight="900" font-family="Arial, PingFang SC, Noto Sans SC">博弈挑战场</text>
    <text x="20" y="410" fill="white" font-size="32" font-family="Arial, PingFang SC, Noto Sans SC" opacity="0.92">简单规则，超多策略，越玩越上头</text>
  `,
  craft: `
    <path d="M30 250 C120 120 220 120 310 250" fill="none" stroke="white" stroke-width="14" />
    <circle cx="76" cy="246" r="18" fill="white" />
    <circle cx="264" cy="246" r="18" fill="white" />
    <text x="20" y="138" fill="white" font-size="140" font-weight="900">∞</text>
    <text x="20" y="380" fill="white" font-size="72" font-weight="900" font-family="Arial, PingFang SC, Noto Sans SC">数学手作铺</text>
    <text x="20" y="446" fill="white" font-size="32" font-family="Arial, PingFang SC, Noto Sans SC" opacity="0.92">把公式做成书签、徽章和小摆件，超适合拍照</text>
  `,
  stage: `
    <rect x="20" y="180" width="300" height="120" rx="28" fill="rgba(255,255,255,0.18)" />
    <rect x="72" y="70" width="26" height="110" rx="13" fill="white" />
    <circle cx="85" cy="56" r="28" fill="white" />
    <rect x="242" y="70" width="26" height="110" rx="13" fill="white" />
    <circle cx="255" cy="56" r="28" fill="white" />
    <text x="20" y="410" fill="white" font-size="72" font-weight="900" font-family="Arial, PingFang SC, Noto Sans SC">舞台互动秀</text>
    <text x="20" y="476" fill="white" font-size="32" font-family="Arial, PingFang SC, Noto Sans SC" opacity="0.92">现场抽题、快速挑战、全场一起欢呼的高光区</text>
  `,
};

const posters = [
  {
    title: '数学节嘉年华',
    subtitle: '主海报 · 一起把数学逛成节日',
    accentA: '#0ea5e9', accentB: '#7c3aed', motif: motifs.hero, badge: '主视觉海报'
  },
  {
    title: '逻辑谜题站',
    subtitle: '一步一步解开线索，超适合组队冲关',
    accentA: '#2563eb', accentB: '#0f766e', motif: motifs.puzzle, badge: '摊位 01'
  },
  {
    title: '几何拼搭馆',
    subtitle: '用手去摸到图形和空间的乐趣',
    accentA: '#9333ea', accentB: '#ec4899', motif: motifs.geometry, badge: '摊位 02'
  },
  {
    title: '博弈挑战场',
    subtitle: '简单规则下面，藏着让人上头的策略感',
    accentA: '#0891b2', accentB: '#14b8a6', motif: motifs.game, badge: '摊位 03'
  },
  {
    title: '数学手作铺',
    subtitle: '把抽象概念做成能带走的纪念品',
    accentA: '#ea580c', accentB: '#db2777', motif: motifs.craft, badge: '摊位 04'
  },
  {
    title: '舞台互动秀',
    subtitle: '全场一起参与，氛围最热闹的一站',
    accentA: '#7c3aed', accentB: '#2563eb', motif: motifs.stage, badge: '摊位 05'
  },
].map((item) => ({ ...item, image: svgToDataUrl(posterSvg(item)) }));

const heroPoster = document.getElementById('heroPoster');
heroPoster.src = posters[0].image;

const posterGrid = document.getElementById('posterGrid');
posterGrid.innerHTML = posters.slice(1).map((poster) => `
  <article class="poster-card reveal float-card" data-image="${poster.image}" data-title="${poster.title}">
    <img src="${poster.image}" alt="${poster.title}" />
    <div class="poster-overlay">
      <h3>${poster.title}</h3>
      <p>${poster.subtitle}</p>
    </div>
  </article>
`).join('');

const loadingScreen = document.getElementById('loadingScreen');
window.addEventListener('load', () => {
  setTimeout(() => loadingScreen.classList.add('hidden'), 850);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

posterGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.poster-card');
  if (!card) return;
  lightboxImage.src = card.dataset.image;
  lightboxCaption.textContent = card.dataset.title;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
});

const closeLightbox = () => {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
};
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeLightbox();
});
