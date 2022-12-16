import validator from 'is-my-json-valid';
var UserValidate = validator({
  required: true,
  type: 'object',
  properties: {
    title: { required: true, type: 'string' },
  },
});

export { UserValidate };
