const formatCamelCaseToDash = string => string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();

/**
 * Returns a .vue template for fsFileWrite to fill a file with
 * @param { Object } component - specific component to be turned into .vue file
 * @param { Array } state - all the components from the state
 * @returns { String } template
 */

const componentRender = (component, state) => {
  // grab title and children array from component
  const { title, childrenIds } = component;
  // grab the components array
  const components = state;
  const name = formatCamelCaseToDash(title);
  // grab all components from the main state
  const childArray = components.filter((el) => {
    if (childrenIds.includes(el.id)) {
      return el;
    }
  }).map(el => el.title);
  // format names of children
  const formatChild = childArray.map(el => formatCamelCaseToDash(el));
  const template =
`<template>
  <div>
${formatChild.map(child => `    <${child} />`).join('\n    ')}
  </div>
</template>

<script>
${childArray.map(child => `import ${child} from './${child}.vue';`).join('\n')}
  export default {
    name: '${name}',
    components: {
${childArray.map(child => `      ${child},`).join('\n      ')}
    },
    methods: {

    },
    computed: {

    },
  }

</script>

<style>

</style>
`;

  return template;
};

export default componentRender;
