# 机柜 3D

从设备货架场景抽出的独立 Three.js 视图。六组四层货架、储藏柜、电脑模型和材质沿用原场景。可以旋转、缩放、展开层板、用人物视角漫游，也可以在画面里拖动设备并换位。

## iframe 集成

把 [rack-embed.html](dist/rack-embed.html) 放进网站的静态目录。页面内置 Three.js 和所有几何，下载到本地后也可直接打开。以下示例使用 `/widgets/rack-embed.html`。

```html
<iframe
  src="/widgets/rack-embed.html?autoplay=1"
  title="机柜 3D"
  loading="lazy"
  style="display:block;width:100%;height:clamp(360px,60vh,660px);border:0"
></iframe>
```

`autoplay=1` 进入页面后开启巡视，用户也可用「巡视」按钮切换。页面离开视口、切到后台或启用减少动态效果时会停止连续渲染。设备换位状态保存在当前实例中。

## JavaScript 集成

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

在本机打开 `http://127.0.0.1:4183/rack-embed.html`。货架尺寸、工位和示例数据在 `src/rack-layout.js`，几何在 `src/rack-geometry.js`，交互和渲染分别在 `src/rack-scene.js` 与 `src/rack-renderer.js`。Three.js r170 使用 MIT 许可。 [Three.js 源码](https://github.com/mrdoob/three.js/tree/r170) · [许可文本](THREE-LICENSE.txt)
