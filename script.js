const posters = [
  {
    title: '3.14 π径探秘',
    subtitle: '北京中学明德 2026 数学节总海报',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c7250232b.webp'
  },
  {
    title: '趣味数学题',
    subtitle: '黑板风限时答题，拼脑力也拼速度。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c727777c4.webp'
  },
  {
    title: '七巧板创意游戏',
    subtitle: '照着轮廓拼图，把空间想象力拉满。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c727b4e98.webp'
  },
  {
    title: '数学节九连环挑战',
    subtitle: '解锁九连环，越往后越上头。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c727cec8d.webp'
  },
  {
    title: '数独',
    subtitle: '6×6 盘面推理小游戏，安静但很烧脑。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c730c3ff7.webp'
  },
  {
    title: '数字华容道',
    subtitle: '把 1 到 15 排回秩序，经典滑块挑战。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c7314e2ad.webp'
  },
  {
    title: '尺规作图',
    subtitle: '抽题后用直尺和圆规完成图形，很有仪式感。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c73469371.webp'
  },
  {
    title: '智力锁扣挑战',
    subtitle: '30 秒、1 分钟、3 分钟三档难度闯关。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c7348c1b9.webp'
  },
  {
    title: '357 游戏',
    subtitle: '双人对战型博弈小游戏，规则简单但很上头。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c7348a79d.webp'
  },
  {
    title: '口算挑战',
    subtitle: '20 秒完成 5 道题，考的是反应和准确率。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c73da5c7f.webp'
  },
  {
    title: '二十四点',
    subtitle: '四张牌凑出 24，算式巧，脑子更要巧。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c73f2a393.webp'
  },
  {
    title: '一笔画挑战',
    subtitle: '连点成线，一笔画完，简单但容易翻车。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c75b92813.webp'
  },
  {
    title: '2048 数字游戏',
    subtitle: '现场即来即玩，30 秒内合出 128。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c75cd3561.webp'
  },
  {
    title: '数学谜语',
    subtitle: '把数字、图形和谜语揉在一起，边看边猜。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c76ae0a06.webp'
  },
  {
    title: '九章小算师·闯关夺星',
    subtitle: '古风闯关小挑战，三关限时答题。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c76fb2aba.webp'
  },
  {
    title: '汉诺塔',
    subtitle: '经典递归益智项目，规则简单，上手不简单。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c7701c6a5.webp'
  },
  {
    title: '数学节集换卡',
    subtitle: '边玩边集章，盖满再去兑换纪念品。',
    image: 'https://picui.ogmua.cn/s1/2026/03/17/69b8c770975fd.webp'
  }
];

const openPreview = (image, title) => {
  lightboxImage.src = image;
  lightboxCaption.textContent = title;
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
};

const heroPoster = document.getElementById('heroPoster');
heroPoster.src = posters[0].image;
heroPoster.alt = posters[0].title;

document.getElementById('openHeroPoster').addEventListener('click', () => openPreview(posters[0].image, posters[0].title));
heroPoster.addEventListener('click', () => openPreview(posters[0].image, posters[0].title));

const posterGrid = document.getElementById('posterGrid');
posterGrid.innerHTML = posters.slice(1).map((poster) => `
  <article class="poster-card reveal float-card" data-image="${poster.image}" data-title="${poster.title}">
    <img src="${poster.image}" alt="${poster.title}" loading="lazy" referrerpolicy="no-referrer" />
    <div class="poster-overlay">
      <h3>${poster.title}</h3>
      <p>${poster.subtitle}</p>
    </div>
  </article>
`).join('');

const loadingScreen = document.getElementById('loadingScreen');
window.addEventListener('load', () => setTimeout(() => loadingScreen.classList.add('hidden'), 650));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((node) => {
  const rect = node.getBoundingClientRect();
  if (rect.top < window.innerHeight * 0.92) {
    node.classList.add('visible');
  }
  observer.observe(node);
});

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

posterGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.poster-card');
  if (!card) return;
  openPreview(card.dataset.image, card.dataset.title);
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
