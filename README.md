# 模仿模拟简书的网站
#### css文件 一旦在一个文件被引入后 是在全局都生效的
#### 不建议在react直接引入CSS，建议使用第三方库styled-components进行样式管理

*  全新的 createGlobalStyle API，支持重新热重载和主题化，用于替换 injectGlobal；  
*  支持“as” prop，更加灵活；  
*  移除 Comp.extend，可使用自动 codemod 将整个代码库移动到统一的 styled(Comp) 表示;
*  与 React v16 完全兼容的 StrictMode，不得不放弃对 React v15 及更低版本的支持（可以通过 polyfill 在 React v15 中使用 styled-components v4）;  
*  对于任何样式组件，原生支持 ref，不再需要 innerRef；

# 什么是生命周期函数？

#### 生命周期函数（钩子函数）通俗的说就是在某一时刻会被自动调用执行的函数。  
#### props,state,render()函数： 

 1. ender()函数会在props,state改变时触发。

 2. 子组件的render()函数会在父组件render()执行的时候被执行（这会导致一些性能问题，我们可以在子组件的componentshouldupdate函数中进行判断，优化性能）  
    在render()，创建虚拟dom，进行diff算法，更新dom树。  
    注意：不要在render中修改state,会导致死循环。  
####  1.初始化  
##### 在这里可以初始化props,state

####  2.挂载
 ①：componentWillMount():    
      注意：改生命周期在未来17版本中将被弃用(在这里请求异步数据，render可能不会渲染到，因为componentWillMount执行后，render立马执行)  
      组件被挂载到页面之前调用，整个生命周期中只会调用一次（组件更新时不会再调用）。  
      注意：在这里可修改state  
 ②：componentDidMount()：  
     组件被挂载到页面之后调用，整个生命周期只调用一次（组件更新不会调用）。  
     建议：在这里可以异步请求数据。在这里设置状态会触发重新渲染。但是不推荐在这里使用setState函数，它会触发一次额外的渲染，而且是在浏览器刷新屏幕之前执行，用户看不到这个状态。在这里使用setState函数会导致性能问题。  

#### 3.更新
 ##### new: getDerivedStateFromProps(nextProps,prevState)   

 新的静态getDerivedStateFromProps生命周期在组件实例化以及接收新props(只要父组件重新渲染，那么这个props不论值是否一样  
 都是一个新的props)后调用。它可以返回一个对象来更新state，或者返回null来表示新的props不需要任何state更新。

 ##### new:getSnapshotBeforeUpdate()  

 新的getSnapshotBeforeUpdate生命周期在更新之前被调用（例如，在DOM被更新之前）。此生命周期的返回值将作为第三个参数传递  
 给componentDidUpdate。 （这个生命周期不是经常需要的，但可以用于在恢复期间手动保存滚动位置的情况。）

①： componentWillReceiveProps(nextprops):  
      注意：改生命周期在未来17版本中将被弃用   
      组件从父组件中接受了新的props(只要父组件重新渲染，那么这个props不论值是否一样都是一个新的props)，并且组件已经存在时调用。（组件初始化时候不调用）。  
      注意：可以根据属性的变化，通过调用this.setState()来更新你的组件状态，旧的属性还是可以通过this.props来获取,这里调用更新状态是安全的，并不会触发额外的render调用  

②： shouldComponentUpdate(nextprops,nextstate):  

      组件更新之前调用（组件接受新的props或者state）。函数会返回一个布尔值，true才会更新组件。  
      注意：最好判断一下新旧两个props/state是否相同，相同则返回false不要触发更新。这样就不用生成新的dom树和旧的进行diff算法对比，从而优化性能。（因为父组件render()调用会使得子组件render()也被执行，引起性能问题）  

③：componentWillUpdate(nextprops,nextstate):    

     注意：改生命周期在未来17版本中将被弃用  
     组件更新之前（componentshouldupdate返回true）时调用，组件初始化时不调用  
     注意：在这里可以更改state，nextstate.xxx = xxx,但是在这里不能调用setState函数，这会导致函数调用componentshouldupdate从而进入死循环。  

④：componentDidUpdate():  

      组件更新完成之后调用，组件初始化时候不调用。  
      注意：可以在这里获取dom  


#### 4.卸载

①：componentWillUnmount():  

     组件即将被卸载时执行
     注意：在这里清除一些不需要的监听和计时器




# immutable.js

  数据不可改变 用来初始化state 防止改到state值
  把数据变成immutable对象
