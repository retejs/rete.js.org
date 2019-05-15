import { assignSection } from '@/i18n';

export default () => assignSection([
    ["это создаст директорию на основе", {
        en: "this will create a directory based on",
        ua: "це створить директорію на основі"
    }],
    ["шаблона", {
        en: "the boilerplate",
        ua: "шаблону"
    }],
    ["Сборка вашего пакета должна выполняться с помощью команды (которая уже записана в package.json)", {
        en: "Build your package should be done using the command (which is already wrote in package.json)",
        ua: "Збірка вашого пакету повинна виконуватись за допомогою команди (яка вже записана в package.json)"
    }],
    ["в директории build будут созданы бандлы трех форматов: UMD, CommonJS, ES", {
        en: "In the build directory will be created a bundles of three formats: UMD, CommonJS, ES",
        ua: ""
    }],
    ["Сборка выполняется с помощью Rollup, конфигурация которого", {
        en: "Build is performed using Rollup, whose configuration",
        ua: "Збірка виконується за допомогою Rollup, конфігурация якого"
    }],
    ["расширена", {
        en: "extended",
        ua: "розширена"
    }],
    ["Пример конфигурации", {
        en: "Configuration example",
        ua: "Приклад конфігурації"
    }]
], 'cli')