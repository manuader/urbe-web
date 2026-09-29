/**
 * Plugin rehype: convierte las marcas de evidencia escritas en Markdown
 * — "[Comprobado · fuente]", "[Declarado · …]", "[A validar · …]" — en la
 * EtiquetaEvidencia del design system (<span class="ev ev--…">).
 */
const RE = /\[(Comprobado|Declarado|A validar|Ilustrativo)((?:\s*[·,:]\s*)[^\]]+)?\]/g;
const CLS = { Comprobado: 'comprobado', Declarado: 'declarado', 'A validar': 'validar', Ilustrativo: 'ilustrativo' };

function walk(node) {
  if (!node.children) return;
  const out = [];
  for (const child of node.children) {
    if (child.type === 'text' && RE.test(child.value)) {
      RE.lastIndex = 0;
      let last = 0;
      let m;
      while ((m = RE.exec(child.value))) {
        if (m.index > last) out.push({ type: 'text', value: child.value.slice(last, m.index) });
        const note = (m[2] || '').replace(/^\s*[·,:]\s*/, '');
        out.push({
          type: 'element',
          tagName: 'span',
          properties: { className: ['ev', `ev--${CLS[m[1]]}`] },
          children: [{ type: 'text', value: note ? `${m[1]} · ${note}` : m[1] }],
        });
        last = m.index + m[0].length;
      }
      if (last < child.value.length) out.push({ type: 'text', value: child.value.slice(last) });
    } else {
      if (child.type === 'element' && child.tagName !== 'code' && child.tagName !== 'pre') walk(child);
      out.push(child);
    }
  }
  node.children = out;
}

export default function rehypeEvidence() {
  return (tree) => walk(tree);
}
