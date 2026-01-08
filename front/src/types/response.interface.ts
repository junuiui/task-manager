interface IDatatProperties {
    createAt?: string;
    updatedAt?: string;
}

export interface IResponse<T> {
    status: "success" | "error";
    statusCode: number;
    message: string;
    data: (T & IDatatProperties) | (T & IDatatProperties)[];
    meta?: {};
    error?: {};
}