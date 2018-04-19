import expenseReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const result = expenseReducer(undefined,{ type: '@@INIT'});
    expect(result).toEqual([]);
});

test('should remove an expense', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should try to remove an expense that is not there', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should edit expense', () => {
    const note = 'test note #1';
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { 
            note
        }        
    };
    const state = expenseReducer(expenses, action);
    expect(state[1].note).toBe(note);
});

test('Should not edit expense w/ invalid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: { 
            notes: 'test note #1'
        }        
    };
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should set add expense object', () => {
    const expense = { description: 'Rent', note: 'March', amount: 15900, createdAt: 0 }   ;
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const result = expenseReducer(expenses,action);
    expect(result).toEqual(
        [ ... expenses,
            {
                amount: 15900, 
                createdAt: 0, 
                description: "Rent", 
                note: "March"
            }
        ]
    );
});
