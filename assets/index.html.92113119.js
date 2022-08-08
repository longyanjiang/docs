import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as a,e as r}from"./app.98838cec.js";const i={},n=r('<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Go\u8BED\u8A00\u662FGoogle\u5F00\u53D1\u7684\u4E00\u79CD\u9759\u6001\u5F3A\u7C7B\u578B\u3001\u7F16\u8BD1\u578B\u3001\u5E76\u53D1\u578B\uFF0C\u5E76\u5177\u6709\u5783\u573E\u56DE\u6536\u529F\u80FD\u7684\u7F16\u7A0B\u8BED\u8A00\u3002\u4E3A\u4E86\u65B9\u4FBF\u641C\u7D22\u548C\u8BC6\u522B\uFF0C\u6709\u65F6\u4F1A\u5C06\u5176\u79F0\u4E3AGolang\u3002</p><p>Go\u8BED\u8A00\u4E8E2009\u5E7411\u6708\u6B63\u5F0F\u5BA3\u5E03\u63A8\u51FA\uFF0C\u6210\u4E3A\u5F00\u653E\u6E90\u4EE3\u7801\u9879\u76EE\uFF0C\u5E76\u5728Linux\u53CAMac OS X\u5E73\u53F0\u4E0A\u8FDB\u884C\u4E86\u5B9E\u73B0\uFF0C\u540E\u6765\u8FFD\u52A0\u4E86Windows\u7CFB\u7EDF\u4E0B\u7684\u5B9E\u73B0\u3002</p><p>2012\u5E74\uFF0CGo\u8BED\u8A00\u7684\u521B\u9020\u8005\u4EEC\u53D1\u5E03\u4E86\u5B83\u76841.0\u7248\u672C\u3002Go\u8BED\u8A00\u7684\u521B\u9020\u8005\u4EEC\u5305\u62ECUnix\u64CD\u4F5C\u7CFB\u7EDF\u548CB\u8BED\u8A00\uFF08C\u8BED\u8A00\u7684\u524D\u8EAB\uFF09\u7684\u521B\u9020\u8005\u3001UTF-8\u7F16\u7801\u7684\u53D1\u660E\u8005Ken Thompson\uFF0CUnix\u9879\u76EE\u7684\u53C2\u4E0E\u8005\u3001UTF-8\u7F16\u7801\u7684\u8054\u5408\u521B\u59CB\u4EBA\u548CLimbo\u7F16\u7A0B\u8BED\u8A00\uFF08Go\u8BED\u8A00\u7684\u524D\u8EAB\uFF09\u7684\u521B\u9020\u8005Rob Pike\uFF0C\u4EE5\u53CA\u8457\u540D\u7684Javascript\u5F15\u64CEV8\u7684\u521B\u9020\u8005Robert Griesemer\u3002</p><h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2><p>Go\u8BED\u8A00\u662F\u4E00\u95E8\u5F3A\u7C7B\u578B\u7684\u901A\u7528\u7F16\u7A0B\u8BED\u8A00\u3002\u5B83\u7684\u57FA\u7840\u8BED\u6CD5\u4E0EC\u8BED\u8A00\u5F88\u7C7B\u4F3C\uFF0C\u4F46\u5BF9\u4E8E\u53D8\u91CF\u7684\u58F0\u660E\u6709\u6240\u4E0D\u540C\uFF0C\u4E5F\u5BF9\u5176\u4ED6\u7684\u4E00\u4E9B\u4F18\u79C0\u7F16\u7A0B\u8BED\u8A00\u6709\u6240\u501F\u9274\u3002\u53E6\u5916\uFF0CGo\u8BED\u8A00\u652F\u6301\u5783\u573E\u56DE\u6536\u3002</p><p>\u4E0EC++\u76F8\u6BD4\uFF0CGo\u8BED\u8A00\u5E76\u4E0D\u5305\u62EC\u5982\u5F02\u5E38\u5904\u7406\u3001\u7EE7\u627F\u3001\u6CDB\u578B\u3001\u65AD\u8A00\u3001\u865A\u51FD\u6570\u7B49\u529F\u80FD\uFF0C\u4F46\u589E\u52A0\u4E86 Slice \u578B\u3001\u5E76\u53D1\u3001\u7BA1\u9053\u3001\u5783\u573E\u56DE\u6536\u3001\u63A5\u53E3\uFF08Interface\uFF09\u7B49\u7279\u6027\u7684\u8BED\u8A00\u7EA7\u652F\u6301\u3002</p><p>Go\u8BED\u8A00\u5BF9\u5E76\u53D1\u7F16\u7A0B\u7684\u652F\u6301\u662F\u5929\u751F\u7684\u3001\u81EA\u7136\u7684\u548C\u9AD8\u6548\u7684\u3002Go\u8BED\u8A00\u4E3A\u6B64\u4E13\u95E8\u521B\u9020\u51FA\u4E86\u4E00\u4E2A\u5173\u952E\u5B57\u201Cgo\u201D\u3002\u4F7F\u7528\u8FD9\u4E2A\u5173\u952E\u5B57\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5F88\u5BB9\u6613\u7684\u4F7F\u4E00\u4E2A\u51FD\u6570\u88AB\u5E76\u53D1\u7684\u6267\u884C\u3002</p><h2 id="\u64B0\u5199\u98CE\u683C" tabindex="-1"><a class="header-anchor" href="#\u64B0\u5199\u98CE\u683C" aria-hidden="true">#</a> \u64B0\u5199\u98CE\u683C</h2><p>\u5728Go\u8BED\u8A00\u4E2D\u6709\u51E0\u9879\u89C4\u5B9A\uFF0C\u800C\u4E14\u8FD9\u4E9B\u662F\u5F3A\u5236\u7684\uFF0C\u5F53\u4E0D\u5339\u914D\u4EE5\u4E0B\u89C4\u5B9A\u65F6\u7F16\u8BD1\u5C06\u4F1A\u4EA7\u751F\u9519\u8BEF\u3002</p><p>1.\u6BCF\u884C\u7A0B\u5E8F\u7ED3\u675F\u540E\u4E0D\u9700\u8981\u64B0\u5199\u5206\u53F7; 2.\u5927\u62EC\u53F7{\u4E0D\u80FD\u591F\u6362\u884C\u653E\u7F6E\u3002 3.if \u5224\u65AD\u5F0F\u548C for \u5FAA\u73AF\u4E0D\u9700\u8981\u4EE5\u5C0F\u62EC\u53F7\u5305\u8986\u8D77\u6765\u3002</p>',11),t=[n];function c(d,h){return o(),a("div",null,t)}var _=e(i,[["render",c],["__file","index.html.vue"]]);export{_ as default};
