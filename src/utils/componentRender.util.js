const formatCamelCaseToDash = (string) => {
  return string.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

const componentRender = (component) => {

  const { title } = component;

  const name = formatCamelCaseToDash(title);

  return (
`<template>

</template>

<script>
  export default {
    name: '${name}',
    components: {

    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style>

</style>
`
)
};

export default componentRender;