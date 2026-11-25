# 机柜 3D

原版设备货架布局和可嵌入的 Three.js 视图都在这个独立仓库。默认嵌入页使用完整原版，包含 3D 布局、控制平面、人物漫游、货架增删与对齐、平台增删改查、测试组、故障模拟和时间线回放。原版带有布局和人物位置的本地存档。

- [设备货架布局原版](equipment-layout/设备货架布局.html)
- [场景预览](equipment-layout/场景预览.png) · [控制平面预览](equipment-layout/控制平面预览.png) · [人物视角预览](equipment-layout/人物视角预览.png)

## 嵌入完整应用

把 [rack-embed.html](dist/rack-embed.html) 放进网站的静态目录。它是原版 HTML 的逐字节副本，内置 Three.js 和所有几何，也可直接用浏览器离线打开。以下示例使用 `/widgets/rack-embed.html`。

```html
<iframe
  src="/widgets/rack-embed.html"
  title="设备货架布局"
  loading="lazy"
  style="display:block;width:100%;height:clamp(520px,78vh,900px);border:0"
></iframe>
```

## 嵌入 3D 视图

[rack-viewer.html](dist/rack-viewer.html) 是独立 3D 画布，可旋转、缩放、展开层板、漫游和拖动换位。需要自动巡视时，用 iframe 加载 `rack-viewer.html?autoplay=1`。页面离开视口、切到后台或启用减少动态效果时会停止连续渲染。换位状态保存在当前实例中。

### JavaScript 挂载 3D 视图

把 [rack-scene.mjs](dist/rack-scene.mjs) 和 [THREE-LICENSE.txt](dist/THREE-LICENSE.txt) 放进网站静态目录。组件在 Shadow DOM 中绘制，容器高度由网站指定。容器移除时调用 `destroy()` 释放 WebGL、观察器和事件监听。

```html
<div id="rack-preview" style="height:clamp(360px,60vh,660px)"></div>
<script type="module">
  import { mountRackScene } from '/widgets/rack-scene.mjs'

  const host = document.getElementById('rack-preview')
  const rack = mountRackScene(host, { autoplay: true })
  host.addEventListener('rackmove', event => {
    console.log(event.detail.device, event.detail.from, event.detail.to)
  })
  // Call rack.destroy() when the host component unmounts.
</script>
```

`rackmove` 也包含 `swapped`，空工位对应 `null`。句柄提供 `resetView()` 与 `setAutoplay(boolean)`。

## 构建与维护

```sh
npm ci
npm run build
npm run preview
```

在本机打开 `http://127.0.0.1:4183/rack-embed.html` 查看完整版。构建时从 `equipment-layout/设备货架布局.html` 复制完整版。独立视图的尺寸、工位和示例数据在 `src/rack-layout.js`，几何在 `src/rack-geometry.js`，交互和渲染分别在 `src/rack-scene.js` 与 `src/rack-renderer.js`。Three.js r170 使用 MIT 许可。 [Three.js 源码](https://github.com/mrdoob/three.js/tree/r170) · [许可文本](THREE-LICENSE.txt)
