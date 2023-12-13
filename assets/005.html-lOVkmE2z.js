import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as e,e as i,f as l}from"./app-rNjbp9td.js";const n="/my-docs/assets/image-pput1m51.png",s={},r=l('<p>本文档将详细介绍云平台中编辑项目、提交任务与查看结果的流程</p><hr><h3 id="编写代码" tabindex="-1"><a class="header-anchor" href="#编写代码" aria-hidden="true">#</a> 编写代码</h3><p>在创建项目后，用户可以在左侧的代码编辑器中编写代码。 点击上方的新建，可以新建空白文件或从已有的示例中挑选。</p><p><img src="http://janusq.zju.edu.cn:10211/md-pics/addnew.png" alt="addnew" loading="lazy"> 关于编辑代码可使用的API，请参考API文档。</p><hr><figure><img src="'+n+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><h3 id="运行任务" tabindex="-1"><a class="header-anchor" href="#运行任务" aria-hidden="true">#</a> 运行任务</h3><p>编写完成后，用户可以在上方的模式按钮中切换量子计算机与量子模拟器的运行模式。 <img src="http://janusq.zju.edu.cn:10211/md-pics/mode_sel.png" alt="mode_sel" loading="lazy"> 选择模式后，点击左上角的运行按钮来提交和运行量子任务。</p><ol><li>真机模式 真机模式下，用户可以选择输入采样次数，选择需要执行任务的量子计算机后，提交相应任务。 <img src="http://janusq.zju.edu.cn:10211/md-pics/real_para.png" alt="real_para" loading="lazy"></li><li>模拟器模式 模拟器模式下，用户点击运行按钮即可在该界面得到运行结果</li></ol><hr><h3 id="执行结果" tabindex="-1"><a class="header-anchor" href="#执行结果" aria-hidden="true">#</a> 执行结果</h3><ol><li>模拟器结果 用户点击模拟器运行后，右侧结果包含三个视图。</li></ol><ul><li>Circuit视图用户代码构建的可视化的电路，并在下方包含了量子纠缠程度的变化。用户可以在电路中点击一个中间执行状态来查看细节。 <img src="http://janusq.zju.edu.cn:10211/md-pics/circuit.png" alt="circuit" loading="lazy"></li><li>Variable State视图表示了一个用户定义的变量的量子态和熵，不同变量之间，具有较高纠缠程度的态之间会在上方用红线连接。 <img src="http://janusq.zju.edu.cn:10211/md-pics/variable_state.png" alt="variable_state" loading="lazy"></li><li>System State视图表示了整个量子系统的量子态，用户可以使用滚轮和拖拽来查看每个量子态。 <img src="http://janusq.zju.edu.cn:10211/md-pics/system_state.png" alt="system_state" loading="lazy"></li><li>Evolution视图展示了被选中的量子电路部分的可视化结果，它由一个演化矩阵来描述。如果该矩阵是稀疏矩阵，它会自动转化为Sankey图来表示。 <img src="http://janusq.zju.edu.cn:10211/md-pics/evolution.png" alt="evolution" loading="lazy"></li></ul><ol start="2"><li>真机结果 用户向真机提交任务后，可到项目管理，点击相应项目查看任务详情，点击相应任务查看结果详情。真机运行结果与模拟器运行结果类似，但仅包含System State、编译前电路和编译后电路。 <img src="http://janusq.zju.edu.cn:10211/md-pics/real_res.png" alt="real_res" loading="lazy"> 我们可以点击右上角的按钮来启用数据矫正，或者下载结果到本地来进一步分析，结果以JSON格式来存储。</li></ol>',15);function c(d,o){return t(),e("div",null,[i(" ## 操作流程 "),r])}const m=a(s,[["render",c],["__file","005.html.vue"]]);export{m as default};