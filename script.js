let interviewList = [];
let rejectedList = [];


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
let availableJobs = document.getElementById('availableJobs');

// filterded
const filteredSection = document.getElementById('filteredSection')




function calculateCount() {
    total.innerText = document.getElementById('jobCardSection').children.length;
    availableJobs.innerText = document.getElementById('jobCardSection').children.length;
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount();


let allBtn = document.getElementById('allBtn')
let interviewBtn = document.getElementById('interviewBtn')
let rejectedBtn = document.getElementById('rejectedBtn')





function toggleStyle(id) {
    allBtn.classList.add('bg-white', 'text-gray-600')
    interviewBtn.classList.add('bg-white', 'text-gray-600')
    rejectedBtn.classList.add('bg-white', 'text-gray-600')

    allBtn.classList.remove('bg-blue-500', 'text-white')
    interviewBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedBtn.classList.remove('bg-blue-500', 'text-white')



    let selected = document.getElementById(id)
    //  currentStatus = id
    //  console.log(currentStatus)
    selected.classList.add('bg-blue-500', 'text-white')
    selected.classList.remove('bg-white', 'text-gray-600')

    if (id == 'interviewBtn') {
        jobCardSection.classList.add('hidden')
        filteredSection.classList.remove('hidden')

    } else if (id == 'allBtn') {
        jobCardSection.classList.remove('hidden')
        filteredSection.classList.add('hidden')
    }


}


jobCardSection.addEventListener("click", function (event) {

    if (event.target.classList.contains('interview-button')) {
        const parentNode = event.target.parentNode.parentNode;
        const jobOneTitle = parentNode.querySelector('.jobOneTitle').innerText
        const jobOneSkill = parentNode.querySelector('.jobOneSkill').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('#status').innerText
        const jobOneInfo = parentNode.querySelector('.jobOneInfo').innerText
        parentNode.querySelector('#status').innerText = 'Interviewed'


        const cardInfo = {
            jobOneTitle,
            jobOneSkill,
            salary,
            status: 'Interviewed',
            jobOneInfo
        }


        const jobExits = interviewList.find(item => item.jobOneTitle == cardInfo.jobOneTitle)


        if (!jobExits) {
            interviewList.push(cardInfo)
        }


        calculateCount();

        renderInterview();

    }   

    })
    



function renderInterview() {
    filteredSection.innerHTML = ''
    for (let interview of interviewList) {
        console.log(interview)
        let div = document.createElement('div')
        div.innerHTML = `
         <div class="job-card-1 shadow-sm p-5">
            <div class="flex justify-between">
                <div>
                    <h2 class="jobOneTitle font-bold text-xl">${interview.jobOneTitle}</h2>
                    <p class="jobOneSkill">React Native Developer</p>
                </div>
                <span><i class="fa-regular fa-trash-can"></i></span>
            </div>

            <p class="salary my-4">Remote • Full-time • $130,000 - $175,000</p>
            <button id ='status' class=" btn mb-2">${interview.status}</button>
            <p class="jobOneInfo mb-4">Build cross-platform mobile applications using React Native. Work on products used by
                millions of users worldwide.</p>
            <div class="flex gap-4">
                <button class="btn btn-outline btn-success px-4">INTERVIEW</button>
                <button class="btn btn-outline btn-error px-4">REJECTED</button>
            </div>
        </div>
        `
        filteredSection.appendChild(div)
    }



}

// function renderRejected() {
//     filteredSection.innerHTML = ''
//     for (let reject of rejectedList) {
//         console.log(reject)
//         let div = document.createElement('div')
//         div.innerHTML = `
//          <div class="job-card-1 shadow-sm p-5">
//             <div class="flex justify-between">
//                 <div>
//                     <h2 class="jobOneTitle font-bold text-xl">${reject.jobOneTitle}</h2>
//                     <p class="jobOneSkill">React Native Developer</p>
//                 </div>
//                 <span><i class="fa-regular fa-trash-can"></i></span>
//             </div>

//             <p class="salary my-4">Remote • Full-time • $130,000 - $175,000</p>
//             <button id ='status' class=" btn mb-2">${reject.status}</button>
//             <p class="jobOneInfo mb-4">Build cross-platform mobile applications using React Native. Work on products used by
//                 millions of users worldwide.</p>
//             <div class="flex gap-4">
//                 <button class="btn btn-outline btn-success px-4">INTERVIEW</button>
//                 <button class="btn btn-outline btn-error px-4">REJECTED</button>
//             </div>
//         </div>
//         `
//         filteredSection.appendChild(div)
//     }



// }





