import { Socket } from 'rete';

export default {
    num: new Socket('Number value'),
    action: new Socket('Action'),
    data: new Socket('Data'),
    package: new Socket('Package')
}
