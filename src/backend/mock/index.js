// import mock, { proxy } from 'xhr-mock';
//
// mock.setup();
//
// const successResponse = body => ({
//   status: 200,
//   body,
// });
//
// mock.get(`/technology/server-interaction`, successResponse(require('./server-interaction')));
//
// mock.get(`/technology/java-script`, successResponse(require('./javaScript')));
//
// mock.get(`/technology/react-and-redux`, successResponse(require('./reactAndRedux')));
//
// mock.get(`/technology/git`, successResponse(require('./git')));
//
// mock.get(`/technology/architectures-an-patterns`, successResponse(require('./architecturesAndPatterns')));
//
// mock.get(`/technology/additional-libraries`, successResponse(require('./additionalLibraries')));
//
// mock.get(`/technology/type-script`, successResponse(require('./typeScript')));
//
// mock.get(`/technology/java`, successResponse(require('./java')));
//
// mock.use(proxy);