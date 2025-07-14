import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, pick, showHideProps} from '../../utils'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BTab',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.tab-pane'},
      sourcePath: '/BTabs/BTab.vue',
      props: {
        '': {
          buttonId: {
            type: 'string',
            default: undefined,
            description:
              'Использовать указанный ID для управляющей кнопки этой вкладки. Если не задан, будет сгенерирован автоматически',
          },
          noBody: {
            type: 'boolean',
            default: false,
            description:
              "Если у родительского b-tabs установлен prop 'card', не рендерить обёртку card-body",
          },
          titleItemClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для элемента li управляющей кнопки вкладки',
          },
          titleLinkAttrs: {
            type: 'AttrsValue',
            default: undefined,
            description: 'Атрибуты для внутреннего элемента ссылки управляющей кнопки вкладки',
          },
          titleLinkClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для внутреннего элемента ссылки управляющей кнопки вкладки',
          },
          ...pick(showHideProps, ['lazy', 'unmountLazy']),
          ...pick(buildCommonProps(), ['active', 'disabled', 'id', 'tag', 'title']),
        } satisfies Record<keyof BvnComponentProps['BTab'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Слот для пользовательского содержимого вкладки',
        },
        {
          name: 'title',
          description: 'Слот для пользовательского заголовка вкладки',
        },
      ],
    },
    {
      component: 'BTabs',
      sourcePath: '/BTabs/BTabs.vue',
      props: {
        '': {
          index: {
            type: 'number',
            default: -1,
            description:
              'Индекс (с нуля) текущей активной вкладки. Id (modelValue) имеет приоритет над index.',
          },
          activeNavItemClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для активной управляющей вкладки',
          },
          activeTabClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для текущей активной вкладки',
          },
          align: {
            type: 'AlignmentJustifyContent',
            default: undefined,
            description:
              "Выравнивание управляющих элементов: 'start', 'end', 'center', 'between', 'around' или 'evenly'",
          },
          card: {
            type: 'boolean',
            default: false,
            description: "Если true, вкладки будут стилизованы для размещения внутри 'b-card'",
          },
          contentClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для обёртки tab-content',
          },
          end: {
            type: 'boolean',
            default: false,
            description:
              'Размещает управляющие элементы вкладок снизу (горизонтальные) или справа (вертикальные)',
          },
          fill: {
            type: 'boolean',
            default: false,
            description:
              'Пропорционально заполняет всё горизонтальное пространство управляющими элементами. Всё пространство занято, но ширина элементов может отличаться',
          },
          inactiveNavItemClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для неактивных управляющих вкладок',
          },
          inactiveTabClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для неактивных вкладок',
          },
          justified: {
            type: 'boolean',
            default: false,
            description:
              "Заполняет всё горизонтальное пространство управляющими элементами, но в отличие от 'fill', все элементы будут одинаковой ширины",
          },
          lazy: {
            type: 'boolean',
            default: false,
            description: 'Лениво рендерить содержимое вкладки при показе',
          },
          modelValue: {
            type: 'string',
            default: undefined,
            description: 'ID текущей активной вкладки',
          },
          navClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для обёртки tablist (nav)',
          },
          navItemClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для элемента вкладки',
          },
          navWrapperClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для обёртки управляющих элементов вкладок',
          },
          noFade: {
            type: 'boolean',
            default: false,
            description: 'Отключает анимацию затухания',
          },
          noKeyNav: {
            type: 'boolean',
            default: false,
            description: 'Отключить навигацию по вкладкам с клавиатуры',
          },
          noNavStyle: {
            type: 'boolean',
            default: false,
            description: 'Не применять стили вкладок к управляющим элементам',
          },
          pills: {
            type: 'boolean',
            default: false,
            description: 'Стилизует управляющие элементы как pill-кнопки',
          },
          small: {
            type: 'boolean',
            default: false,
            description: 'Делает управляющие элементы меньше',
          },
          underline: {
            type: 'boolean',
            default: false,
            description: 'Подчеркивает активный управляющий элемент',
          },
          tabClass: {
            type: 'ClassValue',
            default: undefined,
            description: 'CSS-класс(ы) для элемента вкладки',
          },
          vertical: {
            type: 'boolean',
            default: false,
            description: 'Располагает управляющие элементы вертикально',
          },
          ...pick(buildCommonProps(), ['id', 'tag']),
        } satisfies Record<keyof BvnComponentProps['BTabs'], PropertyReference>,
      },
      emits: [
        {
          event: 'update:model-value',
          args: [
            {
              arg: 'value',
              type: 'string',
              description: 'ID текущей активной вкладки',
            },
          ],
          description: 'Активная вкладка изменилась. ID текущей активной вкладки',
        },
        {
          event: 'update:index',
          args: [
            {
              arg: 'value',
              type: 'number',
              description: 'Индекс (с нуля) текущей активной вкладки',
            },
          ],
          description: 'Активная вкладка изменилась. Индекс (с нуля) текущей активной вкладки',
        },
        {
          description:
            'Вызывается непосредственно перед показом/активацией вкладки. Можно отменить',
          event: 'activate-tab',
          args: [
            {
              arg: 'newTabId',
              type: 'string',
              description: 'ID вкладки, которую активируют',
            },
            {
              arg: 'prevTabId',
              type: 'string',
              description: 'ID текущей активной вкладки',
            },
            {
              arg: 'newTabIndex',
              type: 'number',
              description: 'Индекс (с нуля) вкладки, которую активируют',
            },
            {
              arg: 'prevTabIndex',
              type: 'number',
              description:
                'Индекс (с нуля) текущей активной вкладки. Будет -1, если активной вкладки нет',
            },
            {
              arg: 'event',
              type: 'BvEvent',
              description: 'Объект BvEvent. Вызовите bvEvent.preventDefault() для отмены',
            },
          ],
        },
      ],
      slots: [
        {
          name: 'default',
          description: 'Содержимое (вкладки), размещаемое внутри элемента tabs',
        },
        {
          name: 'empty',
          description: 'Этот слот отображается, если вкладки отсутствуют',
        },
        {
          name: 'tabs-end',
          description:
            'Дополнительные кнопки вкладок без содержимого, размещаемые после основных вкладок',
        },
        {
          name: 'tabs-start',
          description:
            'Дополнительные кнопки вкладок без содержимого, размещаемые перед основными вкладками',
        },
      ],
    },
  ],
}
