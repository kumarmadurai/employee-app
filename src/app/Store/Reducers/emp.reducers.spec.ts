import * as fromReducer from './emp.reducers';
import {
  getEmpsSuccess,
  searchEmpsSuccess,
  addEmpsSuccess,
  deleteEmpSuccess,
  updateEmpSuccess
} from '../Actions/emp.action';
import { Emp } from 'src/app/Models/emp';

describe('EmbReducer', () => {
  describe('unknown action', () => {
    it('should return the default state', () => {
      const { initialState } = fromReducer;
      const action = {
        type: 'Unknown'
      };
      const state = fromReducer.empReducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('getEmpsSuccess action', () => {
    it('should get all available employee', () => {
      const { initialState } = fromReducer;
      const newState: Array<Emp> =[
        {
          id: 1,
          name: 'Test',
          email: 'test@gmail.com',
          type: 'device',
          description: 'Description'
        }];
      const action = getEmpsSuccess(newState);
      const state = fromReducer.empReducer(initialState, action);

      expect(state).toEqual(newState);
      expect(state).not.toBe(newState);
    });
  });

  describe('searchEmpsSuccess action', () => {
    it('should search state with given value', () => {
      const initialState: Array<Emp> = [
        {
            id: 1,
            name: 'Test',
            email: 'test@gmail.com',
            type: 'device',
            description: 'Description'
        },
        {
            id: 2,
            name: 'Test1',
            email: 'test1@gmail.com',
            type: 'device1',
            description: 'Description1'
        },        {
            id: 3,
            name: 'Test2',
            email: 'test2@gmail.com',
            type: 'device2',
            description: 'Description2'
        }
      ];
      const action = searchEmpsSuccess('Test1', ['name', 'type']);
      const state = fromReducer.empReducer(initialState, action);

      expect(state[0].email).toEqual('test1@gmail.com');
    });
});
describe('addEmpsSuccess action', () => {

    it('should add  given state to exsisting state', () => {
      const initialState: Array<Emp> = [
        {
            id: 1,
            name: 'Test',
            email: 'test@gmail.com',
            type: 'device',
            description: 'Description'
        }
      ];
      const newEmp = {
        id: 2,
        name: 'Test1',
        email: 'test1@gmail.com',
        type: 'device1',
        description: 'Description1'
    };
      const action = addEmpsSuccess(newEmp);
      const state = fromReducer.empReducer(initialState, action);

      expect(state.length).toEqual(2);
      expect(state[1].description).toEqual('Description1');
    });
});

  describe('deleteEmpSuccess action', () => {
    it('should delete selected id from state', () => {
      const initialState: Array<Emp> = [
        {
            id: 1,
            name: 'Test',
            email: 'test@gmail.com',
            type: 'device',
            description: 'Description'
        },
        {
            id: 2,
            name: 'Test1',
            email: 'test1@gmail.com',
            type: 'device1',
            description: 'Description1'
        },        {
            id: 3,
            name: 'Test2',
            email: 'test2@gmail.com',
            type: 'device2',
            description: 'Description2'
        }
      ];
      const action = deleteEmpSuccess(2);
      const state = fromReducer.empReducer(initialState, action);

      expect(state.length).toEqual(2);
      expect(state[1].description).toEqual('Description2');
    });
});
    describe('updateEmpSuccess action', () => {

    it('should  update the state with given object changes', () => {
      const initialState: Array<Emp> = [
        {
            id: 1,
            name: 'Test',
            email: 'test@gmail.com',
            type: 'device',
            description: 'Description'
        }
      ];
      const newEmp = {
        id: 1,
        name: 'Test1',
        email: 'test1@gmail.com',
        type: 'device1',
        description: 'Description1'
    };
      const action = updateEmpSuccess(newEmp);
      const state = fromReducer.empReducer(initialState, action);

      expect(state[0].name).toEqual('Test1');
    });
  });
});