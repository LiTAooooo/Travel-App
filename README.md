# Travel-App
## 项目简介
本项目通过简单模仿去哪儿网App的部分页面及功能，进行`Vue.js`的学习。

## 项目相关功能点和技术栈
- 使用`vue-cli`进行项目构建和打包
- 使用`vue-router`进行页面路由
- 使用`reset.css`进行样式统一
- 使用`iconfont`进行页面图标管理
- 使用`stylus`进行`CSS`预处理
- 使用`rem`进行多终端适配
- 使用`vue-awesome-swiper`进行内容轮播
- 使用`axios`进行ajax数据请求
- 使用Vue自带的`static`目录进行后端数据模拟
- ajax请求路径转发
- 父子组件间传值（`props`、发布订阅模式）
- 使用`better-scroll`替代浏览器默认滚动条
- 使用函数节流优化城市选择页面alphabet组件的`scroll`事件性能
- 使用`vuex`进行首页和城市选择页面间的数据共享
- 使用`localStorage`进行数据缓存
- 使用`keep-alive`优化页面二次加载的性能
- 使用动态路由为详情页面传递参数
- Vue前后端联调方法
- 使用异步组件实现组件的按需加载

## 项目中遇到的问题及解决办法
1. 通过`v-for`循环数组向`vue-awesome-swiper`传递数据时，若数组初始值为空，那么在请求ajax数据填充数组后，`vue-awesome-swiper`会从最后一个数据开始轮播

    **解决办法**：在轮播组件上通过`v-if`设置只有当请求ajax数据完毕后，才进行轮播组件的渲染

2. 当使用`better-scroll`时，在android设备上会导致对应元素的点击事件无法触发

    **解决办法**：在初始化Bscroll实例时，添加一个`{ click: true }`参数：
    ```
    new Bscroll('.list', {click: true});
    ```
3. 在android设备上，发现`input`输入框中的文字和光标的相对位置不正确（文字相对于光标向上偏移）

    **解决办法**：令`line-height: 1`，然后使用`padding`撑开输入框的内部空间
    
4. 1px边框(`border`)在不同设备被显示成多像素

    **解决办法**：引入配置好的`border.css`
    
5. `click`事件在某些机型上会延迟300ms执行

    **解决办法**：在项目中引入`fastclick`
    
6. 页面上的图片在加载时会引起页面布局的抖动

    **解决办法**：在图片元素的外部包裹一个`div`标签并根据所加载图片的尺寸进行占位
    
7. 在声明了`scoped`的组件样式中，无法使用其它组件中定义的`class`

    **解决办法**：使用`>>>`进行样式穿透
    
8. 使用`vue-router`进行页面路由切换时，之前页面滚动条的位置会影响新页面内容的呈现

    **解决办法**：在`Router`对象中添加`scrollBehavior`方法可以将路由后新页面的滚动条定位到页面内容的顶部
