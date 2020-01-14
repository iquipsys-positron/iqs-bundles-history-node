"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_aws_node_1 = require("pip-services3-aws-node");
const HistoryBundleServicesFactory_1 = require("../build/HistoryBundleServicesFactory");
const HistoryBundleClientsFactory_1 = require("../build/HistoryBundleClientsFactory");
class HistoryBundleProcess extends pip_services3_container_node_1.ProcessContainer {
    constructor() {
        super("iqs-bundles-history", "History bundle for iQuipsys Positron");
        this._factories.add(new HistoryBundleServicesFactory_1.HistoryBundleServicesFactory);
        this._factories.add(new HistoryBundleClientsFactory_1.HistoryBundleClientsFactory);
        this._factories.add(new pip_services3_rpc_node_1.DefaultRpcFactory);
        this._factories.add(new pip_services3_aws_node_1.DefaultAwsFactory);
    }
}
exports.HistoryBundleProcess = HistoryBundleProcess;
//# sourceMappingURL=HistoryBundleProcess.js.map