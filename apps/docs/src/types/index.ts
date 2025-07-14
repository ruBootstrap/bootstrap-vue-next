import type {useScrollspy} from 'bootstrap-vue-next'

// Тип для ключей ComponentReference, кроме 'component' и 'sections'
export type ComponentItem = Exclude<keyof ComponentReference, 'component' | 'sections'>
// Тип для секций компонента
export type ComponentSection = 'Properties' | 'Events' | 'Slots'
// Тип для описания аргументов событий
export type EmitArgReference = {arg: string; type: string; description?: string}
// Тип для описания области видимости слота
export type SlotScopeReference = {
  prop: string
  type: string | string[]
  description?: string
  notYetImplemented?: boolean
}

// Интерфейс для описания свойства компонента
export interface PropertyReference {
  type?: string
  description?: string
  default?: unknown
  notYetImplemented?: boolean
}

/**
 * _linkTo — специальный ключ, используемый для ссылки на пропсы другого компонента
 * Используется в документации для связывания с пропсами другого компонента
 * Использует ключ 'type' как ссылку на компонент
 * не указывайте withBase в пути — он добавится автоматически
 *
 * (Я бы использовал symbol, но он не поддерживается в JSON)
 * (Я бы использовал number, но это строка в JS-объектах и вызывает ошибку TS)
 * (Я бы использовал _linkTo?: string, но это вызывает ошибку TS)
 *
 * ~магия~
 */
type PropsRecord = Record<string, Record<string, PropertyReference> & {_linkTo?: PropertyReference}>

export enum StyleKind {
  BootstrapClass = 'BOOTSTRAP-CLASS',
  BsvnClass = 'BSVN-CLASS',
  OverrideClass = 'OVERRIDE-CLASS',
  Tag = 'TAG',
  None = 'NONE',
}

// Интерфейс для описания спецификации стиля
export interface StyleSpec {
  kind: StyleKind
  value?: string
}

// Интерфейс для описания компонента
export interface ComponentReference {
  component: string
  styleSpec?: StyleSpec
  /**
   * Используйте относительные ссылки от директории пакета. Например: BAccordion.vue => /BAccordion/BAccordion.vue (обязателен слэш)
   *
   * Если path — пустая строка, используется директория пакета. Если null — кнопка не отображается
   */
  sourcePath: string | null
  props: PropsRecord
  emits?: {
    event: string
    args?: EmitArgReference[]
    description?: string
  }[]
  slots?: {
    scope?: SlotScopeReference[]
    name: string
    description?: string
  }[]
  sections?: ComponentSection[]
}

export type MappedComponentReference = Omit<ComponentReference, 'props'> & {
  props: {name: string; linkTo?: string; ref: (PropertyReference & {prop: string})[]}[]
}

// Ответ с информацией об участниках OpenCollective
export type CollectiveMembersResponse = {
  MemberId: number
  createdAt: string
  type: string
  role: string
  tier: string
  isActive: boolean
  totalAmountDonated: number
  currency: string
  lastTransactionAt: string
  lastTransactionAmount: number
  profile: string
  name: string
  company: null | null
  description: string | null
  image: string | null
  email: null | string
  twitter: null | string
  github: string | null
  website: null | string
}

export type CollectivePartialResponse = {
  members: CollectiveMembersResponse[]
}

// Тип для элемента scrollspy
export type ScrollspyItem = ReturnType<typeof useScrollspy>['list']['value'][0]
export type HeaderItem = ScrollspyItem & {tag: string; level: number}
export type ContentsItem = HeaderItem & {children: ContentsItem[]}
