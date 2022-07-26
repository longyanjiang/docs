## 什么是 CSS?
在 HTML 概述 模块我们学习了 HTML 是什么，以及如何使用它来组成页面。 浏览器能够解析这些页面。标题部分看起来会比正常文本更大，段落则会另起一行，并且相互之间会有一定间隔。链接通过下划线和不同的颜色与其他文本区分开来。这些都是浏览器的默认样式——当开发者没有指定样式时，浏览器通过这些最简单的样式使页面具有基本可读性。

如果所有网站都像上图那样，互联网就会非常枯燥。但是使用 CSS 就可以完全控制浏览器如何显示 HTML 元素，从而充分展示你喜欢的设计样式。

## CSS 用来干什么？
- 前文提到过，CSS 是用来指定文档如何展示给用户的一门语言——如网页的样式、布局、等等。

一份**文档**是由标记语言组织起来的文本文件 —— [HTML](https://developer.mozilla.org/zh-CN/docs/Glossary/HTML) 是最常见的标记语言， 但你可能也听说过其他可标记语言，如 [SVG](https://developer.mozilla.org/zh-CN/docs/Glossary/SVG) 或 [XML](https://developer.mozilla.org/zh-CN/docs/Glossary/XML)。

**展示**一份文档给用户实际上是将文档变成用户可用的文件。[Browsers](https://developer.mozilla.org/zh-CN/docs/Glossary/Browser)：如 [Firefox (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Mozilla_Firefox "Currently only available in English (US)")，[Chrome](https://developer.mozilla.org/zh-CN/docs/Glossary/Google_Chrome), 或 [Edge (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Microsoft_Edge "Currently only available in English (US)")，都可以将文档在电脑屏幕、投影仪或打印机等设备上进行可视化。

**注意**: 浏览器有时候也被称为 [user agent](https://developer.mozilla.org/zh-CN/docs/Glossary/User_agent)，大致可以当这个程序是一个存在于计算机系统中的人。当我们讨论 CSS 时，浏览器是 User agent 的主要形式，然而它并不是唯一的一个。还有其他可用的 user agents 

— 像是那些可以把 HTML 和 CSS 文档转换为可以打印的 PDF 文档的软件。CSS 可以用于给文档添加样式 

—— 比如改变标题和链接的[颜色](https://developer.mozilla.org/zh-CN/docs/Web/CSS/color_value)及[大小](https://developer.mozilla.org/zh-CN/docs/Web/CSS/font-size)。它也可用于创建布局 

—— 比如将一个单列文本变成包含主要内容区域和存放相关信息的侧边栏区域的[布局](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Layout_cookbook/Column_layouts)。它甚至还可以用来做一些特效，比如[动画](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations)。查看本段内容中所给出的特定案例。