export default [
  ['Архитектура фреймворка построена на основе событийной модели, что позволило добиться слабой связи между компонентами и модифицировать редактор с помощью плагинов', {
    en: 'The framework architecture is built on the basis of an event model, which made it possible to achieve a weak connection between components and modify the editor with the help of plug-ins',
    ua: "Архітектура фреймворка побудована на основі подієвої моделі, що дозволило досягти слабкого зв'язку між компонентами і модифікувати редактор за допомогою плагінів",
  }],
  ['Редактор работает со следующими событиями', {
    en: 'The editor works with the following events',
    ua: 'Редактор працює з наступними подіями',
  }],
  ['Имя события', {
    en: 'Event name',
    ua: "Ім'я події",
  }],
  ['Параметры', {
    en: 'Options',
    ua: 'Параметри',
  }],
  ['Предотвращаемые', {
    en: 'Preventable',
    ua: 'Запобігаємі',
  }],
  ['Замечание', {
    en: 'Comment',
    ua: 'Зауваження',
  }],
  ['el это HTMLElement', {
    en: 'el is htmlelement',
    ua: 'el це HTMLElement',
  }],
  ['используется как в редакторе, так и в движке', {
    en: 'used both in the editor and in the engine',
    ua: 'використовується як в редакторі, так і в движку',
  }],
  ['параметр это KeyboardEvent', {
    en: 'the parameter is KeyboardEvent',
    ua: 'параметр це KeyboardEvent',
  }],
  ['срабатывает при перемещении сцены', {
    en: 'triggered by moving the scene',
    ua: 'спрацьовує при переміщенні сцени',
  }],
  ['срабатывает при изменении масштаба', {
    en: 'triggered when zooming',
    ua: 'спрацьовує при зміні масштабу',
  }],
  ['e это MouseEvent', {
    en: 'e is MouseEvent',
    ua: 'e це MouseEvent',
  }],
  ['срабатывает при обновлении положения мыши относительно рабочей области', {
    en: 'triggered when the mouse position is updated relative to the working area',
    ua: 'спрацьовує при оновленні положення миші щодо робочої області',
  }],
  ['в зависимости от объекта, для которого вызывается меню, будет передан view или node', {
    en: 'depending on the object for which the menu is called, the view or node will be transmitted',
    ua: "в залежності від об'єкта, для якого викликається меню, буде переданий view або node",
  }],
  ['предназначен для внешнего использования', {
    en: 'intended for external use',
    ua: 'призначений для зовнішнього використання',
  }],
  ['Подписаться на события можно используя метод `on()`', {
    en: 'You can subscribe to events using the `on()` method',
    ua: 'Підписатися на події можна використовуючи метод `on()`',
  }],
  ['События, которые можно предотвратить, выполняются перед действием и дают вам возможность принять решение, чтобы предотвратить их', {
    en: 'Events that can be prevented are executed before the action and give you the opportunity to make a decision to prevent them',
    ua: 'Події, які можна запобігти, виконуються перед дією та дають вам можливість прийняти рішення, щоб запобігти їх',
  }],
  ['Перед действием проверяются все слушатели события, и если хотя бы один из них возвращает false, действие не будет выполнено', {
    en: 'Before the action, all event listeners are checked, and if at least one of them returns false, the action will not be executed',
    ua: 'Перед дією перевіряються всі слухачі події, і якщо хоча б один з них повертає false, дію не буде виконано',
  }],
  ['По умолчанию `return true` не нужен', {
    en: 'By default, `return true` is not needed',
    ua: 'За замовчуванням `return true` не потрібен',
  }],
  ['Не используйте `return false` в асинхронных обработчиках', {
    en: "Don't use `return false` in async handlers",
    ua: 'Не використовуйте `return false` в асинхронних обробниках',
  }],
  ['Все обработчики, которые могут предотвращать действия, должны быть синхронными', {
    en: 'All handlers that can prevent actions must be synchronous',
    ua: 'Всі обробники, які можуть запобігати діям, повинні бути синхронними',
  }],
  ['Также вы можете обрабатывать несколько событий', {
    en: 'You can also handle multiple events',
    ua: 'Також ви можете обробляти кілька подій',
  }],
  ['Для статической типизации в TypeScript вы можете указать события в виде массива строк', {
    en: 'For static typing in TypeScript you can specify events as an array of strings',
    ua: 'Для статичної типізиції в TypeScript ви можете вказати події у вигляді масива строк',
  }],
  ['предзначен для очистки глобальных данных в плагинах', {
    en: 'intended to clean global data in plugins',
    ua: 'призначено для очищення глобальних змін в плагінах',
  }],
  ['Например, window.addEventListener', {
    en: 'For example, window.addEventListener',
    ua: 'Наприклад, window.addEventListener',
  }],
];
