console.log('serviceWorker')
console.log(navigator.serviceWorker);
if ('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js')
}
