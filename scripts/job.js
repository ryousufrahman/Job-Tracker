// .............all jobs count show!!!!!!!!!
let interviewList =[];
let rejectedList =[];
let totalCount =document.getElementById('total-count');
let interviewCount =document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
const allJobSection =document.getElementById('all-jobs-section');
let availableJobCount =document.getElementById('available-jobs-count');

function calculateCount() {
    totalCount.innerText = allJobSection.children.length;
    availableJobCount.innerText = allJobSection.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length
    
}
calculateCount();
// /........ all jobs count show done

//....... button toggling feature .......
const allFilterBtn =document.getElementById('all-filter-btn');
const interviewFilterBtn =document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

function toggleStyle(id){
    allFilterBtn.classList.remove('bg-sky-500' , 'text-white');
    interviewFilterBtn.classList.remove('bg-sky-500' , 'text-white');
    rejectedFilterBtn.classList.remove('bg-sky-500' , 'text-white');

    allFilterBtn.classList.add('bg-gray-300' , 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300' , 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300' , 'text-black');

    const selectedBtn =document.getElementById(id);
    selectedBtn.classList.add('bg-sky-500' , 'text-white')

    
}
  

