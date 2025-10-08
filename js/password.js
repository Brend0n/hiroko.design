const correctPassword = "hirokobouzas"; // Set your password here
const modal = document.getElementById('passwordModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const submitPasswordBtn = document.getElementById('submitPassword');
const passwordInput = document.getElementById('passwordInput');
const errorMsg = document.getElementById('errorMsg');

let pendingRedirect = null; // Store the target page temporarily

// Function to open modal
function openModal() {
  modal.style.display = 'block';
  errorMsg.style.display = 'none';
  passwordInput.value = '';
  passwordInput.focus();
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
}

// Check if user is authenticated
function isAuthenticated() {
  return sessionStorage.getItem('authenticated') === 'true';
}

// Handle div "button" clicks and keyboard events
document.querySelectorAll('.protectedBtn').forEach(divBtn => {
  divBtn.addEventListener('click', () => {
    const targetPage = divBtn.getAttribute('data-target');
    if (isAuthenticated()) {
      window.location.href = targetPage;
    } else {
      pendingRedirect = targetPage;
      openModal();
    }
  });
  
  // Make div accessible by keyboard (Enter and Space keys)
  divBtn.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      divBtn.click();
    }
  });
});

// Submit password
submitPasswordBtn.addEventListener('click', () => {
  const enteredPassword = passwordInput.value;
  if (enteredPassword === correctPassword) {
    sessionStorage.setItem('authenticated', 'true');
    closeModal();
    if (pendingRedirect) {
      window.location.href = pendingRedirect;
      pendingRedirect = null;
    }
  } else {
    errorMsg.style.display = 'block';
    passwordInput.value = '';
    passwordInput.focus();
  }
});

// Close modal on close button click
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Allow Enter key to submit password
passwordInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    submitPasswordBtn.click();
  }
});

// Handle reset authentication button separately
const resetAuthBtn = document.getElementById('resetAuthBtn');

resetAuthBtn.addEventListener('click', () => {
  sessionStorage.removeItem('authenticated');
  alert('Authentication reset. You will be asked for the password again.');
});

resetAuthBtn.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    resetAuthBtn.click();
  }
});