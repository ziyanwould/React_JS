# 模仿模拟简书的网站
#### css文件 一旦在一个文件被引入后 是在全局都生效的
#### 不建议在react直接引入CSS，建议使用第三方库styled-components进行样式管理

*  全新的 createGlobalStyle API，支持重新热重载和主题化，用于替换 injectGlobal；  
*  支持“as” prop，更加灵活；  
*  移除 Comp.extend，可使用自动 codemod 将整个代码库移动到统一的 styled(Comp) 表示;
*  与 React v16 完全兼容的 StrictMode，不得不放弃对 React v15 及更低版本的支持（可以通过 polyfill 在 React v15 中使用 styled-components v4）;  
*  对于任何样式组件，原生支持 ref，不再需要 innerRef；


