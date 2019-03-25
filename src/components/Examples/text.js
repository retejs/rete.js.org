import text from '../../consts/examples/text.json';

export default function(key) {
    const itemText = text[key];

    if(!itemText) throw new Error('text for example not found') 

    return itemText;
}