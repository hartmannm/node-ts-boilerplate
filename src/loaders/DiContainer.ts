import { Container } from "inversify";
import { Logger } from "winston";
import LoggerInstance from "./log/logger";
import "reflect-metadata";

export default class DiContainer {

    private static container: Container;

    constructor() {
        this._configure();
    }

    public static get<T>(dependencyName: string): T {
        return DiContainer.container.get<T>(dependencyName);
    }

    private _configure(): void {
        if (!DiContainer.container) {
            DiContainer.container = new Container();
            this._configureDependencies();
        }
    }

    private _configureDependencies(): void {
        DiContainer.container.bind<Logger>('logger').toConstantValue(LoggerInstance);
    }

}
