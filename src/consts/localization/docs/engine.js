export default [   
    ["Этот класс позволяет обрабатывать данные на основе потоков в узлах и передавать их из выходных данных во входные", {
        en: "This class allows you to process data based on streams in nodes and transfer them from the output data to the input",
        ua: "Цей клас дозволяє обробляти дані на основі потоків у вузлах і передавати їх з вихідних даних у вхідні"
    }],
    ["Движок не зависит от других компонентов редактора", {
        en: "The engine does not depend on other components of the editor",
        ua: "Движок не залежить від інших компонентів редактора"
    }],
    ["Все, что ему нужно - это идентификатор, воркеры Компонентов и JSON данные", {
        en: "All he needs is an identifier, component workers and JSON data",
        ua: "Все, що йому потрібно - це ідентифікатор, Воркер Компонентів і JSON дані"
    }],
    ["Он может работать независимо от Редактора", {
        en: "It can work independently from the Editor",
        ua: "Він може працювати незалежно від Редактора"
    }],
    ["Обработка", {
        en: "Treatment",
        ua: "Обробка"
    }],
    ["Обход узлов выполняется следующим образом", {
        en: "Bypassing the nodes is performed as follows",
        ua: "Обхід вузлів виконується наступним чином"
    }],
    ["Рассмотрим ситуацию, когда во время работы в редакторе нужно сразу получать результаты изменений (это легко сделать с событием 'process')", {
        en: "Consider the situation when, while working in the editor, you need to immediately receive the results of changes (this is easy to do with the 'process' event)",
        ua: "Розглянемо ситуацію, коли під час роботи в редакторі потрібно відразу отримувати результати змін (це легко зробити з подією 'process')"
    }],
    ["В общем случае при каждом изиенении в схеме (узлы, соединения, данные узла) необходимо выполнять обработку", {
        en: "In general, for each change in the schema (nodes, connections, node data), it is necessary to perform processing",
        ua: "У загальному випадку при кожній зміні в схемі (вузли, з'єднання, дані вузла) необхідно виконувати обробку"
    }],
    ["В связи с тем, что воркеры могут быть асинхронными, метод 'process' также является асинхронным", {
        en: "Due to the fact that workers can be asynchronous, the 'process' method is also asynchronous",
        ua: "У зв'язку з тим, що воркери можуть бути асинхронними, метод 'process' також є асинхронним"
    }],
    ["Так как действия, провоцирующие обработку, могут выполняться не дожидаясь завершения предыдущей обработки, нам необходим метод `abort`, который ожидает завершения предыдущей обработки и гарантирует целостность данных", {
        en: "Since the actions provoking the processing can be performed without waiting for the completion of the previous processing, we need the `abort` method, which waits for the completion of the previous processing and guarantees data integrity",
        ua: "Так як дії, що провокують обробку, можуть виконуватися не чекаючи завершення попередньої обробки, нам необхідний метод `abort`, який очікує завершення попередньої обробки і гарантує цілісність даних"
    }],
    ["Обычно есть какой-то основной узел, с которого должна начинаться обработка или все данные идут к нему, тогда вы можете указать его", {
        en: "Usually there is some kind of primary node from which processing should start or all data goes to it, then you can specify it",
        ua: "Зазвичай є якийсь основний вузол, з якого повинна починатися обробка або всі дані йдуть до нього, тоді ви можете вказати його"
    }],
    ["Это может быть важно в ситуациях, когда узел запрашивает данные одновременно из нескольких узлов", {
        en: "This can be important in situations where a node requests data simultaneously from multiple nodes",
        ua: "Це може бути важливо в ситуаціях, коли вузол запитує дані одночасно з декількох вузлів"
    }],
    ["Например, если стартовым узлом будет Output material, тогда верхняя и нижняя цепочка узлов будут обработаны параллельно", {
        en: "For example, if the starting node is an Output material, then the upper and lower chain of nodes will be processed in parallel",
        ua: "Наприклад, якщо стартовим вузлом буде Output material, тоді верхня і нижня ланцюжок вузлів будуть оброблені паралельно"
    }],
    ["Если начать обработку с узла Lightness, тогда обработка нижних узлов будет начата только после получения результата в текущем", {
        en: "If you start processing from the Lightness node, then processing of the lower nodes will be started only after receiving the result in the current",
        ua: "Якщо почати обробку з вузла Lightness, тоді обробка нижніх вузлів буде розпочата тільки після отримання результату в поточному"
    }],
    ["Также вы можете передавать дополнительные аргументы внутрь воркеров", {
        en: "You can also pass additional arguments inside the workers",
        ua: "Також ви можете передавати додаткові аргументи всередину воркерів"
    }],
    ["Каждому воркеру, обработанному этим процессом, будут переданы аргументы", {
        en: "Arguments will be passed to each worker processed by this process",
        ua: "Кожному воркеру, обробленого цим процесом, будуть передані аргументи"
    }],
    ["Если во время обработки возникает ошибка (обнаружена рекурсия, неправильный startId, неверные данные), вы можете получить его сообщение и данные", {
        en: "If an error occurs during processing (recursion detected, wrong startId, incorrect data), you can get its message and data",
        ua: "Якщо під час обробки виникає помилка (виявлена рекурсія, неправильний startId, невірні дані), ви можете отримати його повідомлення і дані"
    }],
    ["Кроссплатформенный Движок", {
        en: "Cross Platform Engine",
        ua: "Кросплатформовий Движок"
    }],
    ["Внимание! Текущая версия движка на С++ не совместима с версией 1.0.0, но может быть обновлена при необходимости", {
        en: "Attention! The current version of the C++ engine is not compatible with version 1.0.0, but can be updated if necessary",
        ua: "Увага! Поточна версія движка на С++ не сумісна з версією 1.0.0, але може бути оновлена за необхідності"
    }]
]