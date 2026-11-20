const form = document.querySelector('#entry-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const status = form.querySelector('.form-status');
  status.textContent = 'Your details are valid. Connect a submission service to receive registrations.';
  form.querySelector('button').textContent = 'Details Validated';
});
