import type {ComponentReference} from '../types'

export const showHideEmits: Exclude<ComponentReference['emits'], undefined> = [
  {
    event: 'hide',
    description:
      'Всегда вызывается непосредственно перед скрытием компонента. Можно отменить (если компонент не был принудительно скрыт)',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Вызовите value.preventDefault(), чтобы отменить скрытие',
      },
    ],
  },
  {
    event: 'hide-prevented',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description:
      'Вызывается, если компонент попытался закрыться, но это было предотвращено. Это происходит, если вызвать preventDefault() на событии, пользователь нажал escape и no-close-onbackdrop установлен в true, или пользователь кликнул по подложке и no-close-onbackdrop установлен в true.',
  },
  {
    event: 'hidden',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description: 'Всегда вызывается после скрытия компонента',
  },
  {
    event: 'show',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Вызовите value.preventDefault(), чтобы отменить показ',
      },
    ],
    description: 'Всегда вызывается непосредственно перед показом компонента. Можно отменить',
  },
  {
    event: 'show-prevented',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description:
      'Вызывается, если компонент попытался открыться, но это было предотвращено. Это происходит, если вызвать preventDefault() на событии',
  },
  {
    event: 'shown',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description: 'Всегда вызывается сразу после показа компонента.',
  },
  {
    event: 'toggle',
    description:
      "Всегда вызывается непосредственно перед переключением компонента через функцию 'toggle()' или composable useToggle. Можно отменить (если компонент не был принудительно скрыт)",
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
        description: 'Вызовите value.preventDefault(), чтобы отменить скрытие',
      },
    ],
  },
  {
    event: 'toggle-prevented',
    args: [
      {
        arg: 'value',
        type: 'BvTriggerableEvent',
      },
    ],
    description:
      'Вызывается, если компонент попытался переключиться, но это было предотвращено. Это происходит, если вызвать preventDefault() на событии, пользователь нажал escape и no-close-onbackdrop установлен в true, или пользователь кликнул по подложке и no-close-onbackdrop установлен в true.',
  },
]
