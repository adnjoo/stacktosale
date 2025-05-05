import { unified } from "unified";
import remarkParse from "remark-parse";
import { randomUUID } from "crypto";

type PortableTextBlock = {
  _type: "block";
  _key: string;
  style: "normal" | "h1" | "h2" | "h3";
  markDefs: any[];
  children: {
    _type: "span";
    _key: string;
    text: string;
    marks: string[];
  }[];
};

// very simple markdown → Portable Text converter
export function markdownToPortableText(markdown: string): PortableTextBlock[] {
  const tree = unified().use(remarkParse).parse(markdown);

  const blocks: PortableTextBlock[] = [];

  let currentBlock: PortableTextBlock | null = null;

  function pushCurrentBlock() {
    if (currentBlock) {
      blocks.push(currentBlock);
      currentBlock = null;
    }
  }

  function visit(node: any) {
    switch (node.type) {
      case "heading": {
        pushCurrentBlock();
        currentBlock = {
          _type: "block",
          _key: randomUUID(),
          style: `h${node.depth}` as "h1" | "h2" | "h3",
          markDefs: [],
          children: [],
        };
        node.children.forEach(visit);
        pushCurrentBlock();
        break;
      }
      case "paragraph": {
        pushCurrentBlock();
        currentBlock = {
          _type: "block",
          _key: randomUUID(),
          style: "normal",
          markDefs: [],
          children: [],
        };
        node.children.forEach(visit);
        pushCurrentBlock();
        break;
      }
      case "text": {
        if (!currentBlock) return;
        currentBlock.children.push({
          _type: "span",
          _key: randomUUID(),
          text: node.value,
          marks: [],
        });
        break;
      }
      case "strong":
      case "emphasis": {
        if (!currentBlock) return;
        const mark = node.type === "strong" ? "strong" : "em";
        node.children.forEach((child: any) => {
          currentBlock!.children.push({
            _type: "span",
            _key: randomUUID(),
            text: child.value,
            marks: [mark],
          });
        });
        break;
      }
      default:
        break;
    }
  }

  // visit all top-level nodes
  for (const child of (tree as any).children) {
    visit(child);
  }

  return blocks;
}
