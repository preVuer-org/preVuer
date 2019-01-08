import mutations from '../../src/store/mutations';

describe('Mutation functionalities', () => {
  let state;
  let newComponent;
  let payload = null;

  function cleanState() {
    state = {
      currentText: '',
      nextId: 1,
      totalComponents: 0,
      components: [],
      imagePath: '',
      component: newComponent,
    };
    return state;
  }

  function cleanPayload() {
    payload = null;
  }

  function cleanComponent() {
    newComponent = {
      id: null,
      title: null,
    };
    return newComponent;
  }

  beforeEach(() => {
    cleanState();
    cleanComponent();
    cleanPayload();
  });

  // update current text
  test('UPDATE_TEXT should update the currentText in state', () => {
    payload = 'Testing';
    const result = {
      currentText: 'Testing',
      nextId: 1,
      totalComponents: 0,
      components: [],
    };
    mutations.UPDATE_TEXT(state, payload);
    expect(state).toMatchObject(result);
  });

  // add component
  test('ADD_COMPONENT should add a component to the components array', () => {
    state.currentText = 'Testing';
    const result = [{
      id: '1',
      title: 'Testing',
    }];
    mutations.ADD_COMPONENT(state);
    expect(state.components).toMatchObject(result);
  });

  test('ADD_COMPONENT should change the state to prep for next add', () => {
    state.currentText = 'Testing';
    const result = {
      currentText: '',
      nextId: 2,
      totalComponents: 1,
      components: [{ id: '1', title: 'Testing' }],
    };
    mutations.ADD_COMPONENT(state);
    expect(state).toMatchObject(result);
  });

  test('ADD_COMPONENT should not add a component if title already exists', () => {
    state.currentText = 'Testing';
    state.nextId = 2;
    state.totalComponents = 1;
    state.components = [{ id: '1', title: 'Testing' }];
    const result = {
      currentText: 'Testing',
      nextId: 2,
      totalComponents: 1,
      components: [{ id: '1', title: 'Testing' }],
      component: {
        id: null,
        title: null,
      }
    };
    mutations.ADD_COMPONENT(state);
    expect(state).toMatchObject(result);
  });

  test('ADD_COMPONENT should format the component name', () => {
    state.currentText = 'testing123';
    const result = {
      currentText: '',
      nextId: 2,
      totalComponents: 1,
      components: [{ id: '1', title: 'Testing' }],
      component: {
        id: null,
        title: null,
      },
    };
    mutations.ADD_COMPONENT(state);
    expect(state).toMatchObject(result);
  });

  // deletes target component
  test('DELETE_COMPONENT should reduce the number of components', () => {
    state.nextId = 3;
    state.totalComponents = 2;
    state.components = [{ id: '1', title: 'One' }, { id: '2', title: 'Two' }];
    payload = '2';
    const result = {
      currentText: '',
      nextId: 3,
      totalComponents: 1,
      components: [{ id: '1', title: 'One' }],
      component: {
        id: null,
        title: null,
      },
    };
    mutations.DELETE_COMPONENT(state, payload);
    expect(state).toMatchObject(result);
  });

  // update the image path
  test('IMPORT_IMAGE_PATH should update with the path to image', () => {
    payload = './images/test.jpg';
    mutations.IMPORT_IMAGE_FILE(state, payload);
    expect(state).toMatchObject({ imagePath: './images/test.jpg' });
  });

  // clearing the state for fresh workspace
  test('CLEAR_WORKSPACE should set state to a fresh slate', () => {
    const result = {
      currentText: '',
      nextId: 1,
      totalComponents: 0,
      components: [],
      imagePath: '',
      component: newComponent,
    };
    mutations.CLEAR_WORKSPACE(state);
    expect(state).toMatchObject(result);
  });

  // changing parent components
  test('CHANGE_PARENT should change a component`s parents', () => {
    payload = ['2', 'Hello'];
    state.components = [
      { id: '1', title: 'Hello', childrenIds: [], parentId: null, },
      { id: '2', title: 'World', childrenIds: [], parentId: null, },
      { id: '3', title: 'Test', childrenIds: [], parentId: null, },
    ];
    state.nextId = 4;
    state.totalComponents = 3;
    const result = {
      currentText: '',
      nextId: 4,
      totalComponents: 3,
      components: [
        { id: '1', title: 'Hello', childrenIds: ['2'], parentId: null, },
        { id: '2', title: 'World', childrenIds: [], parentId: 1, },
        { id: '3', title: 'Test', childrenIds: [], parentId: null, },
      ],
      imagePath: '',
      component: newComponent,
    };
    mutations.CHANGE_PARENT(state, payload);
    expect(state).toMatchObject(result);
  });

  test('CHANGE_PARENT can set a component to have no parent', () => {
    payload = ['2', 'none'];
    state.components = [
      { id: '1', title: 'Hello', childrenIds: ['2'], parentId: null, },
      { id: '2', title: 'World', childrenIds: [], parentId: 1, },
      { id: '3', title: 'Test', childrenIds: [], parentId: null, },
    ];
    state.nextId = 4;
    state.totalComponents = 3;
    const result = {
      currentText: '',
      nextId: 4,
      totalComponents: 3,
      components: [
        { id: '1', title: 'Hello', childrenIds: [], parentId: null, },
        { id: '2', title: 'World', childrenIds: [], parentId: null, },
        { id: '3', title: 'Test', childrenIds: [], parentId: null, },
      ],
      imagePath: '',
      component: newComponent,
    };
    mutations.CHANGE_PARENT(state, payload);
    expect(state).toMatchObject(result);
  });
});
