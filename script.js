let interviewList = [];
let rejectedList = [];


let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');
let availableJobs = document.getElementById('availableJobs');




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





function toggleStyle(id){
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
    selected.classList.remove ('bg-white', 'text-gray-600')


}





