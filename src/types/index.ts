export type Config = {
    name: string;
    title: string;
    description: string;
    parameters: ConfigParameters;
    commands: {
        start: string;
    }
}

export type ConfigParameters = {
    input: Array<ConfigParametersInput>;
    output: ConfigParametersOutput;
}

export type ConfigParametersInput = {
    type: ConfigParametersInputType;
    name: string;
    title: string;
    items?: ConfigParametersInputItem[];
}

export type ConfigParametersInputItem = {
    value: string;
    title: string;
}

export enum ConfigParametersInputType {
    NUMBER = 'number',
    SELECT = 'select'
}

export type ConfigParametersOutput = Array<{
    type: string;
    name: string;
    title: string;
}>
