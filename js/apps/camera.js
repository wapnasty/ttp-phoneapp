const _0x5d9a9d=_0x30fb;!function(){for(var e=_0x30fb,n=_0x4fc0();;)try{if(434445==-parseInt(e(593))+parseInt(e(312))/2*(parseInt(e(455))/3)+-parseInt(e(497))/4*(parseInt(e(530))/5)+parseInt(e(594))/6*(parseInt(e(334))/7)+parseInt(e(421))/8+parseInt(e(277))/9*(parseInt(e(219))/10)+-parseInt(e(398))/11)break;n.push(n.shift())}catch(e){n.push(n.shift())}}();let videoTime=0,mediaRecorder,timeOut,uploading,recordingVideo,currentlySelectedFooter=_0x5d9a9d(574)+_0x5d9a9d(496),cacheCameraUrl=null,recordedChunks=[],cacheCameraUrlInterval=null;const openCanvas=()=>{var e=_0x5d9a9d,n={kwwOH:e(368)+e(284),YuHhB:e(438),HCFgg:function(e,n){return e(n)},SnRop:e(407),CzTNl:function(e,n){return e(n)}},t=document[e(379)+e(328)](n[e(365)]);t[e(578)][e(347)]=n[e(623)],MainRender[e(262)+e(417)](t),n[e(327)](Post,n[e(361)]),cacheCameraUrlInterval&&(n[e(267)](clearInterval,cacheCameraUrlInterval),cacheCameraUrlInterval=null)},cameraSound=()=>{var e=_0x5d9a9d,n={jWtor:e(491)+e(373)+e(211)},n=new Audio(n[e(227)]);n[e(420)]=.7,n[e(632)]()},clearCanvas=()=>{var e=_0x5d9a9d,n={ijxmO:e(541)+"0",ZbseI:function(e){return e()},RtgVd:function(e,n){return e(n)},UqfTY:e(257)+e(534),emtMj:function(e){return e()},VzWCb:function(e){return e()},vEHgw:function(e){return e()}},t=n[e(286)][e(205)]("|");let r=0;for(;;){switch(t[r++]){case"0":n[e(224)](hideHelper);continue;case"1":MainRender[e(512)]();continue;case"2":n[e(338)](Post,n[e(344)]);continue;case"3":n[e(376)](stopInstagramLive);continue;case"4":n[e(477)](stopRecordVideo);continue;case"5":n[e(206)](instagramCloseLive);continue}break}},showHelper=()=>{var e=_0x5d9a9d,n={JyqFc:function(e,n){return e(n)},aFAmJ:e(467)+e(589),NqMCk:e(454)};n[e(381)]($,n[e(570)])[e(580)+"s"](n[e(329)])},hideHelper=()=>{var e=_0x5d9a9d,n={wytin:function(e,n){return e(n)},kwSfE:e(467)+e(589),HmNSm:e(454)};n[e(527)]($,n[e(601)])[e(564)](n[e(619)])},toggleLoading=e=>{var n=_0x5d9a9d,t={OebUG:function(e,n){return e(n)},EtcGz:n(517)+n(342)+n(353),traSv:n(347),xGPoL:n(470),kdFYX:n(540)+n(596),BcPSn:n(630)};(uploading=e)?t[n(378)]($,t[n(330)])[n(575)](t[n(296)],t[n(599)]):(t[n(378)]($,t[n(301)])[n(256)](t[n(463)]),t[n(378)]($,t[n(330)])[n(255)](0))},formatBytes=(e,n=2)=>{var t,r,a=_0x5d9a9d,o={lWstp:function(e,n){return e===n},dHXwr:a(372),zNrzG:function(e,n){return e<n},CfMTq:a(611),CsoWt:function(e,n){return e/n},MZxLi:function(e,n){return e+n},Pjpre:function(e,n){return e+n},AqMHU:function(e,n){return e(n)},DuNLl:function(e,n){return e/n}};return o[a(313)](e,0)?o[a(442)]:(n=o[a(253)](n,0)?0:n,t=[o[a(213)],"KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math[a(519)](o[a(586)](Math[a(274)](e),Math[a(274)](1024))),o[a(314)](o[a(549)](o[a(501)](parseFloat,o[a(515)](e,Math[a(473)](1024,r))[a(399)](n))," "),t[r]))};function _0x30fb(e,n){const t=_0x4fc0();return(_0x30fb=function(e,n){return e-=202,t[e]})(e,n)}async function OpenSelectCamItem(){const n=_0x5d9a9d,i={IrqRT:n(535),NcaDu:function(e,n,t){return e(n,t)},jxSSK:function(e,n){return e(n)},ZYCUY:function(e){return e()},DcUlC:function(e,n){return e(n)},dAJee:n(251)},c=OpenedApplication;return await i[n(223)](CloseApplication),await i[n(343)](OpenApplication,i[n(375)]),new Promise((r,e)=>{const a=n,o={SuBqS:i[a(613)],fUqcw:function(e,n,t){var r=a;return i[r(316)](e,n,t)},Utgok:function(e,n){var t=a;return i[t(243)](e,n)},RYXiB:function(e){var n=a;return i[n(223)](e)}};cacheCameraUrlInterval=i[a(316)](setInterval,async()=>{var n=a;if(cacheCameraUrl){var t=o[n(571)][n(205)]("|");let e=0;for(;;){switch(t[e++]){case"0":await o[n(554)](OpenApplication,c,!0);continue;case"1":o[n(229)](r,cacheCameraUrl);continue;case"2":await o[n(233)](CloseApplication);continue;case"3":o[n(229)](clearInterval,cacheCameraUrlInterval);continue;case"4":cacheCameraUrlInterval=null;continue}break}}},100)})}const bytesToMegaBytes=e=>e/1048576,uploadVideo=()=>{const t=_0x5d9a9d,r={WlBgs:function(e,n,t){return e(n,t)},SbZjO:t(204),SoBvN:function(e,n){return e(n)},trIKR:t(270),djYrS:function(e,n,t,r,a,o){return e(n,t,r,a,o)},eewyN:t(251),kenIo:function(e,n){return e(n)},SztWu:t(480)+t(283)+t(221)+"E",jiaFh:t(480)+t(283)+t(254)+t(214),Lcmjj:t(355),xQUoF:function(e,n){return e(n)},DYOkt:function(e,n){return n<e},ZpdPR:t(447)+"ge",jYVit:function(e,n){return e(n)},igsph:function(e,n){return e(n)},PDHkm:t(405),ntGwN:t(510),bnwuw:t(272),SgPqD:t(306),algxe:t(559),mklyL:t(546)+t(513)+"o"};r[t(383)](toggleLoading,!0);var e=new Blob(recordedChunks,{type:r[t(345)]}),n=r[t(498)](bytesToMegaBytes,e[t(536)]);if(r[t(285)](n,10))r[t(498)](Post,r[t(604)]),r[t(260)](toggleLoading,!1);else{r[t(237)](clearTimeout,timeOut);var n=new Headers,a=new FormData,o=LuaConfig[t(558)+t(275)]?r[t(369)]:r[t(539)],o=(a[t(547)](o,e,r[t(487)]),{method:r[t(625)],headers:n,body:a,redirect:r[t(636)]});try{r[t(522)](fetch,r[t(498)](getWebhook,r[t(369)]),o)[t(590)](e=>e[t(490)]())[t(590)](async e=>{var n=t;if(e=JSON[n(419)](e),LuaConfig[n(558)+n(275)])cacheCameraUrl=e[n(261)];else{if(!e[n(217)+"s"])return;cacheCameraUrl=e?.[n(217)+"s"]?.[0]?.[n(242)]}await r[n(522)](Post,r[n(504)],{url:cacheCameraUrl});e=await r[n(383)](Post,r[n(621)]);r[n(383)](SetupPhotos,e),r[n(452)](SendPhoneNotificationOld,r[n(523)],r[n(583)](Lang,r[n(443)]),r[n(383)](Lang,r[n(269)]),2500,!0),r[n(522)](setTimeout,()=>{cacheCameraUrl=null},5e3)})[t(502)](()=>toggleLoading(!1))}catch{r[t(583)](toggleLoading,!1),console[t(401)](r[t(340)])}}},handleDataAvailable=e=>{var n=_0x5d9a9d,t={gahpL:function(e,n){return n<e},SWDnd:function(e){return e()}};recordedChunks=[],t[n(402)](e[n(425)][n(536)],0)&&(recordedChunks[n(429)](e[n(425)]),t[n(244)](uploadVideo))},stopRecordVideo=()=>{var e=_0x5d9a9d,n={jOmRx:e(335)+"0",wfood:function(e,n,t){return e(n,t)},LDHle:e(440)+"Ui",rXjqm:function(e,n){return e(n)},EvaWl:e(507)+e(412),WjeZz:e(532)+e(245),jBgki:function(e,n){return e||n},Ueuln:function(e){return e()}},t=n[e(238)][e(205)]("|");let r=0;for(;;){switch(t[r++]){case"0":n[e(371)](Post,n[e(384)],{hide:!1});continue;case"1":n[e(311)]($,n[e(550)])[e(580)+"s"](n[e(322)]);continue;case"2":if(n[e(592)](!mediaRecorder,!recordingVideo))return;continue;case"3":mediaRecorder?.[e(512)]?.();continue;case"4":n[e(469)](stopVideoTimer);continue;case"5":recordingVideo=!1;continue}break}},recordVideo=async()=>{const n=_0x5d9a9d,t={TnLDM:function(e,n){return e==n},QQfxd:n(291),AJawP:function(e){return e()},iIueq:function(e,n,t){return e(n,t)},jLNRi:n(440)+"Ui",dkyxV:function(e){return e()},FQUWu:function(e,n){return e(n)},nzkhH:n(507)+n(412),qoZCh:n(532)+n(245),NtOgs:n(368)+n(284),HBeiT:n(355)+n(446)+"p9",gLxnX:function(e,n,t){return e(n,t)}};await t[n(395)](Post,t[n(370)],{hide:!0}),t[n(323)](startVideoTimer),recordingVideo=!0,t[n(439)]($,t[n(529)])[n(564)](t[n(603)]);var e=document[n(379)+n(328)](t[n(297)])[n(293)+n(333)](),r={mimeType:t[n(307)]},a=await navigator[n(598)+"es"][n(557)+"ia"]({audio:!0}),e=e[n(465)+n(396)](),a=a[n(308)+n(396)](),e=new MediaStream([e[0],a[0]]);(mediaRecorder=new MediaRecorder(e,r))[n(618)+n(518)]=handleDataAvailable,mediaRecorder[n(299)](),timeOut=t[n(235)](setTimeout,()=>{var e=n;t[e(461)](mediaRecorder[e(377)],t[e(500)])&&t[e(492)](stopRecordVideo)},23e3)};function _0x4fc0(){const e=["offsetX","gLxnX",'35z"></pat',"igsph","jOmRx"," 204zM301.","XLBBA","nTnjJ","proxy_url","jxSSK","SWDnd","ideo",".83 320H96","ZUCTc","OcVor","zECMB"," 16 0 00-1","camera",'h d="M432 ',"zNrzG","AMERA_VIDE","fadeOut","html","stopSelfie","YZJSK","35l151 151","jYVit","url","renderToTa"," 26.06L209","pLuOT","-100%","afEfS","CzTNl","\n         ","jiaFh","GetPhotos","eenshot","video.webm","GqnbJ","log","iveManage","Video","45wkBggx",".19L335.4 ","1432 448zm","cpGCk","de ul"," 0096 320h","FICATION_C","vas","DYOkt","ijxmO","JwmQo","MqtUV","nRrhb","eUKWz","recording","files[]","captureStr","djQSM","vTxvb","traSv","NtOgs","offsetY","start","rotateCame","kdFYX",".slick-cur","slick","children","acyeP","POST","HBeiT","getAudioTr",'th="0" vie',"#save-vide","rXjqm","68710osfRSK","lWstp","MZxLi","ibIMH","NcaDu",'" width="1',"xMzGT","307.19 192","eo-contain","CTMat","WjeZz","dkyxV","src","jcTfX",".8-75.16A1","HCFgg","ById","NqMCk","EtcGz","MsHIV","container","eam","98mQZLWn","2|4|3|5|1|","Vdyyh",'wBox="0 0 ',"RtgVd","kpQDs","mklyL","stFGJ","ader-conta","DcUlC","UqfTY","Lcmjj",".3.1-.59.1","display","FvdrE"," 0 00431.5",".06L302.73",".94-.31l60",'="M194.82 ',"iner","lfgGl","video/webm","032.5 14.5","afterChang","00302.73 2","18.36 0 01","122.62-22.","SnRop","4.46a4 4 0","h   path d","18.45 0 01","kwwOH","0 01-14.42","c0 .3-.08.","camera-can","PDHkm","jLNRi","wfood","0 Bytes","ds/cameraS"," 4 0 00-5.","dAJee","emtMj","state","OebUG","getElement",".phone-vid","JyqFc","padStart","SoBvN","LDHle","9l-352-352","hiUgA","tTOLY","jhwmH",'eight="1em',"     </svg","08 16 16 0"," 293.64A16","jIetK","getLandsca","iIueq","acks","moJWc","7220521nLnCEy","toFixed","ixpim","error","gahpL","evlDR","BbexY","video",'em" xmlns=',"selfieMode","TiktokGetV","496a18.36 ","62l352 352","kYAeb","ke-photo","w.w3.org/2","MtDab","3l-92.58 1","VfDIP","rget","requestScr","parse","volume","4974360ITBgfx","ge-source-","hqsNF","A16 16 0 0","data","-151-151a4",".09 154.36",".37 16.37 ","push","child","Dwdqu","0 0080.5 3","bZTuI","takingVide","15.92 0 01","ScQlx","tMerl","block","FQUWu","hideCamera",' 7z"></pat',"dHXwr","SztWu",".camera-mo","MQSkD","; codecs=v","sizeTooLar",".camera-fo","parent","59-.13.89L","nder-conta","djYrS","fadeIn","hidden","9ABYEQF","VRsed","keypress","pUlSX","toString"," 0 0112.44","TnLDM","setLandsca","BcPSn",'000/svg">\n',"getVideoTr","BFORe","#camera-he","GbUpF","Ueuln","flex","37.63c.05-",".24 489a18","pow","32.8 13.71","NnnkZ","uOXBb","VzWCb","vkRgB","IHKly","PHONE_NOTI",'roke="curr',"tiktok","animate","txeQh","GUbFI",'entColor" ',"bnwuw","container-","3l92.61-11","text","/html/soun","AJawP","UnIWH","KtHeS","aJycS","o-footer","44NjdRIp","xQUoF","5|3|2|1|0|","QQfxd","AqMHU","finally","aJPRc","SbZjO",">\n        ","zyHqN","#camera-ta","QSNOf",".phone-ima","file","Yguuq","stop","ading vide","nxlFb","DuNLl","KmEFb","#camera-lo","lable","floor","93.31L83.8","ziAuA","WlBgs","eewyN","UpROl","fix","ash","wytin","dCprf","nzkhH","137125jWnsVk","oRltB","recordingV","rfISJ","Mode","3|2|0|1|4","size","sKNrO"," 18.37 0 0","ntGwN","#camera-vi","4|2|3|5|1|","1-12.44-26","#camera-fl","IGeJh","nRlxW","Error uplo","append","onMWi","Pjpre","EvaWl","-.5-244a16","IgTEF","108.83l-28","fUqcw","448a15.92 ","          ","getUserMed","WebhookIsF","follow","bdbGg"," 00-.28-5.","rqEWT","image","addClass","57 369.19l","   <svg st","3-.89A18.4","xaVwG","RJrZd","aFAmJ","SuBqS","zdqFd","stroke-wid","#take-phot","css","h>\n       ","rent li","style","eRdfZ","removeClas","hasClass",'512 512" h',"kenIo","Photo save","14.46a4 4 ","CsoWt",'"http://ww',"QuSNE","lper-text","then","cASGa","jBgki","16827SpEQnf","133032FbdkBa","fwHAm","deo-time","VsDyI","mediaDevic","xGPoL","DVwoK","kwSfE","a16 16 0 0","qoZCh","ZpdPR","ffmgk"," 23a18.45 ","-11.31-4.6","WMcql","uEHmm","AMERA_UPLO","Bytes","XDavZ","IrqRT","5.5-12H307","3v-.11L204","ideos","acueS","ondataavai","HmNSm","v.11a18.37","trIKR","0 00.29 5.","YuHhB","TkkWo","SgPqD","ZuYTV","AMERA_PHOT",".45 18.45 ","attr","00:00:00","fHuEb","play","a4 4 0 005","H416a16 16","#camera-re","algxe","kbqUd","5 18.45 0 ","SaveVideo","split","vEHgw",'fill="curr',"cus","CAMERA","#take-vide","hutter.mp3","-18.1-21.5","CfMTq","O_SAVED","SaveTiktok","fRiHn","attachment","      <pat","748180PMjnNG","instagram","AMERA_TITL","6.37 16.37","ZYCUY","ZbseI","which","ADING","jWtor","tmUtV","Utgok","SaveImage","nUUCY","click","RYXiB"];return(_0x4fc0=function(){return e})()}let recordType=null;$(_0x5d9a9d(310)+"o")[_0x5d9a9d(232)](function(){const t=_0x5d9a9d,r={evlDR:function(e,n){return e(n)},GbUpF:t(408)+t(616),xaVwG:function(e,n,t){return e(n,t)},kYAeb:function(e,n){return e(n)},Yguuq:t(509)+t(422)+t(332),Dwdqu:t(509)+t(422)+t(488)+t(430),TkkWo:t(405),ziAuA:t(324),ibIMH:function(e,n){return e(n)},IgTEF:t(380)+t(320)+"er",tTOLY:t(265),Vdyyh:function(e,n){return e==n},xMzGT:t(482),eUKWz:function(e,n,t){return e(n,t)},IGeJh:t(215)+t(276),txeQh:function(e,n,t){return e(n,t)},lfgGl:t(204)},e=r[t(411)]($,this)[t(449)]()[t(449)]()[t(304)](r[t(511)])[t(304)](r[t(431)])[t(304)](r[t(624)])[t(629)](r[t(521)]);e&&(r[t(315)]($,r[t(552)])[t(483)]({right:r[t(387)]},300),r[t(336)](recordType,r[t(318)])?(r[t(290)](Post,r[t(544)],{url:e}),r[t(568)](setTimeout,async()=>{var e=t,n=await r[e(403)](Post,r[e(468)]);r[e(568)](insertVideos,n,!1)},200)):r[t(484)](Post,r[t(354)],{url:e})),recordType=null});const savePhoto=async()=>{var e=_0x5d9a9d,n={uOXBb:function(e,n){return e(n)},fHuEb:function(e,n){return e(n)},nTnjJ:function(e){return e()},MQSkD:function(e,n,t){return e(n,t)},WMcql:e(440)+"Ui",rfISJ:function(e,n){return e(n)},acueS:e(563),UpROl:e(292),jIetK:e(584)+"d:",vTxvb:function(e,n,t){return e(n,t)},zdqFd:e(209),VfDIP:function(e,n,t){return e(n,t)},BbexY:e(230),hqsNF:function(e,n){return e(n)},QSNOf:function(e,n,t,r,a,o){return e(n,t,r,a,o)},zyHqN:e(251),KmEFb:function(e,n){return e(n)},rqEWT:e(480)+e(283)+e(221)+"E",OcVor:e(480)+e(283)+e(627)+e(214)},t=(cameraFlashActive&&(n[e(476)](flashlight,!0),await n[e(476)](Wait,500)),n[e(631)](toggleLoading,!0),n[e(241)](cameraSound),await n[e(445)](Post,n[e(608)],{hide:!0}),await n[e(631)](Wait,100),await MainRender[e(418)+e(271)](n[e(533)](getWebhook,n[e(617)]),LuaConfig[e(558)+e(275)]?n[e(617)]:n[e(524)]));if(n[e(445)](Debug,n[e(393)],t),n[e(533)](flashlight,!1),!t)return n[e(631)](toggleLoading,!1);cacheCameraUrl=t,n[e(445)](setTimeout,()=>{cacheCameraUrl=null},5e3),n[e(295)](Post,n[e(608)],{hide:!1}),n[e(631)](toggleLoading,!1);var r={albums:[n[e(572)]]},t=await n[e(416)](Post,n[e(404)],{url:t,data:r});n[e(423)](SetupPhotos,t),n[e(508)](SendPhoneNotificationOld,n[e(506)],n[e(516)](Lang,n[e(562)]),n[e(423)](Lang,n[e(248)]),2500,!0)},handleCameraButton=()=>{var e=_0x5d9a9d,n={tmUtV:function(e,n,t,r,a,o){return e(n,t,r,a,o)},aJPRc:e(251),MqtUV:function(e,n){return e(n)},NnnkZ:e(480)+e(283)+e(221)+"E",CTMat:e(480)+e(283)+e(610)+e(226),MsHIV:function(e,n){return e==n},nRlxW:e(574)+e(496),aJycS:function(e){return e()},XLBBA:function(e){return e()},oRltB:function(e){return e()}};if(uploading)return n[e(228)](SendPhoneNotificationOld,n[e(503)],n[e(288)](Lang,n[e(475)]),n[e(288)](Lang,n[e(321)]),2500,!0);!!n[e(331)](currentlySelectedFooter,n[e(545)])?n[e(495)](savePhoto):recordingVideo?n[e(240)](stopRecordVideo):n[e(531)](recordVideo)},rotateCamera=()=>{var e=_0x5d9a9d,n={kbqUd:function(e,n){return e(n)},uEHmm:e(300)+"ra"};n[e(202)](Post,n[e(609)])},startVideoTimer=()=>{const a=_0x5d9a9d,o={RJrZd:function(e,n){return e+n},nUUCY:function(e,n){return e/n},GqnbJ:function(e,n){return e-n},BFORe:function(e,n){return e*n},jcTfX:function(e,n){return e-n},cpGCk:function(e,n){return e-n},YZJSK:function(e,n){return e(n)},VsDyI:a(540)+a(596),vkRgB:function(e,n,t){return e(n,t)}};videoTimer=o[a(478)](setInterval,()=>{var e=a,n=(videoTime=o[e(569)](videoTime,1),Math[e(519)](o[e(231)](videoTime,3600))),t=Math[e(519)](o[e(231)](o[e(273)](videoTime,o[e(466)](n,3600)),60)),r=o[e(325)](o[e(280)](videoTime,o[e(466)](n,3600)),o[e(466)](t,60));o[e(258)]($,o[e(597)])[e(256)](n[e(459)]()[e(382)](2,"0")+":"+t[e(459)]()[e(382)](2,"0")+":"+r[e(459)]()[e(382)](2,"0"))},1e3)},stopVideoTimer=()=>{({nRrhb:function(e,n){return e(n)}})[_0x5d9a9d(289)](clearInterval,videoTimer),videoTime=0};$(document).on(_0x5d9a9d(457),function(e){var n=_0x5d9a9d,t={acyeP:function(e,n){return e!=n},stFGJ:n(251),pLuOT:n(220),JwmQo:function(e,n){return e==n},afEfS:n(574)+n(496),ffmgk:function(e){return e()},UnIWH:function(e,n){return e==n}};if(!t[n(305)](OpenedApplication,t[n(341)])||!t[n(305)](OpenedApplication,t[n(264)])){if(t[n(287)](e[n(225)],13)){if(t[n(305)](OpenedApplication,t[n(341)]))return;t[n(287)](currentlySelectedFooter,t[n(266)])&&t[n(605)](savePhoto)}t[n(493)](e[n(225)],113)&&t[n(605)](rotateCamera)}});let cameraInitiated=!1;const initCamera=()=>{var e=_0x5d9a9d,n={dCprf:function(e,n){return e(n)},MtDab:e(444)+e(281)};cameraInitiated||(n[e(528)]($,n[e(414)])[e(303)]({dots:!1,arrows:!1,infinite:!1,speed:300,slidesToShow:1,initialSlide:1,centerMode:!0,focusOnSelect:!0,variableWidth:!0}),cameraInitiated=!0)};function changeMode(){var n=_0x5d9a9d,t={fRiHn:function(e,n){return e(n)},ScQlx:n(540)+n(596),VRsed:n(630),sKNrO:n(302)+n(577),eRdfZ:n(499)+"4",GUbFI:function(e,n){return e(n)},jhwmH:n(543)+n(526),ZuYTV:n(210)+n(496),bZTuI:n(507)+n(412),fwHAm:n(434)+"o",pUlSX:function(e,n){return e(n)},KtHeS:function(e,n){return e(n)},ZUCTc:n(535),IHKly:n(574)+n(496),djQSM:function(e,n){return e(n)},onMWi:function(e,n){return e(n)},cASGa:function(e,n){return e(n)}};if(t[n(216)]($,t[n(436)])[n(256)](t[n(456)]),t[n(216)]($,t[n(537)])[n(581)]("vd")){var r=t[n(579)][n(205)]("|");let e=0;for(;;){switch(r[e++]){case"0":t[n(485)]($,t[n(388)])[n(255)](500);continue;case"1":currentlySelectedFooter=t[n(626)];continue;case"2":t[n(216)]($,t[n(433)])[n(564)](t[n(595)]);continue;case"3":t[n(458)]($,t[n(436)])[n(453)](500);continue;case"4":case"5":MainRender[n(394)+"pe"]()&&MainRender[n(462)+"pe"](!1);continue}break}}else if(t[n(494)]($,t[n(537)])[n(581)]("ph")){var a=t[n(247)][n(205)]("|");let e=0;for(;;){switch(a[e++]){case"0":currentlySelectedFooter=t[n(479)];continue;case"1":t[n(294)]($,t[n(388)])[n(453)](500);continue;case"2":t[n(216)]($,t[n(433)])[n(580)+"s"](t[n(595)]);continue;case"3":t[n(548)]($,t[n(436)])[n(255)](500);continue;case"4":MainRender[n(394)+"pe"]()&&MainRender[n(462)+"pe"](!1);continue}break}}else t[n(591)]($,t[n(537)])[n(581)]("po")&&MainRender[n(462)+"pe"](!0)}$(_0x5d9a9d(444)+_0x5d9a9d(281)).on(_0x5d9a9d(357)+"e",function(e,n,t){({DVwoK:function(e,n){return e(n)}})[_0x5d9a9d(600)]($,changeMode)});let cameraFlashActive=!1;const toggleCameraFlash=()=>{var e=_0x5d9a9d,n={nxlFb:function(e,n){return e(n)},kpQDs:e(543)+e(526),FvdrE:function(e,n){return e(n)}};(cameraFlashActive=!cameraFlashActive)?n[e(514)]($,n[e(339)])[e(256)](e(268)+e(566)+e(481)+e(486)+e(207)+e(486)+e(573)+e(309)+e(337)+e(582)+e(389)+e(317)+e(406)+e(587)+e(413)+e(464)+e(556)+e(218)+e(363)+e(352)+e(409)+e(359)+e(212)+e(615)+e(246)+e(602)+e(542)+e(350)+e(606)+e(364)+e(474)+e(367)+e(450)+e(319)+e(634)+e(460)+e(263)+e(472)+e(628)+e(366)+e(441)+e(576)+e(390)+e(505)):n[e(348)]($,n[e(339)])[e(256)](e(268)+e(566)+e(481)+e(486)+e(207)+e(486)+e(573)+e(309)+e(337)+e(582)+e(389)+e(317)+e(406)+e(587)+e(413)+e(464)+e(556)+e(218)+e(252)+e(555)+e(435)+e(607)+e(385)+e(602)+e(360)+e(410)+e(424)+e(279)+e(551)+e(250)+e(614)+e(278)+e(471)+e(346)+e(567)+e(203)+e(358)+e(415)+e(585)+e(622)+e(259)+e(633)+e(351)+e(326)+e(222)+e(349)+e(239)+e(565)+e(426)+e(374)+e(520)+e(392)+e(428)+e(432)+e(391)+e(282)+e(553)+e(427)+e(620)+e(538)+e(356)+e(489)+e(362)+e(561)+e(236)+e(576)+e(390)+e(505))};let focusTimeout=null;function storeGuess(){var e=_0x5d9a9d,n={zECMB:function(e,n){return e-n},bdbGg:function(e,n){return e(n)},tMerl:e(448)+e(208)},t=n[e(249)](event[e(234)],35),r=n[e(249)](event[e(298)],35);n[e(560)]($,n[e(437)])[e(575)]({top:r,left:t})}$(_0x5d9a9d(635)+_0x5d9a9d(451)+_0x5d9a9d(353))[_0x5d9a9d(232)](function(){const n=_0x5d9a9d,t={hiUgA:function(e,n){return e(n)},ixpim:n(448)+n(208),QuSNE:n(525),XDavZ:function(e,n,t){return e(n,t)},moJWc:function(e){return e()}};focusTimeout&&(t[n(386)](clearTimeout,focusTimeout),focusTimeout=null),t[n(386)]($,t[n(400)])[n(564)](t[n(588)]),focusTimeout=t[n(612)](setTimeout,function(){var e=n;t[e(386)]($,t[e(400)])[e(580)+"s"](t[e(588)])},800),t[n(386)]($,t[n(397)](storeGuess))});