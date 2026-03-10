# 数学节嘉年华邀请函

这是一个可直接部署到 GitHub Pages 的纯静态邀请函站点。

## 文件

- `index.html`：页面结构
- `styles.css`：视觉样式与动画
- `script.js`：海报数据、加载动画、滚动显现、放大查看

## 现在的海报来源

当前海报是内嵌 `SVG data URL`，优点是：

- 不依赖外部图床
- 打开速度快
- GitHub Pages 直接可用

## 如果你想替换成真实海报图

在 `script.js` 里找到 `posters` 数组，把每项的 `image` 改成真实图片链接即可，例如：

```js
{
  title: '逻辑谜题站',
  subtitle: '一步一步解开线索，超适合组队冲关',
  image: 'https://你的图床/logic-poster.jpg'
}
```

如果要保留现在的自动 SVG 生成功能，也可以只改其中几项。

## 本地预览

```bash
cd math-festival-invite
python3 -m http.server 8080
```

然后打开 `http://127.0.0.1:8080`。
