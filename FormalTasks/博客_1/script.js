var data = [
  {
    title: "我的第一篇博客",
    date: "2023-06-1",
    category: "随笔",
    summary:
      "这是我的第一篇博客，我想在这里记录一些生活和学习的感想，希望能够坚持写下去。",
    content:
      "这是我的第一篇博客，我想在这里记录一些生活和学习的感想，希望能够坚持写下去。我是一个喜欢编程的人，我觉得编程是一种创造性的工作，可以让我实现自己的想法。我也喜欢阅读和旅行，我认为这样可以开阔我的视野和知识。我希望通过这个博客，能够和更多有共同兴趣的人交流和分享，也能够记录自己的成长和进步。",
    showContent: false,
  },
  {
    title: "Vue.js入门教程",
    date: "2023-06-2",
    category: "技术",
    summary:
      "Vue.js是一个轻量级的前端框架，它可以让我们快速地开发出动态的web页面。本文将介绍Vue.js的基本概念和用法，帮助初学者入门。",
    content:
      "Vue.js是一个轻量级的前端框架，它可以让我们快速地开发出动态的web页面。本文将介绍Vue.js的基本概念和用法，帮助初学者入门。Vue.js的核心思想是数据驱动视图，也就是说，我们只需要关注数据的变化，而不需要操作DOM元素。Vue.js提供了一个简单的模板语法，让我们可以用HTML来声明式地渲染数据。Vue.js还提供了一些指令和组件，让我们可以实现一些常见的功能，如条件渲染，列表渲染，事件处理等。Vue.js还支持单文件组件，让我们可以将HTML，CSS和JS写在一个文件中，方便组织和复用代码。",
    showContent: false,
  },
  {
    title: "我的旅行计划",
    date: "2023-06-3",
    category: "旅行",
    summary:
      "我一直有一个梦想，就是能够环游世界，看看不同的风景和文化。今年我打算实现这个梦想，我已经制定了一个旅行计划，分享给大家。",
    content:
      "我一直有一个梦想，就是能够环游世界，看看不同的风景和文化。今年我打算实现这个梦想，我已经制定了一个旅行计划，分享给大家。我的旅行计划分为三个阶段：第一阶段是亚洲之行，我打算去日本，韩国，泰国，印度等国家；第二阶段是欧洲之行，我打算去法国，德国，意大利，英国等国家；第三阶段是美洲之行，我打算去美国，加拿大，巴西等国家。我的旅行计划大约需要一年的时间，我会在每个国家停留一周左右，尽可能地体验当地的风土人情。我会在我的博客上记录我的旅行经历和感受，希望能够给大家带来一些启发和乐趣。",
    showContent: false,
  },
];

var app = new Vue({
el: "#app",
data: {
  keyword: "",
  categories: ["全部", "随笔", "技术", "旅行"],
  selectedCategory: 0,
  posts: data,
},
methods: {
  search: function () {
    var keyword = this.keyword.trim().toLowerCase();
    if (keyword) {
      this.posts = data.filter(function (post) {
        return (
          post.title.toLowerCase().includes(keyword) ||
          post.summary.toLowerCase().includes(keyword) ||
          post.content.toLowerCase().includes(keyword)
        );
      });
    } else {
      this.posts = data;
    }
  },
  selectCategory: function (index) {
    this.selectedCategory = index;
    var category = this.categories[index];
    if (category === "全部") {
      this.posts = data;
    } else {
      this.posts = data.filter(function (post) {
        return post.category === category;
      });
    }
  },
  readMore: function (index) {
    var post = this.posts[index];
    post.showContent = !post.showContent;
    
  },
},
});