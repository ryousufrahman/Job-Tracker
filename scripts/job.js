// all jobs count show
let totalCount =document.getElementById('total-count');
let interviewCount =document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
const allJobSection =document.getElementById('all-jobs-section');
let availableJobCount =document.getElementById('available-jobs-count');

function calculateCount() {
    totalCount.innerText = allJobSection.children.length;
    availableJobCount.innerText = allJobSection.children.length;
    
}
calculateCount();
// / all jobs count show done