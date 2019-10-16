import { Agua } from '../models/agua';
import { Malte } from '../models/malte';
import { Lupulo } from '../models/lupulo';
import { Levedura } from '../models/levedura';

export class Receita {
    
    id:number;
    nome:string;
    descricao:string;
    tipo: string;
    cervejeiros: string;
    data_inicio: string;
    data_fim: string;
    volume: number;
    og: number;
    fg: number;
    ibu: number;
    srm: number;
    abv: number;
    aguas: Agua [];
    maltes: Malte [];
    lupulos: Lupulo [];
    leveduras: Levedura [];
}
