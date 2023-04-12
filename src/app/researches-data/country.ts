import {ResearchStatus} from './status-enum';
export interface Country {
	id: number;
	title: string;
    name: string;
	flag: string;
	area: number;
	population: number;
    short_desc: string;
    big_desc:string;
	category: string;
    status:ResearchStatus;
    owner:string;
	cover_pic: string;
    supporting_pic_1: string;
    supporting_pic_2: string;
    supporting_pic_3: string;
}