/* global browser exportFunction */
function executeSTSvc(extnId, request, resolve, reject) {
    browser.runtime.sendMessage(request).then((res) => resolve(JSON.stringify(res)), reject);
}

console.log('SourceTraq Communication started');
exportFunction(executeSTSvc, window, { defineAs: '_executeSTSvc' });
