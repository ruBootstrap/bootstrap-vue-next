import type {BvnComponentProps} from 'bootstrap-vue-next'
import {type ComponentReference, type PropertyReference, StyleKind} from '../../types'
import {buildCommonProps, omit, pick} from '../../utils'
import {imageProps, linkTo} from '../../utils/image-props'

export default {
  load: (): ComponentReference[] => [
    {
      component: 'BCard',
      sourcePath: '/BCard/BCard.vue',
      props: {
        '': {
          align: {
            type: 'AlignmentTextHorizontal',
            default: undefined,
            description: 'Выравнивание текста содержимого карточки: "start", "center" или "end"',
          },
          bodyText: {
            type: 'string',
            default: "''",
            description:
              'Текстовое содержимое для размещения в теле карточки, слот по умолчанию имеет приоритет',
          },
          imgAlt: {
            type: 'string',
            default: undefined,
            description: 'URL для необязательного изображения',
          },
          imgHeight: {
            type: 'Numberish',
            default: undefined,
            description: "Значение для атрибута 'height' изображения",
          },
          imgPlacement: {
            type: 'Placement | "overlay"',
            default: 'top',
            description:
              "Положение необязательного изображения ('top', 'bottom', 'start', 'end' или 'overlay')",
          },
          imgSrc: {
            type: 'string',
            default: undefined,
            description: 'URL для необязательного изображения',
          },
          imgWidth: {
            type: 'Numberish',
            default: undefined,
            description: "Значение для атрибута 'width' изображения",
          },
          noBody: {
            type: 'boolean',
            default: false,
            description: 'Отключить рендеринг внутреннего элемента card-body по умолчанию',
          },
          ...pick(
            buildCommonProps({
              bodyBorderVariant: {
                description:
                  'Применяет одну из цветовых тем Bootstrap к границе body (ещё не реализовано)',
              },
            }),
            [
              'bgVariant',
              'bodyBgVariant',
              'bodyBorderVariant',
              'bodyClass',
              'bodyTag',
              'bodyTextVariant',
              'borderVariant',
              'footer',
              'footerBgVariant',
              'footerBorderVariant',
              'footerClass',
              'footerTag',
              'footerTextVariant',
              'footerVariant',
              'header',
              'headerBgVariant',
              'headerBorderVariant',
              'headerClass',
              'headerTag',
              'headerTextVariant',
              'headerVariant',
              'subtitle',
              'subtitleTag',
              'subtitleTextVariant',
              'tag',
              'textVariant',
              'title',
              'titleTag',
              'variant',
            ]
          ),
        } satisfies Record<keyof BvnComponentProps['BCard'], PropertyReference>,
      },
      emits: [],
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в карточке',
        },
        {
          name: 'footer',
          description: 'Для пользовательского рендеринга содержимого подвала',
        },
        {
          name: 'header',
          description: 'Для пользовательского рендеринга содержимого заголовка',
        },
        {
          name: 'img',
          description: 'Для пользовательского рендеринга содержимого изображения',
        },
      ],
    },
    {
      component: 'BCardBody',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.card-body, .card-img-overlay'},
      sourcePath: '/BCard/BCardBody.vue',
      emits: [],
      props: {
        '': {
          overlay: {
            type: 'boolean',
            default: false,
          },
          text: {
            type: 'string',
            default: undefined,
            description:
              'Текстовое содержимое для размещения в теле карточки, слот по умолчанию имеет приоритет',
          },
          ...pick(buildCommonProps(), [
            'bgVariant',
            'subtitle',
            'subtitleTag',
            'subtitleTextVariant',
            'tag',
            'textVariant',
            'title',
            'titleTag',
            'variant',
          ]),
        } satisfies Record<keyof BvnComponentProps['BCardBody'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в теле карточки',
        },
        {
          name: 'title',
          description: 'Содержимое для размещения в заголовке карточки',
        },
        {
          name: 'subtitle',
          description: 'Содержимое для размещения в подзаголовке карточки',
        },
      ],
    },
    {
      component: 'BCardFooter',
      sourcePath: '/BCard/BCardFooter.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description:
              'Текстовое содержимое для размещения в подвале карточки, слот по умолчанию имеет приоритет',
          },
          ...pick(buildCommonProps(), [
            'bgVariant',
            'borderVariant',
            'tag',
            'textVariant',
            'variant',
          ]),
        } satisfies Record<keyof BvnComponentProps['BCardFooter'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в подвале карточки',
        },
      ],
    },
    {
      component: 'BCardGroup',
      styleSpec: {kind: StyleKind.OverrideClass, value: '.card-deck, .ard-group, .card-columns'},
      sourcePath: '/BCard/BCardGroup.vue',
      emits: [],
      props: {
        '': {
          columns: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, отображает группу карточек в виде колонок, напоминающих masonry',
          },
          deck: {
            type: 'boolean',
            default: false,
            description:
              'Когда установлено, отображает группу карточек с отступами между карточками',
          },
          ...pick(buildCommonProps(), ['tag']),
        } satisfies Record<keyof BvnComponentProps['BCardGroup'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое (карточки) для размещения в группе карточек',
        },
      ],
    },
    {
      component: 'BCardHeader',
      sourcePath: '/BCard/BCardHeader.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description:
              'Текстовое содержимое для размещения в заголовке карточки, слот по умолчанию имеет приоритет',
          },
          ...pick(buildCommonProps(), [
            'bgVariant',
            'borderVariant',
            'tag',
            'textVariant',
            'variant',
          ]),
        } satisfies Record<keyof BvnComponentProps['BCardHeader'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в заголовке карточки',
        },
      ],
    },
    {
      component: 'BCardImg',
      sourcePath: '/BCard/BCardImg.vue',
      props: {
        '': {
          placement: {
            type: 'Placement | "overlay"',
            default: 'top',
          },
        } satisfies Record<
          Exclude<keyof BvnComponentProps['BCardImg'], keyof typeof imageProps>,
          PropertyReference
        >,
        'BImg props': {
          _linkTo: {type: linkTo},
          ...omit(imageProps, ['placement']),
        },
      },
      emits: [],
      slots: [],
    },
    {
      component: 'BCardSubtitle',
      sourcePath: '/BCard/BCardSubtitle.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description:
              'Текстовое содержимое для размещения в подзаголовке карточки, слот по умолчанию имеет приоритет',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'h6',
              },
              textVariant: {
                default: 'body-secondary',
              },
            }),
            ['tag', 'textVariant']
          ),
        } satisfies Record<keyof BvnComponentProps['BCardSubtitle'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в подзаголовке карточки',
        },
      ],
    },
    {
      component: 'BCardText',
      sourcePath: '/BCard/BCardText.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description:
              'Текстовое содержимое для размещения в тексте карточки, слот по умолчанию имеет приоритет',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'p',
              },
            }),
            ['tag']
          ),
        } satisfies Record<keyof BvnComponentProps['BCardText'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в тексте карточки',
        },
      ],
    },
    {
      component: 'BCardTitle',
      sourcePath: '/BCard/BCardTitle.vue',
      emits: [],
      props: {
        '': {
          text: {
            type: 'string',
            default: undefined,
            description:
              'Текстовое содержимое для размещения в заголовке карточки, слот по умолчанию имеет приоритет',
          },
          ...pick(
            buildCommonProps({
              tag: {
                default: 'h4',
              },
            }),
            ['tag']
          ),
        } satisfies Record<keyof BvnComponentProps['BCardTitle'], PropertyReference>,
      },
      slots: [
        {
          name: 'default',
          description: 'Содержимое для размещения в заголовке карточки',
        },
      ],
    },
  ],
}
