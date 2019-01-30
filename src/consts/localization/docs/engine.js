export default [   
    ["Этот класс позволяет обрабатывать данные на основе потоков в узлах и передавать их из выходных данных во входные", {
        en: "This class allows you to process data based on streams in nodes and transfer them from the output data to the input",
        ua: "Этот класс позволяет обрабатывать данные на основе потоков в узлах и передавать их из выходных данных во входные"
    }],
    ["Движок не зависит от других компонентов редактора", {
        en: "The engine does not depend on other components of the editor",
        ua: "Движок не зависит от других компонентов редактора"
    }],
    ["Все, что ему нужно - это идентификатор, воркеры Компонентов и JSON данные", {
        en: "All he needs is an identifier, component workers and JSON data",
        ua: "Все, что ему нужно - это идентификатор, воркеры Компонентов и JSON данные"
    }],
    ["Он может работать независимо от Редактора", {
        en: "It can work independently from the Editor.",
        ua: "Он может работать независимо от Редактора"
    }],
    ["Обработка", {
        en: "Treatment",
        ua: "Обработка"
    }],
    ["Обход узлов выполняется следующим образом:", {
        en: "Bypassing the nodes is performed as follows:",
        ua: "Обход узлов выполняется следующим образом:"
    }],
    ["Рассмотрим ситуацию, когда во время работы в редакторе нужно сразу получать результаты изменений (это легко сделать с событием 'process')", {
        en: "Consider the situation when, while working in the editor, you need to immediately receive the results of changes (this is easy to do with the 'process' event):",
        ua: "Рассмотрим ситуацию, когда во время работы в редакторе нужно сразу получать результаты изменений (это легко сделать с событием 'process')"
    }],
    ["В общем случае при каждом изиенении в схеме (узлы, соединения, данные узла) необходимо выполнять обработку", {
        en: "In general, for each change in the schema (nodes, connections, node data), it is necessary to perform processing",
        ua: "В общем случае при каждом изиенении в схеме (узлы, соединения, данные узла) необходимо выполнять обработку"
    }],
    ["В связи с тем, что воркеры могут быть асинхронными, метод 'process' также является асинхронным", {
        en: "Due to the fact that workers can be asynchronous, the 'process' method is also asynchronous",
        ua: "В связи с тем, что воркеры могут быть асинхронными, метод 'process' также является асинхронным"
    }],
    ["Так как действия, провоцирующие обработку, могут выполняться не дожидаясь завершения предыдущей обработки, нам необходим метод `abort`, который ожидает завершения предыдущей обработки и гарантирует целостность данных.", {
        en: "Since the actions provoking the processing can be performed without waiting for the completion of the previous processing, we need the `abort` method, which waits for the completion of the previous processing and guarantees data integrity.",
        ua: "Так как действия, провоцирующие обработку, могут выполняться не дожидаясь завершения предыдущей обработки, нам необходим метод `abort`, который ожидает завершения предыдущей обработки и гарантирует целостность данных."
    }],
    ["Обычно есть какой-то основной узел, с которого должна начинаться обработка или все данные идут к нему, тогда вы можете указать его:", {
        en: "Usually there is some kind of primary node from which processing should start or all data goes to it, then you can specify it:",
        ua: "Обычно есть какой-то основной узел, с которого должна начинаться обработка или все данные идут к нему, тогда вы можете указать его:"
    }],
    ["Это может быть важно в ситуациях, когда узел запрашивает данные одновременно из нескольких узлов", {
        en: "This can be important in situations where a node requests data simultaneously from multiple nodes",
        ua: "Это может быть важно в ситуациях, когда узел запрашивает данные одновременно из нескольких узлов"
    }],
    ["Например, если стартовым узлом будет Output material, тогда верхняя и нижняя цепочка узлов будут обработаны параллельно", {
        en: "For example, if the starting node is an Output material, then the upper and lower chain of nodes will be processed in parallel",
        ua: "Например, если стартовым узлом будет Output material, тогда верхняя и нижняя цепочка узлов будут обработаны параллельно"
    }],
    ["Если начать обработку с узла Lightness, тогда обработка нижних узлов будет начата только после получения результата в текущем.", {
        en: "If you start processing from the Lightness node, then processing of the lower nodes will be started only after receiving the result in the current.",
        ua: "Если начать обработку с узла Lightness, тогда обработка нижних узлов будет начата только после получения результата в текущем."
    }],
    ["Также вы можете передавать дополнительные аргументы внутрь воркеров", {
        en: "You can also pass additional arguments inside the workers",
        ua: "Также вы можете передавать дополнительные аргументы внутрь воркеров"
    }],
    ["Каждому воркеру, обработанному этим процессом, будут переданы аргументы", {
        en: "Arguments will be passed to each worker processed by this process",
        ua: "Каждому воркеру, обработанному этим процессом, будут переданы аргументы"
    }],
    ["Если во время обработки возникает ошибка (обнаружена рекурсия, неправильный startId, неверные данные), вы можете получить его сообщение и данные", {
        en: "If an error occurs during processing (recursion detected, wrong startId, incorrect data), you can get its message and data",
        ua: "Если во время обработки возникает ошибка (обнаружена рекурсия, неправильный startId, неверные данные), вы можете получить его сообщение и данные"
    }],
    ["Кроссплатформенный Движок", {
        en: "Cross Platform Engine",
        ua: "Кроссплатформенный Движок"
    }],
    ["Внимание! Текущая версия движка на С++ не совместима с версией 1.0.0, но может быть обновлена при необходимости", {
        en: "Attention! The current version of the C ++ engine is not compatible with version 1.0.0, but can be updated if necessary",
        ua: "Внимание! Текущая версия движка на С++ не совместима с версией 1.0.0, но может быть обновлена при необходимости"
    }],
    ["Обработка", {
        en: "Treatment",
        ua: "Обработка"
    }],
    ["Обработка", {
        en: "Treatment",
        ua: "Обработка"
    }],
]