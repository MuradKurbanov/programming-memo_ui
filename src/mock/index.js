import mock from 'xhr-mock';

mock.setup();

const successResponse = body => ({
  status: 200,
  body,
});

mock.get(`/theme/server-interaction`, successResponse(require('./server-interaction')));
mock.get(`/theme/javaScript`, successResponse(require('./javaScript')));

mock.get('/', { body: 'Hello World!' });