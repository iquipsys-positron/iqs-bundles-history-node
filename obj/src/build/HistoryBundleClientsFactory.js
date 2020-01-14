"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_clients_statistics_node_1 = require("pip-clients-statistics-node");
const iqs_clients_statistics_node_1 = require("iqs-clients-statistics-node");
const pip_clients_transducerdata_node_1 = require("pip-clients-transducerdata-node");
const iqs_clients_opevents_node_1 = require("iqs-clients-opevents-node");
const pip_clients_positions_node_1 = require("pip-clients-positions-node");
const iqs_clients_objectstates_node_1 = require("iqs-clients-objectstates-node");
const pip_clients_routes_node_1 = require("pip-clients-routes-node");
const iqs_clients_attendance_node_1 = require("iqs-clients-attendance-node");
class HistoryBundleClientsFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_clients_statistics_node_1.StatisticsClientFactory());
        this.add(new iqs_clients_statistics_node_1.StatisticsClientFactory());
        this.add(new iqs_clients_opevents_node_1.OperationalEventsClientFactory());
        this.add(new pip_clients_transducerdata_node_1.TransducerDataClientFactory());
        this.add(new pip_clients_routes_node_1.RoutesClientFactory());
        this.add(new iqs_clients_objectstates_node_1.ObjectStatesClientFactory());
        this.add(new pip_clients_positions_node_1.PositionsClientFactory());
        this.add(new iqs_clients_attendance_node_1.AttendanceClientFactory());
    }
}
exports.HistoryBundleClientsFactory = HistoryBundleClientsFactory;
//# sourceMappingURL=HistoryBundleClientsFactory.js.map