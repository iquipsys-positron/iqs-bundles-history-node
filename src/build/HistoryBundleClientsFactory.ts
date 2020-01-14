import { DefaultContainerFactory } from 'pip-services3-container-node';

import { StatisticsClientFactory } from 'pip-clients-statistics-node';

import { StatisticsClientFactory as IqsStatisticsClientFactory } from 'iqs-clients-statistics-node';
import { TransducerDataClientFactory } from 'pip-clients-transducerdata-node';
import { OperationalEventsClientFactory } from 'iqs-clients-opevents-node';
import { PositionsClientFactory } from 'pip-clients-positions-node';
import { ObjectStatesClientFactory } from 'iqs-clients-objectstates-node';
import { RoutesClientFactory } from 'pip-clients-routes-node';
import { AttendanceClientFactory } from 'iqs-clients-attendance-node';

export class HistoryBundleClientsFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new StatisticsClientFactory());

        this.add(new IqsStatisticsClientFactory())
        this.add(new OperationalEventsClientFactory());
        this.add(new TransducerDataClientFactory());
        this.add(new RoutesClientFactory());
        this.add(new ObjectStatesClientFactory());
        this.add(new PositionsClientFactory());
        this.add(new AttendanceClientFactory());

    }

}
