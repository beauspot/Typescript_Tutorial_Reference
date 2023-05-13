declare let score: string | number;
type User_ = {
    name: string;
    id: number;
};
type Admin_ = {
    username: string;
    id: number;
};
declare let beau: User_ | Admin_;
declare const getDbId: (id: number | string) => void;
declare const data: (string | number)[];
