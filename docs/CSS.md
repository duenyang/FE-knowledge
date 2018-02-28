# css

## display有哪几种常用属性:
`none`、`block`、`flex`、`inline`、`inline-block`、`table`、`table-cell`、`inherit`

[查看更多属性](http://www.w3school.com.cn/jsref/prop_style_display.asp)

## position有哪几种常用属性
`absolute`、`relative`、`fixed`、`static`、`inherit`

[查看更多属性](http://www.w3school.com.cn/cssref/pr_class_position.asp)

## 实现垂直居中的方法

### 1. display: table-cell方法
```html
	<div id="wrapper">  
    	<div id="cell">
        	<div class="content">Content goes here</div>
    	</div>
	</div>
```
```css
	#wrapper {
	    display: table;
	}

	#cell {
	    display: table-cell;
	    vertical-align: middle;
	}

	.content{
		display: inline-block;
	}
```
*Internet Explorer(甚至 IE8 beta)中无效*


### 2. 高度已知时，position: absolute; top: 50%; margin-top: -contentheight;实现

```html
	<div class="content"> Content goes here</div>
```
```css
	#content {
		position: absolute;
		top: 50%;
		height: 240px;
		margin-top: -120px; /* negative half of the height */
	}
``` 
*div 在 body 内，当用户缩小浏览器窗口，滚动条不出现*

### 3. 高度已知时，元素外插入一个父级 div。设置此 div height:50%; margin-bottom:-contentheight; 元素清除浮动，显示在中间

```html
	<div id="floater">  
		<div id="content">Content here</div>
	</div>
```
```css
	#floater {
		float: left;
		height: 50%;
		margin-bottom: -120px;
	}

	#content {
		clear: both;
		height: 240px;
		position: relative;
	}
```

### 4. 宽高已知时，这个方法使用了一个 position:absolute，这个 div 被设置为 top:0; bottom:0;。但是因为它有固定高度，其实并不能和上下都间距为 0，因此 margin:auto; 会使它居中。使用 margin:auto;使块级元素垂直居中是很简单的

```html
	<div id="content"> Content here</div>
```
```css
	#content {
	    position: absolute;
	    top: 0;
	    bottom: 0;
	    left: 0;
	    right: 0;
	    margin: auto;
	    height: 240px;
	    width: 70%;
	}
```
*缺点第一个和第二个合集*

### 5. css3 top: 50%;transform: translateY(-50%);(IE8及以前不支持)

### 6. 文本的垂直居中 line-height

## 实现水平垂直居中的方法

(方法1和2脱离了文档流)

### 1. 宽高一定时，margin: auto法，同上文第四种方法

### 2. 宽高一定时，负margin法，position: absolute; margin-top: -contentheight;margin-left: -contentheight;

### 3. 文字图片类使用 display: table-cell法

```css
div{
    width: 260px;
    height: 230px;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
}
img{
    vertical-align: middle;
}
```

### 4. css3 top: 50%; left: 50%; transform: translate3d(-50%, -50%);(IE8及以前不支持)

### 5. 弹性布局，dispaly: flex

```css
.container{
      width: 300px;
      height: 200px;
      border: 3px solid #546461;
      display: -webkit-flex;
      display: flex;
      -webkit-align-items: center;
      align-items: center;
      -webkit-justify-content: center;
      justify-content: center;
 }
 .inner{
      border: 3px solid #458761;
      padding: 20px;
 }
```

### 6. 利用`calc`函数进行四则运算(IE9及以上)

```css
.calc{
  position: relative;
}
.calc .innerBox{
  position: absolute;
  left:-webkit-calc((500px - 200px)/2);
  top:-webkit-calc((120px - 50px)/2);
  left:-moz-calc((500px - 200px)/2);
  top:-moz-calc((120px - 50px)/2);
  left:calc((500px - 200px)/2);
  top:calc((120px - 50px)/2);
}
```

## 实现瀑布流布局


```css
/*瀑布流层*/
.waterfall{
	-moz-column-count:4; /* Firefox */
	-webkit-column-count:4; /* Safari 和 Chrome */
	column-count:4; /*规定多少列*/
	-moz-column-gap: 1em; /*每一列的间隙*/
	-webkit-column-gap: 1em;
	column-gap: 1em;
	// column-width: 1em; /*每一列的宽度*/ 
}

/*内容层*/
.item{
	-moz-page-break-inside: avoid;
	-webkit-column-break-inside: avoid;
	break-inside: avoid; /*避免元素内部断行并产生新列*/
}
```

*注意: Internet Explorer 9及更早 IE 版本浏览器不支持 column-count 属性。*

## 三栏布局

### 1. 左右浮动，中间不动.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
	.left {
	    float: left;
	    height: 200px;
	    width: 100px;
	    background-color: red;
	}
	.right {
	    width: 200px;
	    height: 200px;
	    background-color: blue;
	    float: right;
	}
	.main {
	    margin-left: 120px;
	    margin-right: 220px;
	    height: 200px;
	    background-color: green;
	}
    </style>
</head>
<body>
    <div class="container">
        <div class="left"></div>
        <div class="right"></div>
        <div class="main"></div>
    </div>
</body>
</html>
```

### 2. 双飞翼布局

```html
<html lang="en">
<head>
    <style>
        .content {
  	    float: left;
  	    width: 100%;
        }
        .main {
  	    height: 200px;
  	    margin-left: 110px;
  	    margin-right: 220px;
  	    background-color: green;
        }
	.left {
	    float: left;
	    height: 200px;
	    width: 100px;
	    margin-left: -100%;
	    background-color: red;
	}
	.right {
	    width: 200px;
	    height: 200px;
	    float: right;
	    margin-left: -200px;
	    background-color: blue;
	}	
    </style>
</head>
<body>
    <div class="content">
        <div class="main"></div>
    </div>
    <div class="left"></div>
    <div class="right"></div>
</body>
</html>
```

### 3. 圣杯布局

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
	.container {
	    margin-left: 120px;
	    margin-right: 220px;
	}
	.main {
	    float: left;
	    width: 100%;
	    height: 300px;
	    background-color: red;
	}
	.left {
	    float: left;
	    width: 100px;
	    height: 300px;
	    margin-left: -100%;
	    position: relative;
	    left: -120px;
	    background-color: blue;
	}
	.right {
	    float: left;
	    width: 200px;
	    height: 300px;
	    margin-left: -200px;
	    position: relative;
	    right: -220px;
	    background-color: green;
	}
    </style>
</head>
<body>
    <div class="container">
	<div class="main"></div>
	<div class="left"></div>
	<div class="right"></div>
    </div>
</body>
</html>
```

### 4. flex布局
ie10+
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
	.container {
        display: flex;
	}
	.main {
        flex-grow: 1;
	    height: 300px;
	    background-color: red;
	}
	.left {
	    order: -1;
	    flex: 0 1 200px;
	    margin-right: 20px;
	    height: 300px;
	    background-color: blue;
	}
	.right {
	    flex: 0 1 100px;
        margin-left: 20px;
	    height: 300px;
	    background-color: green;
	}
    </style>
</head>
<body>
    <div class="container">
	<div class="main"></div>
	<div class="left"></div>
	<div class="right"></div>
    </div>
</body>
</html>
```
[关于flex布局](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?^%$)


### 5. table布局(无法设置栏间距)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .container {
	    display: table;
	    width: 100%;
        }
        .left, .main, .right {
	    display: table-cell;
        }
        .left {
	    width: 200px;
	    height: 300px;
	    background-color: red;
        }
        .main {
	    background-color: blue;
        }
        .right {
	    width: 100px;
	    height: 300px;
	    background-color: green;
        }
    </style>
</head>
<body>
    <div class="container">
	<div class="left"></div>
	<div class="main"></div>
	<div class="right"></div>
    </div>
</body>
</html>
```

### 6. 绝对定位布局
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
	.container {
	    position: relative;
	}
	.main {
	    height: 400px;
	    margin: 0 120px;
	    background-color: green;
	}
	.left {
	    position: absolute;
	    width: 100px;
	    height: 300px;
	    left: 0;
	    top: 0;
	    background-color: red;
	}
	.right {
	    position: absolute;
	    width: 100px;
	    height: 300px;
	    background-color: blue;
            right: 0;
	    top: 0;
	}
    </style>
</head>
<body>
    <div class="container">
        <div class="main"></div>
	<div class="left"></div>
	<div class="right"></div>
    </div>
</body>
</html>
```

























