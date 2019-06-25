export default [
    ["Введение", {
        en: "Introduction",
        ua: "Введення"
    }],
    ["Rete.js это модульный фреймворк для визуального программирования", {
        en: "Rete.js is a modular framework for visual programming",
        ua: "Rete.js це модульний фреймворк для візуального програмування"
    }],
    ["Вы можете определить узлы и воркеры, которые возволят пользователям создать инструкции для обработки данных в Вашем редакторе без единой строки кода", {
        en: "You can define nodes and workers that allow users to create instructions for processing data in your editor without a single line of code",
        ua: "Ви можете визначити вузли і воркери, які дозволять користувачам створити інструкції для обробки даних у Вашому редакторі без єдиного рядка коду"
    }],
    ["Главный пакет и его плагины собираются с помощью Rollup", {
        en: "Main package and its plugins are built using Rollup",
        ua: "Головний пакет та його плагіни збираються за допомогою Rollup"
    }],
    ["Собранные пакеты предоставляются в трех форматах", {
        en: "Bundled packages are provided in three formats.",
        ua: "Зібрані пакети надаються в трьох форматах"
    }],
    ["Для сборки вашего проекта с помощью Webpack или подобных сборщиков установите пакеты из NPM", {
        en: "To build your project using Webpack or similar builders, install packages from NPM",
        ua: "Для сборки вашого проекту за допомогою Webpack або подібних збирачів встановіть пакети з NPM"
    }],
    ["Для использования плагинов, которые собраны с помощью rete-cli до версии 0.5.0, необходимо импортировать", {
        en: "To use plugins that are built using rete-cli with version earlier than 0.5.0, you need to import",
        ua: "Для використання плагінів, які зібрані за допомогою rete-cli до версії 0.5.0, необхідно імпортувати"
    }],
    ["следующим образом", {
        en: "in the following way",
        ua: "наступним чином"
    }],
    ["Модули, транспилированные в CommonJS и ESM не содержат полифилы, поэтому при сборке вашего проекта они должны быть", {
        en: "Modules transpiled to CommonJS and ESM do not contain polyfills, so when building your project, they must be",
        ua: "Модулі, транспільовані в CommonJS і ESM не містять поліфіли, тому при сбірці вашого проекту вони повинні бути"
    }],
    ["подключены отдельно", {
        en: "connected separately",
        ua: "підключені окремо"
    }],
    ["Установка без сборщиков (Webpack, Rollup и т.д.)", {
        en: "Installation without bundlers (Webpack, Rollup, etc.)",
        ua: "Установка без бандлерів (Webpack, Rollup і т.д.)"
    }],
    ["Если вы не используете сборщики, можете подключить зависимости в вашу страницу", {
        en: "If you are not using bundlers, you can add dependencies to your page.",
        ua: "Якщо ви не використовуєте збирачі, можете підключити залежності в вашу сторінку"
    }],
    ["и подключить UMD модули", {
        en: "and use UMD modules",
        ua: "та підключити UMD модулі"
    }],
    ["Импортируйте следующим образом", {
        en: "Import as follows",
        ua: "Імпортуйте наступним чином"
    }],
    ["Создание редактора", {
        en: "Creating an editor",
        ua: "створення редактора"
    }],
    ["Для создания редактора необходимо несколько составляющих: Сокеты, Входы, Выходы, Компоненты", {
        en: "To create an editor, several components are needed: Sockets, Inputs, Outputs, Components",
        ua: "Для створення редактора необхідно кілька складових: Сокети, Входи, Виходи, Компоненти"
    }],
    ["Создадим экземпляр сокета", {
        en: "Create an instance of the socket",
        ua: "Створимо екземпляр сокета"
    }],
    ["Эта часть узла отвечает за коммуникации между узлами", {
        en: "This part of the node is responsible for communication between the nodes",
        ua: "Ця частина вузла відповідає за комунікації між вузлами"
    }],
    ["Непосредственно для создания и обрабтки узла необходимо определить Компонент", {
        en: "Directly for the creation and processing of the node is necessary to determine the component",
        ua: "Безпосередньо для створення та обрабтки вузла необхідно визначити Компонент"
    }],
    ["В своей HTML странице добавьте контейнер для редактора", {
        en: "In your HTML page, add a container for the editor",
        ua: "У своїй HTML сторінці додайте контейнер для редактора"
    }],
    ["Родительский элемент должен иметь свою ширину и высоту, под которые будет подстраиваться данный элемент", {
        en: "The parent element must have its width and height, according to them this element will be adjusted",
        ua: "Батьківський елемент повинен мати свою ширину і висоту, під які буде підлаштовуватися даний елемент"
    }],
    ["Инициализируйте редактор, подключите минимально необходимые плагины (для отображения узлов и соединений) и зарегестрируйте компоненты", {
        en: "Initialize the editor, connect the minimum necessary plug-ins (to display nodes and connections) and register the components",
        ua: "Ініціалізуйте редактор, підключіть мінімально необхідні плагіни (для відображення вузлів і з'єднань) та зареєструйте компоненти"
    }],
    ["Визуальная часть редактора готова", {
        en: "The visual part of the editor is ready",
        ua: "Візуальна частина редактора готова"
    }],
    ["Теперь для обработки схемы нужно инициализировать Движок и подписаться на события Редактора, по которым будет выполняться обработка схемы", {
        en: "Now, to process the schema, you need to initialize the Engine and subscribe to the Editor events, which will be used to process the schema",
        ua: "Тепер для обробки схеми потрібно форматувати Движок і підписатися на події Редактора, за якими буде виконуватися обробка схеми"
    }],
    ["Рассмотрены самые необходимые этапы, которые нужно выполнить для работы редактора", {
        en: "The most necessary stages which need to be executed for work of the editor are considered",
        ua: "Розглянуто найнеобхідніші етапи, які потрібно виконати для роботи редактора"
    }],
    ["Полный пример смотрите на Codepen", {
        en: "See Codepen for a full example",
        ua: "Повний приклад дивіться на Codepen"
    }],
    ["Узел", {
        en: "Node",
        ua: "Вузол"
    }],
    ["Название узла", {
        en: "Node's title",
        ua: "Назва вузла"
    }],
    ["Название входа", {
        en: "Input's title",
        ua: "Назва входу"
    }],
    ["Сокет входа", {
        en: "Input's socket",
        ua: "Сокет входу"
    }],
    ["Название выхода", {
        en: "Output's title",
        ua: "Назва виходу"
    }],
    ["Сокет выхода", {
        en: "Output's socket",
        ua: "Сокет виходу"
    }],
    ["Контрол", {
        en: "Control",
        ua: "Контрол"
    }]
]