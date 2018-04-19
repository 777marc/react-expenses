import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up an add expense action object w/ default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0 
        }
    });
});

test('should set up an add expense action object w/ provided values', () => {
    const expenseData = {
        description: 'Rent', 
        note: 'Monthly', 
        amount: 109500, 
        createdAt: 10000 
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should return an edit action object', () => {
    const action = editExpense('123abc', { notes: 'test note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: { 
            notes: 'test note'
        }
    });
});

test('should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});
