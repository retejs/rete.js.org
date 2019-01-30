export default [   
    ["Компоненты предназначены для упрощения разработки за счет сочетания тесно связанных функций построения и обработки узлов.", {
        en: "The components are designed to simplify development by combining the closely related functions of building and processing nodes.",
        ua: "Компоненты предназначены для упрощения разработки за счет сочетания тесно связанных функций построения и обработки узлов."
    }],
    ["Компонент содержит билдер и воркер", {
        en: "Component contains builder and worker",
        ua: "Компонент содержит билдер и воркер"
    }],
    ["Билдер и воркер выполняются независимо друг от друга (первый работает один раз при создании узла, второй - при каждой обработке)", {
        en: "The builder and the worker are executed independently of each other (the first works once when creating a node, the second - with each processing)",
        ua: "илдер и воркер выполняются независимо друг от друга (первый работает один раз при создании узла, второй - при каждой обработке)"
    }],
    ["На самом деле они тесно связаны друг с другом в пределах одного узла", {
        en: "In fact, they are closely related to each other within the same node",
        ua: "На самом деле они тесно связаны друг с другом в пределах одного узла"
    }],
    ["На самом деле они тесно связаны друг с другом в пределах одного узла.", {
        en: "In fact, they are closely related to each other within the same node.",
        ua: "На самом деле они тесно связаны друг с другом в пределах одного узла."
    }],
    ["Регистрация компонента:", {
        en: "Component registration:",
        ua: "Регистрация компонента:"
    }],
    ["Билдеры узлов", {
        en: "Node builders",
        ua: "Билдеры узлов"
    }],
    ["Эти методы должны модифицировать экземпляр Node и необходимы редактору для восстановления всех узлов из данных JSON, поскольку данные JSON должны хранить только статическую информацию, а не логику узлов", {
        en: "These methods must modify the Node instance and are needed by the editor to restore all nodes from JSON data, since JSON data should only store static information, not the logic of the nodes.",
        ua: "Эти методы должны модифицировать экземпляр Node и необходимы редактору для восстановления всех узлов из данных JSON, поскольку данные JSON должны хранить только статическую информацию, а не логику узлов"
    }],
    ["Каждый из билдеров должен быть в соответствующем компоненте:", {
        en: "Each builder must be in the appropriate component:",
        ua: "Каждый из билдеров должен быть в соответствующем компоненте:"
    }],
    ["Воркер - это функция для обработки данных узла", {
        en: "A worker is a function for processing node data",
        ua: "Воркер - это функция для обработки данных узла"
    }],
    ["Они получают параметры узла, входы, выходы, и аргументы, передаваемые при обработке (опционально)", {
        en: "They get node parameters, inputs, outputs, and arguments passed during processing (optional)",
        ua: "Они получают параметры узла, входы, выходы, и аргументы, передаваемые при обработке (опционально)"
    }],
    ["Данные узла (не экземпляр узла), входы и выходы соответствуют определениям в билдерах (см. выше).", {
        en: "Node data (not an instance of a node), inputs and outputs correspond to the definitions in the builders (see above).",
        ua: "Данные узла (не экземпляр узла), входы и выходы соответствуют определениям в билдерах (см. выше)."
    }],
    ["Воркеры узлов", {
        en: "Node workers",
        ua: "Воркеры узлов"
    }],
    ["Как вы заметили, вы можете использовать асинхронные функции (или Promise для предыдущих версий ES)", {
        en: "As you noticed, you can use asynchronous functions (or Promise for previous versions of ES)",
        ua: "Как вы заметили, вы можете использовать асинхронные функции (или Promise для предыдущих версий ES)"
    }],
    ["Это необходимо для выполнения сложных вычислений без блокировки основного потока (например, в WebWorker).", {
        en: "This is necessary to perform complex calculations without blocking the main thread (for example, in WebWorker).",
        ua: "Это необходимо для выполнения сложных вычислений без блокировки основного потока (например, в WebWorker)."
    }]
];