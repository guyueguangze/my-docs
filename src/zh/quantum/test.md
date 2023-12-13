---
title: test
icon: laptop-code
order: 4

---
# Qucode API

## 1. Circult Commands

**Preparation work before performing quantum operations, applying for and initializing the quantum bit API.**

<br>

> **new(*qubit_number，name*)**

Apply for a variable for the quantum circuit, which will contain *qubit_number* quantum bits.

&emsp;&emsp;**Parameters**

-  **qubit_number** – the number of requested quantum bits.

- **name** – quantum circuit variable name.

​	**Example**

​	`var a = new(3,'a')`

​	Request a variable 'a' with 3 qubits.

<br>

> **reset(*qubit_number*)**

Initialize *qubit_number* quantum bits to the $|0\rang$ state for the quantum circuit. This function should be called before adding any other gate operations.

​	**Parameters**

- **qubit_number** – the number of initialized quantum bits.

​	**Example**

​	`reset（5）`

​	Initialize 5 quantum bits.

<br>

## 2. Basic Qubit Gate Commands

Including single-qubit gate operations and multi-qubit operations, introduce APIs for Hadamard gates, identity gates, and squared not gates, etc.

### 2.1 Single Qubit Gate Commands

#### x(wires) \ not(wires) \ y(wires) \ z(wires)

**Add X, Y, and Z gate operations to the selected qubits in the quantum circuit.** 

**Parameters**:

- wires: Qubit array, containing the qubits to be operated on.

**example**:

`x([1, 3])`

Apply the NOT gate to the 1st and 3rd qubits.

#### had(wires)\h(wires)\hadamard(wires)

**Add Hadamard gate operations to the selected qubits in the quantum circuit. **

**Parameters**:

- wires: Qubit array, containing the qubits to be operated on.

**example**：

`had([0,1])`

Add Hadamard gates to the first and second quantum qubits.

#### id(wires)

**Add an identity gate operation to the selected qubits in the quantum circuit.**

**Parameters**:

- wires: Qubit array, containing the qubits to be operated on.

**example**：

`id([0,1])`

Add identity gates to the first and second quantum qubits.

#### srn(wires)\srndg(wires)

**Add squared not gate operations or inversed squared not gate operations to the selected qubits in the quantum circuit**

**Parameters:**

- **wires**: Qubit array, containing the qubits to be operated on.

example：

```python
# Add squared not gates to the first and second quantum qubits.
srn([0,1])

# Add inversed squared not gates to the first and second quantum qubits.
srndg([0,1])
```

 

### 2.2 Multi Qubits Gate Commands

#### ch(wires)

**Add controlled Hadamard gate operations to the selected qubits in the quantum circuit.**

**Parameters**:

- wires: An array containing two elements, where the first element represents the control qubit, and the second element represents the target qubit. 

**example**：

`had([0, 1])`

Add a controlled Hadamard gate to the first and second quantum qubits, where the first qubit is the control qubit and the second qubit is the target qubit. When the first qubit is in the state |1⟩, the Hadamard gate is applied to the second qubit.

#### cx(wires) \ cnot(wires) cy(wires) cz(wires)

Add controlled X, Y, and Z gate operations to the selected qubits in the quantum circuit.

Parameters:

- wires: An array containing two elements, where the first element represents the control qubit, and the second element represents the target qubit. 

**example**：

`cx([1, 3])`

Add a CX gate to the first and third quantum qubits. When the first qubit is in the state |1⟩, the CX gate will perform a NOT operation (X gate) on the third qubit.

#### swap(wires)

**为量子电路中选定的比特添加交换门操作。wires为包含两个元素的数组。**

**Parameters**:

- wires: An array containing two elements.

example:

`swap([2, 3])`

Swap the second and third quantum qubits.

#### ncnot(wires)

Add controlled-NOT (CNOT) gate operations to the selected qubits in the quantum circuit.

**Parameters**:

- wires: An array containing more than two elements, where the last element represents the target qubit, and the preceding elements represent control qubits.

**example**：

`ncnot([1,2,3, 4])`

Add controlled-NOT (CNOT) gate operations to the first, second, third, and fourth quantum qubits. When the first, second, and third qubits are in the state |1⟩, the CNOT gate will perform a NOT operation on the fourth qubit.

 

## 3.Qubit Rotation Gates Commands

Rotating a single qubit around the X, Y, and Z axes can be done using fixed-angle or custom-angle gates.

### 3.1 Single Qubit Rotary Gate Command

#### r2(wires) r4(wires) r8(wires)

Rotate the selected qubits in the quantum circuit around the Z-axis by PI/2, PI/4, or PI/8

**Parameters**:

- wires: Qubit array, containing the qubits to be operated on.

**example**：

```python
# Rotate the 0th and 1st qubits around the Z-axis by PI/2.
r2([0,1])

# Rotate the 0th and 1st qubits around the Z-axis by PI/4.
r4([0,1])

# Rotate the 0th and 1st qubits around the Z-axis by PI/8.
r8([0,1])
```

 

#### s(wires) \ t(wires) \ sdg(wires) \ tdg(wires)

The S-gate and T-gate are equivalent to the R2-gate and R4-gate, used for rotating around the Z-axis by PI/2 and PI/4, respectively. The S-dagger (Sdg) gate and T-dagger (Tdg) gate rotate along the Z-axis by -PI/4 and -PI/8, respectively.

**Parameters**:

- wires: Qubit array, containing the qubits to be operated on.

**example**：

```python
# Rotate the 0th and 1st qubits around the Z-axis by PI/2.
s([0, 1])

# Rotate the 0th and 1st qubits around the Z-axis by -PI/4.
tdg([0, 1]) 
```

#### u1(lambda, wires) / u2(phi, lambda, wires) / u3(theta, phi, lambda, wires)

Rotate the selected qubits in the quantum circuit simultaneously around the Z-axis, X+Z-axis, or X+Y+Z-axis.

**Parameters**:

- theta: Rotate by an angle along the X-axis, using degrees.

- phi：Rotate by an angle along the Y-axis.

- lambda：Rotate by an angle along the Z-axis.

- wires: Qubit array, containing the qubits to be operated on.

example：

```python
# Rotate the 0th and 1st qubits around the Z-axis by 45 degrees.
u1(45, [0, 1])

# Rotate the 0th and 1st qubits around the X+Y+Z-axis by 45 degrees, 90 degrees, and 135 degrees, respectively.
u3(45, 90, 135, [0, 1])
```

 

#### rx(theta, wires)  / ry(theta, wires) / rz(theta,wires) / phase(theta, wires)

**Incorporate gate operations for the selected qubits in the quantum circuit that rotate around the x, y, and z axes. Use "theta" as the rotation angle in degrees.** 

**Parameters**:

- theta: Rotate by an angle in degrees.

- wires: Qubit array, containing the qubits to be operated on.

**example**：

`rz(90, [1, 3])`

Rotate the 1st and 3rd qubits around the Z-axis by 90 degrees (PI/2 radians).

 

### 3.2 Multi Qubit Rotary Gate Command

#### crx(theta, wires) / cry(theta, wires) / crz(theta, wires)

**Add controlled gate operations for the selected qubits in the quantum circuit that perform rotations around the x, y, and z axes.**

**Parameters**:

- theta: Rotate by an angle in degrees.

- wires: An array containing two elements, where the first element represents the control qubit, and the second element represents the target qubit. 

example：

`crx(90,[1, 3])`

Add a controlled rotation gate (CRX gate) with a rotation angle of PI/2 to the 3rd quantum bit 	when the 1st quantum bit is in the state 1. This rotation is around the X-axis.

 

#### cr2(theta, wires) / cr4(theta, wires) / cr8(theta, wires)

**Add controlled gates for rotating the selected qubits around the x, y, and z axes in the quantum circuit.**

Parameters:

- theta: Rotate by an angle in degrees.

- wires: An array containing two elements, where the first element represents the control qubit, and the second element represents the target qubit. 

example：

`cr4([1, 3])`

Add an RZ gate with a rotation angle of π/2 to the 3rd quantum bit when the 1st quantum bit is in the state 1. This rotation is around the Z-axis.



#### cu1(lambda,wires)/cu2(phi,lambda,wires)/cu3(theta,phi,lambda, wires)

**Add controlled U1, U2, and U3 gate operations to the selected qubits in the quantum circuit, allowing the qubits to rotate simultaneously around the Z-axis, X+Z-axis, or X+Y+Z-axis.**

**Parameters**:

- theta: Rotate by an angle along the X-axis, using degrees.

- phi：Rotate by an angle along the Y-axis.

- lambda：Rotate by an angle along the Z-axis.

- wires: An array containing two elements, where the first element represents the control qubit, and the second element represents the target qubit. 

**example**：

`cu3(45, 90, 135 ,[0, 1])`

When the 0th quantum bit is 1, the 1st quantum bit rotates by PI/4, PI/2, and PI*3/4 radians around the X, Y, and Z axes, respectively.

 

#### cs(wires)/ct(wires)/csdg(wires)/ctdg(wires)

**The CS gate and CT gate are similar to the CR2 gate and CR4 gate, where, when the control bit is 1, the target bit is rotated around the Z-axis by PI/2 and PI/4, respectively. The CSDG gate and CTDG gate, on the other hand, rotate the target bit along the Z-axis by -PI/2 and -PI/4 when the control bit is 1, respectively.**

**Parameters**:

- wires: An array containing two elements, where the first element represents the control qubit, and the second element represents the target qubit. 

**example**：

`ctdg([0, 1])`

When the 0th qubit is in the state 1, the 1st quantum bit is rotated about the Z-axis by -PI/4.

#### ncphase(theta, wires)

**Add controlled-phase gate operations to the selected qubits in the quantum circuit.**

**Parameters**:

- theta: Rotate by an angle in degrees.

- wires: An array containing more than two elements, where the last element represents the target qubit, and the preceding elements represent control qubits.

**example**：

`ncphase(90,[1,2,3,4])`

Apply controlled-phase gate operations to the 1st, 2nd, 3rd, and 4th quantum bits. When the 1st, 2nd, and 3rd qubits are in the state 1, the 4th qubit rotates about the Z-axis by PI/2.

 

## Format Commands

Introduce some auxiliary APIs.

#### qprint()

Print the required information in the console.

#### startlabel(labelname) / endlabel(labelname)

Calling startlabel(labelname) will include the gate operations before endlabel (labelname) is called within a label named labelname. You can observe the gate operations included in the label in the Circuit view.