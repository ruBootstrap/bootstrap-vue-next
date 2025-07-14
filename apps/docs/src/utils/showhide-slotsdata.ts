import type {SlotScopeReference} from '../types'

export const showHideSlotsData: SlotScopeReference[] = [
  {
    prop: 'id',
    type: 'string',
    description: 'Уникальный идентификатор компонента',
  },
  {
    prop: 'show',
    type: '() => void',
    description: 'Функция для показа компонента',
  },
  {
    prop: 'hide',
    type: '(trigger?: string, noTriggerEmit?: boolean) => void',
    description:
      'Функция для скрытия компонента. `trigger` — причина скрытия. `noTriggerEmit` предотвращает эмит события триггера.',
  },
  {
    prop: 'toggle',
    type: '() => void',
    description: 'Функция для переключения видимости компонента',
  },
  {
    prop: 'active',
    type: 'boolean',
    description: 'Показывает, активен ли компонент (начало показа, до/после анимаций)',
  },
  {
    prop: 'visible',
    type: 'boolean',
    description: 'Показывает, видим ли компонент (показан)',
  },
]
