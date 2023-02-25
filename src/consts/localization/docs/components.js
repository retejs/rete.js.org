export default [
  ['Компоненты предназначены для упрощения разработки за счет сочетания тесно связанных функций построения и обработки узлов', {
    en: 'The components are designed to simplify development by combining the closely related functions of building and processing nodes',
    ua: "Компоненти призначені для спрощення розробки за рахунок поєднання тісно пов'язаних функцій побудови і обробки вузлів",
  }],
  ['Компонент содержит билдер и воркер', {
    en: 'Component contains builder and worker',
    ua: 'Компонент містить білдер та воркер',
  }],
  ['Билдер и воркер выполняются независимо друг от друга (первый работает один раз при создании узла, второй - при каждой обработке)', {
    en: 'The builder and the worker are executed independently of each other (the first works once when creating a node, the second - with each processing)',
    ua: 'Білдер та воркер виконуються незалежно друг від друга (перший працює один раз при створенні вузла, другий - при кожній обробці)',
  }],
  ['На самом деле они тесно связаны друг с другом в пределах одного узла', {
    en: 'In fact, they are closely related to each other within the same node',
    ua: "Насправді вони тісно пов'язані друг з другом в межах одного вузла",
  }],
  ['Регистрация компонента', {
    en: 'Component registration',
    ua: 'Реєстрація компонента',
  }],
  ['Билдеры узлов', {
    en: 'Node builders',
    ua: 'Білдер вузлів',
  }],
  ['Эти методы должны модифицировать экземпляр Node и необходимы редактору для восстановления всех узлов из данных JSON, поскольку данные JSON должны хранить только статическую информацию, а не логику узлов', {
    en: 'These methods must modify the Node instance and are needed by the editor to restore all nodes from JSON data, since JSON data should only store static information, not the logic of the nodes',
    ua: 'Ці методи повинні модифікувати екземпляр Node та необхідні редактору для відновлення всіх вузлів з даних JSON, оскільки дані JSON повинні зберігати тільки статичну інформацію, а не логіку вузлів',
  }],
  ['Каждый из билдеров должен быть в соответствующем компоненте', {
    en: 'Each builder must be in the appropriate component',
    ua: 'Кожен з білдерів повинен бути у відповідному компоненті',
  }],
  ['Воркер - это функция для обработки данных узла', {
    en: 'A worker is a function for processing node data',
    ua: 'Воркер - це функція для обробки даних вузла',
  }],
  ['Они получают параметры узла, входы, выходы, и аргументы, передаваемые при обработке (опционально)', {
    en: 'They get node parameters, inputs, outputs, and arguments passed during processing (optional)',
    ua: 'Вони отримують параметри вузла, входи, виходи, та аргументи, які передаються при обробці (опціонально)',
  }],
  ['Данные узла (не экземпляр узла), входы и выходы соответствуют определениям в билдерах (см.выше)', {
    en: 'Node data (not an instance of a node), inputs and outputs correspond to the definitions in the builders (see above)',
    ua: 'Дані вузла (не екземпляр вузла), входи та виходи відповідають визначенням у білдерах (див.вище)',
  }],
  ['Воркеры узлов', {
    en: 'Node workers',
    ua: 'Воркери вузлів',
  }],
  ['Как вы заметили, вы можете использовать асинхронные функции (или Promise для предыдущих версий ES)', {
    en: 'As you noticed, you can use asynchronous functions (or Promise for previous versions of ES)',
    ua: 'Як ви помітили, ви можете використовувати асинхронні функції (або Promise для попередніх версій ES)',
  }],
  ['Это необходимо для выполнения сложных вычислений без блокировки основного потока (например, в WebWorker)', {
    en: 'This is necessary to perform complex calculations without blocking the main thread (for example, in WebWorker)',
    ua: 'Це необхідно для виконання складних обчислень без блокування основного потоку (наприклад, в WebWorker)',
  }],
];
