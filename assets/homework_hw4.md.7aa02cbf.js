import{_ as l,o as n,c as s,b as t,a as o,d as e}from"./app.454a46e9.js";const Qt=JSON.parse('{"title":"\u4F5C\u4E1A\u56DB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F5C\u4E1A\u8BF4\u660E","slug":"\u4F5C\u4E1A\u8BF4\u660E"},{"level":2,"title":"T1","slug":"t1"},{"level":2,"title":"T2","slug":"t2"},{"level":2,"title":"T3","slug":"t3"},{"level":2,"title":"T4","slug":"t4"},{"level":2,"title":"T5","slug":"t5"},{"level":2,"title":"T6","slug":"t6"},{"level":2,"title":"T7","slug":"t7"},{"level":2,"title":"T8","slug":"t8"},{"level":2,"title":"T9","slug":"t9"},{"level":2,"title":"T10","slug":"t10"}],"relativePath":"homework/hw4.md","lastUpdated":1700051986000}'),i={name:"homework/hw4.md"},r=o(`<h1 id="\u4F5C\u4E1A\u56DB" tabindex="-1">\u4F5C\u4E1A\u56DB <a class="header-anchor" href="#\u4F5C\u4E1A\u56DB" aria-hidden="true">#</a></h1><h2 id="\u4F5C\u4E1A\u8BF4\u660E" tabindex="-1">\u4F5C\u4E1A\u8BF4\u660E <a class="header-anchor" href="#\u4F5C\u4E1A\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>\u4F5C\u4E1A\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u6216\u82F1\u6587\u5B8C\u6210\uFF0C<strong>\u8BF7\u52FF\u6284\u88AD</strong></li><li>BB \u7CFB\u7EDF\u4E0A\u8BF7\u63D0\u4EA4 <strong>\u7535\u5B50\u7248 PDF</strong>\uFF0C\u5141\u8BB8 LaTeX\u3001Markdown\u3001Word\u3001\u624B\u5199\u62CD\u7167\u7B49</li><li>Deadline: 11 \u6708 10 \u65E5 23:30\uFF0C<strong>\u903E\u671F 0 \u5206</strong></li><li>\u672C\u6B21\u4F5C\u4E1A <a href="/pdf/hw4.pdf">PDF</a></li><li><a href="/pdf/ans4.pdf">\u7B54\u6848</a> \u5DF2\u53D1\u5E03</li></ul><h2 id="t1" tabindex="-1">T1 <a class="header-anchor" href="#t1" aria-hidden="true">#</a></h2><p>Recall the machine busy example from Example 2.11 in Section 2.6.7. Assuming the BUSYNESS bit vector is stored in R2, we can use the LC-3 instruction <code>0101 011 010 1 00001</code> (<code>AND R3, R2, #1</code>) to determine whether machine 0 is busy or not. If the result of this instruction is 0, then machine 0 is busy.</p><ol><li>Write an LC-3 instruction that determines whether machine 2 is busy.</li><li>Write an LC-3 instruction that determines whether both machines 2 and 3 are busy.</li><li>Write an LC-3 instruction that determines whether all of the machines are busy.</li><li>Can you write an LC-3 instruction that determines whether machine 6 is busy? Is there a problem here?</li></ol><h2 id="t2" tabindex="-1">T2 <a class="header-anchor" href="#t2" aria-hidden="true">#</a></h2><p>Suppose the following LC-3 program is loaded into memory starting at location x30FF.</p><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;">x30FF</td><td style="text-align:center;">1110 0010 0000 0001</td></tr><tr><td style="text-align:center;">x3100</td><td style="text-align:center;">0110 0100 0100 0010</td></tr><tr><td style="text-align:center;">x3101</td><td style="text-align:center;">1111 0000 0010 0101</td></tr><tr><td style="text-align:center;">x3102</td><td style="text-align:center;">0001 0100 0100 0001</td></tr><tr><td style="text-align:center;">x3103</td><td style="text-align:center;">0001 0100 1000 0010</td></tr></tbody></table><p>If the program is executed, what is the value in R2 at the end of execution?</p><h2 id="t3" tabindex="-1">T3 <a class="header-anchor" href="#t3" aria-hidden="true">#</a></h2><p>The LC-3 ISA contains the instruction <code>LDR DR, BaseR, offset</code>. After the instruction is decoded, the following operations (called microinstructions) are carried out to complete the processing of the <code>LDR</code> instruction:</p><div class="language-"><button class="copy"></button><span class="lang"></span><pre><code><span class="line"><span style="color:#A6ACCD;">MAR &lt;- BaseR + SEXT(offset6) ; set up the memory address</span></span>
<span class="line"><span style="color:#A6ACCD;">MDR &lt;- Memory[MAR] ; read mem at BaseR + offset</span></span>
<span class="line"><span style="color:#A6ACCD;">DR &lt;- MDR ; load DR</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Suppose that the architect of the LC-3 wanted to include an instruction <code>MOVE DR, SR</code> that would copy the memory location with address given by <code>SR</code> and store it into the memory location whose address is in <code>DR</code>.</p><ol><li>The <code>MOVE</code> instruction is not really necessary since it can be accomplished with a sequence of existing LC-3 instructions. What sequence of existing LC-3 instructions implements (also called &quot;emulates&quot;) <code>MOVE R0,R1</code>? (You may assume that no other registers store important values.)</li><li>If the <code>MOVE</code> instruction were added to the LC-3 ISA, what sequence of microinstructions, following the decode operation, would emulate <code>MOVE DR,SR</code>?</li></ol><h2 id="t4" tabindex="-1">T4 <a class="header-anchor" href="#t4" aria-hidden="true">#</a></h2><p>The LC-3 does not have an opcode for <strong>XOR</strong>, so we&#39;re required to write instructions to implement the XOR operation by ourselves. Assume that the reserved opcode <code>1101</code> is implemented as OR instruction, which shares the same format as AND instruction.</p><p>The following instructions will store the value of (R1 XOR R2) to R3 (<code>XOR R3, R1, R2</code>). Fill in the two missing instructions to complete the program. You are only allowed to use the registers R1, R2, R3, and R4.</p><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:center;">Instruction</th></tr></thead><tbody><tr><td style="text-align:center;">x3000</td><td style="text-align:center;">1001 100 001 111111</td></tr><tr><td style="text-align:center;">x3001</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x3002</td><td style="text-align:center;">1001 011 010 111111</td></tr><tr><td style="text-align:center;">x3003</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x3004</td><td style="text-align:center;">1101 011 011 000 100</td></tr></tbody></table><h2 id="t5" tabindex="-1">T5 <a class="header-anchor" href="#t5" aria-hidden="true">#</a></h2><p>List five addressing modes in LC3. Given instructions ADD, NOT, LEA,LDR and JMP, categorize them into operate instructions, data movement instructions, or control instructions. For each instruction mentioned above, list addressing modes that can be used.</p><h2 id="t6" tabindex="-1">T6 <a class="header-anchor" href="#t6" aria-hidden="true">#</a></h2><ol><li>Write a <strong>single</strong> LC3 assembly instruction that copies the content of <code>R5</code> to <code>R4</code>.</li><li>Write a <strong>single</strong> LC3 assembly instruction that clears the content of <code>R3</code>. (i.e. <code>R3 = 0</code>)</li><li>Write <strong>3</strong> LC3 assembly instructions that does <code>R1=R6-R7</code>. <ul><li>You are ONLY allowed to change the value of <code>R1</code>.</li><li>You may assume that the initial value of <code>R1</code> is 0.</li></ul></li><li>Write <strong>3</strong> LC3 assembly instructions that multiply the value at label <code>DATA</code> by 2. (<code>Mem[DATA] = Mem[DATA] * 2</code>) <ul><li>You are ONLY allowed to change the value of <code>R1</code>.</li><li>You don&#39;t need to restore or clear the value of the register you used.</li><li>No need to consider overflow.</li></ul></li><li>Set condition codes based on the value of <code>R1</code> using only <strong>one</strong> LC-3 instruction. <ul><li>You are not allowed to change any value in the registers.</li></ul></li></ol><h2 id="t7" tabindex="-1">T7 <a class="header-anchor" href="#t7" aria-hidden="true">#</a></h2><p>If the current PC points to the address of an <code>JMP</code> instruction, how many memory accesses are required for the LC-3 to process that instruction? What about <code>ADD</code> and <code>LDI</code> instructions?</p><h2 id="t8" tabindex="-1">T8 <a class="header-anchor" href="#t8" aria-hidden="true">#</a></h2><p>The content in PC is x3010. The content of the following memory unit is as follows:</p><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;">x304E</td><td style="text-align:center;">x70A4</td></tr><tr><td style="text-align:center;">x304F</td><td style="text-align:center;">x70A3</td></tr><tr><td style="text-align:center;">x3050</td><td style="text-align:center;">x70A2</td></tr><tr><td style="text-align:center;">x70A2</td><td style="text-align:center;">x70A4</td></tr><tr><td style="text-align:center;">x70A3</td><td style="text-align:center;">x70A3</td></tr><tr><td style="text-align:center;">x70A4</td><td style="text-align:center;">x70A2</td></tr></tbody></table><ol><li>After the execution of the following code, What is the value stored in <code>R6</code>?</li></ol><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;">x3010</td><td style="text-align:center;">1110 0110 0011 1110</td></tr><tr><td style="text-align:center;">x3011</td><td style="text-align:center;">0110 1000 1100 0001</td></tr><tr><td style="text-align:center;">x3012</td><td style="text-align:center;">0110 1111 0000 0001</td></tr><tr><td style="text-align:center;">x3013</td><td style="text-align:center;">0110 1101 1111 1111</td></tr></tbody></table><ol start="2"><li>Can you use one <code>LEA</code> instruction to do the same task as the three instructions above do? (Only consider loading value into <code>R6</code>.)</li></ol><h2 id="t9" tabindex="-1">T9 <a class="header-anchor" href="#t9" aria-hidden="true">#</a></h2><p>After the execution of the following code, the value stored in <code>R0</code> is 12. Please speculate what the value stored in <code>R5</code> is like.</p><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;">x3000</td><td style="text-align:center;">0101 0000 0010 0000</td></tr><tr><td style="text-align:center;">x3001</td><td style="text-align:center;">0101 1111 1110 0000</td></tr><tr><td style="text-align:center;">x3002</td><td style="text-align:center;">0001 1100 0010 0001</td></tr><tr><td style="text-align:center;">x3003</td><td style="text-align:center;">0001 1101 1000 0110</td></tr><tr><td style="text-align:center;">x3004</td><td style="text-align:center;">0101 1001 0100 0110</td></tr><tr><td style="text-align:center;">x3005</td><td style="text-align:center;">0000 0100 0000 0001</td></tr><tr><td style="text-align:center;">x3006</td><td style="text-align:center;">0001 0000 0010 0011</td></tr><tr><td style="text-align:center;">x3007</td><td style="text-align:center;">0001 1111 1110 0010</td></tr><tr><td style="text-align:center;">x3008</td><td style="text-align:center;">0001 0011 1111 0010</td></tr><tr><td style="text-align:center;">x3009</td><td style="text-align:center;">0000 1001 1111 1001</td></tr><tr><td style="text-align:center;">x300A</td><td style="text-align:center;">0101 1111 1110 0000</td></tr></tbody></table><h2 id="t10" tabindex="-1">T10 <a class="header-anchor" href="#t10" aria-hidden="true">#</a></h2>`,35),d=t("code",null,"R0",-1),a=e(" and "),c=t("code",null,"R1",-1),h=e(" contain 16-bit bit vectors. The program below determines if rotating "),g=t("code",null,"R1",-1),x=e(" left by "),u={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453"},_=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),m=[_],T=e(" bits produces the same bit vector that is in "),p=t("code",null,"R0",-1),Q=e(". If yes, the program stores the value "),f={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},w={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453"},b=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),v=[b],R=e(" in M[x3020]. If not, the program stores "),A={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},C={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.891ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 1278 748"},L=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(778,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g>',1),D=[L],V=e(" to M[x3020]."),S=t("p",null,"Rotating left a bit vector by one bit consists of left shifting the bit vector one bit, and then loading into bit[0] the bit that was shifted out of bit[15].",-1),M=t("p",null,[e("For example, rotating left "),t("strong",null,"111"),e("1000011110000 by 3 bits produces 1000011110000"),t("strong",null,"111"),e(".")],-1),k=e("Your job: Complete the program below by supplying the missing instructions so it stores "),H={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453"},I=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),E=[I],P=e(" in location M[x3020] if rotating left "),N=t("code",null,"R1",-1),O=e(" by "),j={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},Y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"1.357ex",height:"1.025ex",role:"img",focusable:"false",viewBox:"0 -442 600 453"},F=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D45B",d:"M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z",style:{"stroke-width":"3"}})])])],-1),W=[F],q=e(" bits produces the bit vector in "),J=t("code",null,"R0",-1),Z=e(", and store "),G={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.186ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.891ex",height:"1.692ex",role:"img",focusable:"false",viewBox:"0 -666 1278 748"},$=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mo"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(778,0)"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path></g></g></g>',1),U=[$],z=e(" if it is not possible to produce the bit vector of "),K=t("code",null,"R0",-1),tt=e(" by rotating left "),et=t("code",null,"R1",-1),nt=e(". You are required to only use four registers: "),st=t("code",null,"R0",-1),ot=e(", "),lt=t("code",null,"R1",-1),it=e(", "),rt=t("code",null,"R2",-1),dt=e(", and "),at=t("code",null,"R3",-1),ct=e("."),ht=o('<blockquote><p>Hint: The highest bit determines whether a 2&#39;s complement is positive or negative.</p></blockquote><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:center;">Value</th></tr></thead><tbody><tr><td style="text-align:center;">x3000</td><td style="text-align:center;">1001 000 000 111111</td></tr><tr><td style="text-align:center;">x3001</td><td style="text-align:center;">0001 000 000 1 00001</td></tr><tr><td style="text-align:center;">x3002</td><td style="text-align:center;">0101 010 010 1 00000</td></tr><tr><td style="text-align:center;">x3003</td><td style="text-align:center;">0001 011 000 0 00 001</td></tr><tr><td style="text-align:center;">x3004</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x3005</td><td style="text-align:center;">0001 010 010 1 00001</td></tr><tr><td style="text-align:center;">x3006</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x3007</td><td style="text-align:center;">0000 010 000000111</td></tr><tr><td style="text-align:center;">x3008</td><td style="text-align:center;">0101 001 001 1 11111</td></tr><tr><td style="text-align:center;">x3009</td><td style="text-align:center;">0000 100 000000010</td></tr><tr><td style="text-align:center;">x300A</td><td style="text-align:center;">0001 001 001 0 00 001</td></tr><tr><td style="text-align:center;">x300B</td><td style="text-align:center;">0000 111 111110111</td></tr><tr><td style="text-align:center;">x300C</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x300D</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x300E</td><td style="text-align:center;">0000 111 111110100</td></tr><tr><td style="text-align:center;">x300F</td><td style="text-align:center;">0101 010 010 1 00000</td></tr><tr><td style="text-align:center;">x3010</td><td style="text-align:center;">0001 010 010 1 11111</td></tr><tr><td style="text-align:center;">x3011</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x3012</td><td style="text-align:center;">1111 0000 0010 0101</td></tr></tbody></table>',2);function gt(xt,ut,yt,_t,mt,Tt){return n(),s("div",null,[r,t("p",null,[d,a,c,h,g,x,t("mjx-container",u,[(n(),s("svg",y,m))]),T,p,Q,t("mjx-container",f,[(n(),s("svg",w,v))]),R,t("mjx-container",A,[(n(),s("svg",C,D))]),V]),S,M,t("p",null,[k,t("mjx-container",H,[(n(),s("svg",B,E))]),P,N,O,t("mjx-container",j,[(n(),s("svg",Y,W))]),q,J,Z,t("mjx-container",G,[(n(),s("svg",X,U))]),z,K,tt,et,nt,st,ot,lt,it,rt,dt,at,ct]),ht])}const ft=l(i,[["render",gt]]);export{Qt as __pageData,ft as default};