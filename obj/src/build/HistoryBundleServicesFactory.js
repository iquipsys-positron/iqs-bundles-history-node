"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_container_node_1 = require("pip-services3-container-node");
const pip_services_statistics_node_1 = require("pip-services-statistics-node");
const iqs_services_opevents_node_1 = require("iqs-services-opevents-node");
const pip_services_positions_node_1 = require("pip-services-positions-node");
const iqs_services_objectstates_node_1 = require("iqs-services-objectstates-node");
const pip_services_routes_node_1 = require("pip-services-routes-node");
const iqs_services_attendance_node_1 = require("iqs-services-attendance-node");
const pip_services_transducerdata_node_1 = require("pip-services-transducerdata-node");
class HistoryBundleServicesFactory extends pip_services3_container_node_1.DefaultContainerFactory {
    constructor() {
        super();
        this.add(new pip_services_statistics_node_1.StatisticsServiceFactory);
        this.add(new iqs_services_opevents_node_1.OperationalEventsServiceFactory);
        this.add(new pip_services_transducerdata_node_1.TransducerDataServiceFactory);
        this.add(new pip_services_positions_node_1.PositionsServiceFactory);
        this.add(new iqs_services_objectstates_node_1.ObjectStatesServiceFactory);
        this.add(new pip_services_routes_node_1.RoutesServiceFactory);
        this.add(new iqs_services_attendance_node_1.AttendanceServiceFactory);
    }
}
exports.HistoryBundleServicesFactory = HistoryBundleServicesFactory;
//# sourceMappingURL=HistoryBundleServicesFactory.js.map