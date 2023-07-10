export interface IEstudiantes {
    sum:      number;
    estudiantes: IEstudiante[];
}

export interface IEstudiante {
    _id?:     string;
    name:    string;
    identificationCard:    string;
    studentRepresentative:   string;
    course: string;
}