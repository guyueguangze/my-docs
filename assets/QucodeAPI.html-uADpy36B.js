import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as s,f as n}from"./app-FxOmGE_z.js";const r={},t=n(`<h1 id="qucode-api" tabindex="-1"><a class="header-anchor" href="#qucode-api" aria-hidden="true">#</a> Qucode API</h1><h2 id="_1-circult-commands" tabindex="-1"><a class="header-anchor" href="#_1-circult-commands" aria-hidden="true">#</a> 1. Circult Commands</h2><p><strong>进行量子操作前的准备工作，申请和初始化量子比特API。</strong></p><h4 id="new-qubit-number-name" tabindex="-1"><a class="header-anchor" href="#new-qubit-number-name" aria-hidden="true">#</a> new(qubit_number，name)</h4><p><strong>为量子电路申请变量，该变量将包含qubit_number个量子比特。</strong></p><p><strong>Parameters</strong>:</p><ul><li><p>qubit_number: 申请的量子比特数。</p></li><li><p>name: 量子电路变量名。</p></li></ul><p><strong>example：</strong></p><p><code>var a = new(3,&#39;a&#39;)</code></p><p>申请一个3比特的变量a</p><h4 id="reset-qubit-number" tabindex="-1"><a class="header-anchor" href="#reset-qubit-number" aria-hidden="true">#</a> reset(qubit_number)</h4><p><strong>为量子电路初始化qubit_number个量子比特为0态，用户需要再添加其他门操作前调用该函数。</strong></p><p><strong>Parameters</strong>:</p><ul><li>qubit_number: 初始化的量子比特数。</li></ul><p><strong>example</strong></p><p><code>reset（5）</code></p><p>初始化5个量子比特</p><h2 id="_2-basic-qubit-gate-commands" tabindex="-1"><a class="header-anchor" href="#_2-basic-qubit-gate-commands" aria-hidden="true">#</a> 2. Basic Qubit Gate Commands</h2><p>包含单比特门操作和多比特操作，介绍Hadamard门、identity门和squared not门等API。</p><h3 id="_2-1-single-qubit-gate-commands" tabindex="-1"><a class="header-anchor" href="#_2-1-single-qubit-gate-commands" aria-hidden="true">#</a> 2.1 Single Qubit Gate Commands</h3><h4 id="x-wires-not-wires-y-wires-z-wires" tabindex="-1"><a class="header-anchor" href="#x-wires-not-wires-y-wires-z-wires" aria-hidden="true">#</a> x(wires) \\ not(wires) \\ y(wires) \\ z(wires)</h4><p><strong>为量子电路中选定的比特添加x, y, z门操作。</strong></p><p><strong>Parameters</strong>:</p><ul><li>wires: 数组，包含需要被操作的比特。</li></ul><p><strong>example</strong>:</p><p><code>x([1, 3])</code></p><p>对第1和第3个量子比特执行not门</p><h4 id="had-wires-h-wires-hadamard-wires" tabindex="-1"><a class="header-anchor" href="#had-wires-h-wires-hadamard-wires" aria-hidden="true">#</a> had(wires)\\h(wires)\\hadamard(wires)</h4><p><strong>为量子电路中选定的比特添加hadamard门操作。wires为数组，包含需要被操作的比特。</strong></p><p><strong>Parameters</strong>:</p><p>wires: 比特数组，包含需要被操作的比特。</p><p><strong>example</strong>：</p><p><code>had([0,1])</code></p><p>为第0和第1个量子比特添加hadmard门。</p><h4 id="id-wires" tabindex="-1"><a class="header-anchor" href="#id-wires" aria-hidden="true">#</a> id(wires)</h4><p><strong>为量子电路中选定的比特添加identity门操作。</strong></p><p><strong>Parameters</strong>:</p><ul><li>wires: 比特数组，包含需要被操作的比特。</li></ul><p><strong>example</strong>：</p><p><code>id([0,1])</code></p><p>为第0和第1个量子比特添加identity门。</p><h4 id="srn-wires-srndg-wires" tabindex="-1"><a class="header-anchor" href="#srn-wires-srndg-wires" aria-hidden="true">#</a> srn(wires)\\srndg(wires)</h4><p><strong>为量子电路中选定的比特添加squared not门操作或inversed square not门操作。wires为数组，包含需要被操作的比特。</strong></p><p><strong>Parameters:</strong></p><ul><li><strong>wires</strong>: 比特数组，包含需要被操作的比特。</li></ul><p>example：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 为第0和第1个量子比特添加squared not门。</span>
srn<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 为第0和第1个量子比特添加inversed square not门。</span>
srndg<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-multi-qubits-gate-commands" tabindex="-1"><a class="header-anchor" href="#_2-2-multi-qubits-gate-commands" aria-hidden="true">#</a> 2.2 Multi Qubits Gate Commands</h3><h4 id="ch-wires" tabindex="-1"><a class="header-anchor" href="#ch-wires" aria-hidden="true">#</a> ch(wires)</h4><p><strong>为量子电路中选定的比特添加受控的hadamard门操作。</strong></p><p><strong>Parameters</strong>:</p><ul><li>wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。</li></ul><p><strong>example</strong>：</p><p><code>had([0, 1])</code></p><p>为第0和第1个量子比特添加受控的hadamard门。第0个比特为1时，第一个比特执行hadamard门。</p><h4 id="cx-wires-cnot-wires-cy-wires-cz-wires" tabindex="-1"><a class="header-anchor" href="#cx-wires-cnot-wires-cy-wires-cz-wires" aria-hidden="true">#</a> cx(wires) \\ cnot(wires) cy(wires) cz(wires)</h4><p>为量子电路中选定的比特添加受控的x, y, z门操作。</p><p>Parameters:</p><ul><li>wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。</li></ul><p><strong>example</strong>：</p><p><code>cx([1, 3])</code></p><p>对第1和第3个量子比特添加cx门，第1个比特为1时，第3个比特执行not操作。</p><h4 id="swap-wires" tabindex="-1"><a class="header-anchor" href="#swap-wires" aria-hidden="true">#</a> swap(wires)</h4><p><strong>为量子电路中选定的比特添加交换门操作。wires为包含两个元素的数组。</strong></p><p><strong>Parameters</strong>:</p><ul><li>wires: 包含两个元素的数组。</li></ul><p>example:</p><p><code>swap([2, 3])</code></p><p>交换第2和第3个量子比特。</p><h4 id="ncnot-wires" tabindex="-1"><a class="header-anchor" href="#ncnot-wires" aria-hidden="true">#</a> ncnot(wires)</h4><p><strong>为量子电路中选定的比特添加受控的NOT门操作</strong>。</p><p><strong>Parameters</strong>:</p><ul><li>wires: 包含超过两个元素的数组，最后一个元素为目标比特，其余为控制比特。</li></ul><p><strong>example</strong>：</p><p><code>ncnot([1,2,3, 4])</code></p><p>为第1、2、3、4个量子比特添加受控的NOT门，第1，2，3个比特为1时，第4个比特执行not操作。</p><h2 id="_3-qubit-rotation-gates-commands" tabindex="-1"><a class="header-anchor" href="#_3-qubit-rotation-gates-commands" aria-hidden="true">#</a> 3.Qubit Rotation Gates Commands</h2><p>对单比特进行X、Y和Z轴的旋转操作，分为固定角和自定义角度门。</p><h3 id="_3-1-single-qubit-rotary-gate-command" tabindex="-1"><a class="header-anchor" href="#_3-1-single-qubit-rotary-gate-command" aria-hidden="true">#</a> 3.1 Single Qubit Rotary Gate Command</h3><h4 id="r2-wires-r4-wires-r8-wires" tabindex="-1"><a class="header-anchor" href="#r2-wires-r4-wires-r8-wires" aria-hidden="true">#</a> r2(wires) r4(wires) r8(wires)</h4><p>使量子电路中选定的比特沿z轴旋转PI/2、PI/4或PI/8。</p><p><strong>Parameters</strong>:</p><ul><li>wires: 数组，包含需要被操作的比特。</li></ul><p><strong>example</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使第0和第1个量子比特沿轴旋转PI/2。</span>
r2<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 使第0和第1个量子比特沿轴旋转PI/4。</span>
r4<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 使第0和第1个量子比特沿轴旋转PI/8。</span>
r8<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="s-wires-t-wires-sdg-wires-tdg-wires" tabindex="-1"><a class="header-anchor" href="#s-wires-t-wires-sdg-wires-tdg-wires" aria-hidden="true">#</a> s(wires) \\ t(wires) \\ sdg(wires) \\ tdg(wires)</h4><p>s门和t门与r2门和r4门相同，用于绕Z轴旋转PI/2和PI/4。sdg和tdg门为沿Z轴旋转 -PI/4 和 -PI/4。。</p><p><strong>Parameters</strong>:</p><ul><li>wires: 数组，包含需要被操作的比特。</li></ul><p><strong>example</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使第0和第1个量子比特沿Z轴旋转 PI/2。</span>
s<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 使第0和第1个量子比特沿Z轴旋转 -PI/4。</span>
tdg<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="u1-lambda-wires-u2-phi-lambda-wires-u3-theta-phi-lambda-wires" tabindex="-1"><a class="header-anchor" href="#u1-lambda-wires-u2-phi-lambda-wires-u3-theta-phi-lambda-wires" aria-hidden="true">#</a> u1(lambda, wires) / u2(phi, lambda, wires) / u3(theta, phi, lambda, wires)</h4><p>使量子电路中选定的比特沿z轴、X+Z轴或X+Y+Z轴同时旋转。theta、phi、lambda采用角度制，用于指定角度。</p><p>Parameters:</p><ul><li><p>theta: 沿X轴旋转角度，采用角度制。</p></li><li><p>phi：沿Y轴旋转角度</p></li><li><p>lambda：Z轴的旋转角度。</p></li><li><p>wires: 数组，包含需要被操作的比特。</p></li></ul><p>example：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 使第0和第1个量子比特沿Z轴旋转45度。</span>
u1<span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># 使第0和第1个量子比特沿X+Y+Z轴分别旋转45度、90度和135度。</span>
u3<span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">135</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="rx-theta-wires-ry-theta-wires-rz-theta-wires-phase-theta-wires" tabindex="-1"><a class="header-anchor" href="#rx-theta-wires-ry-theta-wires-rz-theta-wires-phase-theta-wires" aria-hidden="true">#</a> rx(theta, wires) / ry(theta, wires) / rz(theta,wires) / phase(theta, wires)</h4><p><strong>为量子电路中选定的比特添加沿x, y, z方向旋转的门操作。theta为旋转角度，采用角度制。wires为数组，包含需要被操作的比特。</strong></p><p><strong>Parameters</strong>:</p><ul><li><p>theta: 旋转角度，采用角度制</p></li><li><p>wires: 数组，包含需要被操作的比特。</p></li></ul><p><strong>example</strong>：</p><p><code>rz(90, [1, 3])</code></p><p>使第1和第3个量子比特绕Z轴旋转90度（PI/2）。</p><h3 id="_3-2-multi-qubit-rotary-gate-command" tabindex="-1"><a class="header-anchor" href="#_3-2-multi-qubit-rotary-gate-command" aria-hidden="true">#</a> 3.2 Multi Qubit Rotary Gate Command</h3><h4 id="crx-theta-wires-cry-theta-wires-crz-theta-wires" tabindex="-1"><a class="header-anchor" href="#crx-theta-wires-cry-theta-wires-crz-theta-wires" aria-hidden="true">#</a> crx(theta, wires) / cry(theta, wires) / crz(theta, wires)</h4><p><strong>为量子电路中选定的比特添加受控的沿x，y，z方向旋转的门操作。</strong></p><p><strong>Parameters</strong>:</p><ul><li><p>theta: 旋转角度，采用角度制</p></li><li><p>wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。</p></li></ul><p>example：</p><p><code>crx(90,[1, 3])</code></p><p>对第1和第3个量子比特添加旋转PI/2的crx门，第1个比特为1时第3个比特绕X轴旋转PI/2。</p><h4 id="cr2-theta-wires-cr4-theta-wires-cr8-theta-wires" tabindex="-1"><a class="header-anchor" href="#cr2-theta-wires-cr4-theta-wires-cr8-theta-wires" aria-hidden="true">#</a> cr2(theta, wires) / cr4(theta, wires) / cr8(theta, wires)</h4><p><strong>为量子电路中选定的比特添加受控的沿x，y，z方向旋转的门操作。</strong></p><p>Parameters:</p><ul><li><p>theta: 旋转角度，采用角度制。</p></li><li><p>wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。</p></li></ul><p>example：</p><p><code>cr4([1, 3])</code></p><p>为第1和第3个量子比特添加旋转PI/2的rz门，第1个比特为1时第3个比特绕Z轴旋转PI/4.</p><h4 id="cu1-lambda-wires-cu2-phi-lambda-wires-cu3-theta-phi-lambda-wires" tabindex="-1"><a class="header-anchor" href="#cu1-lambda-wires-cu2-phi-lambda-wires-cu3-theta-phi-lambda-wires" aria-hidden="true">#</a> cu1(lambda,wires)/cu2(phi,lambda,wires)/cu3(theta,phi,lambda, wires)</h4><p><strong>为量子电路中选定的比特添加受控的u1、u2和u3门操作，使量子电路中选择的比特沿Z轴、X+Z轴或X+Y+Z轴同时旋转</strong>。</p><p><strong>Parameters</strong>:</p><ul><li><p>theta: 沿X轴旋转角度，采用角度制。</p></li><li><p>phi：沿Y轴旋转角度</p></li><li><p>lambda：Z轴的旋转角度。</p></li><li><p>wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。</p></li></ul><p><strong>example</strong>：</p><p><code>cu3(45, 90, 135 ,[0, 1])</code></p><p>第0个量子比特为1时。第1个量子比特沿X、Y和Z轴分别旋转PI/4、PI/2、PI*3/4。</p><h4 id="cs-wires-ct-wires-csdg-wires-ctdg-wires" tabindex="-1"><a class="header-anchor" href="#cs-wires-ct-wires-csdg-wires-ctdg-wires" aria-hidden="true">#</a> cs(wires)/ct(wires)/csdg(wires)/ctdg(wires)</h4><p><strong>cs门和ct门与cr2门和cr4门相同，控制比特为1的情况下使目标比特绕Z轴旋转PI/2和PI/4. csdg门和ctdg门为控制比特为1的强况下使目标比特沿Z轴旋转 -PI/2和 -PI/4。</strong></p><p><strong>Parameters</strong>:</p><ul><li>wires: 包含两个元素的数组，前一个元素为控制比特，后一个元素为目标比特。</li></ul><p><strong>example</strong>：</p><p><code>ctdg([0, 1])</code></p><p>第0个量子比特为1时。第1个量子比特沿Z轴旋转 -PI/4。</p><h4 id="ncphase-theta-wires" tabindex="-1"><a class="header-anchor" href="#ncphase-theta-wires" aria-hidden="true">#</a> ncphase(theta, wires)</h4><p><strong>为量子电路中选定的比特添加受控的phase门操作。</strong></p><p><strong>Parameters</strong>:</p><ul><li><p>theta: 旋转角度，采用角度制。</p></li><li><p>wires: 包含超过两个元素的数组，最后一个元素为目标比特，其余为控制比特。</p></li></ul><p><strong>example</strong>：</p><p><code>ncphase(90,[1,2,3,4])</code></p><p>对第1,2,3,4个量子比特添加受控的phase门，第1、2、3个比特为1时，第4个比特绕z轴旋转PI/2。</p><h2 id="format-commands" tabindex="-1"><a class="header-anchor" href="#format-commands" aria-hidden="true">#</a> Format Commands</h2><p>介绍一些辅助接口。</p><h4 id="qprint" tabindex="-1"><a class="header-anchor" href="#qprint" aria-hidden="true">#</a> qprint()</h4><p>在控制台中打印需要的信息。</p><h4 id="startlabel-labelname-endlabel-labelname" tabindex="-1"><a class="header-anchor" href="#startlabel-labelname-endlabel-labelname" aria-hidden="true">#</a> startlabel(labelname) / endlabel(labelname)</h4><p>调用startlabel(labelname),直到endlabel(labelname)调用前的门操作会被包含在名为labelname的标签中，可在Circuit视图中观察到label包含的门操作部分。</p>`,146),i=[t];function p(c,o){return e(),s("div",null,i)}const u=a(r,[["render",p],["__file","QucodeAPI.html.vue"]]);export{u as default};
