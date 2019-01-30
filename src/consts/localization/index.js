import getDocs from './docs';

export default () => [
    ...getDocs(),
    ["Изучение", {
        en: "Learning",
        ua: "Вивчення"
    }],
    ["Экосистема", {
        en: "Ecosystem",
        ua: "Екосистема"
    }],
    ["Поддержать", {
        en: "Support",
        ua: "Підтримати"
    }],
    ["Документация", {
        en: "Documentation",
        ua: "Документація"
    }],
    ["Примеры", {
        en: "Examples",
        ua: "Приклади"
    }],
    ["Компоненты", {
        en: "Components",
        ua: "Компоненти"
    }],
    ["Модульный", {
        en: "Modular",
        ua: "Модульний"
    }],
    ["Основанная на событиях архитектура дает возможность добавлять новые функциональные возможности в виде плагинов", {
        en: "Event-based architecture makes it possible to add new functionality in the form of plugins",
        ua: "Основана на подіях архітектура дає можливість додавати нові функціональні можливости у вигляді плагінів"
    }],
    ["Гибкий", {
        en: "Flexible",
        ua: "Гнучкий"
    }],
    ["Вы свободны в выборе необходимых компонентов", {
        en: "You are free to choose the necessary components",
        ua: "Ви вільні у виборі необхідних компонентів"
    }],
    ["Подключайте те плагины, которые лучше всего подходят для Вашей задачи", {
        en: "Connect plugins that are best suited for your purpose",
        ua: "Підключайте ті плагіни, які найкраще підходять під Ваші задачі"
    }],
    ["Универсальный", {
        en: "Universal",
        ua: "Універсальний"
    }],
    ["Фреймворк не привязак к какой либо предметной области, а только визуализирует и обрабатывает редактор узлов", {
        en: "The framework is not bound to any domain, but only visualizes and processes the node editor",
        ua: "Фреймворк не прив'язаний до якої-небудь предметної області, а тільки візуалізує та обробляє редактор вузлів"
    }],
    ["JavaScript фреймворк для визуального программирования", {
        en: "The JavaScript framework for visual programming",
        ua: "JavaScript фреймворк для візуального програмування"
    }],
    ["Rete это модульный фреймворк для визуального программирования", {
        en: "Rete is a modular framework for visual programming",
        ua: "Rete це модульний фреймворк для візуального програмування"
    }],
    ["Rete позволяет Вам создавать редакторы узлов прямо в браузере", {
        en: "Rete allows you to create node-based editor directly in the browser",
        ua: "Rete дозволяє Вас створювати редактори вузлів прямо в браузері"
    }],
    ["Вы можете определить узлы и воркеры, которые позволят пользователям создавать инструкции для обработки данных без единой строчки кода", {
        en: "You can define nodes and workers that allow users to create instructions for processing data in your editor without a single line of code",
        ua: "Ви можете визначити вузли та воркери, які дозволяють користувачам створювати інструкції для обробки даних без єдиної строки коду"
    }],
    ["Разработка и сборка", {
        en: "Development and building",
        ua: "Розробка та збірка"
    }],
    ["Плагины", {
        en: "Plugins",
        ua: "Плагіни"
    }],
    ["Сборщик пакетов построен на основе Rollup, с использованием Babel", {
        en: "The package bundler is built on the basis of Rollup using Babel",
        ua: "Складальник пакетів побудований на основі Rollup, з використанням Babel"
    }],
    ["Встроенный ESLint с готовым конфигом следит за качеством кода", {
        en: "Built-in ESLint with the prepared configuration tracking the quality of the code",
        ua: "Вбудований ESLint з готовим конфігом слідкує за якістю коду"
    }],
    ["CLI берет на себя всю рутиную работу при конфигурировании плагина", {
        en: "CLI takes care of all the routine work when configuring the plugin",
        ua: "CLI бере на себе всю рутину роботу при конфігуруванні плагіну"
    }],
    ["Начните создание плагина всего за один шаг", {
        en: "Let's start creating the plugin in just one step",
        ua: "Почніть створення плагіну всього за один крок"
    }],
    ["Начало работы", {
        en: "Getting started",
        ua: "Початок роботи"
    }],
    ["Установка", {
        en: "Installation",
        ua: "Установка"
    }],
    ["Создание плагина", {
        en: "Plugin creation",
        ua: "Створення плагіну"
    }],
    ["где", {
        en: "where",
        ua: "де"
    }],
    ["имя плагина", {
        en: "plugin's name",
        ua: "ім'я плагіну"
    }],
    ["Пожертвовать Rete.js", {
        en: "Donate to Rete.js",
        ua: "Пожертвувати Rete.js"
    }],
    ["Пакеты", {
        en: "Packages",
        ua: "Пакети"
    }],
    ["Базовый", {
        en: "Basic",
        ua: "Базовий"
    }],
    ["Редактор должен включать в себя как минимум 4 пакета - главный Rete, и два плагина - для визуализации узлов и управления соединениями", {
        en: "The editor should include at least 4 packages - the main Rete, and the two plug-in - for node visualization and connection management",
        ua: "Редактор повинен включати в себе як мінімум 4 пакеті - головний Rete, та два плагіну - для візуалізації вузлів та управління з'єднаннями"
    }],
    ["В данном примере также имеется плагин для контекстного меню, которое позволяет добавлять узлы", {
        en: "This example also contains a plugin for the context menu that allows you to add nodes",
        ua: "У даному приклані также є плагін для контекстного меню, яке може додавати вузли"
    }],
    ["Неизменяемый", {
        en: "Read only",
        ua: "Незмінний"
    }],
    ["Набор пакетов аналогичен предыдущему примеру за исключением следующего: установка контекстного меню не требуется, для блокировки действий по изменению узлов или связей служит rete-readonly-plugin", {
        en: "The list of packages is similar to the previous example, except for the following: the context menu is not required, rete-readonly-plugin blocking the actions for changing nodes or links",
        ua: "Набір пакетів аналогічний попередньому прикладу за виключенням наступного: установка контекстного меню не вимагається, для блокування дії зі зміни вузлів або зв'язків служить rete-readonly-plugin"
    }],
    ["Рабочая область", {
        en: "Area",
        ua: "Робоча область"
    }],
    ["По умолчанию редактор не ограничивает Вас ни в масштабировании, ни в перемещении по рабочей области", {
        en: "By default, the editor does not limit you either in scaling or moving around the workarea",
        ua: "За замовчуванням редактор не обмежує Вас ні в масштабуванні, ні в переміщенні по робочій області"
    }],
    ["Плагин Area позволяет задать минимальное и максимальное значения масштаба", {
        en: "The rete-area-plugin allows you to set the minimum and maximum scale values",
        ua: "Плагін rete-area-plugin дозволяє задати мінівальне та максимальне значення масштабу"
    }],
    ["Перемещение огранчивается по высоте и ширине", {
        en: "The movement is cut in height and width",
        ua: "Пересування обмежується висотою та шириною"
    }],
    ["Доступна возможность поместить выбранные узлы в поле видимости", {
        en: "The ability to place selected nodes in the field of view is available",
        ua: "Доступна можливість помістити вибрані вузли в поли видимості"
    }],
    ["Модули", {
        en: "Modules",
        ua: "Модулі"
    }],
    ["Также представлен отдельный плагин для тех, кому необходимо строить схемы с разбиением логики на подмодули", {
        en: "There is also a separate plugin for those who need to build schemes with a splitting of logic into submodules",
        ua: "Також представлений окремий плагін для тих, кому необхідно будувати схеми з розбиттям логіки на модулі"
    }],
    ["Добавляйте новые модули в список и подключайте их, записав имя в поле ввода узла Module", {
        en: "Add new modules to the list and connect them by writing the name in the input field of the Module node",
        ua: "Додавайте нові модулі у список та відключайте їх, записав ім'я у поле вводу вузла Module"
    }],
    ["Задачи", {
        en: "Tasks",
        ua: "Задачі"
    }],
    ["Данный плагин обрабатывает схему с целью ее дальнейшего выполнения подобно UE4 Blueprint, когда узлы выполняются после обработки по какому-либо вызову извне", {
        en: "This plugin processing the scheme for its further execution, similar to UE4 Blueprint when nodes are executed after processing for any call from outside",
        ua: "Даний плагін обробляє схему з цілью її подальшого виконання подібно UE4 Blueprint, коли вузли виконуються після обробки за якимось визовом із зовні"
    }],
    ["В примере узел Mouse event реагирует на событие mousemove, узел Match проверяет, была ли нажата клавиша Ctrl и передает управление соответствующему узлу, который выводит уведомление", {
        en: "In the example, the Mouse event node responds to the mousemove event, the Match node checks whether the Ctrl key was pressed and passes control to the corresponding node that outputs the notification",
        ua: "У прикладі вузол Mouse event реагує на подію mousemove, вузол Match перевіряє чи була натистуна клавіша Ctrl та передає управління відповідному вузлу, який виводить повідомлення"
    }],
    ["Кастомизация", {
        en: "Customization",
        ua: "Кастомізація"
    }],
    ["Плагин rete-vue-render, отвечающий за отображение узлов и контролов, позволяет использовать кастомные шаблоны и переопределить стили", {
        en: "The rete-vue-render plug-in, which is responsible for displaying nodes and controls, allows using custom templates and redefining styles",
        ua: "Плагін rete-vue-render, відповідальний за відображення віузлів та контролів, дозволяє використовувати кастомні шаблони та перевизначати стилі"
    }],
    ["Перенаправление соединений", {
        en: "Reroute connection",
        ua: "Перенаправлення з'єднань"
    }],
    ["Соединения обычно задаются кривой, которая проходит горизонтально слева направо", {
        en: "Connections are usually defined by a curve that placed horizontally from left to right",
        ua: "З'єднання зазвичай задаються кривою, котра проходить горизонтально зліва направо"
    }],
    ["Это может повлиять на распоздаваемость этих соединений в случае их пересечения с узлами", {
        en: "This can affect the distribution of these compounds in case of their intersection with the nodes",
        ua: "Це може вплинути на розпізнавання цих з'єднань у разі їх перетину з вузлами"
    }],
    ["Данный плагин позволяет задать ключевые точки, через которые будет проходить линия", {
        en: "This plugin allows you to set the key points through which the line will pass",
        ua: "Даний плагін дозволяє задати ключові точки, через які буде проходити лінія"
    }],
    ["Проблемы", {
        en: "Issues",
        ua: "Проблеми"
    }],
    ["Открытые проблемы", {
        en: "Open issues",
        ua: "Відкриті проблеми"
    }],
    ["Здесь размещен список проблем в репозиториях Rete.js", {
        en: "Here is a list of issues in Rete.js repositories",
        ua: "Тут розміщено список проблем в репозиторіях Rete.js"
    }],
    ["Вы можете отслеживать их на одной странице и помочь в их решении", {
        en: "You can watch it on one page and help in solving them",
        ua: "Ви можете відсліджувати їх на одній сторінці та допомогти в їх вирішенні"
    }],
    ["Главное", {
        en: "Main",
        ua: "Головне"
    }],
    ["Редактор", {
        en: "Editor",
        ua: "Редактор"
    }],
    ["Движок", {
        en: "Engine",
        ua: "Движок"
    }],
    ["Узлы", {
        en: "Nodes",
        ua: "Вузли"
    }],
    ["Сокеты", {
        en: "Sockets",
        ua: "Сокети"
    }],
    ["Контролы", {
        en: "Controls",
        ua: "Контроли"
    }],
    ["События", {
        en: "Developments",
        ua: "Події"
    }]
]