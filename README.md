# account_bill_uniapp

## 支持iconfont 以symbol方式引入，支持彩色图标

1. 安装插件
```javascript
# npm
npm install uni-iconfont-plugin -D
or
# yarn
yarn add uni-iconfont-plugin -D
or
#pnpm
pnpm install uni-iconfont-plugin -D
```

2. 生成配置文件
```javascript
npx iconfont-init

# 可传入配置文件输出路径
# npx iconfont-init --output iconfont.json

# 可只传入配置文件名
# npx iconfont-init --output icon
#会生成icon.json
```

3. 生成icon文件
```javascript
npx iconfont-uni
# 可传入配置文件路径
# npx iconfont-uni --config iconfont.json
```

4. 使用图标
```javascript
<template>
  <view>
    <iconfont name="bangbangtang" size="30rpx" fill="#000000"></iconfont>
    ...
  </view>
</template>

<script>
  import iconfont from '../../iconfont/iconfont.vue' // 文件名默认为iconfont.vue
  ...
</script>
```

5. 更新图标
```javascript
# 修改symbol_url配置后执行
npx iconfont-uni
```

> github地址：https://github.com/xiashui1994/uni-iconfont-plugin

## apifox
令牌 APS-5AcYMKFkbsKR6GyHOcVqfYNSZqv6BHev
