// Authors: Sami Mamdouh
//          Saleh el Shehaby
/////////////////// my Main
var createShowTree = function() {

   var canvas = document.getElementById('my-canvas');
   var context = canvas.getContext('2d');
   var w = canvas.width;
   var h = canvas.height;
   context.fillStyle = 'rgba(255, 255, 230, 1)';
   context.fillRect(0, 0, w, h);
   context.beginPath();
  input = document.getElementById('student-id');
  if (isNaN(parseInt(input.value))) {alert('Enter Your Id');return;}
  var me=genArray(parseInt(input.value),10);
  
  //alert(me);
  const button = document.getElementById('create-tree');
  button.disabled = true;
   str="Draw a BST with the following elements inserted in that order:\n";
   str+='...............'+me.toString()+'\n'
   str+='then submit the inOrder, preOrder and postOrder Traversals output';
   st=str+"\n";
   document.getElementById("GFG").innerText = st;
   //readTextFile();
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