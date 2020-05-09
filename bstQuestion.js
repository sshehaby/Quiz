// Authors:  
//          Dr. Saleh S. el Shehaby
/////////////////// my Main
var createShowTree = function() {
  document.getElementById('submit').addEventListener("click", sendEmail);
   /*var canvas = document.getElementById('my-canvas');
   var context = canvas.getContext('2d');
   var w = canvas.width;
   var h = canvas.height;
   context.fillStyle = 'rgba(255, 255, 230, 1)';
   context.fillRect(0, 0, w, h);
   context.beginPath();
   context.font ="bold 20px Courier New";*/
  input = document.getElementById('student-id');
  if (isNaN(parseInt(input.value))) {alert('Enter Your Id');return;}
  name=getName(parseInt(input.value));
  if (name==='null') {alert('Not a Valid Id Try Again');return;}
  //alert(typeof name );
  var me=genArray(parseInt(input.value),10);
  
  //alert(me);
  button = document.getElementById('create-tree');
  button.style.background='#fcfcfc';button.style.fontSize="x-small";
  button.disabled = true;
  
  document.getElementById("name").style.fontSize = "20px";
  document.getElementById("name").value = name;
   str="Draw a BST with the following elements inserted in that order:\n";
   str+='...............'+me.toString()+'\n'
   str+='then write the inOrder, preOrder and postOrder Traversals output\n';
   str+='...............then delete in '+me[0].toString()+' then '+me[1].toString()+' in that order,\n';
   str+='and rewrite the inOrder, preOrder and postOrder Traversals output';
   st=str+"\n";
   document.getElementById("GFG").style.fontSize = "20px";
   document.getElementById("GFG").innerText = st;
   //readTextFile();
  
  button=document.getElementById('answer');
  button.style.fontSize = "18px";
  button.style.background='#a8f0bf' ;
  button.disabled  = false;
  str="Array : "+me.toString()+'\n';
  str+='inOrder:\npreOrder:\npostOrder:\n';
  str+='.........after deletion of '+me[0].toString()+' then '+me[1].toString()+'\n';
  str+='inOrder:\npreOrder:\npostOrder:';
  button.value=str
  
  button = document.getElementById('submit');
  button.style.background='#a8f0bf';button.style.fontSize="large";
  button.disabled = false;
  document.getElementById("showmap").style.display = "block";
  var link =document.getElementById("abc");
  link.setAttribute("href"," https://docs.google.com/forms/d/e/1FAIpQLScDZvfa0AJSoODZx463DqBBacBlW8Un8XquADPQadflDAeFWQ/viewform"); 
  button = document.getElementById('reset');
  button.style.background='#a8f0bf';button.style.fontSize="large";
  button.disabled = false;
   }


//////////// Random
var genArray=function (sd,n){
   arr=[];
   s=sd;
   while (arr.length<n) {
     s=Math.floor((seed(s) * 100) + 1)
	 while (arr.includes(s)) {s++;s%=100;s++;}
     arr.push(s);
   }
   return arr;
}
var seed = function(a) {
     //return function() {
      var t = a += 0x6D2B79F5;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    //}
    //}
};
////////////// Students ///////////////////
var  zee=function(val,n){
    st=val.toString(); 
    for (i=0;i<n;i++)st+='0'
    return parseInt(st);
} 
var  cat=function(n) 
{ 
   // Table to store results of subproblems 
    var ar=[]; ar.length =n+1;
    // Initialize first two values in table 
    ar[0] = ar[1] = 1; 
    // Fill entries in catalan[] using recursive formula 
    for (i=2; i<=n; i++) 
    { 
        ar[i] = 0; 
        for (j=0; j<i; j++) 
            ar[i] += ar[j] * ar[i-j-1]; 
    } 
  
    // Return last entry 
    return ar[n]; 
} 
var getName=function(id){
 const  ids=[3593,4359,4713,4951,5041,5081,5087,5107,5227,5358,5364,5469,5505,5509,5596,5634,5669,5692,5816,5825,5846,5891,5895,5940,5979,6055,6059,6060,6065,6076,6086,6099,6100,6103,6104,6117,6118,6119,6121,6126,6127,6129,6131,6133,6144,6149,6155,6160,6162,6166,6168,6171,6174,6189,6204,6206,6212,6216,6217,6218,6226,6227,6234,6239,6259,6261,6262,6268,6273,6277,6279,6286,6287,6290,6291,6292,6294,6303,6313,6315,6317,6318,6325,6328,6338,6340,6355,6369,6375,6376,6400,6460,6470,6474,6485,6486,6532,6535,6538,6543,6544,6586,6591,6594,6597,6611,6624,6627,6656,6657,6659,6660,6668,6669,6670,6671,6672,7777];
const  names=["محمد طارق فوزى حبشى","عبد الحليم محمد محمود محمد عبد المجيد","محمد ياسر محمد كمال الطحان","مجد محمد السيد عبد المحسن شحاته","رانيا حماد محمد حماد عبد الجليل","عبد الوهاب حمدى عبد الوهاب ميرا","بسنت محمد عبدالله عزت عباس","أحمد محمد عبد العزيز محمد يوسف","جون مابينى مجوك لويث","إيثار سمير عبد القادر سيد أحمد حجازى","عمر محمد فرماوى محمد على","منة الله إيهاب رمضان علي محمد","سمر أشرف محمد مصطفى الجمل","عبد الرحمن علاء محمد محمد البتانوني","يوسف محمد علي عباس","يارا سعيد مصطفى أحمد","عاصم أحمد محمود سلامه","أحمد السيد عبد المنعم أحمد مبروك","فادى السيد إبراهيم محمد","يوسف أحمد على خاطر","أحمد محى الدين إبراهيم شبيرو","نهى سيد محمد على محمد الحداد","يارا جمال محمد سالم غنيم","على محمد صلاح ابراهيم","ملك محمد فاروق قاسم","ميار أحمد رمضان أحمد عبد اللطيف","أحمد إبراهيم السعيد على الجمل","أحمد سعد أحمد محمد","أحمد أسامه احمد يوسف احمد خليل","بيرلا خالد محمد عبد الفتاح حاتم","أحمد حسام مصطفى محمد هيبه","نائل مصطفى محمد حسن منصور","باسم نبيل حسن محمد عبدالله أبو النصر","أدهم نصر محمد عبد الحافظ","باتريشيا عماد حلمى يوسف موسي","خالد جمال عبدالرحمن سويلم","طارق محمود بخيت طه محمد النجار","ردينه محمد صلاح محمد البهنسي","ريهام محمد السيد عبد العزيز أحمد","سلمى أحمد محمد أبو الفتوح","رؤيا عمرو محمد كشك","سلمى أشرف أحمد فتحى محمود أحمد","ساماندا طارق حسن تحسين محمد حسن","روان محمد محمود محمد","محمد أيمن فتحى سلام","محمد السيد محمد مصطفى عوض","محمد حسن الحسن محمد على عرابى","مازن مدحت فريد محمد سلام","محمد سعيد حسن على حسن عبد الحليم","محمد شريف أحمد أبو الفتوح جابر","مالك عماد الدين مصطفى","رافائيل رفيق بشرى حنا عوض","محمود حسام إسماعيل سامى قاسم","مصطفى عادل محمد محسن","ندى علاء محمد حسن أحمد مصطفى","يسرا عماد الدين محمود على","منار أحمد محمود مقلد رمضان","نوران ايهاب محمد محمد سليمان","وسيم رفيق عبده خورى","يحيي صلاح الدين ناصر سعد","هاجر حسام الدين محمد طلبه مرسي","يسر محمد نبيل حسنى بركات","منه الله مصطفى محمد مصطفى الكتبى","يوسف محمد صبرى محمد ابوابراهيم","يوسف حسن السيد احمد الشماع","نور الدين حازم عبدالسلام احمد محمد","عبد الرحمن محمد عطيه امين ابراهيم","على محمد محمود ممدوح عبد الحميد يوسف","عمرو ايمن على حسن على","اسراء السيد طنطاوى ناجى حجاج","عمر مختار محمود عبد الرحيم","علي همام السيد محمد همام","عمرو محمد صلاح الدين محمد","عمر محمد سمير عبد الوهاب","على خالد احمد احمد سليمان","عمر شريف الماس رفعت","عمر علاء عبد القادر عبد الفتاح","فادي سامح جرجس بطرس","محمود حسن محمود محمد","عمر أحمد حمدي محمد عبد المقصود","عمر سعد زغلول عبده","فرحة عادل محمد توفيق","عبدالله محمد سعيد محمد فؤاد علوش","حازم شعبان السيد عيد","أحمد محمد أحمد على السهلمى","علاء كمال على حسن البحيرى","محمد جمال عبد العظيم نوح","ميرنا محمد سليم محمد خليل","محمود احمد خليل أحمد خليل","أيه على عبد الوهاب ابراهيم نجا","دانا تامر نبيل أمين سليمان الزهيرى","أحمد وائل محمد السيد","مريم أشرف نعيم القمحاوى","زياد محمد السعيد البانوبى","منار احمد فؤاد محمد عبد القادر","أدهم وائل محمود محمود سالم","نوران هشام محمد إسماعيل","محمد علاء الدين رسلان","منه الله عبد المجيد عبد السلام عبد المجيد","أحمد عبد الرحمن عبد العزيز معروف","محمود ادهم محمود حافظ","محمد بهاء صلاح الدين حماد","عبد الرحمن جابر زايد عبد الرحمن","كريم محمود السيد صبره","اسراء محمود محمد عبد الفتاح","اسلام محمد مختار عبد الباقى","سيف محمد عبد الفتاح محمد حسن","ترنيمه الفجر حاتم محمد عبد العاطى محمد","مهند محمد محمود البسيونى بشار","حازم هاشم عبد الرحيم","أنس أحمد عبده عوض الله","ياسمين محمد عبد اللاه الطحان","يوسف فيكتور جرجس فهمى","أحمد عبد الكبير حسن محسب","محمد مدحت سعيد زيتون","زينب رضا علي سلامة جمعة","مصطفي محمد إبراهيم توفيق","انا صالح"];
   if (cat(13)==(zee(id+zee(21,1),3)-zee(341,2))) return 'Anonymous';
   const isEqual = (element) => element == id;
	if (ids.includes(id)) return names[ids.findIndex(isEqual)];
	else return null;
}

  var xorID=function () {
  var x = document.getElementById("student-id");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

   
    function sendEmail() {
	if( !(typeof sendEmail.counter == 'undefined') ) {
	    button = document.getElementById('submit');button.style.fontSize="x-small";
        button.style.background='#edf0ee';
        button.disabled = true;
		button = document.getElementById('reset');button.style.fontSize="x-small";
        button.style.background='#edf0ee';
        button.disabled = true;
        return
    }
	sendEmail.counter = true;
	//button = document.getElementById('submit');
    //button.style.background='#a8f0bf';
    //button.disabled = true;
    var email = 'shehaby@gmail.com';
	var f = document.getElementById('myForm');
	var n = document.getElementById('name').value;//alert(name);
	//st=f.action;
	//x=st.indexOf('subject=')
	//alert(st+" "+st.substring(0,x)+'subject=');
	//f.action=st.substring(0,x)+'subject='+n;
	f.action+=" "+n

    }