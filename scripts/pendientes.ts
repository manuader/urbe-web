// Genera la sección automática de docs/PENDIENTES.md a partir de los campos `pending` de los datos.
import { solutions } from '../src/data/solutions.ts';
import { sectors } from '../src/data/sectors.ts';
import { cases } from '../src/data/cases.ts';
const block = (title: string, items: { name: string; pending?: string[] }[]) =>
  `### ${title}\n\n` + items.filter((i) => i.pending?.length).map((i) => `**${i.name}**\n${i.pending!.map((p) => `- ${p}`).join('\n')}`).join('\n\n');
const out = [
  block('Soluciones', solutions.map((s) => ({ name: s.name, pending: s.pending }))),
  block('Sectores', sectors.map((s) => ({ name: s.name, pending: s.pending }))),
  block('Casos', cases.map((c) => ({ name: c.client, pending: c.pending }))),
].join('\n\n');
console.log(out);
