const player1=localStorage.getItem('player1');
const player2=localStorage.getItem('player2');
const result=document.getElementById("result");
const controller=new AbortController();
const signal=controller.signal;
let currentPlayer="X";
let arr=Array(9).fill(null);
//console.log(arr);
const wincheck=()=>{ //arr is global variable,no need to pass in function
        let a=0;
        if((arr[0]==arr[1] && arr[1]==arr[2] && arr[0]!=null)||
           (arr[3]==arr[4] && arr[4]==arr[5] && arr[3]!=null)||
           (arr[6]==arr[7] && arr[7]==arr[8] && arr[6]!=null)||
           (arr[0]==arr[3] && arr[3]==arr[6] && arr[0]!=null)||
           (arr[1]==arr[4] && arr[4]==arr[7] && arr[1]!=null)||
           (arr[2]==arr[5] && arr[5]==arr[8] && arr[2]!=null)||
           (arr[0]==arr[4] && arr[4]==arr[8] && arr[0]!=null)||
           (arr[2]==arr[4] && arr[4]==arr[6] && arr[2]!=null) ){
              result.classList.add("result");
              result.innerHTML=`Winner is ${currentPlayer=='X'?'Player1':'Player2'}`;
              a=1;
           //document.write('Winner is ',currentPlayer=='X'?'Player1':'Player2');
        }
        else if(arr.indexOf(null)===-1){ //null is not string its a different data type
              result.classList.add("result");
              result.innerHTML="Draw";
              a=1;
              //document.write('Draw');
        }
        if(a==1){
              for(let i=0;i<9;i++){
              const el=document.getElementById(`${i}`);
              el.onclick=" ";
        }
        return;
        }
        return;
        
}
const handleclick=(el)=>{
       let id=Number(el.id);//by default it is in string
       //so convert it into number
       if(arr[id]!==null) return;
       arr[id]=currentPlayer;
       if(currentPlayer==='X'){
              el.innerHTML=`<h1 class="e">${player1}</h1>`;
       }
       else{
           el.innerHTML=`<h1 class="e">${player2}</h1>`;
       }
       wincheck();
       currentPlayer=currentPlayer==="X"?'0':'X';

              
       //arr[i]=currentPlayer==='x'?'0':'X';   
}