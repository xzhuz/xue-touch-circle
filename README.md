# Xue-Touch

一款的辅助触控插件。

## Preview

[DEMO](https://baozi.fun)


## Usage

简单写一个教程

### 第一步: 添加元素

在`<body></body>`添加：

```html
<div class="moon-menu">
    <div class="moon-menu-items" id="moonMenu">
        <span class="moon-menu-item pl-6 cst-icon icon-up"> </span>
        <span class="moon-menu-item pl-6 cst-icon icon-down"> </span>
        <span class="moon-menu-item pl-6 cst-icon icon-toc"></span>
    </div>

    <div class="moon-menu-button">
        <svg class="moon-menu-bg">
            <circle class="moon-menu-cricle" cx="50%" cy="50%" r="44%"></circle>
            <circle class="moon-menu-border" cx="50%" cy="50%" r="48%"></circle>
            <g class="moon-dot">
                <circle r=".2rem" cx="0" cy="-.8rem"></circle>
                <circle r=".2rem"></circle>
                <circle r=".2rem" cx="0" cy=".8rem"></circle>
            </g>
        </svg>
        <div class="moon-menu-content">
            <div class="moon-menu-icon"></div>
            <div class="moon-menu-text"></div>
        </div>
    </div>
</div>
```

### 第二步：引入js

```html
<script src="http://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/hshanx/halo-xue-touch@latest/moon.js"></script>
```

### 第三步：引入css

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/hshanx/halo-xue-touch@latest/index.min.css">
```

### 其他: 宽屏的情况下隐藏目录按钮
```css
@media only screen and (min-width: 1360px) {
    .icon-toc {
        display: none !important;
    }
}
```


## 许可证

Xue-Touch 使用 GPL-v3.0 协议开源，请尽量遵守开源协议。
