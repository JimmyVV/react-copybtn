# react-copybtn


## 安装
由于没有提交 npm，这里直接使用 https 的方式下载包:
```
$ npm intall https://github.com/JimmyVV/react-copybtn
```

## 特性
该组件结合最新的复制操作，来实现快速高效率的内容复制。组件实现内容做了向下兼容，确保组件能够在 90% 以上的浏览器和手机端正常运行。并且，它能够实现样式的自定义话，通过暴露的两个接口 `className` 和 `style` 来是实现样式的自定义化。

## 基本使用
使用方式也很简单，该组件提供了两个基本使用模式:

 - 硬编码复制内容
 - 传入 id 动态复制元素内容

### 硬编码复制内容
这种方式是在初始化组件一开始直接指定 `msg` 属性的内容:
```
<CopyBtn msg="需要被复制的信息" />
```
渲染出来的结果是:

![复制信息][1]

之后，只要点击就可以实现指定信息的复制。当然，你也可以传入变量，进行动态复制。
```
<CopyBtn msg={copyMsg} />
```
### 传入 id 动态复制元素内容
这里，通过传入 id 可以直接复制执行元素里面的内容。复制的内容主要有两种:

 - input 和 textarea 类型: 主要复制 DOM 的 value 值
 - 普通 DOM: 则是复制里面的 innerHTML。

简单做法就是：
```
<CopyBtn targetId={DOMId} />
```

### 注意事项

 - `targetId` 和 `msg` 不能同时传入，就算你同时传入的话，会根据元素的内容来动态获取的。

## API

|name|effect|demo|
|:---|:---|:---|
|msg[String]|定制化复制执行信息|`<CopyBtn msg="需要被复制的信息" />`|
|targetId[String]|设置需要复制元素的 id|`<CopyBtn targetId={DOMId} />`|
|innerHTML[String \| JSX]|定制复制 button 嵌套的内容，可以用来改变 btn 显示的信息|`<CopyBtn innerHTML={<span>Copy<span>} />`|
|className|定制的 class 名|`<CopyBtn className="CopyClasss" />`|
|style|指定传入内联节点样式|`<CopyBtn style={{color:'red'}} />`|
|callback|执行复制成功后的回调函数|`<CopyBtn callback={()=>{}} />`|

## 静态方法
在 `Copybtn` 上还额外挂载了两个静态方法，实际用来进行相关复制操作。一个是 `inputCopy` 一个是 `clipCopy`。

 - inputCopy: 使用 input 方式来复制指定内容

```
import Copybtn from 'react-copybtn'

// 可以放置在某个组件事件中
Copybtn.inputCopy("自定义复制内容");
```

 - clipCopy: clipboard 方式来复制指定内容

```
import Copybtn from 'react-copybtn'

Copybtn.clipCopy("自定义复制内容");
```

## License

**MIT**


  [1]: http://static.zybuluo.com/jimmythr/o60gmxcdujjy4m5bh6pg5qw7/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202016-11-27%2012.50.52.png