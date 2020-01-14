let HistoryBundleProcess = require('../obj/src/container/HistoryBundleProcess').HistoryBundleProcess;

try {
    new HistoryBundleProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}