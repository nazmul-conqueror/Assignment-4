let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
let availableJobs = document.getElementById('availableJobs');


let allFilterBtn = document.getElementById('all-filter-btn')
let interviewFilterBtn = document.getElementById('interview-filter-btn')
let rejectedFilterBtn = document.getElementById('rejected-filter-btn')


const jobCardSection = document.getElementById('jobCardSection')
let interviewSection = document.getElementById('interviewSection')
let rejectedSection = document.getElementById('rejectedSection')




function calculateCount() {
    total.innerText = jobCardSection.children.length;
    availableJobs.innerText = document.getElementById('jobCardSection').children.length;
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length
}
calculateCount()


function toggleStyle(id) {
    allFilterBtn.classList.add('bg-white', 'text-gray-600')
    interviewFilterBtn.classList.add('bg-white', 'text-gray-600')
    rejectedFilterBtn.classList.add('bg-white', 'text-gray-600')

    allFilterBtn.classList.remove('bg-blue-500', 'text-white')
    interviewFilterBtn.classList.remove('bg-blue-500', 'text-white')
    rejectedFilterBtn.classList.remove('bg-blue-500', 'text-white')



    let selected = document.getElementById(id)
    currentStatus = id

    selected.classList.add('bg-blue-500', 'text-white')
    selected.classList.remove('bg-white', 'text-gray-600')

    if (id == 'interview-filter-btn') {
        jobCardSection.classList.add('hidden')
        interviewSection.classList.remove('hidden')
        rejectedSection.classList.add('hidden')

        renderInterview()

    } else if (id == 'all-filter-btn') {
        jobCardSection.classList.remove('hidden')
        interviewSection.classList.add('hidden')
        rejectedSection.classList.add('hidden')
    } else if (id == 'rejected-filter-btn') {
        jobCardSection.classList.add('hidden')
        interviewSection.classList.add('hidden')
        rejectedSection.classList.remove('hidden')

        renderRejected()


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

        rejectedList = rejectedList.filter(item => item.jobOneTitle != cardInfo.jobOneTitle)



        if (currentStatus = "rejected-filter-btn") {
            renderRejected();
        }
        calculateCount()

    }
    else if (event.target.classList.contains('rejected-button')) {
        const parentNode = event.target.parentNode.parentNode;
        const jobOneTitle = parentNode.querySelector('.jobOneTitle').innerText
        const jobOneSkill = parentNode.querySelector('.jobOneSkill').innerText
        const salary = parentNode.querySelector('.salary').innerText
        const status = parentNode.querySelector('#status').innerText
        const jobOneInfo = parentNode.querySelector('.jobOneInfo').innerText
        parentNode.querySelector('#status').innerText = 'Rejected'


        const cardInfo = {
            jobOneTitle,
            jobOneSkill,
            salary,
            status: 'Rejected',
            jobOneInfo
        }


        const jobExits = rejectedList.find(item => item.jobOneTitle == cardInfo.jobOneTitle)


        if (!jobExits) {
            rejectedList.push(cardInfo)
        }
        interviewList = interviewList.filter(item => item.jobOneTitle != cardInfo.jobOneTitle)


        if (currentStatus == "interview-filter-btn") {
            renderInterview();
        }
        calculateCount()



    }


})




function renderInterview() {
    interviewSection.innerHTML = ''
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
        interviewSection.appendChild(div)
    }



}

function renderRejected() {
    rejectedSection.innerHTML = ''
    for (let rejected of rejectedList) {
        console.log(rejected)
        let div = document.createElement('div');
        div.innerHTML = `
         <div class="job-card-1 shadow-sm p-5">
            <div class="flex justify-between">
                <div>
                    <h2 class="jobOneTitle font-bold text-xl">${rejected.jobOneTitle}</h2>
                    <p class="jobOneSkill">React Native Developer</p>
                </div>
                <span><i class="fa-regular fa-trash-can"></i></span>
            </div>

            <p class="salary my-4">Remote • Full-time • $130,000 - $175,000</p>
            <button id ='status' class=" btn mb-2">${rejected.status}</button>
            <p class="jobOneInfo mb-4">Build cross-platform mobile applications using React Native. Work on products used by
                millions of users worldwide.</p>
            <div class="flex gap-4">
                <button class="btn btn-outline btn-success px-4">INTERVIEW</button>
                <button class="btn btn-outline btn-error px-4">REJECTED</button>
            </div>
        </div>
        `

        rejectedSection.appendChild(div)
    }


}





    jobCardSection.addEventListener("click", function (event) {
       
      if (event.target.classList.contains("delete-btn")) {
        event.target.parentNode.parentNode.parentNode.remove();
      }
    });


