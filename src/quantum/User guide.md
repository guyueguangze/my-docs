---
title: User guide
index: true
icon: laptop-code

---
<!--
http://localhost:3000/
http://janusq.zju.edu.cn:10211/
-->
## User guide

This document will detail the process of editing projects, submitting tasks and viewing results in the cloud platform.

---
### Code
After creating a project, users can code in the code editor on the left.  
Click **New** at the top to create a new blank file or pick from the existing examples.

![addnew](http://janusq.zju.edu.cn:10211/md-pics/addnew.png)  
For the APIs available for editing code, please refer to the API documentation.

---
### Run a task
After coding, the user can switch the mode of running of the quantum computer and the quantum simulator in the mode button above.  
![mode_sel](http://janusq.zju.edu.cn:10211/md-pics/mode_sel.png)  
After selecting the mode, click the Run button in the upper left corner to submit and run quantum tasks.

1. Real-qc mode
In real-qc mode, the user can choose to input the number of samples, select the quantum computer that needs to perform the task and then submit the corresponding task.  
![real_para](http://janusq.zju.edu.cn:10211/md-pics/real_para.png)
2. Simulator mode  
In simulator mode, the user can click the Run button to get the results in this screen  
---
### View the results

1. Simulator result
After the user clicks on the simulator to run it, the result on the right side contains three views.  
- The Circuit view user code builds a visualization of the circuit and includes variations in the degree of quantum entanglement below. Users can click on an intermediate execution state in the circuit to see the details.  
![circuit](http://janusq.zju.edu.cn:10211/md-pics/circuit.png)
- The Variable State view represents the quantum states and entropy of a user-defined variable. Different variables are connected to each other, and states with a higher degree of entanglement are connected with red lines above.  
![variable_state](http://janusq.zju.edu.cn:10211/md-pics/variable_state.png)
- The System State view represents the quantum states of the entire quantum system, and the user can use the scroll wheel and drag and drop to view each quantum state.  
![system_state](http://janusq.zju.edu.cn:10211/md-pics/system_state.png)
- The Evolution view shows the visualization result of the selected part of the quantum circuit, which is described by an evolution matrix. If this matrix is a sparse matrix, it is automatically transformed into a Sankey diagram to represent it.  
![evolution](http://janusq.zju.edu.cn:10211/md-pics/evolution.png)
2. Real-QC result
After submitting a task to the real machine, users can go to Project Management, click on the corresponding project to view the task details, and click on the corresponding task to view the result details. The results of the real machine are similar to the results of the simulator, but only include System State, pre-compile circuit and post-compile circuit.  
![real_res](http://janusq.zju.edu.cn:10211/md-pics/real_res.png)  
We can click the button in the upper right corner to enable data correction or download the results locally for further analysis, and the results are stored in JSON format.  




