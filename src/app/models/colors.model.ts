export interface Resource {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Color[];
}

export interface Color {
    id: number;
    name: string;
    year: string;
    color: string;
    pantone_value: string;
}

export interface ColorResponse {
    data: Color;
}