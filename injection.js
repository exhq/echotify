document.getElementsByClassName("Type__TypeElement-sc-goli3j-0 bkjCej")[0].innerText = "echotify";

//disabling the stupid ctrl + shift + o bullshittery
document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === 'O') {
    event.preventDefault();
  }
});