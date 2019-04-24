

 ## RN属性 Props
  大多数组件在创建时就可以使用各种参数来进行定制，用于定制的这些参数就叫做props
  以基础的Image组件为例，创建一个基础的图片时，可以传入一个名为source的prop来指定要显示的图片的地址，以及使用名为style的prop来控制尺寸
 ## RN状态 state
  - 使用两种数据来控制一个组件 props,state。props是在父组件中指定，而且一旦指定，在被指定的组件的生命周期中则不再改变，对于需要改变的数据，需要使用state
  - 一般来说，需要在constructor中初始化state，然后在需要修改时调用setState方法

 ## RN样式写法
 仍然是使用Javascript来写样式，所有的核心组件都接受名为style的属性，这些样式名基本是遵循了Web上的CSS的命名，只是按照JS的语法要求使用了驼峰法命名
 style属性可以是一个简单的JS对象 这是最简单的写法 还可以传入一个数组，在数组中位置居后的样式对象比居前的优先级别高
 实际开发中，建议使用`StyleSheet.create`来集中定义组件的样式
 ```
 const style = StyleSheet.create({
   bigBlue:{
     color:'blue',
     fontWeight:'bold'
   }
 })
 ```
 使用的时候`<Text style={styles.bigBlue}></Text>`
 常见的做法是按顺序声明和使用style属性，借鉴CSS中的层叠做法


  ## RN布局 FlexBox
  常用属性：  