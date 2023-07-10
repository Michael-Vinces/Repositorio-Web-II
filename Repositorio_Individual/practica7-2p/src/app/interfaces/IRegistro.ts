export interface IRegistros{
    sum:      number;
    registros: IRegistro[];
}

export interface IRegistro {
    _id?:     string;
    name:    string;
    date:    string;
    hour:   string;
    gradeEarned: number;
    topGrade: number;
}