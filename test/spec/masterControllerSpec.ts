/// <reference path="../../typings/index.d.ts" />
import virtdog = dogsrus.virtdog;

describe('Master test suite', () => {
    describe('MasterController tests', () => {
        // sut stands for Subject/Sys Under Test
        let sut: virtdog.MasterController;

        //constructor param dependencies
        let $rootScope: ng.IRootScopeService;//ng stands for angular namespace
        let $controller: ng.IControllerService;/* Contrlr srvc from Angular, allow u to get instance of controller w/
    Angular's dependency injection, allows us to inject our own objs into constrctr */

        //slots, like in Vue Test Utils?
        let masterControllerParams: {
            $rootScope: ng.IRootScopeService,
            eventNames: virtdog.EventNames,
        };

        // can take an optional timeout param
        beforeEach(() => {
            angular.mock.module('app.people');

            //angular injection
            inject(($injector: ng.auto.IInjectorService) => {
                //angular Injector service used to grab refs to our angular services

                $controller = $injector.get<ng.IControllerService>('$controller');
                $rootScope = $injector.get<ng.IRootScopeService>('$rootScope');
                masterControllerParams = {
                    $rootScope: $rootScope,
                    eventNames: virtdog.eventNames
                };
            });

            sut = $controller<virtdog.MasterController>('masterController', masterControllerParams);
        });// end beforeEach

        describe('masterController constructor tests', () => {
            it('should set familiarName to Dillon', () => {
                // If testing objs, toBe tests the memory ref to ensure the obj is the same by ref.
                // Whereas, toEqual tests for equivalent value.
                expect(sut.familiarName).toEqual('Dillon', "familiarName does not equal 'Dillon'.");
            });

            it('should set speciesName to Homo Sapiens', () => {
                // If testing objs, toBe tests the memory ref to ensure the obj is the same by ref.
                // Whereas, toEqual tests for equivalent value.
                expect(sut.speciesName).toEqual('Homo Sapiens', "speciesName does not equal 'Homo Sapiens'.");
            });

            it('should add 2 items to masterActions', () => {
                expect(sut.masterActions.length).toEqual(2);
            });

            it('should set the name of the first action in masterActions to "Throw Object"', () => {
                expect(sut.masterActions[0].actionName).toEqual("Throw Object");
            });
            it('should set the actionFunc of the first item in masterActions', () => {
                expect(sut.masterActions[0].actionFunc).toBeDefined("actionFunc for Throw Object is not defined.");
                expect(sut.masterActions[0].actionFunc).not.toBeNull("actionFunc for Throw Object is NULL.");
            });

            it('should set the name of the 2nd action in masterActions to "Feed"', () => {
                expect(sut.masterActions[1].actionName).toEqual("Feed");
            });
            it('should set the actionFunc of the 2nd item in masterActions', () => {
                expect(sut.masterActions[1].actionFunc).toBeDefined("actionFunc for Feed is not defined.");
                expect(sut.masterActions[1].actionFunc).not.toBeNull("actionFunc for Feed is NULL.");
            });

            it('should add 6 items to masterObjects', () => {
                expect(sut.masterObjects.length).toEqual(6);
            });
            it('should set the masterObjects item 1 name to "Babe Ruth autographed baseball"', () => {
                expect(sut.masterObjects[0].name).toEqual("Babe Ruth autographed baseball");
            });
            it('should set the masterObjects item 2 name to "ball"', () => {
                expect(sut.masterObjects[1].name).toEqual("ball");
            });
            it('should set the masterObjects item 3 name to "Frisbee"', () => {
                expect(sut.masterObjects[2].name).toEqual("Frisbee");
            });
            it('should set the masterObjects item 4 name to "stick"', () => {
                expect(sut.masterObjects[3].name).toEqual("stick");
            });
            it('should set the masterObjects item 5 name to "dog food"', () => {
                expect(sut.masterObjects[4].name).toEqual("dog food");
            });
            it('should set the masterObjects item 6 name to "table scraps"', () => {
                expect(sut.masterObjects[5].name).toEqual("table scraps");
            });
        }); // end constructor tests

        describe('masterController throwSomething method tests', () => {
            it('should broadcast the Throw Object event name', () => {
                pending('finish in mocking module');
            });
        });

        describe('masterController feedTheDog method tests', () => {
            it('should broadcast the Feed The Dog event name', () => {
                pending('finish in mocking module');
            });
        });
    });

    describe('MasterAction tests', () => {
        let sut: virtdog.MasterAction, actionFunc = (o: virtdog.DogObject) => {
        };// actionFunc is empty fcn so it's a stub

        beforeEach(() => {
            sut = new virtdog.MasterAction('masterActionName', actionFunc)
        });

        describe('MasterAction constructor tests', () => {
            it('should set the actionName to "masterActionName"', () => {
                expect(sut.actionName).toEqual("masterActionName");
            });

            it('should set the actionFunction to "actionFunc"', () => {
                expect(sut.actionFunc).toBe(actionFunc);
            });
        });
    });
});