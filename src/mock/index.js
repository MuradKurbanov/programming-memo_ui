import mock, { proxy } from 'xhr-mock';

mock.setup();

const successResponse = body => ({
  status: 200,
  body,
});

mock.get(`/theme/server-interaction`, successResponse(require('./server-interaction')));

mock.get(`/theme/java-script`, successResponse(require('./javaScript')));

mock.get(`/theme/react-and-redux`, successResponse(require('./reactAndRedux')));

mock.get(`/theme/git`, successResponse(require('./git')));

mock.get(`/theme/architectures-an-patterns`, successResponse(require('./architecturesAndPatterns')));

mock.get(`/theme/additional-libraries`, successResponse(require('./additionalLibraries')));

mock.get(`/theme/type-script`, successResponse(require('./typeScript')));

mock.get(`/theme/java`, successResponse(require('./java')));

mock.use(proxy);