# javascript-utils
~~某渣渣在工作中常用的工具/类的整理~~
邀请了几个好友一起维护的工具

## Use:

clone整个仓库到本地，运行：
```
npm install
```
安装完毕执行：
```
npm run build
```
得到 **/build/js/utils.min.js**

## API:

### 1. stateMachine({ init, transitions, methods })

> 简易javascript抽象状态机.
   
添加时间: 2019-05-15
修改时间: 2019-05-17

- **init**: 初始状态;
- **transitions**: 状态列表(下列示例仅供参考，自行定义，~~确保整个状态链的闭合~~);
- **methods**: 每个状态对应的 callback(非必需);

**参数完整示例如下:**
```
{
    init: 'UnStart',
    transitions: [
        { name: 'UnStart', from: 'End', to: 'Start' },
        { name: 'Start', from: 'UnStart', to: 'End' },
        { name: 'End', from: 'Start', to: 'UnStart' },
    ],
    methods: {
        onUnStart: () => {console.log(`This state is 'UnStart'.`);},
        onStart: () => {console.log(`This state is 'Start'.`);},
        onEnd: () => {console.log(`This state is 'End'.`);},
        onStateChange: () => {console.log(`This function will be triggered immediately every time the state changes.`);}
    }
}
```

#### 使用方法：

```
const stateMachine = new utils.stateMachine(opts);
```

#### 1.1 stateMachine.next()

使当前状态转移到下一状态，触发对应状态(下一状态)的 callback

#### 1.2 stateMachine.pre()

使当前状态转移到上一状态，触发对应状态(上一状态)的 callback

#### 1.3 stateMachine.to(state)

*新增于 stateMachine v0.0.2*

- **state**: [String] 状态(可以为状态链之外的状态) 如: to('Error'),将触发'onError()'

使当前状态转移到某种状态，触发对应某种状态的 callback

#### 1.4 stateMachine.is(state)

- **state**: [String] 状态
- **return** [Boolean]

判断当前状态是否为给定的状态

#### 1.5 stateMachine.state

获取当前状态机状态

#### 1.6 stateMachine.id

获取当前状态机id，出现错误或异常将在控制台抛出状态机id


### 2. ajax(opts, success, error)

> 简易异步ajax

添加时间: 2019-05-17

- **opts**: [Object] ajax配置信息
- **success**: [Function] 成功执行之后的callback
- **error**: [Function] 失败之后的callback
  
**opts完整配置信息如下:**
```
{
    async: true,
    url: "http://localhost:8080",
    type: "POST",
    headers: {
        "Content-Type": "application/json",
        "cache-control": "no-cache"
    },
    data: ''
}
```

#### 使用方法:
```
utils.ajax(opts, success, error);
```

### 3. ajaxPromise(opts)

> 基于Promise的简易异步ajax

添加时间: 2019-05-17

- **opts**: [Object] ajax配置信息
- **return** Promise
  
opts与ajax配置信息一致，不再赘述

#### 使用方法:
```
const promise = utils.ajaxPromise(opts);

promise.then(data => {
    console.log(data);
}).catch(err => { throw new Error(err); })
```

### 4. intersection(arr1, arr2)

> 求两个数组之间(arr1与arr2)的交集

添加时间: 2019-05-20

- **arr1**: [Array]
- **arr2**: [Array]

#### 使用方法:
```
const result = utils.intersection(arr1, arr2);
```

### 5. differenceSet(arr1, arr2)

> 求两个数组之间(arr1与arr2)的差集

添加时间: 2019-05-20

- **arr1**: [Array]
- **arr2**: [Array]

#### 使用方法:
```
const result = utils.differenceSet(arr1, arr2);
```

### 6. complementSet(arr1, arr2)

> 求两个数组之间(arr1与arr2)的补集

添加时间: 2019-05-20

- **arr1**: [Array]
- **arr2**: [Array]

#### 使用方法:
```
const result = utils.complementSet(arr1, arr2);
```

### 7. union(arr1, arr2)

> 求两个数组之间(arr1与arr2)的并集

添加时间: 2019-05-20

- **arr1**: [Array]
- **arr2**: [Array]

#### 使用方法:
```
const result = utils.union(arr1, arr2);
```

### 8. dataType(data)

> 检测数据类型

添加时间: 2019-05-28

- **data**: 传入的需要检测类型的数据
- **return**: [String]
   - Undefined
   - Null
   - Number
   - String
   - Array
   - Function
   - Object
   - Symbol
   - Error
   - ....(如果数据正确，可以返回js所有数据的准确类型)

#### 使用方法:
```
utils.dataType(null) == 'Null';
```

### 9. curryingTypes(type)
> 检测数据类型

添加时间: 2019-06-28

- **type** [String]
   - Undefined
   - Null
   - Number
   - String
   - Array
   - Function
   - Object
   - Symbol
   - Error
   - ...
- **return** [data => boolean]
  - **data**: 用于比较类型的数据
  - **return**: 返回 `boolean`

#### 使用方法:
```js
const isNumber = utils.curryingTypes('Number');
isNumber(1); // ==> true
isNumber('1'); // ==> false
```
