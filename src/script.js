let key = '';

function onReceiveNativeCommand(command, payload) {
    try {
        if (command == 'getAdditionalParams') {
            const data = JSON.parse(payload);
            key = data.key;
        }
    } catch (e) {
        alert('error receive : ' + e);
    }
}
function getKey() {
    return key;
}