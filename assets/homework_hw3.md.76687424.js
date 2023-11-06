import{_ as l,o as n,c as a,b as t,a as s,d as e}from"./app.9339b7f6.js";const r="/assets/hw3-5.44288146.png",_t=JSON.parse('{"title":"\u4F5C\u4E1A\u4E09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4F5C\u4E1A\u8BF4\u660E","slug":"\u4F5C\u4E1A\u8BF4\u660E"},{"level":2,"title":"T1","slug":"t1"},{"level":2,"title":"T2","slug":"t2"},{"level":2,"title":"T3","slug":"t3"},{"level":2,"title":"T4","slug":"t4"},{"level":2,"title":"T5","slug":"t5"},{"level":2,"title":"T6","slug":"t6"},{"level":2,"title":"T7","slug":"t7"},{"level":2,"title":"T8","slug":"t8"},{"level":2,"title":"T9","slug":"t9"},{"level":2,"title":"T10","slug":"t10"}],"relativePath":"homework/hw3.md","lastUpdated":1699281717000}'),o={name:"homework/hw3.md"},d=s('<h1 id="\u4F5C\u4E1A\u4E09" tabindex="-1">\u4F5C\u4E1A\u4E09 <a class="header-anchor" href="#\u4F5C\u4E1A\u4E09" aria-hidden="true">#</a></h1><h2 id="\u4F5C\u4E1A\u8BF4\u660E" tabindex="-1">\u4F5C\u4E1A\u8BF4\u660E <a class="header-anchor" href="#\u4F5C\u4E1A\u8BF4\u660E" aria-hidden="true">#</a></h2><ul><li>\u4F5C\u4E1A\u53EF\u4EE5\u4F7F\u7528\u4E2D\u6587\u6216\u82F1\u6587\u5B8C\u6210\uFF0C<strong>\u8BF7\u52FF\u6284\u88AD</strong></li><li>BB \u7CFB\u7EDF\u4E0A\u8BF7\u63D0\u4EA4 <strong>\u7535\u5B50\u7248 PDF</strong>\uFF0C\u5141\u8BB8 LaTeX\u3001Markdown\u3001Word\u3001\u624B\u5199\u62CD\u7167\u7B49</li><li>Deadline: 10 \u6708 27 \u65E5 23:30\uFF0C<strong>\u903E\u671F 0 \u5206</strong></li><li>\u672C\u6B21\u4F5C\u4E1A <a href="/pdf/hw3.pdf">PDF</a></li><li><a href="/pdf/ans3.pdf">\u7B54\u6848</a> \u5DF2\u53D1\u5E03</li></ul><h2 id="t1" tabindex="-1">T1 <a class="header-anchor" href="#t1" aria-hidden="true">#</a></h2><p>Suppose a 32-bit instruction takes the following format:</p><table style="text-align:center;"><tr><td>OPCODE</td><td>SR</td><td>DR</td><td>IMM</td></tr></table><p>If there are 64 opcodes and 56 registers, what is the range of values that can be represented by the immediate (IMM)? Assume IMM is a 2&#39;s complement value.</p><h2 id="t2" tabindex="-1">T2 <a class="header-anchor" href="#t2" aria-hidden="true">#</a></h2><p>An LC-3 program is stored in memory locations <code>x3000</code> to <code>x3005</code>. Note that the branch instruction in memory location <code>x3002</code> has an unspecified PCoffset9, denoted as <strong>X</strong>.</p><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:left;">Instruction</th></tr></thead><tbody><tr><td style="text-align:center;"><code>x3000</code></td><td style="text-align:left;">0101 000 000 1 00000</td></tr><tr><td style="text-align:center;"><code>x3001</code></td><td style="text-align:left;">0001 000 000 1 00010</td></tr><tr><td style="text-align:center;"><code>x3002</code></td><td style="text-align:left;">0000 011 <strong>X</strong></td></tr><tr><td style="text-align:center;"><code>x3003</code></td><td style="text-align:left;">0001 000 000 1 00011</td></tr><tr><td style="text-align:center;"><code>x3004</code></td><td style="text-align:left;">0001 000 000 1 00001</td></tr><tr><td style="text-align:center;"><code>x3005</code></td><td style="text-align:left;">1111 0000 0010 0101</td></tr></tbody></table><p>The program starts executing with <code>PC = x3000</code>.</p><p>Your job: In the table below, for each value of <strong>X</strong>, answer the question: &quot;Does the program halt?&quot; (Yes or No). If your answer is &quot;Yes&quot;, answer the question: &quot;What value is stored in <code>R0</code> just before the instruction at <code>x3005</code> begins execution?&quot; If your answer is &quot;No&quot;, put a dash in the column labeled &quot;Value stored in <code>R0</code>&quot;.</p><table><thead><tr><th style="text-align:center;"><strong>X</strong></th><th style="text-align:center;">Does the program halt?</th><th style="text-align:center;">Value stored in <code>R0</code></th></tr></thead><tbody><tr><td style="text-align:center;">000000010</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">000000001</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">000000000</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">111111111</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">111111110</td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr></tbody></table><h2 id="t3" tabindex="-1">T3 <a class="header-anchor" href="#t3" aria-hidden="true">#</a></h2><p>After these two instructions execute: The next instruction to execute will be the instruction at <code>x3009</code> if what?</p><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:center;">Instruction</th></tr></thead><tbody><tr><td style="text-align:center;"><code>x3000</code></td><td style="text-align:center;">0001 000 001 0 00 010</td></tr><tr><td style="text-align:center;"><code>x3001</code></td><td style="text-align:center;">0000 011 000000111</td></tr></tbody></table><h2 id="t4" tabindex="-1">T4 <a class="header-anchor" href="#t4" aria-hidden="true">#</a></h2><p>Suppose we changed the LC-3 to have only <strong>four</strong> registers instead of 8. Fewer registers is in general a bad idea since it means loading from memory and storing to memory more often, but we can still ask the question: would there be any benefit to reducing the number of registers? For each of the following, answer yes or no, and explain your answer.</p><ol><li>If we keep the basic format of all instructions as they currently are (and keep each instruction 16 bits), is there any benefit for operate (0001, 0101, 1001) instructions, if we reduce the number of registers to 4?</li><li>Is there any benefit for load (0010) and store (0011) instructions, if we reduce the number of registers to 4?</li><li>Is there any benefit for conditional branch (0000) instructions, if we reduce the number of registers to 4?</li></ol><h2 id="t5" tabindex="-1">T5 <a class="header-anchor" href="#t5" aria-hidden="true">#</a></h2>',20),i=e("We've got a "),c={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},Q={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.462ex"},xmlns:"http://www.w3.org/2000/svg",width:"7.209ex",height:"2.348ex",role:"img",focusable:"false",viewBox:"0 -833.9 3186.6 1037.9"},h=s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(533,363) scale(0.707)"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z" style="stroke-width:3;"></path></g></g><g data-mml-node="mtext" transform="translate(936.6,0)"><path data-c="2D" d="M11 179V252H277V179H11Z" style="stroke-width:3;"></path><path data-c="62" d="M307 -11Q234 -11 168 55L158 37Q156 34 153 28T147 17T143 10L138 1L118 0H98V298Q98 599 97 603Q94 622 83 628T38 637H20V660Q20 683 22 683L32 684Q42 685 61 686T98 688Q115 689 135 690T165 693T176 694H179V543Q179 391 180 391L183 394Q186 397 192 401T207 411T228 421T254 431T286 439T323 442Q401 442 461 379T522 216Q522 115 458 52T307 -11ZM182 98Q182 97 187 90T196 79T206 67T218 55T233 44T250 35T271 29T295 26Q330 26 363 46T412 113Q424 148 424 212Q424 287 412 323Q385 405 300 405Q270 405 239 390T188 347L182 339V98Z" transform="translate(333,0)" style="stroke-width:3;"></path><path data-c="79" d="M69 -66Q91 -66 104 -80T118 -116Q118 -134 109 -145T91 -160Q84 -163 97 -166Q104 -168 111 -168Q131 -168 148 -159T175 -138T197 -106T213 -75T225 -43L242 0L170 183Q150 233 125 297Q101 358 96 368T80 381Q79 382 78 382Q66 385 34 385H19V431H26L46 430Q65 430 88 429T122 428Q129 428 142 428T171 429T200 430T224 430L233 431H241V385H232Q183 385 185 366L286 112Q286 113 332 227L376 341V350Q376 365 366 373T348 383T334 385H331V431H337H344Q351 431 361 431T382 430T405 429T422 429Q477 429 503 431H508V385H497Q441 380 422 345Q420 343 378 235T289 9T227 -131Q180 -204 113 -204Q69 -204 44 -177T19 -116Q19 -89 35 -78T69 -66Z" transform="translate(889,0)" style="stroke-width:3;"></path><path data-c="2D" d="M11 179V252H277V179H11Z" transform="translate(1417,0)" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(2686.6,0)"><path data-c="33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z" style="stroke-width:3;"></path></g></g></g>',1),T=[h],g=e(" bit memory, which is "),_=t("strong",null,"initialized to store the value 1",-1),x=e(" in every cell. The table below shows the values of the two-bit address "),m={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},y={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.697ex",height:"1.62ex",role:"img",focusable:"false",viewBox:"0 -716 750 716"},u=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D434",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",style:{"stroke-width":"3"}})])])],-1),p=[u],f=e(", one-bit write enable "),w={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},b={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.1ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -683 1812 705"},v=s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44A" d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1048,0)"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z" style="stroke-width:3;"></path></g></g></g>',1),H=[v],L=e(", and three-bit data-in signals "),V={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.357ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.573ex",height:"1.902ex",role:"img",focusable:"false",viewBox:"0 -683 1579.2 840.8"},k=s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D437" d="M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(861,-150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(345,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g></g></g>',1),A=[k],C=e(" during each access:"),S=t("th",{style:{"text-align":"center"}},"Cycle No.",-1),D={style:{"text-align":"center"}},I={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},Z={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"1.697ex",height:"1.62ex",role:"img",focusable:"false",viewBox:"0 -716 750 716"},P=t("g",{stroke:"currentColor",fill:"currentColor","stroke-width":"0",transform:"scale(1,-1)"},[t("g",{"data-mml-node":"math"},[t("g",{"data-mml-node":"mi"},[t("path",{"data-c":"1D434",d:"M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z",style:{"stroke-width":"3"}})])])],-1),R=[P],N=e("[1:0]"),j={style:{"text-align":"center"}},q={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},B={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"4.1ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -683 1812 705"},O=s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D44A" d="M436 683Q450 683 486 682T553 680Q604 680 638 681T677 682Q695 682 695 674Q695 670 692 659Q687 641 683 639T661 637Q636 636 621 632T600 624T597 615Q597 603 613 377T629 138L631 141Q633 144 637 151T649 170T666 200T690 241T720 295T759 362Q863 546 877 572T892 604Q892 619 873 628T831 637Q817 637 817 647Q817 650 819 660Q823 676 825 679T839 682Q842 682 856 682T895 682T949 681Q1015 681 1034 683Q1048 683 1048 672Q1048 666 1045 655T1038 640T1028 637Q1006 637 988 631T958 617T939 600T927 584L923 578L754 282Q586 -14 585 -15Q579 -22 561 -22Q546 -22 542 -17Q539 -14 523 229T506 480L494 462Q472 425 366 239Q222 -13 220 -15T215 -19Q210 -22 197 -22Q178 -22 176 -15Q176 -12 154 304T131 622Q129 631 121 633T82 637H58Q51 644 51 648Q52 671 64 683H76Q118 680 176 680Q301 680 313 683H323Q329 677 329 674T327 656Q322 641 318 637H297Q236 634 232 620Q262 160 266 136L501 550L499 587Q496 629 489 632Q483 636 447 637Q428 637 422 639T416 648Q416 650 418 660Q419 664 420 669T421 676T424 680T428 682T436 683Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(1048,0)"><path data-c="1D438" d="M492 213Q472 213 472 226Q472 230 477 250T482 285Q482 316 461 323T364 330H312Q311 328 277 192T243 52Q243 48 254 48T334 46Q428 46 458 48T518 61Q567 77 599 117T670 248Q680 270 683 272Q690 274 698 274Q718 274 718 261Q613 7 608 2Q605 0 322 0H133Q31 0 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H757Q764 676 764 669Q764 664 751 557T737 447Q735 440 717 440H705Q698 445 698 453L701 476Q704 500 704 528Q704 558 697 578T678 609T643 625T596 632T532 634H485Q397 633 392 631Q388 629 386 622Q385 619 355 499T324 377Q347 376 372 376H398Q464 376 489 391T534 472Q538 488 540 490T557 493Q562 493 565 493T570 492T572 491T574 487T577 483L544 351Q511 218 508 216Q505 213 492 213Z" style="stroke-width:3;"></path></g></g></g>',1),E=[O],J={style:{"text-align":"center"}},W={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.357ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.573ex",height:"1.902ex",role:"img",focusable:"false",viewBox:"0 -683 1579.2 840.8"},G=s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msub"><g data-mml-node="mi"><path data-c="1D437" d="M287 628Q287 635 230 637Q207 637 200 638T193 647Q193 655 197 667T204 682Q206 683 403 683Q570 682 590 682T630 676Q702 659 752 597T803 431Q803 275 696 151T444 3L430 1L236 0H125H72Q48 0 41 2T33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM703 469Q703 507 692 537T666 584T629 613T590 629T555 636Q553 636 541 636T512 636T479 637H436Q392 637 386 627Q384 623 313 339T242 52Q242 48 253 48T330 47Q335 47 349 47T373 46Q499 46 581 128Q617 164 640 212T683 339T703 469Z" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(861,-150) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mi"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g><g data-mml-node="mi" transform="translate(345,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z" style="stroke-width:3;"></path></g></g></g></g></g>',1),F=[G],Y=e("[2:0]"),$=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"0 1"),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"1 0 1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"2"),t("td",{style:{"text-align":"center"}},"1 1"),t("td",{style:{"text-align":"center"}},"0"),t("td",{style:{"text-align":"center"}},"1 1 0")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"3"),t("td",{style:{"text-align":"center"}},"1 0"),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"0 1 0")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"4"),t("td",{style:{"text-align":"center"}},"0 1"),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"0 1 1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"5"),t("td",{style:{"text-align":"center"}},"1 1"),t("td",{style:{"text-align":"center"}},"0"),t("td",{style:{"text-align":"center"}},"1 0 1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"6"),t("td",{style:{"text-align":"center"}},"0 0"),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"1 0 1")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"7"),t("td",{style:{"text-align":"center"}},"1 1"),t("td",{style:{"text-align":"center"}},"1"),t("td",{style:{"text-align":"center"}},"1 1 0")]),t("tr",null,[t("td",{style:{"text-align":"center"}},"8"),t("td",{style:{"text-align":"center"}},"1 1"),t("td",{style:{"text-align":"center"}},"0"),t("td",{style:{"text-align":"center"}},"0 1 0")])],-1),U=s('<p>You are required to fill in the values stored in each memory cell and the three data-out lines just <strong>before the end of the eighth cycle</strong> (those marked by question marks <code>?</code>).</p><p><img src="'+r+'" alt="t5"></p><h2 id="t6" tabindex="-1">T6 <a class="header-anchor" href="#t6" aria-hidden="true">#</a></h2><p>Consider a memory that we will perform five successive accesses to. The following table shows the type of each access (<strong>R</strong>ead (load), <strong>W</strong>rite (store)), and the contents of the MAR and MDR at the <strong>completion</strong> of the access. Note that we have shortened the addressability to 5 bits.</p><table><thead><tr><th style="text-align:center;">Operation No.</th><th style="text-align:center;">R/W</th><th style="text-align:center;">MAR</th><th style="text-align:center;">MDR</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">W</td><td style="text-align:center;">x____</td><td style="text-align:center;">11110</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">_</td><td style="text-align:center;">x____</td><td style="text-align:center;">_____</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:center;">W</td><td style="text-align:center;">x____</td><td style="text-align:center;">10___</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:center;">_</td><td style="text-align:center;">x____</td><td style="text-align:center;">_____</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:center;">_</td><td style="text-align:center;">x____</td><td style="text-align:center;">_____</td></tr></tbody></table><p>The following table show the contents of memory locations at <code>x4000</code> to <code>x4004</code> <em>before the first access, after the third access, and after the fifth access</em>. We have added a constraint to this problem in order to get one correct answer: The MDR can <strong>ONLY</strong> be loaded from memory as a result of a load (read) access.</p><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:center;">Before Access 1</th><th style="text-align:center;">After Access 3</th><th style="text-align:center;">After Access 5</th></tr></thead><tbody><tr><td style="text-align:center;"><code>x4000</code></td><td style="text-align:center;">01101</td><td style="text-align:center;">____0</td><td style="text-align:center;">_____</td></tr><tr><td style="text-align:center;"><code>x4001</code></td><td style="text-align:center;">11010</td><td style="text-align:center;">_0__0</td><td style="text-align:center;">_____</td></tr><tr><td style="text-align:center;"><code>x4002</code></td><td style="text-align:center;">_1___</td><td style="text-align:center;">_____</td><td style="text-align:center;">_____</td></tr><tr><td style="text-align:center;"><code>x4003</code></td><td style="text-align:center;">10110</td><td style="text-align:center;">_____</td><td style="text-align:center;">01101</td></tr><tr><td style="text-align:center;"><code>x4004</code></td><td style="text-align:center;">11110</td><td style="text-align:center;">11110</td><td style="text-align:center;">11110</td></tr></tbody></table><p>You&#39;re required to fill in the blanks.</p><h2 id="t7" tabindex="-1">T7 <a class="header-anchor" href="#t7" aria-hidden="true">#</a></h2>',9),z=e("If a machine cycle is 5 nanoseconds (i.e., "),K={class:"MathJax",jax:"SVG",style:{direction:"ltr"}},tt={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.05ex"},xmlns:"http://www.w3.org/2000/svg",width:"8.392ex",height:"2.005ex",role:"img",focusable:"false",viewBox:"0 -864 3709.1 886"},et=s('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mn"><path data-c="35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z" style="stroke-width:3;"></path></g><g data-mml-node="mo" transform="translate(722.2,0)"><path data-c="D7" d="M630 29Q630 9 609 9Q604 9 587 25T493 118L389 222L284 117Q178 13 175 11Q171 9 168 9Q160 9 154 15T147 29Q147 36 161 51T255 146L359 250L255 354Q174 435 161 449T147 471Q147 480 153 485T168 490Q173 490 175 489Q178 487 284 383L389 278L493 382Q570 459 587 475T609 491Q630 491 630 471Q630 464 620 453T522 355L418 250L522 145Q606 61 618 48T630 29Z" style="stroke-width:3;"></path></g><g data-mml-node="msup" transform="translate(1722.4,0)"><g data-mml-node="mn"><path data-c="31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z" style="stroke-width:3;"></path><path data-c="30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z" transform="translate(500,0)" style="stroke-width:3;"></path></g><g data-mml-node="TeXAtom" transform="translate(1033,393.1) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mo"><path data-c="2212" d="M84 237T84 250T98 270H679Q694 262 694 250T679 230H98Q84 237 84 250Z" style="stroke-width:3;"></path></g><g data-mml-node="mn" transform="translate(778,0)"><path data-c="39" d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z" style="stroke-width:3;"></path></g></g></g></g></g>',1),nt=[et],at=e(" seconds), how many machine cycles occur each second?"),st=t("li",null,[t("p",null,[e("Suppose the computer requires an average of "),t("strong",null,"eight cycles"),e(" to process each instruction, and the computer processes instructions "),t("strong",null,"one at a time"),e(" from beginning to end. Then how many instructions can the computer process in 1 second?")])],-1),lt=t("li",null,[t("p",null,[e("Modern microprocessors usually uses the "),t("strong",null,"pipeline"),e(" technique to fully utilize the CPU. Pipeline is computer\u2019s equivalent of an assembly line. Each phase of the instruction cycle is implemented as one or more separate pieces of logic. Each step in the processing of an instruction picks up where the previous step left off in the previous machine cycle. Using this feature, an instruction can be fetched from memory "),t("strong",null,"every machine cycle"),e(" and handed off at the end of the machine cycle to the decoder, which performs the decoding function during the next machine cycle while the next instruction is being fetched. In short, by properly dividing an instruction into multiple phases, we can run several instructions at the same time. How many instructions can the computer process in 1 second if we apply the pipeline technique?")])],-1),rt=s('<h2 id="t8" tabindex="-1">T8 <a class="header-anchor" href="#t8" aria-hidden="true">#</a></h2><p>The LC-3 does not have an opcode for the logical function XOR. The eight instruction sequence below performs the XOR of the contents of <strong>R1</strong> and <strong>R2</strong> and puts the result in <strong>R3</strong>. Fill in the four missing instructions so that the eight instruction sequence will do the job.</p><table><thead><tr><th style="text-align:center;">Address</th><th style="text-align:center;">Instruction</th></tr></thead><tbody><tr><td style="text-align:center;"><code>x3000</code></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>x3001</code></td><td style="text-align:center;">1001 110 010 111111</td></tr><tr><td style="text-align:center;"><code>x3002</code></td><td style="text-align:center;">0101 101 111 000 010</td></tr><tr><td style="text-align:center;"><code>x3003</code></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>x3004</code></td><td style="text-align:center;">1001 001 101 111111</td></tr><tr><td style="text-align:center;"><code>x3005</code></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>x3006</code></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;"><code>x3007</code></td><td style="text-align:center;">1001 011 000 111111</td></tr></tbody></table><h2 id="t9" tabindex="-1">T9 <a class="header-anchor" href="#t9" aria-hidden="true">#</a></h2><p>We would like to have an instruction that does nothing. Many ISAs actually have an opcode devoted to doing nothing. It is usually called <strong>NOP</strong>, which means NO OPERATION. The instruction is fetched, decoded, and executed. The execution phase is to do nothing! Which of the following five instructions could be used for NOP and have the program still work correctly? For other instructions, please describe what they have done.</p><ol><li>0001 010 001 1 00010</li><li>0000 111 000000000</li><li>0000 101 000000100</li><li>1001 010 111 111111</li><li>1111 0000 00100011</li></ol><h2 id="t10" tabindex="-1">T10 <a class="header-anchor" href="#t10" aria-hidden="true">#</a></h2><p>Please describe the limitations of the BR instruction in LC-3 and how JMP instruction addresses the issue.</p>',8);function ot(dt,it,ct,Qt,ht,Tt){return n(),a("div",null,[d,t("p",null,[i,t("mjx-container",c,[(n(),a("svg",Q,T))]),g,_,x,t("mjx-container",m,[(n(),a("svg",y,p))]),f,t("mjx-container",w,[(n(),a("svg",b,H))]),L,t("mjx-container",V,[(n(),a("svg",M,A))]),C]),t("table",null,[t("thead",null,[t("tr",null,[S,t("th",D,[t("mjx-container",I,[(n(),a("svg",Z,R))]),N]),t("th",j,[t("mjx-container",q,[(n(),a("svg",B,E))])]),t("th",J,[t("mjx-container",W,[(n(),a("svg",X,F))]),Y])])]),$]),U,t("ol",null,[t("li",null,[t("p",null,[z,t("mjx-container",K,[(n(),a("svg",tt,nt))]),at])]),st,lt]),rt])}const xt=l(o,[["render",ot]]);export{_t as __pageData,xt as default};
