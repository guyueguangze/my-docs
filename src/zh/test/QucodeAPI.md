---
# 这是文章的标题
title:  Qucode API
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 1
# 设置作者
# author: Ms.Hope
# 设置写作时间
# date: 2020-01-01
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 页面配置
  - 使用指南
# 此页面会在文章列表置顶
# sticky: true
# 此页面会出现在文章收藏中
# star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---


# Qucode API

## 1. Circult Commands

**进行量子操作前的准备工作，申请和初始化量子比特API。**

#### new(qubit_number，name)

**为量子电路申请变量，该变量将包含qubit_number个量子比特。**

**Parameters**:

- qubit_number: 申请的量子比特数。

- name: 量子电路变量名。

**example：**

`var a = new(3,'a')`

申请一个3比特的变量a

#### reset(qubit_number)

**为量子电路初始化qubit_number个量子比特为0态，用户需要再添加其他门操作前调用该函数。**

**Parameters**:

- qubit_number: 初始化的量子比特数。

**example**

`reset（5）`

初始化5个量子比特

## 2. Basic Qubit Gate Commands

包含单比特门操作和多比特操作，介绍Hadamard门、identity门和squared not门等API。

### 2.1 Single Qubit Gate Commands

#### x(wires) \ not(wires) \ y(wires) \ z(wires)

**为量子电路中选定的比特添加x, y, z门操作。** 

**Parameters**:

- wires: 数组，包含需要被操作的比特。

**example**:

`x([1, 3])`

对第1和第3个量子比特执行not门

#### had(wires)\h(wires)\hadamard(wires)

**为量子电路中选定的比特添加hadamard门操作。wires为数组，包含需要被操作的比特。**

**Parameters**:

wires: 比特数组，包含需要被操作的比特。

**example**：

`had([0,1])`

为第0和第1个量子比特添加hadmard门。

#### id(wires)

**为量子电路中选定的比特添加identity门操作。**

**Parameters**:

- wires: 比特数组，包含需要被操作的比特。

**example**：

`id([0,1])`

为第0和第1个量子比特添加identity门。

#### srn(wires)\srndg(wires)

**为量子电路中选定的比特添加squared not门操作或inversed square not门操作。wires为数组，包含需要被操作的比特。**

**Parameters:**

- **wires**: 比特数组，包含需要被操作的比特。

example：

```python
# 为第0和第1个量子比特添加squared not门。
srn([0,1])

# 为第0和第1个量子比特添加inversed square not门。
srndg([0,1])
```

 

### 2.2 Multi Qubits Gate Commands

#### ch(wires)

**为量子电路中选定的比特添加受控的hadamard门操作。**

**Parameters**:

- wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。 

**example**：

`had([0, 1])`

为第0和第1个量子比特添加受控的hadamard门。第0个比特为1时，第一个比特执行hadamard门。

#### cx(wires) \ cnot(wires) cy(wires) cz(wires)

为量子电路中选定的比特添加受控的x, y, z门操作。

Parameters:

- wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。

**example**：

`cx([1, 3])`

对第1和第3个量子比特添加cx门，第1个比特为1时，第3个比特执行not操作。

#### swap(wires)

**为量子电路中选定的比特添加交换门操作。wires为包含两个元素的数组。**

**Parameters**:

- wires: 包含两个元素的数组。

example:

`swap([2, 3])`

交换第2和第3个量子比特。

#### ncnot(wires)

**为量子电路中选定的比特添加受控的NOT门操作**。

**Parameters**:

- wires: 包含超过两个元素的数组，最后一个元素为目标比特，其余为控制比特。

**example**：

`ncnot([1,2,3, 4])`

为第1、2、3、4个量子比特添加受控的NOT门，第1，2，3个比特为1时，第4个比特执行not操作。

 

## 3.Qubit Rotation Gates Commands

对单比特进行X、Y和Z轴的旋转操作，分为固定角和自定义角度门。

### 3.1 Single Qubit Rotary Gate Command

#### r2(wires) r4(wires) r8(wires)

使量子电路中选定的比特沿z轴旋转PI/2、PI/4或PI/8。

**Parameters**:

- wires: 数组，包含需要被操作的比特。

**example**：

```python
# 使第0和第1个量子比特沿轴旋转PI/2。
r2([0,1])

# 使第0和第1个量子比特沿轴旋转PI/4。
r4([0,1])

# 使第0和第1个量子比特沿轴旋转PI/8。
r8([0,1])
```

 

#### s(wires) \ t(wires) \ sdg(wires) \ tdg(wires)

s门和t门与r2门和r4门相同，用于绕Z轴旋转PI/2和PI/4。sdg和tdg门为沿Z轴旋转 -PI/4 和 -PI/4。。  

**Parameters**:

- wires: 数组，包含需要被操作的比特。

**example**：

```python
# 使第0和第1个量子比特沿Z轴旋转 PI/2。
s([0, 1])

# 使第0和第1个量子比特沿Z轴旋转 -PI/4。
tdg([0, 1]) 
```

#### u1(lambda, wires) / u2(phi, lambda, wires) / u3(theta, phi, lambda, wires)

使量子电路中选定的比特沿z轴、X+Z轴或X+Y+Z轴同时旋转。theta、phi、lambda采用角度制，用于指定角度。   

Parameters:

- theta: 沿X轴旋转角度，采用角度制。

- phi：沿Y轴旋转角度

- lambda：Z轴的旋转角度。

- wires: 数组，包含需要被操作的比特。

example：

```python
# 使第0和第1个量子比特沿Z轴旋转45度。
u1(45, [0, 1])

# 使第0和第1个量子比特沿X+Y+Z轴分别旋转45度、90度和135度。
u3(45, 90, 135, [0, 1])
```

 

#### rx(theta, wires)  / ry(theta, wires) / rz(theta,wires) / phase(theta, wires)

**为量子电路中选定的比特添加沿x, y, z方向旋转的门操作。theta为旋转角度，采用角度制。wires为数组，包含需要被操作的比特。** 

**Parameters**:

- theta: 旋转角度，采用角度制

- wires: 数组，包含需要被操作的比特。

**example**：

`rz(90, [1, 3])`

使第1和第3个量子比特绕Z轴旋转90度（PI/2）。

 

### 3.2 Multi Qubit Rotary Gate Command

#### crx(theta, wires) / cry(theta, wires) / crz(theta, wires)

**为量子电路中选定的比特添加受控的沿x，y，z方向旋转的门操作。**

**Parameters**:

- theta: 旋转角度，采用角度制

- wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。

example：

`crx(90,[1, 3])`

对第1和第3个量子比特添加旋转PI/2的crx门，第1个比特为1时第3个比特绕X轴旋转PI/2。

 

#### cr2(theta, wires) / cr4(theta, wires) / cr8(theta, wires)

**为量子电路中选定的比特添加受控的沿x，y，z方向旋转的门操作。**

Parameters:

- theta: 旋转角度，采用角度制。

- wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。

example：

`cr4([1, 3])`

为第1和第3个量子比特添加旋转PI/2的rz门，第1个比特为1时第3个比特绕Z轴旋转PI/4.



#### cu1(lambda,wires)/cu2(phi,lambda,wires)/cu3(theta,phi,lambda, wires)

**为量子电路中选定的比特添加受控的u1、u2和u3门操作，使量子电路中选择的比特沿Z轴、X+Z轴或X+Y+Z轴同时旋转**。

**Parameters**:

- theta: 沿X轴旋转角度，采用角度制。

- phi：沿Y轴旋转角度

- lambda：Z轴的旋转角度。

- wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。

**example**：

`cu3(45, 90, 135 ,[0, 1])`

第0个量子比特为1时。第1个量子比特沿X、Y和Z轴分别旋转PI/4、PI/2、PI*3/4。

 

#### cs(wires)/ct(wires)/csdg(wires)/ctdg(wires)

**cs门和ct门与cr2门和cr4门相同，控制比特为1的情况下使目标比特绕Z轴旋转PI/2和PI/4. csdg门和ctdg门为控制比特为1的强况下使目标比特沿Z轴旋转 -PI/2和 -PI/4。**

**Parameters**:

- wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。

**example**：

`ctdg([0, 1])`

第0个量子比特为1时。第1个量子比特沿Z轴旋转 -PI/4。

#### ncphase(theta, wires)

**为量子电路中选定的比特添加受控的phase门操作。**

**Parameters**:

- theta: 旋转角度，采用角度制。

- wires: 包含超过两个元素的数组，最后一个元素为目标比特，其余为控制比特。

**example**：

`ncphase(90,[1,2,3,4])`

对第1,2,3,4个量子比特添加受控的phase门，第1、2、3个比特为1时，第4个比特绕z轴旋转PI/2。

 

## Format Commands

介绍一些辅助接口。

#### qprint()

在控制台中打印需要的信息。

#### startlabel(labelname) / endlabel(labelname)

调用startlabel(labelname),直到endlabel(labelname)调用前的门操作会被包含在名为labelname的标签中，可在Circuit视图中观察到label包含的门操作部分。