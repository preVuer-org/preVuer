import componentRender from '../../../src/utils/componentRender.util';

describe('Component Rendering', () => {
  // create a dummy state
  let state = [];

  beforeEach(() => {
    state = [];
    return state;
  });

  // Dummy component should give a Vue component with name 'dummy'
  test('"Dummy" object should create Dummy Vue component', () => {
    expect(componentRender({ title: 'Dummy', childrenIds: [] }, state)).toEqual(
`<template>
  <div>

  </div>
</template>

<script>

  export default {
    name: 'dummy',
    components: {

    },
    methods: {

    },
    computed: {

    },
  }

</script>

<style>

</style>
`
    );
  });

  test('should create component with child components', () => {
    state.push({ title: 'Test', id: 2 });
    expect(componentRender({ title: 'Dummy', childrenIds: [2] }, state)).toEqual(
`<template>
  <div>
    <test />
  </div>
</template>

<script>
import Test from './Test.vue';
  export default {
    name: 'dummy',
    components: {
      Test,
    },
    methods: {

    },
    computed: {

    },
  }

</script>

<style>

</style>
`
    );
  });
});
