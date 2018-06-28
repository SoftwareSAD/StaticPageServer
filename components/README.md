# COMPONENTS

**This directory is not required, you can delete it if you don't want to use it.**

The components directory contains your Vue.js Components.

_Nuxt.js doesn't supercharge these components._


#### Adcolumn 组件

需要从父组件获取一个adcolumn_list数组，数组内每个元素都是一个表示广告的object：
<pre>
{
  img_alt: String;
  img_src: String;
  href: String;       // 暂时用了猫眼的已有网页
}
</pre>

#### human组件

需要从父组件获取一个humanItem:
<pre>
{
    img_src: String;
    name: String;       // 暂定只要中文名
}
</pre>
