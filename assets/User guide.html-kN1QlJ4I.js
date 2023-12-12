import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as a,e as i,f as r}from"./app-FxOmGE_z.js";const n={},s=r('<h2 id="user-guide" tabindex="-1"><a class="header-anchor" href="#user-guide" aria-hidden="true">#</a> User guide</h2><p>This document will detail the process of editing projects, submitting tasks and viewing results in the cloud platform.</p><hr><h3 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h3><p>After creating a project, users can code in the code editor on the left.<br> Click <strong>New</strong> at the top to create a new blank file or pick from the existing examples.</p><p><img src="http://janusq.zju.edu.cn:10211/md-pics/addnew.png" alt="addnew" loading="lazy"><br> For the APIs available for editing code, please refer to the API documentation.</p><hr><h3 id="run-a-task" tabindex="-1"><a class="header-anchor" href="#run-a-task" aria-hidden="true">#</a> Run a task</h3><p>After coding, the user can switch the mode of running of the quantum computer and the quantum simulator in the mode button above.<br><img src="http://janusq.zju.edu.cn:10211/md-pics/mode_sel.png" alt="mode_sel" loading="lazy"><br> After selecting the mode, click the Run button in the upper left corner to submit and run quantum tasks.</p><ol><li>Real-qc mode In real-qc mode, the user can choose to input the number of samples, select the quantum computer that needs to perform the task and then submit the corresponding task.<br><img src="http://janusq.zju.edu.cn:10211/md-pics/real_para.png" alt="real_para" loading="lazy"></li><li>Simulator mode<br> In simulator mode, the user can click the Run button to get the results in this screen</li></ol><hr><h3 id="view-the-results" tabindex="-1"><a class="header-anchor" href="#view-the-results" aria-hidden="true">#</a> View the results</h3><ol><li>Simulator result After the user clicks on the simulator to run it, the result on the right side contains three views.</li></ol><ul><li>The Circuit view user code builds a visualization of the circuit and includes variations in the degree of quantum entanglement below. Users can click on an intermediate execution state in the circuit to see the details.<br><img src="http://janusq.zju.edu.cn:10211/md-pics/circuit.png" alt="circuit" loading="lazy"></li><li>The Variable State view represents the quantum states and entropy of a user-defined variable. Different variables are connected to each other, and states with a higher degree of entanglement are connected with red lines above.<br><img src="http://janusq.zju.edu.cn:10211/md-pics/variable_state.png" alt="variable_state" loading="lazy"></li><li>The System State view represents the quantum states of the entire quantum system, and the user can use the scroll wheel and drag and drop to view each quantum state.<br><img src="http://janusq.zju.edu.cn:10211/md-pics/system_state.png" alt="system_state" loading="lazy"></li><li>The Evolution view shows the visualization result of the selected part of the quantum circuit, which is described by an evolution matrix. If this matrix is a sparse matrix, it is automatically transformed into a Sankey diagram to represent it.<br><img src="http://janusq.zju.edu.cn:10211/md-pics/evolution.png" alt="evolution" loading="lazy"></li></ul><ol start="2"><li>Real-QC result After submitting a task to the real machine, users can go to Project Management, click on the corresponding project to view the task details, and click on the corresponding task to view the result details. The results of the real machine are similar to the results of the simulator, but only include System State, pre-compile circuit and post-compile circuit.<br><img src="http://janusq.zju.edu.cn:10211/md-pics/real_res.png" alt="real_res" loading="lazy"><br> We can click the button in the upper right corner to enable data correction or download the results locally for further analysis, and the results are stored in JSON format.</li></ol>',15);function o(l,c){return t(),a("div",null,[i(`
http://localhost:3000/
http://janusq.zju.edu.cn:10211/
`),s])}const h=e(n,[["render",o],["__file","User guide.html.vue"]]);export{h as default};
