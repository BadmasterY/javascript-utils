# javascript-utils
某渣渣在工作中常用的工具/类的整理

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

### stateMachine({ init, transitions, methods })

> 简易javascript有限状态机.
   
添加时间: 2019-05-15
修改时间: 2019-05-17

- **init**: 初始状态;
- **transitions**: 状态列表(下列示例仅供参考，自行定义，确保整个状态链的闭合);
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
        onStart: () => {console.log(`This state is 'UnStart'.`);},
        onEnd: () => {console.log(`This state is 'UnStart'.`);},
        onStateChange: () => {console.log(`This state is 'UnStart'.`);}
    }
}
```

**初始化方法：**

```
const stateMachine = new utils.stateMachine(opts);
```

#### stateMachine.next()

使当前状态转移到下一状态，触发对应状态(下一状态)的 callback

#### stateMachine.pre()

使当前状态转移到上一状态，触发对应状态(上一状态)的 callback

#### stateMachine.to(state)

*新增于 stateMachine v0.0.2*

- **state**: [String] 状态(可以为状态链之外的状态) 如: to('Error'),将触发'onError()'

使当前状态转移到某种状态，触发对应某种状态的 callback

#### stateMachine.is(state)

- **state**: [String] 状态
- **return** [Boolean]

判断当前状态是否为给定的状态
