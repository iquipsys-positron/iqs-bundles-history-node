import { IReferences } from 'pip-services3-commons-node';
import { ProcessContainer } from 'pip-services3-container-node';
import { DefaultRpcFactory } from 'pip-services3-rpc-node';
import { DefaultAwsFactory } from 'pip-services3-aws-node';

import { HistoryBundleServicesFactory } from '../build/HistoryBundleServicesFactory';
import { HistoryBundleClientsFactory } from '../build/HistoryBundleClientsFactory';

export class HistoryBundleProcess extends ProcessContainer {

    public constructor() {
        super("iqs-bundles-history", "History bundle for iQuipsys Positron");
        this._factories.add(new HistoryBundleServicesFactory);
        this._factories.add(new HistoryBundleClientsFactory);
        this._factories.add(new DefaultRpcFactory);
        this._factories.add(new DefaultAwsFactory);
    }

}
