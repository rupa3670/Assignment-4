let interviewList=[];
let rejectedList=[];

let total = document.getElementById('total');
let interviewCount= document.getElementById('cnt-interview');
let rejectedCount = document.getElementById('cnt-rejected')

const allFilterBtn=document.getElementById('all-filter-btn');
const interviewFilterBtn= document.getElementById('interview-filter-btn');
const rejectedFilterBtn= document.getElementById('rejected-filter-btn')

const allCardSection= document.getElementById('all-cards');
const mainContainer= document.querySelector('main');
const filteredSection= document.getElementById('filtered-section');

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

     if(id== 'interview-filter-btn')
     {
        allCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')
     }
     else if(id== 'all-filter-btn')
     {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden')
     }
}

mainContainer.addEventListener('click', function(event)
{
    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.company-name')
    const workType = parentNode.querySelector('.work-type');
    const salary = parentNode.querySelector('.salary')
    const status = parentNode.querySelector('.status')
    const description = parentNode.querySelector('.description')

    parentNode.querySelector('.status').innerText= 'INTERVIEW'
    const  cardInfo ={
        companyName:companyName.innerText,
        workType:workType.innerText,
        salary:salary.innerText,
        status:'INTERVIEW',
        description: description.innerText
    }
    
  const companyExist = interviewList.find(item => item.companyName === cardInfo.companyName) 
  
  if(!companyExist){
    interviewList.push(cardInfo)
   
  }
   renderInterview();
    }
})

function renderInterview(){
  
      filteredSection.innerHTML=''

       for(let interview of interviewList){
        let div = document.createElement('div')
        div.className=`flex justify-between  bg-white p-5 rounded-md`
        div.innerHTML=`<!-- mainCard-1 -->
                <div class="space-y-4">
                    <!-- part-1 -->
                    <div class="">
                        <h2 class="company-name font-bold">${interview.companyName}</h2>
                        <p class="work-type text-gray-500">${interview.workType}</p>
                    </div>
                    <!-- part-2 -->
                    <div class="">
                        <p class="salary text-gray-500">${interview.salary}</p>
                    </div>
                    <!-- part-3 -->
                    <p class="status bg-gray-200 px-4 py-2 w-[21%]">${interview.status}</p>
                    <p  class="description">${interview.description}</p>
                    <!-- part-4 -->
                    <div class="flex gap-3">
                        <button class="interview-btn cursor-pointer active:translate-y-0.5 font-medium text-green-600 px-4 py-2 border border-b-green-600 rounded-sm">INTERVIEW</button>
                        <button class="rejected-btn cursor-pointer active:translate-y-0.5 font-medium text-red-500 px-4 py-2 border border-b-red-500 rounded-sm ">REJECTED</button>
                    </div>

                </div>
                <!-- mainCard-2 -->
                <div><button class="justify-end cursor-pointer active:translate-y-0.5"><img src="./Group 1.png" alt=""></button></div>`

                filteredSection.appendChild(div)
       }

}
function renderRejected(){
    
}

