import {Block} from "../modules/block/block";

function render(query: string, block: Block) {
    const root = document.querySelector(query);

    root?.appendChild(block.getContent());
    return root;
}

export {render};