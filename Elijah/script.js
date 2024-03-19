// Assuming you have the JSON data stored in a variable called 'jsonData'

// Get the container element for the featured jobs
const featuredJobsContainer = document.getElementById('featured-jobs');

// Loop through the featured jobs data and create HTML elements
jodsData.json.featuredJobs.forEach((job) => {
  // Create the job container element
  const jobContainer = document.createElement('div');
  jobContainer.classList.add('job');

  // Create the job title element
  const jobTitle = document.createElement('h3');
  jobTitle.textContent = job.title;

  // Create the company name element
  const companyName = document.createElement('p');
  companyName.textContent = job.company;

  // Create the location element
  const location = document.createElement('p');
  location.textContent = job.location;

  // Create the job description element
  const description = document.createElement('p');
  description.textContent = job.description;

  // Create the apply button element
  const applyButton = document.createElement('button');
  applyButton.classList.add('apply-button');
  applyButton.textContent = 'Apply';
  applyButton.addEventListener('click', () => {
    window.location.href = job.applyLink;
  });

  // Append the elements to the job container
  jobContainer.appendChild(jobTitle);
  jobContainer.appendChild(companyName);
  jobContainer.appendChild(location);
  jobContainer.appendChild(description);
  jobContainer.appendChild(applyButton);

  // Append the job container to the featured jobs container
  featuredJobsContainer.appendChild(jobContainer);
});