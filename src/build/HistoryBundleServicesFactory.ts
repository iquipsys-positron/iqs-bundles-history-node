import { DefaultContainerFactory } from 'pip-services3-container-node';

import { StatisticsServiceFactory } from 'pip-services-statistics-node';

import { OperationalEventsServiceFactory } from 'iqs-services-opevents-node';
import { PositionsServiceFactory } from 'pip-services-positions-node';
import { ObjectStatesServiceFactory } from 'iqs-services-objectstates-node';
import { RoutesServiceFactory } from 'pip-services-routes-node';
import { AttendanceServiceFactory } from 'iqs-services-attendance-node';
import { TransducerDataServiceFactory } from 'pip-services-transducerdata-node';

export class HistoryBundleServicesFactory extends DefaultContainerFactory {

    public constructor() {
        super();

        this.add(new StatisticsServiceFactory);
        
        this.add(new OperationalEventsServiceFactory);
        this.add(new TransducerDataServiceFactory);
        this.add(new PositionsServiceFactory);
        this.add(new ObjectStatesServiceFactory);
        this.add(new RoutesServiceFactory);
        this.add(new AttendanceServiceFactory);
        
    }

}
