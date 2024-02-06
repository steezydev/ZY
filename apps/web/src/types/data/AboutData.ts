import { LinkData } from './LinkData';
import { TechStackData } from './TechStackData';

export interface AboutData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  aboutText: any;
  email: string;
  links: LinkData[];
  tech_stack_primary: TechStackData[];
}
