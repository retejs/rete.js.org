import Vue from 'vue';
import View from './View';

export default async function(container, props){
    const list = document.createElement('div');

    container.appendChild(list);

    new Vue({
        render: h => h(View, { props })
    }).$mount(list)
}