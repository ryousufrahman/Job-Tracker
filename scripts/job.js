// .............all jobs count show!!!!!!!!!
let interviewList =[];
let rejectedList =[];

let statusBtn = 'all'
let currentStatus = 'all-filter-btn';
let totalCount =document.getElementById('total-count');
let interviewCount =document.getElementById('interview-count');
let rejectedCount = document.getElementById('rejected-count');
const allJobSection =document.getElementById('all-jobs-section');
let availableJobCount =document.getElementById('available-jobs-count');

 const deleteButtons = document.querySelectorAll('.delete-btn');


deleteButtons.forEach(button => {
    button.addEventListener('click', function() {
      
        this.parentNode.parentNode.remove();
         totalCount.innerText = allJobSection.children.length;
         availableJobCount.innerText = allJobSection.children.length;
    });
 });

function calculateCount() {
    totalCount.innerText = allJobSection.children.length;
    
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

   statusBtn = id ;
    allFilterBtn.classList.remove('bg-sky-500' , 'text-white');
    interviewFilterBtn.classList.remove('bg-sky-500' , 'text-white');
    rejectedFilterBtn.classList.remove('bg-sky-500' , 'text-white');

    allFilterBtn.classList.add('bg-gray-300' , 'text-black');
    interviewFilterBtn.classList.add('bg-gray-300' , 'text-black');
    rejectedFilterBtn.classList.add('bg-gray-300' , 'text-black');

    const selectedBtn =document.getElementById(id);
    selectedBtn.classList.add('bg-sky-500' , 'text-white')
  

    if(id== 'interview-filter-btn'){
      allJobSection.classList.add('hidden')
       filteredSection.classList.remove('hidden')
       
       
        renderInterview()
         availableJobCount.innerText = interviewList.length
        
      }
      else if(id=='all-filter-btn'){
        allJobSection.classList.remove('hidden')
        filteredSection.classList.add('hidden')
        availableJobCount.innerText = allJobSection.children.length;
      }
      else if('rejected-filter-btn'){
          allJobSection.classList.add('hidden')
          filteredSection.classList.remove('hidden')
          
         renderReject()
        availableJobCount.innerText = rejectedList.length
      }  

     
 

    }

    
      
 availableJobCount.innerText = allJobSection.children.length;

//   now through main container i will select the interview and rejected button 

const mainContainer =document.querySelector('main');
mainContainer.addEventListener('click', function(event){
   if(event.target.classList.contains('interview-btn')){
      const parenetInfoNode = event.target.parentNode.parentNode;
  const jobName =parenetInfoNode.querySelector('.Company-name').innerText;
  const roleName =parenetInfoNode.querySelector('.role-name').innerText;
  const salaryType = parenetInfoNode.querySelector('.salary-job-type').innerText;
  const statusBar =parenetInfoNode.querySelector('.status-bar').innerText = 'interviewed';
  const jobDescription = parenetInfoNode.querySelector('.descriptin').innerText;
  const rejectedColor =parenetInfoNode.querySelectorAll('.status-bar')
    for(let color of rejectedColor){
       color.classList.remove('bg-red-500' )
      color.classList.add('bg-green-500' , 'text-white')
     
    }
   
  

  
  
  
  
  const jobInformationObject={
    jobName,
    roleName,
    salaryType,
    statusBar,
    jobDescription

  }
  
  const jobExist = interviewList.find(item=> item.jobName== jobInformationObject.jobName);
 
  

  if(!jobExist){
    interviewList.push(jobInformationObject)
  }

  rejectedList = rejectedList.filter(item=> item.jobName !=jobInformationObject.jobName)


    if(statusBtn== 'rejected-filter-btn'){
    renderReject()
  }
    calculateCount()

  
     
      
      

   }

    else if(event.target.classList.contains('rejected-btn')){
      const parenetInfoNode = event.target.parentNode.parentNode;
  const jobName =parenetInfoNode.querySelector('.Company-name').innerText;
  const roleName =parenetInfoNode.querySelector('.role-name').innerText;
  const salaryType = parenetInfoNode.querySelector('.salary-job-type').innerText;
  const statusBar =parenetInfoNode.querySelector('.status-bar').innerText = 'Rejected' ;
  const jobDescription = parenetInfoNode.querySelector('.descriptin').innerText;
   const rejectedColor =parenetInfoNode.querySelectorAll('.status-bar')
    for(let color of rejectedColor){
      color.classList.remove('bg-green-500' )
      color.classList.add('bg-red-500', 'text-white')
      
    }
  
  
  const jobInformationObject={
    jobName,
    roleName,
    salaryType,
    statusBar,
    jobDescription

  }
  
  const jobExist = rejectedList.find(item=> item.jobName== jobInformationObject.jobName);
 
   
  if(!jobExist){
    rejectedList.push(jobInformationObject)
  }
  interviewList= interviewList.filter(item=> item.jobName !=jobInformationObject.jobName)

  if(statusBtn== 'interview-filter-btn'){
    renderInterview()
  }


    calculateCount()

  
      
      
      

   }


   
   
   
  
})

// now filterd section render

const filteredSection =document.getElementById('filterd-section');

 function renderInterview (){


    filteredSection.innerHTML =''
    for(let interview of interviewList ){
    
        
        let div =document.createElement('div')
        div.className = 'flex justify-between shadow p-[24px] rounded'

         
         div.innerHTML = ` 
           <div class="left-part space-y-3">
                      <div class="job-head space-y-3">
                        <h2 class="Company-name font-bold text-2xl">${interview.jobName}</h2>
                        <p class="text-gray-500 role-name">${interview.roleName}</p>
                        <p class="text-gray-500 salary-job-type">${interview.salaryType}</p>

                      </div>
                       <div class="job-extra-info space-y-2 ">
                        <span class="status-bar bg-gray-300 p-2 rounded bg-green-500 text-white ">${interview.statusBar}</span>
                        <p class="descriptin mt-3">${interview.jobDescription}</p>

                       </div>
                       <div class="buttons-inside-job">
                        <button class="btn border border-green-500 text-green-500 mr-2 interview-btn ">interview</button>
                        <button class="btn border border-red-500 text-red-500 rejected-btn">Rejected</button>

                       </div>

                 </div>
        
        
        `
        filteredSection.appendChild(div);
       

    }
     
 }

  function renderReject (){
    filteredSection.innerHTML =''
    for(let reject of rejectedList ){
    
        
        let div =document.createElement('div')
        div.className = 'flex justify-between shadow p-[24px] rounded'
        div.innerHTML = ` 
           <div class="left-part space-y-3">
                      <div class="job-head space-y-3">
                        <h2 class="Company-name font-bold text-2xl">${reject.jobName}</h2>
                        <p class="text-gray-500 role-name">${reject.roleName}</p>
                        <p class="text-gray-500 salary-job-type">${reject.salaryType}</p>

                      </div>
                       <div class="job-extra-info space-y-2 ">
                        <span class="status-bar bg-gray-300 p-2 rounded  bg-red-500 text-white">${reject.statusBar}</span>
                        <p class="descriptin mt-3">${reject.jobDescription}</p>

                       </div>
                       <div class="buttons-inside-job">
                        <button class="btn border border-green-500 text-green-500 mr-2  interview-btn">interview</button>
                        <button class="btn border border-red-500 text-red-500 rejected-btn ">Rejected</button>

                       </div>

                 </div>
        
        
        `
        filteredSection.appendChild(div);
       

    }
     
 }

 renderInterview ()

 


 


 
 