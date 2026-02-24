let interviewList = [];
let rejectedList = [];
let currentStatus = 'all-filter-btn';

let total = document.getElementById('total');
let interviewCount = document.getElementById('cnt-interview');
let rejectedCount = document.getElementById('cnt-rejected')

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn')

const allCardSection = document.getElementById('all-cards');

const mainContainer = document.querySelector('main');
const filteredSection = document.getElementById('filtered-section');

const jobCounts = document.getElementById('job-cnt');



function calculateCnt() {

    let totalJobs = allCardSection.children.length;
    total.innerText = totalJobs;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length

    if (jobCounts) {
        if(currentStatus==='all-filter-btn'){
            jobCounts.innerText=`${totalJobs} jobs`;
        }
         else if(currentStatus==='interview-filter-btn'){
            jobCounts.innerText=`${interviewList.length} jobs`;
        }
        else if(currentStatus==='rejected-filter-btn'){
            jobCounts.innerText=`${rejectedList.length} jobs`;
        }
    }
}
calculateCnt()

function toggleStyle(id) {
    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')

    allFilterBtn.classList.add('bg-white', 'text-gray-700')
    interviewFilterBtn.classList.add('bg-white', 'text-gray-700')
    rejectedFilterBtn.classList.add('bg-white', 'text-gray-700')

    const selected = document.getElementById(id)

    currentStatus = id
    selected.classList.remove('bg-white', 'text-gray-700')
    selected.classList.add('bg-blue-500', 'text-white')
    
      calculateCnt();

    if (id == 'interview-filter-btn') {
        allCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderInterview()
    }
    else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filteredSection.classList.add('hidden')
    }
    else if (id == 'rejected-filter-btn') {

        allCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')
        renderRejected()
    }

}
mainContainer.addEventListener('click', function (event) {
    if (event.target.closest('.delete-btn')) {
        const card = event.target.closest('.div-card')
        if (card) {
            const companyName = card.querySelector('.company-name').innerText;

            interviewList = interviewList.filter(item => item.companyName !== companyName);
            rejectedList = rejectedList.filter(item => item.companyName !== companyName);

            card.remove();
            calculateCnt();
            if (currentStatus === 'interview-filter-btn') {
                renderInterview()
            }
            if (currentStatus === 'rejected-filter-btn') {
                renderRejected()
            }
        }


    }

    else if (event.target.classList.contains('interview-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        

        const companyName = parentNode.querySelector('.company-name').innerText
        const workType = parentNode.querySelector('.work-type').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('.status').innerText
        const description = parentNode.querySelector('.description').innerText

        parentNode.querySelector('.status').innerText = 'INTERVIEW'
        const cardInfo = {
            companyName,
            workType,
            location,
            type,
            salary,
            status: 'INTERVIEW',
            description
        }
        const statusTag = parentNode.querySelector('.status')
        statusTag.innerText = 'INTERVIEW'
        statusTag.className = 'cursor-pointer active:translate-y-0.5 font-medium text-green-600 px-4 py-2 border border-b-green-600 rounded-sm w-fit';

        const companyExist = interviewList.find(item => item.companyName === cardInfo.companyName)

        if (!companyExist) {
            interviewList.push(cardInfo)

        }
        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName)
        if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }
        calculateCnt();

    }
    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        

        const companyName = parentNode.querySelector('.company-name').innerText;
        const workType = parentNode.querySelector('.work-type').innerText;
        const location = parentNode.querySelector('.location').innerText;
        const type = parentNode.querySelector('.type').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const description = parentNode.querySelector('.description').innerText;

        parentNode.querySelector('.status').innerText = 'REJECTED'
        const cardInfo = {
            companyName,
            workType,
            location,
            type,
            salary,
            status: 'REJECTED',
            description
        }
        const statusTag = parentNode.querySelector('.status')
        statusTag.innerText = 'REJECTED'
        statusTag.className = 'cursor-pointer active:translate-y-0.5 font-medium text-red-600 px-4 py-2 border border-b-red-600 rounded-sm w-[22%]';

        const companyExist = rejectedList.find(item => item.companyName === cardInfo.companyName)

        if (!companyExist) {
            rejectedList.push(cardInfo)

        }

        interviewList = interviewList.filter(item => item.companyName !== companyName)
        if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }
        calculateCnt();

    }
})

// function updateTotal() {
//     const cards = document.getElementById('all-cards')
//     totalElement.innerText = cards.length
// }

function renderInterview() {

    filteredSection.innerHTML = ''
    if (interviewList.length === 0) {
        filteredSection.innerHTML = ` <div id="emty-section" class="flex flex-col items-center text-center justify-center  bg-white rounded-md min-h-[300px] md:min-h-[350px] w-full p-5"> 
           <img  src="./jobs.png" class="w-20 sm:w-24 md:w-28 mb-4 object-contain/>
          <h2 class="font-bold text-base sm:text-lg md:text-2xl mb-2">No jobs available</h2>
          <p class="text-sm sm:text-base md:text-lg">Check back soon for new job opportunities </p>
          </div> 
          `
           return;
    }

    for (let interview of interviewList) {
        let div = document.createElement('div')
        div.className = `flex justify-between  bg-white p-5 rounded-md mb-4`
        div.innerHTML = `<!-- mainCard-1 -->
                <div class="space-y-4">
                    <!-- part-1 -->
                    <div class="">
                        <h2 class="company-name font-bold">${interview.companyName}</h2>
                        <p class="work-type text-gray-500">${interview.workType}</p>
                    </div>
                     <!-- part-2 -->
                   <div><p class="location">${interview.location}</p></div>
                   <!-- part-3 -->
                    <div><p class="type">${interview.type}</p></div>
                    <!-- part-4 -->
                    <div class="">
                        <p class="salary text-gray-500">${interview.salary}</p>
                    </div>
                    <!-- part-5 -->
                    <p class="status bg-gray-200 px-4 py-2 w-[21%]">${interview.status}</p>
                    <p  class="description">${interview.description}</p>
                    <!-- part-6 -->
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
function renderRejected() {

    filteredSection.innerHTML = ''
    if (rejectedList.length === 0) {
        filteredSection.innerHTML = ` <div id="emty-section" class="flex flex-col items-center text-center justify-center  bg-white rounded-md min-h-[300px] md:min-h-[350px] w-full p-5"> 
           <img  src="./jobs.png" class="w-20 sm:w-24 md:w-28 mb-4 object-contain"/>
          <h2 class="font-bold text-base sm:text-lg md:text-2xl mb-2">No jobs available</h2>
          <p class="text-sm sm:text-base md:text-lg">Check back soon for new job opportunities </p>
          </div> 
          `
          return;
    }

    for (let rejected of rejectedList) {
        let div = document.createElement('div')
        div.className = `flex justify-between  bg-white p-5 rounded-md mb-4`
        div.innerHTML = `<!-- mainCard-1 -->
                <div class="space-y-4">
                    <!-- part-1 -->
                    <div class="">
                        <h2 class="company-name font-bold">${rejected.companyName}</h2>
                        <p class="work-type text-gray-500">${rejected.workType}</p>
                    </div>
                    <!-- part-2 -->
                   <div><p class="location">${rejected.location}</p></div>
                   <!-- part-3 -->
                    <div><p class="type">${rejected.type}</p></div>
                    <!-- part-4 -->
                    <div class="">
                        <p class="salary text-gray-500">${rejected.salary}</p>
                    </div>
                    <!-- part-5 -->
                    <p class="status bg-gray-200 px-4 py-2 w-[21%]">${rejected.status}</p>
                    <p  class="description">${rejected.description}</p>
                    <!-- part-6 -->
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


