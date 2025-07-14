import type {showHide} from 'bootstrap-vue-next'
import type {PropertyReference} from '../types'

export const showHideProps = {
  initialAnimation: {
    type: 'boolean',
    default: false,
    description: 'Если установлено, включает начальную анимацию при монтировании',
  },
  lazy: {
    type: 'boolean',
    default: false,
    description: 'Если установлено, содержимое будет смонтировано только при открытии',
  },
  modelValue: {
    type: 'boolean',
    default: false,
    description: 'Управляет видимостью компонента',
  },
  noFade: {
    type: 'boolean',
    default: false,
    description: 'Алиас для `noAnimation`',
  },
  noAnimation: {
    type: 'boolean',
    default: false,
    description: 'Если установлено, отключает анимацию',
  },
  show: {
    type: 'boolean',
    default: false,
    description:
      "Если установлено и prop 'visible' равен false при монтировании, будет анимировано открытие при первом монтировании. В основном для шаблонов с show. Для реактивного управления используйте model-value",
  },
  transProps: {
    type: 'TransitionProps',
    default: undefined,
    description: 'Свойства transition',
  },
  unmountLazy: {
    type: 'boolean',
    default: false,
    description:
      'Если установлено и `lazy` равен true, содержимое будет размонтировано при закрытии',
  },
  visible: {
    type: 'boolean',
    default: false,
    description: "Если 'true', открывает без анимации",
  },
} as const satisfies Record<keyof showHide | 'modelValue', PropertyReference>
