import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS";
import ECharts from "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts";
import CodeDemo from "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo";
import CodeTabs from "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs";
import FlowChart from "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart";
import Mermaid from "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid";
import Presentation from "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation";
import "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss";
import Tabs from "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs";
import "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/xiaojiu/Desktop/snine-project/docs/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.87/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tex.scss";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("CodeDemo", CodeDemo);
    app.component("CodeTabs", CodeTabs);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Tabs", Tabs);
    
  }
});