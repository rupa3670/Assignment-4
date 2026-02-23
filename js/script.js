let interviewList=[];
let rejectedList=[];

let total = document.getElementById('total');
let interviewCount= document.getElementById('cnt-interview');
let rejectedCount = document.getElementById('cnt-rejected')

const allFilterBtn=document.getElementById('all-filter-btn');
const interviewFilterBtn= document.getElementById('interview-filter-btn');
const rejectedFilterBtn= document.getElementById('rejected-filter-btn')

let allCardSection= document.getElementById('all-cards');

const mainContainer= document.querySelector('main');

function calculateCnt(){
    total.innerText=allCardSection.children.length;
    interviewCount.innerText=interviewList.length;
    rejectedCount.innerText=rejectedList.length
}
calculateCnt()
function toggleStyle(id){
     allFilterBtn.classList.remove('bg-blue-500', 'text-white')
     interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
     rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

     allFilterBtn.classList.add('bg-white', 'text-gray-700')
     interviewFilterBtn.classList.add('bg-white', 'text-gry-700')
     rejectedFilterBtn.classList.add('bg-white', 'text-gray-700')

     const selected =document.getElementById(id)
     selected.classList.remove('bg-white', 'text-gray-700')
     selected.classList.add('bg-blue-500', 'text-white')
}

