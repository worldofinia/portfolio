document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    alert('Message sent successfully!');
  });
  
  function viewProject(projectId) {
    alert('Viewing project: ' + projectId);
  }









