<template>
  <!-- #region template -->
  <BRow
    ><BCol>Установлен 'variant': <BBadge variant="success"> тест </BBadge></BCol></BRow
  >
  <BRow
    ><BCol>Установлен 'bg-variant': <BBadge bg-variant="info"> тест </BBadge></BCol></BRow
  >
  <BRow
    ><BCol
      >Установлен 'text-variant' (фон — 'secondary', так как 'variant' по умолчанию 'secondary'):
      <BBadge text-variant="info"> тест </BBadge></BCol
    ></BRow
  >
  <BRow
    ><BCol
      >Установлены 'text-variant' и 'bg-variant':
      <BBadge
        text-variant="primary"
        bg-variant="danger"
      >
        тест
      </BBadge></BCol
    ></BRow
  >
  <BRow
    ><BCol
      >Установлены все три — 'variant' перекрывается 'bg-variant' и 'text-variant':
      <BBadge
        text-variant="primary"
        bg-variant="danger"
        variant="success"
      >
        тест
      </BBadge></BCol
    ></BRow
  >
  <!-- #endregion template -->
</template>
